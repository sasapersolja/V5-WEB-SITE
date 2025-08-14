import { TourList } from "@/components/TourList";
export const metadata = { title: "Tour" };
export default function TourPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h2">Tour Dates</h1>
        <p className="lead mt-2">Catch Sasha live on the road.</p>
        <div className="mt-8">
          <TourList />
        </div>
        <div className="card p-6 mt-8">
          <h3 className="font-semibold text-lg">Booking</h3>
          <p className="text-gray-700 mt-2">For bookings or press, contact <a className="underline" href="mailto:booking@sashapersholja.com">booking@sashapersholja.com</a>.</p>
        </div>
      </div>
    </section>
  );
}