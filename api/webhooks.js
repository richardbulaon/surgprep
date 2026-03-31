const express = require('express');
const { getDb } = require('../db/database');

const router = express.Router();

// POST /api/webhooks/stripe
// NOTE: This route uses express.raw() middleware — set up in server.js
router.post('/stripe', async (req, res) => {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    const sig = req.headers['stripe-signature'];

    let event;

    try {
        if (process.env.STRIPE_WEBHOOK_SECRET && process.env.STRIPE_WEBHOOK_SECRET !== 'whsec_xxx') {
            event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
        } else {
            // Dev mode — skip signature verification
            event = JSON.parse(req.body.toString());
            console.log('⚠️  Webhook signature verification skipped (no webhook secret configured)');
        }
    } catch (err) {
        console.error('Webhook signature verification failed:', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    const db = getDb();

    try {
        switch (event.type) {
            case 'checkout.session.completed': {
                const session = event.data.object;
                const customerId = session.customer;
                const subscriptionId = session.subscription;

                // Find user by Stripe customer ID or metadata
                let user = db.prepare('SELECT id FROM users WHERE stripe_customer_id = ?').get(customerId);
                if (!user && session.metadata?.userId) {
                    user = db.prepare('SELECT id FROM users WHERE id = ?').get(session.metadata.userId);
                    if (user) {
                        db.prepare('UPDATE users SET stripe_customer_id = ? WHERE id = ?').run(customerId, user.id);
                    }
                }

                if (user) {
                    db.prepare('UPDATE users SET subscription_status = ?, subscription_id = ?, updated_at = datetime(?) WHERE id = ?')
                        .run('active', subscriptionId, new Date().toISOString(), user.id);
                    console.log(`✅ Subscription activated for user ${user.id}`);
                }
                break;
            }

            case 'customer.subscription.updated': {
                const subscription = event.data.object;
                const customerId = subscription.customer;
                const status = subscription.status;
                const endDate = subscription.current_period_end
                    ? new Date(subscription.current_period_end * 1000).toISOString()
                    : null;

                const user = db.prepare('SELECT id FROM users WHERE stripe_customer_id = ?').get(customerId);
                if (user) {
                    // Map Stripe statuses
                    let dbStatus = status;
                    if (subscription.cancel_at_period_end) {
                        dbStatus = 'canceled';
                    }

                    db.prepare('UPDATE users SET subscription_status = ?, subscription_end_date = ?, updated_at = datetime(?) WHERE id = ?')
                        .run(dbStatus, endDate, new Date().toISOString(), user.id);
                    console.log(`📝 Subscription updated for user ${user.id}: ${dbStatus}`);
                }
                break;
            }

            case 'customer.subscription.deleted': {
                const subscription = event.data.object;
                const customerId = subscription.customer;

                const user = db.prepare('SELECT id FROM users WHERE stripe_customer_id = ?').get(customerId);
                if (user) {
                    const endDate = subscription.current_period_end
                        ? new Date(subscription.current_period_end * 1000).toISOString()
                        : new Date().toISOString();

                    db.prepare('UPDATE users SET subscription_status = ?, subscription_end_date = ?, subscription_id = NULL, updated_at = datetime(?) WHERE id = ?')
                        .run('expired', endDate, new Date().toISOString(), user.id);
                    console.log(`❌ Subscription expired for user ${user.id}`);
                }
                break;
            }

            case 'invoice.payment_failed': {
                const invoice = event.data.object;
                const customerId = invoice.customer;

                const user = db.prepare('SELECT id FROM users WHERE stripe_customer_id = ?').get(customerId);
                if (user) {
                    db.prepare('UPDATE users SET subscription_status = ?, updated_at = datetime(?) WHERE id = ?')
                        .run('past_due', new Date().toISOString(), user.id);
                    console.log(`⚠️ Payment failed for user ${user.id}`);
                }
                break;
            }

            default:
                console.log(`Unhandled event type: ${event.type}`);
        }
    } catch (err) {
        console.error('Webhook processing error:', err);
    }

    res.json({ received: true });
});

module.exports = router;
