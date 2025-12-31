import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { RecommendationsClient } from '@/components/recommendations-client';
import { getViewingHistory } from '@/lib/movies';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function RecommendationsSkeleton() {
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

export default function RecommendationsPage() {
  const viewingHistory = getViewingHistory();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="font-headline text-4xl font-bold">For You</h1>
          <p className="mt-2 text-muted-foreground">
            Movies recommended just for you based on your viewing history.
          </p>
          <div className="mt-8">
            <Suspense fallback={<RecommendationsSkeleton />}>
                <RecommendationsClient viewingHistory={viewingHistory} />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
