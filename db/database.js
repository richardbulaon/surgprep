const Database = require('better-sqlite3');
const path = require('path');

const DB_PATH = path.join(__dirname, '..', 'surgprep.db');

let db;

function getDb() {
    if (!db) {
        db = new Database(DB_PATH);
        db.pragma('journal_mode = WAL');
        db.pragma('foreign_keys = ON');
        initTables();
    }
    return db;
}

function initTables() {
    db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            name TEXT,
            stripe_customer_id TEXT,
            subscription_status TEXT DEFAULT 'none',
            subscription_id TEXT,
            subscription_end_date TEXT,
            trial_start TEXT,
            reset_token TEXT,
            reset_token_expires TEXT,
            created_at TEXT DEFAULT (datetime('now')),
            updated_at TEXT DEFAULT (datetime('now'))
        );

        CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
        CREATE INDEX IF NOT EXISTS idx_users_stripe_customer ON users(stripe_customer_id);
        CREATE INDEX IF NOT EXISTS idx_users_reset_token ON users(reset_token);
    `);

    // Add trial_start column if upgrading from old schema
    try {
        db.exec(`ALTER TABLE users ADD COLUMN trial_start TEXT`);
    } catch (e) {
        // Column already exists — ignore
    }

    // Procedure request table
    db.exec(`
        CREATE TABLE IF NOT EXISTS procedure_requests (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT,
            user_email TEXT,
            procedure_name TEXT NOT NULL,
            details TEXT,
            created_at TEXT DEFAULT (datetime('now')),
            FOREIGN KEY (user_id) REFERENCES users(id)
        );
    `);
}

module.exports = { getDb };
