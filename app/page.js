
import Link from 'next/link'

export default function HomePage() {
  return (
    <section className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold">Sasha Persholja</h1>
      <p className="mt-4 text-lg text-gray-700">
        Funk, blues, and alt-electronica from Slovenia — original songs and collaborations.
      </p>
      <div className="mt-6 flex gap-4">
        <Link href="/music" className="px-4 py-2 bg-brand-600 text-white rounded">Listen</Link>
        <Link href="/contact" className="px-4 py-2 border border-gray-300 rounded">Contact</Link>
      </div>
    </section>
  )
}
