"use client";
import { useEffect } from "react";
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

      {/* MUSIC */}
      <section className="section bg-black text-white">
        <div className="container grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="fade-in">
            <h2 className="h2 text-brand-red">Listen on Spotify</h2>
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

          {/* SHOWS */}
          <div className="card fade-in">
            <h2 className="h2">Upcoming Shows</h2>
            <div className="mt-4">
              <TourList />
            </div>
            <div className="text-center mt-6">
              <a href="/tour" className="btn-primary inline-block px-6 py-3 rounded-full">
                See All Dates
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
