const express = require('express');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const { getDb } = require('../db/database');
const { generateToken, requireAuth } = require('../middleware/auth');

const router = express.Router();

// POST /api/auth/signup
router.post('/signup', async (req, res) => {
    try {
        const { email, password, name } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        if (password.length < 8) {
            return res.status(400).json({ error: 'Password must be at least 8 characters' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email address' });
        }

        const db = getDb();
        const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email.toLowerCase());
        if (existing) {
            return res.status(409).json({ error: 'An account with this email already exists' });
        }

        const passwordHash = await bcrypt.hash(password, 12);
        const userId = uuidv4();

        // Start 7-day free trial on signup
        const trialStart = new Date().toISOString();
        db.prepare(`
            INSERT INTO users (id, email, password_hash, name, subscription_status, trial_start)
            VALUES (?, ?, ?, ?, 'trialing', ?)
        `).run(userId, email.toLowerCase(), passwordHash, name || null, trialStart);

        const user = db.prepare('SELECT id, email, name, subscription_status FROM users WHERE id = ?').get(userId);
        const token = generateToken(user);

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
        });

        res.json({
            user: { id: user.id, email: user.email, name: user.name, subscription_status: user.subscription_status },
            token
        });
    } catch (err) {
        console.error('Signup error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const db = getDb();
        const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email.toLowerCase());

        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const validPassword = await bcrypt.compare(password, user.password_hash);
        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const token = generateToken(user);

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 30 * 24 * 60 * 60 * 1000
        });

        res.json({
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                subscription_status: user.subscription_status
            },
            token
        });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// POST /api/auth/logout
router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logged out' });
});

// GET /api/auth/me
router.get('/me', requireAuth, (req, res) => {
    res.json({
        user: {
            id: req.user.id,
            email: req.user.email,
            name: req.user.name,
            subscription_status: req.user.subscription_status,
            subscription_end_date: req.user.subscription_end_date
        }
    });
});

// POST /api/auth/forgot-password
router.post('/forgot-password', async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        const db = getDb();
        const user = db.prepare('SELECT id, email FROM users WHERE email = ?').get(email.toLowerCase());

        // Always return success (don't reveal if email exists)
        if (!user) {
            return res.json({ message: 'If an account with that email exists, a reset link has been sent.' });
        }

        const resetToken = crypto.randomBytes(32).toString('hex');
        const expires = new Date(Date.now() + 60 * 60 * 1000).toISOString(); // 1 hour

        db.prepare('UPDATE users SET reset_token = ?, reset_token_expires = ? WHERE id = ?')
            .run(resetToken, expires, user.id);

        const resetUrl = `${process.env.BASE_URL || 'http://localhost:3000'}/reset-password.html?token=${resetToken}`;

        // Try to send email, fall back to console
        if (process.env.SMTP_HOST) {
            try {
                const nodemailer = require('nodemailer');
                const transporter = nodemailer.createTransport({
                    host: process.env.SMTP_HOST,
                    port: parseInt(process.env.SMTP_PORT) || 587,
                    auth: {
                        user: process.env.SMTP_USER,
                        pass: process.env.SMTP_PASS,
                    },
                });

                await transporter.sendMail({
                    from: process.env.SMTP_FROM || 'noreply@surgprep.com',
                    to: user.email,
                    subject: 'SurgPrep — Reset Your Password',
                    html: `
                        <h2>Reset Your Password</h2>
                        <p>Click the link below to reset your password. This link expires in 1 hour.</p>
                        <p><a href="${resetUrl}">${resetUrl}</a></p>
                        <p>If you didn't request this, you can safely ignore this email.</p>
                    `,
                });
            } catch (emailErr) {
                console.error('Email send failed:', emailErr);
                console.log('Password reset URL:', resetUrl);
            }
        } else {
            console.log('=== PASSWORD RESET ===');
            console.log('Email:', user.email);
            console.log('Reset URL:', resetUrl);
            console.log('Token:', resetToken);
            console.log('====================');
        }

        res.json({ message: 'If an account with that email exists, a reset link has been sent.' });
    } catch (err) {
        console.error('Forgot password error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// POST /api/auth/reset-password
router.post('/reset-password', async (req, res) => {
    try {
        const { token, password } = req.body;

        if (!token || !password) {
            return res.status(400).json({ error: 'Token and new password are required' });
        }

        if (password.length < 8) {
            return res.status(400).json({ error: 'Password must be at least 8 characters' });
        }

        const db = getDb();
        const user = db.prepare(
            'SELECT id FROM users WHERE reset_token = ? AND reset_token_expires > datetime(?)'
        ).get(token, new Date().toISOString());

        if (!user) {
            return res.status(400).json({ error: 'Invalid or expired reset token' });
        }

        const passwordHash = await bcrypt.hash(password, 12);
        db.prepare('UPDATE users SET password_hash = ?, reset_token = NULL, reset_token_expires = NULL, updated_at = datetime(?) WHERE id = ?')
            .run(passwordHash, new Date().toISOString(), user.id);

        res.json({ message: 'Password has been reset. You can now log in.' });
    } catch (err) {
        console.error('Reset password error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
