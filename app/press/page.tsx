export const metadata = { title: "Press Kit" };
export default function PressPage() {
  const quotes = [
    { outlet: "The Sound Post", text: "“A hypnotic blend of analog warmth and modern groove.”" },
    { outlet: "Nocturne FM", text: "“Atmospheric and immediate — a rare balance.”" },
  ];
  return (
    <section className="section">
      <div className="container">
        <h1 className="h2">Electronic Press Kit</h1>
        <p className="lead mt-2">Bio, selected press, photos, and contact.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="card p-6">
            <h3 className="font-semibold">Short Bio</h3>
            <p className="text-gray-700 mt-2">
              Sasha Persholja is a Slovenian artist crafting immersive, emotive electronic music. 
              Performing across intimate clubs and festival stages, Sasha blends vocal-led hooks with textured sound design.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Press Highlights</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5">
              {quotes.map(q => <li key={q.outlet}><em>{q.text}</em> — {q.outlet}</li>)}
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Assets</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5">
              <li>High-res photos & covers: see <a className="underline" href="/gallery">Photos</a></li>
              <li><a className="underline" href="/press/stage-plot.pdf">Stage plot (PDF)</a></li>
              <li><a className="underline" href="/press/tech-rider.pdf">Tech rider (PDF)</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}