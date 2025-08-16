"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

// Stripe initialization (publishable key from environment variable)
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_KEY || ""
);

export default function HomePage() {
  const [loading, setLoading] = useState(false);

  async function handleCheckout(product: { name: string; price: number }) {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (!res.ok) {
        throw new Error("Failed to create checkout session");
      }

      const data = await res.json();
      const stripe = await stripePromise;

      if (!stripe) {
        alert("Stripe failed to initialize. Check your publishable key.");
        setLoading(false);
        return;
      }

      if (data?.id) {
        const { error } = await stripe.redirectToCheckout({
          sessionId: data.id,
        });
        if (error) {
          console.error(error);
          alert("Stripe Checkout error: " + error.message);
        }
      } else {
        alert("Error creating checkout session");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Something went wrong.");
    }
    setLoading(false);
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">🎵 MP3 Shop</h1>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Example Product */}
        <div className="bg-black bg-opacity-70 rounded-lg p-4 shadow-lg text-center">
          <img
            src="/cover.png"
            alt="Song Cover"
            className="w-full h-auto rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">My First Song</h2>
          <p className="mb-4">$1.99</p>
          <button
            onClick={() => handleCheckout({ name: "My First Song", price: 1.99 })}
            disabled={loading}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
          >
            {loading ? "Processing..." : "Buy Now"}
          </button>
        </div>
      </div>
    </main>
  );
}

