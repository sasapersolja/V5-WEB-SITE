export function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-16">
      <div className="container py-10 text-sm text-gray-600 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Sasha Persholja. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/terms" className="hover:underline">Terms</a>
          <a href="/press" className="hover:underline">Press Kit</a>
        </div>
      </div>
    </footer>
  );
}