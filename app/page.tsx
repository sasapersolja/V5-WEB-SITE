import { TourList } from "@/components/TourList";

export default function HomePage() {
  return (
    <>
      {/* SEO-only heading (hidden visually) */}
      <h1 className="sr-only">Sasha Persholja — Official Site</h1>

      {/* HERO — shows the FULL image, never cropped */}
      <section className="px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-black">
            <img
              src="/bg-original.png"   /* file must exist at public/bg-original.png */
              alt=""                    /* decorative; name kept for SEO only */
              className="w-full h-auto block"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Upcoming Shows */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Upcoming Shows</h2>
        <TourList />
      </section>
    </>
  );
}
