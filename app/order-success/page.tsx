import Link from "next/link";
import { Storefront } from "@/components/storefront";

export default async function OrderSuccessPage({ searchParams }: { searchParams: Promise<{ order?: string }> }) {
  const { order = "SE-0000000" } = await searchParams;
  return <Storefront><section className="container section"><div className="success-card"><div className="success-icon">✓</div><p className="eyebrow">Order received</p><h1>Thanks for your order!</h1><p>Your order <b>{order}</b> has been placed. We will contact you shortly to confirm delivery.</p><div><Link className="button button-dark" href="/shop">Keep shopping</Link><Link className="button button-outline" href="/customer/order-track">Track order</Link></div></div></section></Storefront>;
}
