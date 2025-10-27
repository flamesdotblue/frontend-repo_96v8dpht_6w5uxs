import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white font-bold">6</span>
            <span className="text-lg">6sense.ai</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#demo" className="hover:text-gray-900">Live Demo</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          </div>

          <div className="hidden md:flex">
            <a href="#cta" className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white shadow-sm hover:bg-gray-800 transition">Launch App</a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="space-y-1 px-4 py-3">
            <a href="#features" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50">Features</a>
            <a href="#demo" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50">Live Demo</a>
            <a href="#pricing" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50">Pricing</a>
            <a href="#cta" className="block rounded-md bg-gray-900 px-3 py-2 text-white">Launch App</a>
          </div>
        </div>
      )}
    </header>
  );
}
