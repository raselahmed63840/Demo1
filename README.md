<div align="center">

# Gadgetbd — Modern E-Commerce Storefront

A responsive, API-ready e-commerce storefront built with **Next.js**, **React**, and **TypeScript**.  
The project recreates the customer-facing experience of a Laravel-based e-commerce application with a modern Next.js App Router architecture.

<p>
  <a href="https://demop1.netlify.app/"><strong>Live Demo</strong></a>
  ·
  <a href="https://github.com/raselahmed63840/Demo1"><strong>Source Code</strong></a>
</p>

![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/Status-Demo%20%2F%20API--Ready-16a34a)

</div>

---

## Table of Contents

- [About the Project](#about-the-project)
- [Preview](#preview)
- [Lighthouse Performance](#lighthouse-performance)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Routes and Modules](#routes-and-modules)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Commands](#available-commands)
- [Current Scope and Production Notes](#current-scope-and-production-notes)
- [Future Improvements](#future-improvements)
- [Author](#author)
- [License](#license)

---

## About the Project

**Gadgetbd** is a modern e-commerce storefront conversion built with the **Next.js App Router**. It delivers a responsive shopping experience with product browsing, categories, search, cart management, checkout flow, customer pages, and representative admin, vendor, and reseller dashboards.

The project keeps the supplied visual assets while replacing the frontend experience with reusable React components and TypeScript. It is designed as a strong foundation for connecting a real database, authentication system, payment gateway, courier service, and production order workflow.

> **Important:** This repository is currently a frontend-focused, API-ready conversion. Product content is supplied from local sample data, and the order endpoint is a starter route rather than a complete production order system.

---

## Preview

### Storefront Home Page

<p align="center">
  <img src="./screenshots/home-page.png" alt="Gadgetbd storefront home page" width="100%" />
</p>

---

## Lighthouse Performance

The included Lighthouse audit recorded the following results:

| Performance | Accessibility | Best Practices |   SEO   |
| :---------: | :-----------: | :------------: | :-----: |
|   **98**    |    **94**     |     **92**     | **100** |

<p align="center">
  <img src="./screenshots/lighthouse-score.png" alt="Lighthouse audit result showing Performance 98, Accessibility 94, Best Practices 92, and SEO 100" width="100%" />
</p>

> Lighthouse scores can vary depending on device, browser version, network conditions, cache, and testing environment.

---

## Key Features

### Customer Storefront

- Responsive homepage with promotional banners, featured categories, hot deals, product sections, brands, and blog cards.
- Shop page with product browsing and category-driven navigation.
- Dynamic product detail pages.
- Product search experience.
- Marketing pages for brands, offers, hot deals, blogs, and contact information.
- Reused visual assets from the supplied e-commerce source project.

### Cart and Checkout

- Browser-persisted shopping cart using `localStorage`.
- Add-to-cart, quantity controls, and cart total calculation.
- Coupon demonstration flow.
- Checkout interface with delivery calculation.
- Order-success page after checkout submission.

### Customer and Business Portals

- Customer account, login, registration, order tracking, and refund interfaces.
- Admin dashboard shell with reusable workspace/table interfaces.
- Vendor dashboard shell for catalogue, order, and analytics views.
- Reseller dashboard shell for reseller-oriented management views.

### API-Ready Foundation

- Starter route handler for products.
- Starter route handler for order requests.
- Central sample data file that can later be replaced with database queries or an external API.
- Environment-variable example for connecting a future backend service.

---

## Technology Stack

| Category     | Technology                         |
| ------------ | ---------------------------------- |
| Framework    | Next.js 15 with App Router         |
| UI Library   | React 19                           |
| Language     | TypeScript                         |
| Styling      | Global CSS                         |
| Client State | React context/store provider       |
| Cart Storage | Browser `localStorage`             |
| API Layer    | Next.js Route Handlers             |
| Product Data | Local sample data in `lib/data.ts` |
| Deployment   | Netlify                            |

---

## Routes and Modules

| Area          | Main Routes                                                               |
| ------------- | ------------------------------------------------------------------------- |
| Storefront    | `/`, `/shop`, `/category/[slug]`, `/product/[slug]`, `/search`            |
| Shopping Flow | `/cart`, `/checkout`, `/order-success`                                    |
| Marketing     | `/brands`, `/offers`, `/hot-deals`, `/blogs`, `/blogs/[slug]`, `/contact` |
| Customer Area | `/customer/*`                                                             |
| Admin Area    | `/admin/*`                                                                |
| Vendor Area   | `/vendor/*`                                                               |
| Reseller Area | `/reseller/*`                                                             |

---

## API Endpoints

| Method | Endpoint        | Purpose                          |
| ------ | --------------- | -------------------------------- |
| `GET`  | `/api/products` | Returns starter product data     |
| `POST` | `/api/orders`   | Receives a starter order request |

> The current order route is a starter implementation and does **not** yet persist orders to a production database.

---

## Project Structure

```text
Demo1/
│
├── app/                         # Next.js App Router pages and route handlers
│   ├── api/                     # API endpoints
│   ├── admin/                   # Admin dashboard routes
│   ├── customer/                # Customer-facing account routes
│   ├── reseller/                # Reseller dashboard routes
│   ├── vendor/                  # Vendor dashboard routes
│   ├── cart/                    # Cart page
│   ├── checkout/                # Checkout page
│   ├── product/                 # Dynamic product pages
│   ├── category/                # Dynamic category pages
│   ├── shop/                    # Shop page
│   ├── globals.css              # Global styles
│   └── layout.tsx               # Root layout
│
├── components/
│   ├── store-provider.tsx       # Store/cart context provider
│   └── storefront.tsx           # Shared storefront components
│
├── lib/
│   └── data.ts                  # Starter products, categories, and content data
│
├── public/
│   └── assets/                  # Existing project images and uploaded assets
│
├── screenshots/                 # README preview and Lighthouse images
├── .env.example                 # Environment-variable template
├── package.json                 # Scripts and dependencies
└── README.md
```

---

## Getting Started

### Prerequisites

Install a current **Node.js LTS** version with npm before running the project.

### 1. Clone the Repository

```bash
git clone https://github.com/raselahmed63840/Demo1.git
cd Demo1
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Your Local Environment File

macOS / Linux:

```bash
cp .env.example .env.local
```

Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local project in your browser:

```text
http://localhost:3000
```

---

## Environment Variables

Copy `.env.example` to `.env.local` before adding future backend integrations.

```env
# For a future backend connection (Laravel API, Node API, Supabase, etc.)
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

> Do not place secret keys, payment credentials, database passwords, or private API tokens in `NEXT_PUBLIC_*` variables. Values with this prefix are exposed to the browser.

---

## Available Commands

| Command         | Description                           |
| --------------- | ------------------------------------- |
| `npm run dev`   | Starts the local development server   |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Runs the production build locally     |
| `npm run lint`  | Runs the configured lint command      |

For a production check:

```bash
npm run build
npm run start
```

---

## Current Scope and Production Notes

This project successfully recreates the storefront and dashboard experience in Next.js, but the following server-side features are intentionally **not yet implemented** as production functionality:

- Database models, migrations, real inventory control, and persistent order storage.
- Customer, admin, vendor, and reseller authentication with role-based permissions.
- Live payment gateway integrations such as bKash, ShurjoPay, UddoktaPay, and AamarPay.
- Courier API/webhook integration.
- Email and SMS delivery.
- Fraud checks, CAPTCHA, secure middleware, scheduled jobs, PDF invoices, and protected digital downloads.
- Analytics and conversion API integrations.

These functions should be implemented only on secure server-side infrastructure before production use.

---

## Future Improvements

- [ ] Connect a PostgreSQL or MySQL database.
- [ ] Replace local sample data with database queries through Prisma or Drizzle.
- [ ] Add secure authentication and role-based access control.
- [ ] Persist carts, customers, products, orders, inventory, and payments.
- [ ] Integrate real payment gateways and courier providers through secure server-side adapters.
- [ ] Add order confirmation emails/SMS and invoice generation.
- [ ] Protect dashboard routes with middleware.
- [ ] Add automated tests, error monitoring, and CI/CD deployment checks.

---

## Author

**Rasel Ahmed**

- GitHub: [@raselahmed63840](https://github.com/raselahmed63840)
- Project repository: [Demo1](https://github.com/raselahmed63840/Demo1)
- Live preview: [demo1.netlify.app](https://demop1.netlify.app/)

---

## License

No open-source license file has been included in this repository. Please contact the repository owner before reusing the code for commercial or redistribution purposes.

---

<div align="center">

Built with Next.js, React, and TypeScript.

</div>
