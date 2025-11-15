import Image from "next/image";
import { Movie } from "../types/movie";

export default function HeroBanner({ movie }: { movie: Movie | null }) {
  if (!movie) return null;
  const src = movie.Poster !== "N/A" ? movie.Poster : "/fallback-backdrop.jpg";

  return (
    <section className="relative h-80 sm:h-96 md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden mb-8 shadow-2xl">
      <Image
        src={src}
        alt={movie.Title}
        fill
        priority
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg text-white mb-2">
          {movie.Title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg mt-2 line-clamp-3 text-gray-200 leading-relaxed">
          {movie.Plot}
        </p>
        <div className="mt-4 flex items-center gap-4">
          <span className="text-sm font-medium text-blue-300">
            {movie.Year}
          </span>
          <span className="text-sm font-medium text-yellow-400">
            ★ {movie.imdbRating}
          </span>
        </div>
      </div>
    </section>
  );
}
