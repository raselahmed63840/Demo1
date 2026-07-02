import Link from "next/link";
import { Storefront } from "@/components/storefront";
export default function NotFound() { return <Storefront><section className="container section"><div className="empty-panel"><div>404</div><h2>That page is not here.</h2><p>The address may have changed or the product is no longer listed.</p><Link href="/" className="button button-dark">Return home</Link></div></section></Storefront>; }
