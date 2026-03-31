require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const { getDb } = require('./db/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize database on startup
getDb();

// ===== MIDDLEWARE =====

// Stripe webhooks need raw body — must be before express.json()
app.use('/api/webhooks/stripe', express.raw({ type: 'application/json' }));

// Standard middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: process.env.BASE_URL || 'http://localhost:3000',
    credentials: true,
}));

// ===== STATIC FILES =====
// Serve public directory (landing page, auth pages, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Serve images from existing location
app.use('/images', express.static(path.join(__dirname, 'images')));

// ===== API ROUTES =====
app.use('/api/auth', require('./api/auth'));
app.use('/api/stripe', require('./api/stripe'));
app.use('/api/webhooks', require('./api/webhooks'));

// ===== PROTECTED APP ROUTES =====
// The main app files served from root directory but with auth check
const { optionalAuth, hasActiveSubscription } = require('./middleware/auth');

// API endpoint to check access level
app.get('/api/access', optionalAuth, (req, res) => {
    const isSubscribed = hasActiveSubscription(req.user);
    res.json({
        loggedIn: !!req.user,
        subscribed: isSubscribed,
        user: req.user ? {
            id: req.user.id,
            email: req.user.email,
            name: req.user.name,
            subscription_status: req.user.subscription_status,
        } : null,
    });
});

// Debug endpoint - check env vars are set (no values exposed)
app.get('/api/debug/env', (req, res) => {
    res.json({
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY ? `set (${process.env.STRIPE_SECRET_KEY.substring(0,12)}...)` : 'MISSING',
        STRIPE_PRICE_ID: process.env.STRIPE_PRICE_ID || 'MISSING',
        BASE_URL: process.env.BASE_URL || 'MISSING',
        NODE_ENV: process.env.NODE_ENV || 'MISSING',
        JWT_SECRET: process.env.JWT_SECRET ? 'set' : 'MISSING',
    });
});

// Serve the main app page (requires auth check on client side)
app.get('/app.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'app.html'));
});

// Serve the original app.js and styles.css
app.get('/app.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'app.js'));
});

app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'styles.css'));
});

// Root — serve landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ===== START =====
app.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════════╗
║                                           ║
║   🔬 SurgPrep Server Running             ║
║                                           ║
║   Local:  http://localhost:${PORT}          ║
║   Mode:   ${process.env.NODE_ENV || 'development'}                   ║
║                                           ║
╚═══════════════════════════════════════════╝
    `);
});

module.exports = app;
