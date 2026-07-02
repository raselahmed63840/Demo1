import { getProduct } from "@/lib/data";
import { ProductDetail, Storefront } from "@/components/storefront";
import { notFound } from "next/navigation";
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const product = getProduct(slug); if (!product) notFound(); return <Storefront><div className="container breadcrumbs"><a href="/">Home</a><span>/</span><a href={`/category/${product.categorySlug}`}>{product.category}</a><span>/</span><b>{product.name}</b></div><ProductDetail product={product} /></Storefront>; }
