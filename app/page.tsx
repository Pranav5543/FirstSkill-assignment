import { fetchPopular, fetchTopRated, fetchNowPlaying } from "../lib/omdb";
import HeroBanner from "../components/HeroBanner";
import MovieRow from "../components/MovieRow";

export default async function HomePage() {
  const [popularRes, topRes, nowRes] = await Promise.all([
    fetchPopular(),
    fetchTopRated(),
    fetchNowPlaying(),
  ]);

  const popular = popularRes.Search || [];
  const top = topRes.Search || [];
  const now = nowRes.Search || [];

  const hero = popular[0] ?? null;

  return (
    <div className="max-w-7xl mx-auto">
      <HeroBanner movie={hero} />

      <div id="popular">
        <MovieRow movies={popular} categoryTitle="Popular" />
      </div>
      <div id="top-rated">
        <MovieRow movies={top} categoryTitle="Top Rated" />
      </div>
      <div id="now-playing">
        <MovieRow movies={now} categoryTitle="Now Playing" />
      </div>
    </div>
  );
}
