import Link from "next/link";

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 bg-transparent backdrop-blur-sm border-transparent">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-white drop-shadow">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-600" />
          Sasha Persholja
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white drop-shadow">
          <Link href="/music">Music</Link>
          <Link href="/tour">Tour</Link>
          <Link href="/press">Press Kit</Link>
          <Link href="/gallery">Photos</Link>
          <Link href="/contact">Contact</Link>
          <a href="https://music.youtube.com/channel/UCaZ0trAMA_qNiHFr0a8uIkQ" target="_blank" rel="noreferrer" className="btn-outline">YouTube</a>
          <a href="https://open.spotify.com/artist/4QYxABWNLOKG9poHbP6Qlj" target="_blank" rel="noreferrer" className="btn-primary">Listen</a>
        </nav>
      </div>
    </header>
  );
}
