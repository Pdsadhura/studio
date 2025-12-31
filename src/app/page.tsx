import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { MovieCarousel } from '@/components/movie-carousel';
import { Footer } from '@/components/footer';
import { getMovies, getGenres, getFeaturedMovie } from '@/lib/movies';

export default function Home() {
  const allMovies = getMovies();
  const genres = getGenres();
  const featuredMovie = getFeaturedMovie();

  const popularMovies = [...allMovies].sort((a, b) => b.popularity - a.popularity);
  const newReleases = [...allMovies].sort((a, b) => b.releaseYear - a.releaseYear);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero movie={featuredMovie} />
        <div className="container space-y-16 py-12">
          <MovieCarousel title="Popular on FlickPick" movies={popularMovies.slice(0, 10)} />
          <MovieCarousel title="New Releases" movies={newReleases.slice(0, 10)} />
          {genres.map((genre) => {
            const genreMovies = allMovies.filter((movie) => movie.genres.includes(genre));
            return genreMovies.length > 0 ? (
              <MovieCarousel key={genre} title={genre} movies={genreMovies} />
            ) : null;
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
