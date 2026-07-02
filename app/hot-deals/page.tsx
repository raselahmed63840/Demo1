import { products } from "@/lib/data";
import { PageHero, ProductGrid, Storefront } from "@/components/storefront";
export default function HotDealsPage() { return <Storefront><PageHero eyebrow="Limited time" title="Hot deals worth catching" text="Special prices on selected products while stock lasts." /><main className="container section"><ProductGrid list={products.filter((product) => product.oldPrice).slice(0, 12)} /></main></Storefront>; }
