const jwt = require('jsonwebtoken');
const { getDb } = require('../db/database');

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

// Generate JWT token
function generateToken(user) {
    return jwt.sign(
        { id: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: '30d' }
    );
}

// Verify JWT token
function verifyToken(token) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (e) {
        return null;
    }
}

// Middleware: require authentication
function requireAuth(req, res, next) {
    const token = req.cookies?.token || req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
        return res.status(401).json({ error: 'Authentication required' });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }

    const db = getDb();
    const user = db.prepare('SELECT id, email, name, subscription_status, subscription_end_date, trial_start FROM users WHERE id = ?').get(decoded.id);
    
    if (!user) {
        return res.status(401).json({ error: 'User not found' });
    }

    req.user = user;
    next();
}

// Middleware: optional auth (attaches user if token exists, doesn't block)
function optionalAuth(req, res, next) {
    const token = req.cookies?.token || req.headers.authorization?.replace('Bearer ', '');
    
    if (token) {
        const decoded = verifyToken(token);
        if (decoded) {
            const db = getDb();
            const user = db.prepare('SELECT id, email, name, subscription_status, subscription_end_date, trial_start FROM users WHERE id = ?').get(decoded.id);
            if (user) {
                req.user = user;
            }
        }
    }
    
    next();
}

// Check if user has active subscription or valid trial
function hasActiveSubscription(user) {
    if (!user) return false;
    if (user.subscription_status === 'active') {
        return true;
    }
    // Check trial — 7 days from trial_start
    if (user.subscription_status === 'trialing' && user.trial_start) {
        const trialEnd = new Date(user.trial_start);
        trialEnd.setDate(trialEnd.getDate() + 7);
        return new Date() < trialEnd;
    }
    // Check if canceled but still within paid period
    if (user.subscription_status === 'canceled' && user.subscription_end_date) {
        return new Date(user.subscription_end_date) > new Date();
    }
    return false;
}

// Get trial days remaining (returns 0 if not trialing or expired)
function getTrialDaysRemaining(user) {
    if (!user || user.subscription_status !== 'trialing' || !user.trial_start) return 0;
    const trialEnd = new Date(user.trial_start);
    trialEnd.setDate(trialEnd.getDate() + 7);
    const remaining = Math.ceil((trialEnd - new Date()) / (1000 * 60 * 60 * 24));
    return Math.max(0, remaining);
}

module.exports = { generateToken, verifyToken, requireAuth, optionalAuth, hasActiveSubscription, getTrialDaysRemaining };
