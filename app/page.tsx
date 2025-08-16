"use client";
import { useState } from "react";
import "./globals.css"; // make sure globals.css is loaded

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
      className="flex min-h-screen items-center justify-center bg-black bg-cover bg-center animate-swing"
      style={{ backgroundImage: "url('/background2.png')" }}
    >
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="px-10 py-5 text-xl font-bold text-white rounded-2xl 
                   bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                   shadow-lg hover:shadow-2xl relative overflow-hidden
                   transition-all duration-300 disabled:opacity-50"
      >
        <span className="relative z-10">
          {loading ? "Redirecting..." : "🎵 MP3 Store – Buy Now $1.99"}
        </span>
        <span className="absolute inset-0 bg-white/20 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
      </button>
    </main>
  );
}

/* Background swing animation (inline for one-shoot) */
<style jsx global>{`
  @keyframes swing {
    0% { background-position: left center; }
    50% { background-position: right center; }
    100% { background-position: left center; }
  }
  .animate-swing {
    animation: swing 15s ease-in-out infinite;
  }
`}</style>
