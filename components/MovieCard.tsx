"use client";
import Link from "next/link";
import Image from "next/image";
import { Movie } from "../types/movie";

export default function MovieCard({ movie }: { movie: Movie }) {
  const poster = movie.Poster !== "N/A" ? movie.Poster : "/fallback-poster.jpg";

  return (
    <Link
      href={`/movie/${movie.imdbID}`}
      className="min-w-[180px] md:min-w-[200px] lg:min-w-[220px] block hover:scale-105 transition-all duration-300 group"
    >
      <div className="w-44 md:w-48 lg:w-52 xl:w-56">
        <Image
          src={poster}
          alt={movie.Title}
          width={220}
          height={330}
          className="rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
        />
        <h4 className="text-sm md:text-base mt-3 line-clamp-1 text-white font-medium group-hover:text-blue-300 transition-colors duration-300">
          {movie.Title}
        </h4>
      </div>
    </Link>
  );
}
