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
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Swinging Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="animate-swing w-[120%] h-full">
          <Image
            src="/background2.png"
            alt="Background"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <Image
          src="/cover.png"
          alt="Cover"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Redirecting..." : "MP3 Shop - $1.99"}
        </button>
      </div>
    </main>
  );
}
