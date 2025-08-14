
export const metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <section className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold">Contact / Booking</h1>
      <form className="mt-6 grid gap-4 max-w-lg">
        <input type="text" placeholder="Your name" className="border p-2 rounded" required />
        <input type="email" placeholder="Email address" className="border p-2 rounded" required />
        <textarea placeholder="Message" rows="5" className="border p-2 rounded" required></textarea>
        <button className="px-4 py-2 bg-brand-600 text-white rounded">Send</button>
      </form>
    </section>
  )
}
