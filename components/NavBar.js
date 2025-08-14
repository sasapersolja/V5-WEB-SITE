
import Link from 'next/link'

export function NavBar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="font-bold text-lg text-brand-600">
          Sasha Persholja
        </Link>
        <nav className="flex gap-4 text-sm">
          <Link href="/music">Music</Link>
          <Link href="/tour">Tour</Link>
          <Link href="/press">Press Kit</Link>
          <Link href="/gallery">Photos</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
