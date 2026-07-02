import { DashboardPanel } from "@/components/storefront";
export default async function VendorPage({ params }: { params: Promise<{ panel?: string[] }> }) { const { panel } = await params; return <DashboardPanel role="Vendor" panel={panel} />; }
