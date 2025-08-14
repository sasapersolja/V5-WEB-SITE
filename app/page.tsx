import { SocialIcons } from "@/components/SocialIcons";
import { TourList } from "@/components/TourList";

export default function HomePage() {
  return (
    <>
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h1 className="h1">Sasha Persholja</h1>
            <p className="lead mt-4">
              Funk, blues, and alt-electronica from Slovenia — original songs and collaborations.
            </p>
            <div className="mt-6"><SocialIcons /></div>
          </div>
          <div className="card p-0 overflow-hidden">
            <iframe
              className="w-full"
              style={{height: 380}}
              src="https://open.spotify.com/embed/artist/4QYxABWNLOKG9poHbP6Qlj"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Sasha Persholja on Spotify"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2 text-center">Upcoming shows</h2>
          <div className="mt-8">
            <TourList />
          </div>
          <div className="text-center mt-6">
            <a href="/tour" className="btn-outline">See all dates</a>
          </div>
        </div>
      </section>
    </>
  );
}