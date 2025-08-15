import BlobVideo from "@/components/BlobVideo";
import { SocialIcons } from "@/components/SocialIcons";
import { TourList } from "@/components/TourList";

export default function HomePage() {
  return (
    <>
      {/* HERO — smaller height, top-crop on mobile, parallax only on md+ */}
      <section
        className="parallax-hero relative h-[48vh] md:h-[56vh] lg:h-[60vh] bg-top md:bg-center bg-cover md:bg-fixed flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="bg-black bg-opacity-50 px-4 py-3 rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Sasha Persholja</h1>
          <p className="mt-3 text-base md:text-lg text-gray-200">
            Funk • Blues • Alt-Electronica from Slovenia
          </p>
          <div className="mt-5">
            <SocialIcons />
          </div>
        </div>
      </section>

      {/* UPCOMING SHOWS + VIDEO */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Upcoming Shows</h2>

        {/* Video sits above the shows list */}
        <BlobVideo
          src="https://uro8hrdopoxixr7s.public.blob.vercel-storage.com/Sasha%20Persholja%20Just%20A%20Case.mp4"
          className="mb-8 shadow-lg"
        />

        <TourList />
      </section>
    </>
  );
}
