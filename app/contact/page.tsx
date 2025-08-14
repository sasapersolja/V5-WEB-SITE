export const metadata = { title: "Contact" };
export default function ContactPage() {
  return (
    <section className="section">
      <div className="container max-w-2xl">
        <h1 className="h2">Contact / Booking</h1>
        <p className="lead mt-2">Inquiries for shows, press, and collaborations.</p>
        <form method="post" action="/api/contact" className="mt-8 grid gap-4">
          <input name="name" placeholder="Your name" required className="card p-3" />
          <input type="email" name="email" placeholder="Email address" required className="card p-3" />
          <input name="subject" placeholder="Subject (Booking, Press, etc.)" required className="card p-3" />
          <textarea name="message" placeholder="Your message" rows={6} required className="card p-3"></textarea>
          <button className="btn-primary w-full">Send</button>
        </form>
        <p className="text-sm text-gray-600 mt-3">Prefer email? <a className="underline" href="mailto:booking@sashapersholja.com">booking@sashapersholja.com</a></p>
      </div>
    </section>
  );
}