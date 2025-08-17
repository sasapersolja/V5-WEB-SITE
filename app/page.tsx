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
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      {/* Circular moving background (behind the cover) */}
      <div className="absolute top-1/2 left-1/2 w-[70%] max-w-xl -translate-x-1/2 -translate-y-1/2 animate-circle opacity-60">
        <img
          src="/background2.png"
          alt="Background"
          className="w-full h-auto rounded-xl"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          🎵 MP3 Shop
        </h1>

        {/* Make cover a bit larger */}
        <img
          src="/cover.png"
          alt="Cover"
          className="w-[72%] max-w-lg rounded-xl shadow-2xl"
        />

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="px-10 py-4 text-xl font-bold text-white rounded-full 
                     bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                     shadow-lg animate-pulse
                     hover:scale-110 transform transition duration-300
                     focus:ring-4 focus:ring-pink-300"
        >
          {loading ? "Redirecting..." : "🎵 MP3 Store – Buy Now $1.99"}
        </button>
      </div>

      <style jsx global>{`
        @keyframes circle {
          0% {
            transform: translate(-50%, -50%) translateX(0);
          }
          25% {
            transform: translate(-150%, -50%); /* move left (off screen) */
          }
          50% {
            transform: translate(-50%, -50%) translateX(0); /* center */
          }
          75% {
            transform: translate(50%, -50%); /* move right (off screen) */
          }
          100% {
            transform: translate(-50%, -50%) translateX(0); /* back to center */
          }
        }
        .animate-circle {
          animation: circle 40s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
