
export function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto p-4 text-sm text-gray-500 flex justify-between">
        <p>© {new Date().getFullYear()} Sasha Persholja. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  )
}
