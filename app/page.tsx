"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "MP3 Track", price: 1.99 }),
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
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-center p-6">
      <div className="relative w-full max-w-lg mb-8">
        <Image
          src="/cover.png"
          alt="Album Cover"
          width={800}
          height={800}
          className="rounded-2xl shadow-2xl object-contain mx-auto"
          priority
        />
      </div>
      <h1 className="text-5xl font-extrabold text-white drop-shadow mb-6">
        🎵 MP3 Shop
      </h1>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg font-semibold rounded-full shadow-lg transform transition hover:scale-110 hover:shadow-2xl disabled:opacity-50"
      >
        {loading ? "Redirecting..." : "🎶 MP3 Shop – $1.99"}
      </button>
    </main>
  );
}
