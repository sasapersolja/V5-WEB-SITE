import fs from "node:fs";
import path from "node:path";

export const metadata = { title: "Photos" };

export default function GalleryPage() {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  let files: string[] = [];
  try {
    files = fs.readdirSync(galleryDir)
      .filter(f => /\.(png|jpe?g|webp|gif|svg)$/i.test(f));
  } catch (e) {
    files = [];
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="h2">Photos</h1>
        <p className="lead mt-2">Drop your images into <code>/public/gallery</code> and redeploy — they will appear here automatically.</p>
        {files.length === 0 ? (
          <p className="text-gray-600 mt-6">No images yet. Add files like <code>cover.png</code> or <code>live-1.jpg</code> to <code>/public/gallery</code>.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {files.map((file) => (
              <figure key={file} className="card overflow-hidden">
                <img src={`/gallery/${file}`} alt={file} className="w-full h-64 object-cover" />
                <figcaption className="p-3 text-sm text-gray-600 break-words">{file}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}