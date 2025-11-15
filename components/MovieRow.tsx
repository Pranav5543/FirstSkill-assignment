"use client";
import { useRef, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Movie } from "../types/movie";

export default function MovieRow({
  movies,
  categoryTitle,
}: {
  movies: Movie[];
  categoryTitle: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollButtons();
  }, [movies]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -600, behavior: "smooth" });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 600, behavior: "smooth" });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section className="mb-12">
      <h3 className="text-2xl font-bold mb-6 text-white tracking-wide">
        {categoryTitle}
      </h3>
      <div className="relative group">
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-black/80 hover:bg-black/90 text-white p-3 rounded-full shadow-2xl transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-110"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}
        <div
          ref={scrollRef}
          onScroll={checkScrollButtons}
          className="flex gap-6 overflow-x-hidden pb-6 px-4 scroll-smooth"
        >
          {movies.map((m) => (
            <MovieCard key={m.imdbID} movie={m} />
          ))}
        </div>
        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-black/80 hover:bg-black/90 text-white p-3 rounded-full shadow-2xl transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-110"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
