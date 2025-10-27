export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/5 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-600">© {year} 6sense.ai — All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#demo" className="hover:text-gray-900">Demo</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
