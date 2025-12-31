import { getMovieBySlug, getMovies } from '@/lib/movies';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { PlayCircle, Plus, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { StarRating } from '@/components/star-rating';

export async function generateStaticParams() {
  const movies = getMovies();
  return movies.map((movie) => ({
    slug: movie.slug,
  }));
}

interface MoviePageProps {
  params: {
    slug: string;
  };
}

export default function MoviePage({ params }: MoviePageProps) {
  const movie = getMovieBySlug(params.slug);

  if (!movie) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="relative h-[40vh] w-full md:h-[50vh]">
          <Image
            src={movie.backdropUrl}
            alt={`Backdrop for ${movie.title}`}
            data-ai-hint={movie.backdropHint}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container -mt-24 pb-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-end">
            <div className="relative h-64 w-48 shrink-0 overflow-hidden rounded-lg shadow-2xl md:h-72 md:w-52">
              <Image
                src={movie.posterUrl}
                alt={`Poster for ${movie.title}`}
                data-ai-hint={movie.posterHint}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-headline text-4xl font-bold">{movie.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{movie.releaseYear}</span>
                <div className="flex gap-2">
                  {movie.genres.map((genre) => (
                    <Badge key={genre} variant="outline">{genre}</Badge>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button size="lg">
                  <PlayCircle className="mr-2" /> Play
                </Button>
                <Button size="lg" variant="outline">
                  <Plus className="mr-2" /> Add to Watchlist
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-headline text-2xl font-semibold">Synopsis</h2>
              <p className="mt-4 text-muted-foreground">{movie.synopsis}</p>

              <Separator className="my-8" />
              
              <h2 className="font-headline text-2xl font-semibold">Reviews</h2>
              <div className="mt-4 space-y-6">
                {movie.reviews.map((review, index) => (
                  <div key={index} className="rounded-lg border bg-card p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{review.author}</h3>
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{review.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-headline text-2xl font-semibold">Cast</h2>
              <div className="mt-4 space-y-3">
                {movie.cast.map((member, index) => (
                  <div key={index}>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
