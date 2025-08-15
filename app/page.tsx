"use client";
import { useEffect } from "react";
import BlobVideo from "@/components/BlobVideo";
import { SocialIcons } from "@/components/SocialIcons";
import { TourList } from "@/components/TourList";

export default function HomePage() {
  // Parallax scrolling for hero
  useEffect(() => {
    const hero = document.querySelector(".parallax-hero");
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (hero) {
        (hero as HTMLElement).style.backgroundPositionY = `${scrollY * 0.5}px`;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HERO */}
      <section
        className="parallax-hero relative h-screen bg-center bg-cover flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="bg-black bg-opacity-50 px-6 py-4 rounded-xl">
          <h1 className="h1 text-white">Sasha Persholja</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Funk • Blues • Alt-Electronica from Slovenia
          </p>
          <div className="mt-6">
            <SocialIcons />
          </div>
        </div>
      </section>

      {/* UPCOMING SHOWS + VIDEO */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Upcoming Shows</h2>

        {/* Video sits above the shows list */}
        <BlobVideo
          src="https://uro8hrdopoxixr7s.public.blob.vercel-storage.com/Sasha%20Persholja%20Just%20A%20Case.mp4"
          // poster="/just-a-case-poster.jpg"  // optional
          className="mb-8 shadow-lg"
        />

        {/* Your shows list stays as-is */}
        <TourList />
      </section>
    </>
  );
}
