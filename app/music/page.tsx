export const metadata = { title: "Music" };
export default function MusicPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h2">Music</h1>
        <p className="lead mt-2">Stream the latest releases on your favorite platform.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="card p-0 overflow-hidden">
            <iframe
              className="w-full"
              style={{height: 380}}
              src="https://open.spotify.com/embed/artist/4QYxABWNLOKG9poHbP6Qlj"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Artist Embed"
            />
          </div>
          <div className="card p-8">
            <h3 className="text-xl font-semibold">Find Sasha elsewhere</h3>
            <ul className="mt-4 grid gap-2 text-gray-700 list-disc pl-5">
              <li><a className="underline" href="https://music.apple.com/us/artist/sasha-persholja/982227457" target="_blank" rel="noreferrer">Apple Music</a></li>
              <li><a className="underline" href="https://sashapersholja.bandcamp.com/" target="_blank" rel="noreferrer">Bandcamp</a></li>
              <li><a className="underline" href="https://music.youtube.com/channel/UCaZ0trAMA_qNiHFr0a8uIkQ" target="_blank" rel="noreferrer">YouTube Music</a></li>
              <li><a className="underline" href="https://www.instagram.com/sasha.persholja/" target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}