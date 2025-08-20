"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // add subtle glass background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "bg-black/60 backdrop-blur-md" : "bg-black/30 backdrop-blur-sm"
      } border-b border-white/10`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <a href="/" className="text-white font-bold tracking-wide text-lg">
          Sasha Persholja
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 text-white/90">
          <li><a className="hover:text-white" href="/">Home</a></li>
          <li><a className="hover:text-white" href="/music">Music</a></li>
          <li><a className="hover:text-white" href="/tour">Tour</a></li>
          <li><a className="hover:text-white" href="/gallery">Gallery</a></li>
          <li><a className="hover:text-white" href="/contact">Contact</a></li>
          <li>
            <a
              href="/"
              className="rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90"
            >
              🎵 MP3 Shop
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-lg border border-white/15 p-2 text-white/90"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16"/>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-2 px-4 pb-4 text-white/90">
          <li><a className="block rounded-lg px-3 py-2 hover:bg-white/10" href="/" onClick={() => setOpen(false)}>Home</a></li>
          <li><a className="block rounded-lg px-3 py-2 hover:bg-white/10" href="/music" onClick={() => setOpen(false)}>Music</a></li>
          <li><a className="block rounded-lg px-3 py-2 hover:bg-white/10" href="/tour" onClick={() => setOpen(false)}>Tour</a></li>
          <li><a className="block rounded-lg px-3 py-2 hover:bg-white/10" href="/gallery" onClick={() => setOpen(false)}>Gallery</a></li>
          <li><a className="block rounded-lg px-3 py-2 hover:bg-white/10" href="/contact" onClick={() => setOpen(false)}>Contact</a></li>
          <li>
            <a
              href="/"
              onClick={() => setOpen(false)}
              className="block rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 px-3 py-2 text-center font-semibold text-white shadow"
            >
              🎵 MP3 Shop
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
