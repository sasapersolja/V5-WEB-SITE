
export const metadata = { title: 'Photos' }

export default function GalleryPage() {
  return (
    <section className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold">Photos</h1>
      <p className="mt-4">Gallery of album art, posters, and live shots.</p>
      <p className="text-sm text-gray-500 mt-2">Place your images into /public/gallery.</p>
    </section>
  )
}
