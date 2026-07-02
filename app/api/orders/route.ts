import { NextRequest } from "next/server";
export async function POST(request: NextRequest) {
  const order = await request.json();
  return Response.json({ ok: true, message: "Demo order accepted. Connect a database and payment adapter for production.", orderNumber: order.orderNumber });
}
