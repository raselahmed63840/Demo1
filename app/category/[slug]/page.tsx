import { getCategory } from "@/lib/data";
import { PageHero, ShopControls, Storefront } from "@/components/storefront";
import { notFound } from "next/navigation";
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const category = getCategory(slug); if (!category) notFound(); return <Storefront><PageHero eyebrow="Category" title={category.name} text={category.description} /><main className="container section"><ShopControls category={category.slug} /></main></Storefront>; }
