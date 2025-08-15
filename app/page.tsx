import Image from "next/image";
import { TourList } from "@/components/TourList";

export default function HomePage() {
  return (
    <>
      {/* SEO-only, not visible */}
      <h1 className="sr-only">Sasha Persholja — Official Site</h1>

      {/* HERO — show your picture, no visible text */}
      <section className="px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-xl bg-black">
            <Image
              src="/bg-original.png"   // already in your repo
              alt=""                    // decorative; name is in SEO
              fill
              priority
              className="object-cover"  // or swap to "object-contain bg-black" to show full image
              sizes="(max-width: 768px) 100vw, 800px"
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
