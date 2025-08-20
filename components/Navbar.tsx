import Link from "next/link";

export function NavBar() {
  return (
    <header className="site-header">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-block w-3 h-3 rounded-full" style={{background:"#d60000"}} />
          <span className="font-extrabold uppercase tracking-widest text-white">Sasha Persholja</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link className="nav-link" href="/music">Music</Link>
          <Link className="nav-link" href="/tour">Tour</Link>
          <Link className="nav-link" href="/press">Press</Link>
          <Link className="nav-link" href="/gallery">Photos</Link>
          <Link className="nav-link" href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
