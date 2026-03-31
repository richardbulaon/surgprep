# SurgPrep

The surgical tech reference that's actually from the OR.

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env with your Stripe keys

# Run
npm start
```

Open http://localhost:3000

## Setup Stripe

1. Create a Stripe account at https://dashboard.stripe.com
2. Get your API keys (Settings → API Keys)
3. Create a Product: "SurgPrep Full Access" — $9.99/month recurring
4. Copy the Price ID (starts with `price_`)
5. Set up a webhook endpoint pointing to `https://yourdomain.com/api/webhooks/stripe`
   - Events to listen for: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`
6. Copy the webhook signing secret
7. Add all values to `.env`

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `PORT` | No | Server port (default: 3000) |
| `JWT_SECRET` | **Yes** | Secret for signing auth tokens |
| `STRIPE_SECRET_KEY` | **Yes** | Stripe secret key |
| `STRIPE_PRICE_ID` | **Yes** | Stripe price ID for $9.99/mo |
| `STRIPE_WEBHOOK_SECRET` | **Yes** | Stripe webhook signing secret |
| `BASE_URL` | **Yes** | Your app URL (for redirects) |

## File Structure

```
surgprep/
├── server.js           # Express server
├── app.js              # Procedures data (the content)
├── app.html            # Protected app page (with paywall)
├── styles.css          # App styles
├── package.json
├── .env
├── db/
│   └── database.js     # SQLite setup
├── api/
│   ├── auth.js         # Signup, login, password reset
│   ├── stripe.js       # Checkout, portal, status
│   └── webhooks.js     # Stripe webhook handler
├── middleware/
│   └── auth.js         # JWT auth middleware
├── public/
│   ├── index.html      # Landing page
│   ├── landing.css     # Landing styles
│   ├── landing.js      # Landing scripts
│   ├── signup.html     # Sign up page
│   ├── login.html      # Log in page
│   └── forgot-password.html
└── images/             # OR photos (74 images)
```

## Deploy

Works on any Node.js host: Railway, Render, DigitalOcean, VPS, etc.

```bash
# Production
NODE_ENV=production npm start
```

Make sure to:
1. Set a strong `JWT_SECRET`
2. Use real Stripe keys (not test)
3. Set `BASE_URL` to your production domain
4. Set up the Stripe webhook endpoint
