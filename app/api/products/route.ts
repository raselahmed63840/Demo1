import { products } from "@/lib/data";
export function GET() { return Response.json({ data: products, total: products.length }); }
