cat > app/page.tsx << 'EOF'
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
      className="flex min-h-screen flex-col items-center justify-center text-white bg-black animate-swing"
      style={{ backgroundImage: "url('/background2.png')" }}
    >
      {/* Cover image (20% bigger) */}
      <img
        src="/cover.png"
        alt="Song Cover"
        className="w-80 h-auto rounded-xl shadow-2xl mb-10"
      />

      {/* Big Fancy Button */}
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="relative px-14 py-7 text-3xl font-extrabold rounded-full 
                   bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                   text-white shadow-[0_0_30px_rgba(255,0,255,0.8)]
                   transition-transform duration-300 hover:scale-110 
                   disabled:opacity-50 animate-pulse"
      >
        {loading ? "Redirecting..." : "🎵 MP3 Store – Buy Now $1.99"}
      </button>

      {/* Background animation */}
      <style jsx global>{`
        @keyframes swing {
          0% {
            background-position: left center;
          }
          50% {
            background-position: right center;
          }
          100% {
            background-position: left center;
          }
        }
        .animate-swing {
          animation: swing 40s ease-in-out infinite;
          background-size: contain; /* show full image */
          background-repeat: no-repeat;
          background-position: center;
        }
      `}</style>
    </main>
  );
}
EOF
