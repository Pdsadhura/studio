'use client';

import { useState, useEffect } from 'react';
import { generateRecommendationsAction } from '@/lib/actions';
import { getMoviesByTitle, type Movie } from '@/lib/movies';
import { MovieCard } from './movie-card';
import { Skeleton } from './ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from 'lucide-react';

function RecommendationsSkeleton() {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="aspect-[2/3] rounded-lg" />
            ))}
        </div>
    );
}

interface RecommendationsClientProps {
  viewingHistory: string[];
}

export function RecommendationsClient({ viewingHistory }: RecommendationsClientProps) {
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await generateRecommendationsAction(viewingHistory);
        if (result.recommendations.length > 0) {
          const movies = getMoviesByTitle(result.recommendations);
          setRecommendedMovies(movies);
        }
      } catch (err) {
        console.error(err);
        setError('Failed to fetch recommendations. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendations();
  }, [viewingHistory]);

  if (isLoading) {
    return <RecommendationsSkeleton />;
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (recommendedMovies.length === 0) {
    return (
      <div className="mt-8 flex h-64 items-center justify-center rounded-lg border-2 border-dashed">
        <p className="text-muted-foreground">We couldn&apos;t find any recommendations for you right now.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {recommendedMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
