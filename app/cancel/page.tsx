export default function CancelPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-center">
      <h1 className="text-3xl font-bold mb-4 text-red-500">❌ Payment Canceled</h1>
      <p className="mb-6">
        Your order has been canceled. You can return to the shop and try again.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
      >
        Back to Shop
      </a>
    </main>
  );
}
