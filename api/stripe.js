const express = require('express');
const { getDb } = require('../db/database');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

function getStripe() {
    return require('stripe')(process.env.STRIPE_SECRET_KEY);
}

// POST /api/stripe/create-checkout-session
router.post('/create-checkout-session', requireAuth, async (req, res) => {
    try {
        const stripe = getStripe();
        const db = getDb();
        const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.id);

        // Create or retrieve Stripe customer
        let customerId = user.stripe_customer_id;
        if (!customerId) {
            const customer = await stripe.customers.create({
                email: user.email,
                metadata: { userId: user.id },
            });
            customerId = customer.id;
            db.prepare('UPDATE users SET stripe_customer_id = ? WHERE id = ?').run(customerId, user.id);
        }

        const session = await stripe.checkout.sessions.create({
            customer: customerId,
            mode: 'subscription',
            payment_method_types: ['card'],
            line_items: [{
                price: process.env.STRIPE_PRICE_ID,
                quantity: 1,
            }],
            success_url: `${process.env.BASE_URL || 'http://localhost:3000'}/app.html?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.BASE_URL || 'http://localhost:3000'}/pricing.html`,
            metadata: { userId: user.id },
        });

        res.json({ url: session.url, sessionId: session.id });
    } catch (err) {
        console.error('Checkout session error:', err);
        res.status(500).json({ error: 'Could not create checkout session' });
    }
});

// POST /api/stripe/create-portal-session
router.post('/create-portal-session', requireAuth, async (req, res) => {
    try {
        const stripe = getStripe();
        const db = getDb();
        const user = db.prepare('SELECT stripe_customer_id FROM users WHERE id = ?').get(req.user.id);

        if (!user?.stripe_customer_id) {
            return res.status(400).json({ error: 'No subscription found' });
        }

        const session = await stripe.billingPortal.sessions.create({
            customer: user.stripe_customer_id,
            return_url: `${process.env.BASE_URL || 'http://localhost:3000'}/app.html`,
        });

        res.json({ url: session.url });
    } catch (err) {
        console.error('Portal session error:', err);
        res.status(500).json({ error: 'Could not create portal session' });
    }
});

// GET /api/stripe/subscription-status
router.get('/subscription-status', requireAuth, (req, res) => {
    const db = getDb();
    const user = db.prepare('SELECT subscription_status, subscription_end_date FROM users WHERE id = ?').get(req.user.id);

    let isActive = false;
    if (user.subscription_status === 'active' || user.subscription_status === 'trialing') {
        isActive = true;
    } else if (user.subscription_status === 'canceled' && user.subscription_end_date) {
        isActive = new Date(user.subscription_end_date) > new Date();
    }

    res.json({
        status: user.subscription_status,
        endDate: user.subscription_end_date,
        isActive,
    });
});

// POST /api/stripe/verify-session
// Called after Stripe checkout redirect — verifies payment and activates subscription
router.post('/verify-session', requireAuth, async (req, res) => {
    try {
        const { sessionId } = req.body;
        if (!sessionId) {
            return res.status(400).json({ error: 'Session ID required' });
        }

        const stripe = getStripe();
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        if (session.payment_status !== 'paid') {
            return res.json({ activated: false, reason: 'Payment not completed' });
        }

        const db = getDb();
        const customerId = session.customer;
        const subscriptionId = session.subscription;

        // Update user with subscription info
        db.prepare(`
            UPDATE users 
            SET subscription_status = 'active', 
                stripe_customer_id = ?,
                subscription_id = ?,
                updated_at = datetime(?)
            WHERE id = ?
        `).run(customerId, subscriptionId, new Date().toISOString(), req.user.id);

        console.log(`✅ Subscription activated via verify-session for user ${req.user.id}`);
        res.json({ activated: true });
    } catch (err) {
        console.error('Verify session error:', err);
        res.status(500).json({ error: 'Could not verify session' });
    }
});

module.exports = router;
