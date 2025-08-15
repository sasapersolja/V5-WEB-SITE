"use client";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);

const products = [
  { id: "song1", name: "Song Title 1", price: 2.99, file: "/songs/song1.mp3" },
  { id: "song2", name: "Song Title 2", price: 2.99, file: "/songs/song2.mp3" },
];

export default function HomePage() {
  const handleCheckout = async (product: any) => {
    const stripe = await stripePromise;
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    const session = await res.json();
    if (stripe) {
      stripe.redirectToCheckout({ sessionId: session.id });
    }
  };

  return (
    <>
      <h1 className="sr-only">Sasha Persholja — Official Site</h1>

      {/* HERO image */}
      <section className="px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-black">
            <img
              src="/bg-original.png"
              alt=""
              className="w-full h-auto block"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* MP3 Shop */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Buy My Songs</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((p) => (
            <div key={p.id} className="p-4 bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mb-4">${p.price}</p>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                onClick={() => handleCheckout(p)}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
