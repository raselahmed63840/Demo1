# Laravel → Next.js conversion report

## Converted working experience

| Laravel area | Next.js route / implementation |
|---|---|
| Frontend home | `/` — hero banners, categories, hot deals, brands, blog cards |
| Product/category/search | `/shop`, `/category/[slug]`, `/product/[slug]`, `/search?q=` |
| Cart | `/cart` — persistent browser cart, quantity controls, coupon demo |
| Checkout | `/checkout` + `/order-success` — delivery calculation and order request stub |
| Customer pages | `/customer/*` — account, login, register, order tracking, refunds UI |
| Marketing content | `/brands`, `/offers`, `/hot-deals`, `/blogs`, `/blogs/[slug]`, `/contact` |
| Admin portal | `/admin/*` — dashboard plus reusable table-style workspace views |
| Vendor portal | `/vendor/*` — dashboard, catalogue/order/analytics workspace views |
| Reseller portal | `/reseller/*` — dashboard and reusable workspace views |
| Product API starter | `GET /api/products` |
| Order API starter | `POST /api/orders` |

The existing supplied Laravel visual assets are retained in `public/assets/uploads` and `public/assets/images`.

## Intentionally not copied as client-side logic

The original Laravel system includes secure server-side business functionality that should not be placed directly in a browser bundle:

- MySQL models, migrations, orders, inventory, wallet/fund accounting and reporting
- Admin/customer/vendor/reseller authentication and role permissions
- bKash, ShurjoPay, UddoktaPay and AamarPay payment callbacks
- RedX/courier webhook and courier API credentials
- Email/SMS sending, fraud/duplicate order checks and CAPTCHA/security middleware
- File storage, digital-download authorization, PDF invoices and scheduled jobs
- Facebook/Google/TikTok analytics and conversion APIs

## Production migration recommendation

1. Move the Laravel database schema/data to PostgreSQL or MySQL usable by Next.js.
2. Implement database access using Prisma or Drizzle.
3. Add secure authentication with Auth.js, Clerk, Supabase Auth or a custom JWT/session system.
4. Implement payment and courier adapters as server-side Next.js Route Handlers.
5. Replace sample data in `lib/data.ts` with database queries or a Laravel REST API.
6. Protect `/admin`, `/vendor` and `/reseller` with role-based middleware.

## Local run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.
