import Stripe from "stripe";
import { NextResponse } from "next/server";

export const runtime = "nodejs";            // ensure Node runtime (not Edge)
export const dynamic = "force-dynamic";     // always run on server

const secret = process.env.STRIPE_SECRET_KEY;
if (!secret) {
  console.error("Missing STRIPE_SECRET_KEY in environment.");
}

const stripe = new Stripe(secret as string);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = body?.name;
    const price = Number(body?.price);

    if (!name || Number.isNaN(price) || price <= 0) {
      return NextResponse.json(
        { error: "Invalid product payload (name/price)." },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name },
            unit_amount: Math.round(price * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (err: any) {
    console.error("Checkout error:", err);
    return NextResponse.json(
      { error: err?.message ?? "Checkout failed" },
      { status: 500 }
    );
  }
}
