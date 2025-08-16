"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  const backgrounds = [
    "/background1.png",
    "/background2.png",
    "/bg.png",
    "/bg-original.png",
  ];

  // Rotate background every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

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
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Rotating background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgrounds[bgIndex]}
          alt="Background"
          fill
          className="object-cover opacity-40 transition-opacity duration-1000 ease-in-out"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center p-4">
        <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto mb-8">
          <Image
            src="/cover.png"
            alt="Album Cover"
            width={800}
            height={800}
            className="rounded-2xl shadow-2xl object-contain w-full h-auto"
            priority
          />
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow mb-6">
          🎵 MP3 Shop
        </h1>

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg sm:text-xl font-semibold rounded-full shadow-lg transform transition hover:scale-110 hover:shadow-2xl disabled:opacity-50"
        >
          {loading ? "Redirecting..." : "🎶 MP3 Shop – $1.99"}
        </button>
      </div>
    </main>
  );
}
