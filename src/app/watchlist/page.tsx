import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MovieCard } from '@/components/movie-card';
import { getMovies } from '@/lib/movies';

export default function WatchlistPage() {
  // In a real app, this would be the user's actual watchlist
  const watchlistMovies = getMovies().slice(0, 5);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="font-headline text-4xl font-bold">My Watchlist</h1>
          {watchlistMovies.length > 0 ? (
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {watchlistMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="mt-8 flex h-64 items-center justify-center rounded-lg border-2 border-dashed">
              <p className="text-muted-foreground">Your watchlist is empty.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
