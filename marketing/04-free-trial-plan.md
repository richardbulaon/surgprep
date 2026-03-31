# SurgPrep — Free Trial Implementation

These changes add a **7-day free trial** — users sign up, get full access immediately, no credit card required. After 7 days, they hit the paywall and need to subscribe.

## Changes Required:

### 1. Database — Add trial fields
In `db/database.js`, the users table needs a `trial_start` column.

### 2. Auth — Auto-start trial on signup
In `api/auth.js`, set `subscription_status = 'trialing'` and `trial_start = now` on signup.

### 3. Middleware — Check trial expiry
In `middleware/auth.js`, update `hasActiveSubscription` to check if trial is still within 7 days.

### 4. Access API — Return trial info
In `server.js`, return trial days remaining so the UI can show a banner.

### 5. Landing page — Update CTA
Change "Get Started — $9.99/mo" to "Start Free Trial — 7 Days Free"

---

## File Changes:
