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
    } catch {
      alert("Request failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Smooth swinging background (shows full image) */}
      <div className="absolute inset-0 -z-10">
        <div className="swinger h-full w-[180vw] sm:w-[160vw] md:w-[140vw] lg:w-[120vw] max-w-none mx-auto pointer-events-none select-none">
          <img
            src="/background2.png"
            alt="Background"
            className="h-full w-full object-contain"
            draggable={false}
          />
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-4 py-8 sm:py-10 md:py-12">
        <section
          className="w-full max-w-md rounded-2xl bg-black/60 p-5 backdrop-blur-md sm:p-6 md:p-8"
          style={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}
        >
          <h1 className="mb-5 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
            MP3 Shop
          </h1>

          {/* Cover (responsive) */}
          <div className="mb-5 sm:mb-6 flex justify-center">
            <img
              src="/cover.png"
              alt="Song Cover"
              className="w-[82vw] max-w-[360px] sm:max-w-[420px] md:max-w-[480px] rounded-xl shadow-2xl"
              loading="eager"
            />
          </div>

          <p className="mb-5 text-center text-white/90">
            My First Song — <span className="font-semibold">$1.99</span>
          </p>

          {/* Big pretty CTA (full width on mobile) */}
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="group relative block w-full select-none rounded-2xl border border-white/10 px-6 py-4 text-base font-semibold text-white outline-none transition active:scale-[0.98] sm:text-lg"
            aria-label="Buy MP3 for $1.99 via secure Stripe checkout"
          >
            <span className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 blur-[10px] opacity-70 transition group-hover:opacity-90"></span>
            <span className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500"></span>
            <span className="flex w-full flex-col items-center justify-center gap-1">
              <span className="inline-flex items-center justify-center gap-2">
                <span className="text-xl sm:text-2xl">🎵</span>
                <span className="text-[15px] sm:text-base md:text-lg">
                  MP3 Store – <span className="font-bold">Buy Now $1.99</span>
                </span>
              </span>
              <span className="inline-block animate-pulse text-xs opacity-90 sm:text-sm">
                {loading ? "Redirecting…" : "Instant Stripe checkout"}
              </span>
            </span>
          </button>

          <p className="mt-4 text-center text-xs text-white/70 sm:text-sm">
            Secure Stripe checkout • No account required
          </p>
        </section>
      </div>
    </main>
  );
}
