import { DashboardPanel } from "@/components/storefront";
export default async function AdminPage({ params }: { params: Promise<{ panel?: string[] }> }) { const { panel } = await params; return <DashboardPanel role="Admin" panel={panel} />; }
