export default function SuccessPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-500">✅ Payment Successful!</h1>
      <p className="mb-6">
        Thank you for your purchase. Click the link below to download your song:
      </p>
      <a
        href="/songs/song1.mp3"
        download
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        ⬇ Download Song
      </a>
    </main>
  );
}
