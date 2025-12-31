import { Suspense } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MovieCard } from '@/components/movie-card';
import { searchMovies } from '@/lib/movies';
import { Skeleton } from '@/components/ui/skeleton';

interface SearchPageProps {
  searchParams: {
    q?: string;
  };
}

function SearchResults({ query }: { query: string }) {
  const results = searchMovies(query);

  return (
    <>
      <h2 className="text-2xl font-semibold tracking-tight">
        Showing results for &quot;{query}&quot;
      </h2>
      {results.length > 0 ? (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="mt-8 flex h-64 items-center justify-center rounded-lg border-2 border-dashed">
          <p className="text-muted-foreground">No movies found matching your search.</p>
        </div>
      )}
    </>
  );
}

function SearchSkeleton() {
    return (
        <div className="space-y-8">
            <Skeleton className="h-8 w-1/3" />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {[...Array(6)].map((_, i) => (
                    <Skeleton key={i} className="aspect-[2/3] rounded-lg" />
                ))}
            </div>
        </div>
    )
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || '';

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="font-headline text-4xl font-bold">Search</h1>
          <div className="mt-8">
            {query ? (
              <Suspense fallback={<SearchSkeleton />}>
                <SearchResults query={query} />
              </Suspense>
            ) : (
              <p className="text-muted-foreground">Please enter a search term to begin.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
