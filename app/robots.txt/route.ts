export async function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: https://sashapersholja.com/sitemap.xml`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}