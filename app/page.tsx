"use client";
import { useEffect } from "react";
import { SocialIcons } from "@/components/SocialIcons";
import { TourList } from "@/components/TourList";

export default function HomePage() {
  // Parallax effect
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
      {/* Hero Section */}
      <section
        className="parallax-hero relative h-screen bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="hero-overlay text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide">
            Sasha Persholja
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Funk • Blues • Alt-Electronica from Slovenia
          </p>
          <div className="mt-6">
            <SocialIcons />
          </div>
        </div>
      </section>

      {/* Music & Tour Section */}
      <section className="section bg-black text-white">
        <div className="container grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="fade-in">
            <h2 className="h2">Listen on Spotify</h2>
            <p className="mt-2 text-gray-300">
              Explore original songs and collaborations.
            </p>
            <iframe
              className="w-full mt-4"
              style={{ height: 380 }}
              src="https://open.spotify.com/embed/artist/4QYxABWNLOKG9poHbP6Qlj"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Sasha Persholja on Spotify"
            />
          </div>
          <div className="card p-6 fade-in">
            <h2 className="h2">Upcoming Shows</h2>
            <div className="mt-4">
              <TourList />
            </div>
            <div className="text-center mt-6">
              <a href="/tour" className="btn btn-primary">
                See All Dates
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
