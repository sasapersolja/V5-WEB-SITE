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
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      {/* Swinging full background */}
      <div
        className="absolute inset-0 animate-swing"
        style={{
          backgroundImage: "url('/background2.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Cover image */}
      <div className="relative z-10">
        <Image
          src="/cover.png"
          alt="Cover"
          width={480}
          height={480}
          className="rounded-lg shadow-2xl"
        />

        {/* Stripe Buy Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="px-8 py-4 text-xl font-bold rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
                       text-white shadow-lg animate-pulse hover:scale-105 transform transition disabled:bg-gray-500"
          >
            {loading ? "Redirecting..." : "🎵 MP3 Store – Buy Now $1.99"}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes swing {
          0% {
            transform: translateX(-10%);
          }
          50% {
            transform: translateX(10%);
          }
          100% {
            transform: translateX(-10%);
          }
        }
        .animate-swing {
          animation: swing 20s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
