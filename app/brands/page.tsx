import Link from "next/link";
import { brands } from "@/lib/data";
import { PageHero, Storefront } from "@/components/storefront";
export default function BrandsPage() { return <Storefront><PageHero eyebrow="Brands" title="Explore trusted names" text="Shop familiar brands across technology, appliances and daily essentials." /><main className="container section"><div className="brand-directory">{brands.map((brand) => <Link href={`/search?q=${brand.name}`} key={brand.name}><img src={brand.image} alt={brand.name} /><span>{brand.name}</span><b>Browse →</b></Link>)}</div></main></Storefront>; }
