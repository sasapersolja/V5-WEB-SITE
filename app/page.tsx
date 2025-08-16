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
    <main className="relative min-h-screen overflow-hidden">
      {/* Background with smooth left↔right swing */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/background2.webp"
          alt="Background"
          className="absolute top-0 left-0 h-full w-auto min-w-full object-cover bg-pan"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Foreground content */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6">
        <div className="w-full flex flex-col items-center text-center">
          <h1 className="mb-6 text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow">
            MP3 Shop
          </h1>

          <img
            src="/cover.png"
            alt="Album Cover"
            className="w-[75vw] max-w-[360px] md:max-w-[420px] scale-[1.2] rounded-2xl shadow-2xl ring-1 ring-white/15"
          />

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="
              relative mt-8 inline-flex items-center justify-center gap-3
              rounded-2xl px-8 py-4 text-lg font-bold text-white
              focus:outline-none focus:ring-4 focus:ring-pink-500/40
              btn-gradient btn-glow btn-pulse disabled:opacity-60 disabled:cursor-not-allowed
            "
          >
            {loading ? "Redirecting…" : "🎵 MP3 Store – Buy Now $1.99"}
          </button>
        </div>
      </section>

      <style jsx global>{`
        /* Swing background left↔right */
        @keyframes panX {
          0%   { transform: translateX(0); }
          50%  { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .bg-pan { animation: panX 40s ease-in-out infinite; }

        /* Button gradient & glow */
        .btn-gradient {
          background-image: linear-gradient(90deg, #db2777, #7c3aed, #2563eb);
          background-size: 200% 200%;
          animation: gradientShift 12s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .btn-glow {
          box-shadow:
            0 8px 30px rgba(124, 58, 237, 0.45),
            0 2px 10px rgba(219, 39, 119, 0.35);
        }
        .btn-gradient:hover {
          transform: translateY(-1px) scale(1.02);
          box-shadow:
            0 12px 40px rgba(124, 58, 237, 0.55),
            0 4px 14px rgba(219, 39, 119, 0.45);
        }
        @keyframes btnPulse {
          0%, 100% { filter: brightness(1); }
          50%      { filter: brightness(1.15); }
        }
        .btn-pulse { animation: btnPulse 2.4s ease-in-out infinite; }
      `}</style>
    </main>
  );
}
