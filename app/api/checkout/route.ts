import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

function corsResponse(body: any, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function OPTIONS() {
  return corsResponse({}, 200);
}

export async function POST(req: Request) {
  try {
    const { name, price } = await req.json();

    // Robust base URL resolution:
    const url = new URL(req.url);
    const base =
      process.env.NEXT_PUBLIC_URL ||      // prefer explicit site URL if set
      process.env.NEXT_PUBLIC_SITE_URL || // fallback if you use this var
      `${url.protocol}//${url.host}`;     // final fallback from request itself

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name },
            unit_amount: Math.round(Number(price) * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${base}/success`,
      cancel_url: `${base}/cancel`,
    });

    return corsResponse({ id: session.id }, 200);
  } catch (err: any) {
    return corsResponse({ error: err.message ?? "Unknown error" }, 500);
  }
}
