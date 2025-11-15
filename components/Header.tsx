"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            StreamClone
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#popular"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
            >
              Popular
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#top-rated"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
            >
              Top Rated
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#now-playing"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
            >
              Now Playing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="text-white p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
