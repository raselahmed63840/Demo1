import { DashboardPanel } from "@/components/storefront";
export default async function ResellerPage({ params }: { params: Promise<{ panel?: string[] }> }) { const { panel } = await params; return <DashboardPanel role="Reseller" panel={panel} />; }
