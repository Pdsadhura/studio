'use client';

import type { Movie } from '@/lib/movies';
import Image from 'next/image';
import Link from 'next/link';
import { PlusCircle } from 'lucide-react';
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.slug}`} className="group relative block overflow-hidden rounded-lg">
      <Image
        src={movie.posterUrl}
        alt={`Poster for ${movie.title}`}
        data-ai-hint={movie.posterHint}
        width={500}
        height={750}
        className="transform transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-16 w-16 text-white hover:bg-white/20 hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  // In a real app, this would add to the watchlist.
                  console.log('Added to watchlist:', movie.title);
                }}
              >
                <PlusCircle size={48} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to Watchlist</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Link>
  );
}
