export function SocialIcons() {
  const links = [
    { href: "https://open.spotify.com/artist/4QYxABWNLOKG9poHbP6Qlj", label: "Spotify" },
    { href: "https://music.apple.com/us/artist/sasha-persholja/982227457", label: "Apple Music" },
    { href: "https://sashapersholja.bandcamp.com/", label: "Bandcamp" },
    { href: "https://music.youtube.com/channel/UCaZ0trAMA_qNiHFr0a8uIkQ", label: "YouTube Music" },
    { href: "https://www.instagram.com/sasha.persholja/", label: "Instagram" },
  ];
  return (
    <div className="flex flex-wrap gap-3">
      {links.map(l => (
        <a key={l.label} href={l.href} className="btn-outline" target="_blank" rel="noreferrer">{l.label}</a>
      ))}
    </div>
  );
}