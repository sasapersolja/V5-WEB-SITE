"use client";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Test Song", price: 1.99 }),
      });

      const data = await res.json();

      if (data?.url) {
        window.location.href = data.url;
      } else {
        alert("Error creating checkout session");
      }
    } catch (err) {
      alert("Request failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/cover.png')" }}
    >
      <div className="bg-black/60 p-8 rounded-2xl text-center shadow-xl">
        <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
          🎵 Support My Music
        </h1>
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg font-semibold rounded-full shadow-lg transform transition hover:scale-110 hover:shadow-2xl disabled:opacity-50"
        >
          {loading ? "Redirecting..." : "💳 Buy Test Song – $1.99"}
        </button>
      </div>
    </main>
  );
}
