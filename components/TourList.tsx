import tour from "@/data/tour.json";

export function TourList() {
  return (
    <div className="grid gap-3">
      {tour.map((show) => (
        <div key={show.date + show.city} className="card p-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="text-xl font-semibold tabular-nums">{new Date(show.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit'})}</div>
            <div className="text-gray-700">{show.city} • <span className="font-medium">{show.venue}</span></div>
          </div>
          <a className="btn-primary mt-3 md:mt-0" href="#" aria-label={`Get ${show.status} for ${show.venue}`}>{show.status}</a>
        </div>
      ))}
    </div>
  );
}