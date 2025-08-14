export default function sitemap() {
  const base = "https://sashapersholja.com";
  const now = new Date();
  return [
    { url: base + "/", lastModified: now },
    { url: base + "/about", lastModified: now },
    { url: base + "/music", lastModified: now },
    { url: base + "/tour", lastModified: now },
    { url: base + "/press", lastModified: now },
    { url: base + "/gallery", lastModified: now },
    { url: base + "/contact", lastModified: now },
  ];
}