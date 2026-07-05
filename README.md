# LIC Insurance Advisor — Portfolio Website

A premium, full-stack portfolio website for an LIC Insurance Advisor, built with React (Vite) +
Tailwind CSS on the frontend and Node.js + Express + MySQL on the backend.

## Design

- **Colors:** Primary Blue `#005BAC`, Secondary Yellow `#FFD200`, Dark Navy `#0F172A`,
  Background `#F8FAFC`, Text `#1E293B`
- **Type:** `Fraunces` (display headings), `Inter` (body text), `IBM Plex Mono` (numbers/data —
  used in the calculator and stat counters for a "ledger" feel)
- **Signature element:** the interactive glassmorphic Premium Calculator with a dark "ledger"
  result panel and animated counters

## Folder Structure

```
lic-portfolio/
├── client/     React (Vite) frontend
└── server/     Node.js + Express backend + MySQL
```

## Prerequisites

- Node.js 18+
- MySQL 8+ (or MariaDB)

## 1. Database Setup

```bash
mysql -u root -p < server/database/schema.sql
```

This creates the `lic_portfolio` database, all tables (`insurance_plans`, `testimonials`,
`contact_messages`), and seeds sample plans and testimonials.

## 2. Backend Setup

```bash
cd server
cp .env.example .env   # then edit .env with your MySQL credentials
npm install
npm start               # or: npm run dev (with nodemon)
```

The API runs on `http://localhost:5000` by default. Health check: `GET /api/health`.

### API Endpoints

| Method | Endpoint             | Description                        |
|--------|-----------------------|-------------------------------------|
| GET    | `/api/plans`           | List all LIC plans                  |
| GET    | `/api/testimonials`    | List published testimonials         |
| POST   | `/api/contact`         | Submit contact form (stored in DB)  |
| POST   | `/api/calculator`      | Get an estimated premium            |

## 3. Frontend Setup

```bash
cd client
cp .env.example .env   # defaults work out of the box with the Vite proxy
npm install
npm run dev
```

The site runs on `http://localhost:5173` and proxies `/api/*` requests to the backend
(see `vite.config.js`).

## Notes

- If the backend or database is unreachable, the LIC Plans and Testimonials sections
  gracefully fall back to local sample data (`src/utils/constants.js`) so the site never
  breaks for visitors.
- The premium calculator's formula is illustrative only — replace `estimateAnnualPremium`
  in `server/controllers/calculatorController.js` with real plan-wise rate tables before
  using this in production.
- Replace placeholder content in `client/src/utils/constants.js` (`ADVISOR` object) with
  real advisor name, phone, email, WhatsApp number, address, and Google Maps embed URL.
- Add a real advisor photo at `client/src/assets/` and swap it into `Hero.jsx`.
- Update social links in `Footer.jsx`.

## Production Build

```bash
cd client
npm run build     # outputs static files to client/dist
```

Serve `client/dist` via any static host (Vercel, Netlify, Nginx) and deploy `server/` to
a Node host (Render, Railway, EC2) with a managed MySQL instance.

## Future Expansion

The project is structured (MVC backend, modular React components) to make it easy to add
an admin dashboard later — e.g. new routes/controllers for managing plans, testimonials,
and viewing contact submissions with authentication.
