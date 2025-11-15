import { fetchMovieById } from "../../../lib/omdb";
import Image from "next/image";

type Props = { params: { id: string } };

export default async function MoviePage({ params }: Props) {
  const id = params.id;
  const movie = await fetchMovieById(id);

  const poster = movie.Poster !== "N/A" ? movie.Poster : undefined;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="col-span-1">
          {poster ? (
            <Image
              src={poster}
              alt={movie.Title}
              width={500}
              height={750}
              className="rounded w-full h-auto"
            />
          ) : (
            <div className="bg-gray-700 w-full h-[300px] sm:h-[400px] rounded" />
          )}
        </div>
        <div className="md:col-span-2">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            {movie.Title}
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 mt-2">
            {movie.Released}
          </p>
          <p className="mt-4 leading-relaxed text-sm sm:text-base">
            {movie.Plot}
          </p>
          <p className="mt-4 text-sm sm:text-base">
            Rating: {movie.imdbRating ?? "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
