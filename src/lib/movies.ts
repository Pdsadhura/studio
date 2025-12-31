import { getPlaceholderImage } from './placeholder-images';

export type Review = {
  author: string;
  rating: number;
  content: string;
};

export type CastMember = {
  name: string;
  role: string;
};

export type Movie = {
  id: string;
  slug: string;
  title: string;
  synopsis: string;
  releaseYear: number;
  genres: string[];
  posterUrl: string;
  posterHint: string;
  backdropUrl: string;
  backdropHint: string;
  cast: CastMember[];
  reviews: Review[];
  popularity: number;
};

const moviesData: Omit<Movie, 'posterUrl' | 'posterHint' | 'backdropUrl' | 'backdropHint'>[] = [
  {
    id: '1',
    slug: 'cosmic-odyssey',
    title: 'Cosmic Odyssey',
    synopsis: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    releaseYear: 2022,
    genres: ['Sci-Fi', 'Adventure'],
    cast: [{ name: 'Aria Vance', role: 'Captain' }, { name: 'Jaxon Reed', role: 'Pilot' }],
    reviews: [{ author: 'Cinephile Weekly', rating: 5, content: 'A breathtaking journey through space and time.' }],
    popularity: 9.8,
  },
  {
    id: '2',
    slug: 'the-last-enchantment',
    title: 'The Last Enchantment',
    synopsis: 'In a world devoid of magic, a young sorceress discovers she may be the last of her kind.',
    releaseYear: 2021,
    genres: ['Fantasy', 'Action'],
    cast: [{ name: 'Lyra Meadowlight', role: 'Sorceress' }, { name: 'Kaelen Shadowbane', role: 'Knight' }],
    reviews: [{ author: 'Fantasy Flix', rating: 4, content: 'A magical adventure with stunning visuals.' }],
    popularity: 8.5,
  },
  {
    id: '3',
    slug: 'echoes-of-the-past',
    title: 'Echoes of the Past',
    synopsis: 'A detective haunted by a cold case finds new clues that lead him down a rabbit hole of conspiracy.',
    releaseYear: 2023,
    genres: ['Thriller', 'Mystery'],
    cast: [{ name: 'Detective Miles', role: 'Detective' }, { name: 'Lena Petrova', role: 'Journalist' }],
    reviews: [{ author: 'Mystery Files', rating: 5, content: 'A gripping thriller that will keep you guessing.' }],
    popularity: 9.2,
  },
  {
    id: '4',
    slug: 'paris-in-the-rain',
    title: 'Paris in the Rain',
    synopsis: 'Two strangers meet on a rainy day in Paris and embark on a life-changing 24-hour adventure.',
    releaseYear: 2020,
    genres: ['Romance', 'Drama'],
    cast: [{ name: 'Amélie Dubois', role: 'Artist' }, { name: 'Leo Maxwell', role: 'Writer' }],
    reviews: [{ author: 'Romantic Times', rating: 4, content: 'A charming and heartfelt story.' }],
    popularity: 8.1,
  },
  {
    id: '5',
    slug: 'zero-hour',
    title: 'Zero Hour',
    synopsis: 'A retired special forces operative is drawn back into action when his family is kidnapped.',
    releaseYear: 2023,
    genres: ['Action', 'Thriller'],
    cast: [{ name: 'Blade Johnson', role: 'Operative' }, { name: 'General X', role: 'Villain' }],
    reviews: [{ author: 'Action Insider', rating: 4, content: 'Non-stop action from start to finish.' }],
    popularity: 9.5,
  },
  {
    id: '6',
    slug: 'the-last-laugh',
    title: 'The Last Laugh',
    synopsis: 'A struggling stand-up comedian gets one last shot at fame on a national TV show.',
    releaseYear: 2019,
    genres: ['Comedy', 'Drama'],
    cast: [{ name: 'Ricky Razzle', role: 'Comedian' }, { name: 'Brenda Bright', role: 'Producer' }],
    reviews: [{ author: 'Comedy Central', rating: 3, content: 'A mix of laughs and tears.' }],
    popularity: 7.2,
  },
  {
    id: '7',
    slug: 'the-shadow-in-the-attic',
    title: 'The Shadow in the Attic',
    synopsis: 'A family moves into a new house and discovers a sinister presence lurking in the attic.',
    releaseYear: 2022,
    genres: ['Horror', 'Thriller'],
    cast: [{ name: 'The Miller Family', role: '' }],
    reviews: [{ author: 'Scary Movies Hub', rating: 4, content: 'Genuine scares and a creepy atmosphere.' }],
    popularity: 8.8,
  },
  {
    id: '8',
    slug: 'crown-of-the-king',
    title: 'Crown of the King',
    synopsis: 'A historical epic about the rise and fall of a medieval king and his vast empire.',
    releaseYear: 2018,
    genres: ['Drama', 'History'],
    cast: [{ name: 'King Alistair', role: 'King' }, { name: 'Queen Isobel', role: 'Queen' }],
    reviews: [{ author: 'History on Screen', rating: 5, content: 'A masterpiece of historical filmmaking.' }],
    popularity: 9.0,
  },
  {
    id: '9',
    slug: 'whimsy-woods',
    title: 'Whimsy Woods',
    synopsis: 'A group of forest animals must band together to save their home from being destroyed by developers.',
    releaseYear: 2021,
    genres: ['Animation', 'Family'],
    cast: [{ name: 'Barnaby Bear', role: 'Voice' }, { name: 'Squeaky Squirrel', role: 'Voice' }],
    reviews: [{ author: 'Animation World', rating: 4, content: 'A delightful film for the whole family.' }],
    popularity: 7.9,
  },
  {
    id: '10',
    slug: 'dust-and-glory',
    title: 'Dust and Glory',
    synopsis: 'An old sheriff must confront his past when a notorious outlaw returns to town.',
    releaseYear: 2017,
    genres: ['Western', 'Drama'],
    cast: [{ name: 'Sheriff Jebediah', role: 'Sheriff' }, { name: 'Black Bart', role: 'Outlaw' }],
    reviews: [{ author: 'Western Weekly', rating: 4, content: 'A classic western with a modern twist.' }],
    popularity: 8.3,
  },
  {
    id: '11',
    slug: 'fist-of-the-dragon',
    title: 'Fist of the Dragon',
    synopsis: 'A young martial artist seeks revenge on the clan that murdered his master.',
    releaseYear: 2023,
    genres: ['Action', 'Martial Arts'],
    cast: [{ name: 'Ryu', role: 'Martial Artist' }, { name: 'Master Chen', role: 'Master' }],
    reviews: [{ author: 'Kung Fu Cinema', rating: 4, content: 'Incredible fight choreography.' }],
    popularity: 9.1,
  },
  {
    id: '12',
    slug: 'the-final-verdict',
    title: 'The Final Verdict',
    synopsis: 'A high-stakes courtroom drama where a young lawyer defends a man accused of a crime he swears he didn\'t commit.',
    releaseYear: 2020,
    genres: ['Drama', 'Thriller'],
    cast: [{ name: 'Jessica Dane', role: 'Lawyer' }, { name: 'Mark Jensen', role: 'Defendant' }],
    reviews: [{ author: 'Legal Eagle Reviews', rating: 5, content: 'Intense and brilliantly acted.' }],
    popularity: 8.7,
  }
];

export const movies: Movie[] = moviesData.map(movie => {
  const poster = getPlaceholderImage(`poster-${movie.id}`) || { imageUrl: '', imageHint: '' };
  const backdrop = getPlaceholderImage(`backdrop-${movie.id}`) || { imageUrl: '', imageHint: '' };
  return {
    ...movie,
    posterUrl: poster.imageUrl,
    posterHint: poster.imageHint,
    backdropUrl: backdrop.imageUrl,
    backdropHint: backdrop.imageHint,
  };
});

export function getMovies(): Movie[] {
  return movies;
}

export function getMovieBySlug(slug: string): Movie | undefined {
  return movies.find(movie => movie.slug === slug);
}

export function getMoviesByTitle(titles: string[]): Movie[] {
  const lowercasedTitles = titles.map(t => t.toLowerCase());
  return movies.filter(movie => lowercasedTitles.includes(movie.title.toLowerCase()));
}

export function searchMovies(query: string): Movie[] {
  const lowercasedQuery = query.toLowerCase();
  return movies.filter(movie => 
    movie.title.toLowerCase().includes(lowercasedQuery) ||
    movie.cast.some(actor => actor.name.toLowerCase().includes(lowercasedQuery))
  );
}

export function getGenres(): string[] {
  const allGenres = movies.flatMap(movie => movie.genres);
  return [...new Set(allGenres)].sort();
}

export function getFeaturedMovie(): Movie {
  // Return the movie with the highest popularity
  return [...movies].sort((a, b) => b.popularity - a.popularity)[0];
}

export function getViewingHistory(): string[] {
  return ['Cosmic Odyssey', 'The Last Laugh', 'Dust and Glory'];
}
