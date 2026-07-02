import { CustomerCentre, Storefront } from "@/components/storefront";
export default async function CustomerPage({ params }: { params: Promise<{ section?: string[] }> }) { const { section } = await params; return <Storefront><CustomerCentre section={section} /></Storefront>; }
