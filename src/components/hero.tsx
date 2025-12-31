import type { Movie } from '@/lib/movies';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { PlayCircle, Info } from 'lucide-react';

interface HeroProps {
  movie: Movie;
}

export function Hero({ movie }: HeroProps) {
  return (
    <div className="relative h-[50vh] w-full md:h-[70vh] lg:h-[85vh]">
      <Image
        src={movie.backdropUrl}
        alt={`Backdrop for ${movie.title}`}
        data-ai-hint={movie.backdropHint}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 md:p-8 lg:p-16">
        <div className="container max-w-screen-2xl">
            <h2 className="font-headline text-4xl font-bold text-white drop-shadow-lg md:text-6xl lg:text-7xl">
            {movie.title}
            </h2>
            <p className="mt-4 max-w-lg text-sm text-muted-foreground drop-shadow-md md:text-base">
            {movie.synopsis}
            </p>
            <div className="mt-6 flex gap-4">
            <Button size="lg">
                <PlayCircle className="mr-2" />
                Play
            </Button>
            <Link href={`/movie/${movie.slug}`}>
                <Button size="lg" variant="secondary">
                <Info className="mr-2" />
                More Info
                </Button>
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
