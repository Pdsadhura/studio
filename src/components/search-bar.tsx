'use client';

import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

export function SearchBar() {
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get('search') as string;
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative ml-auto flex-1 sm:flex-initial">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        name="search"
        placeholder="Search movies or actors..."
        className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
      />
    </form>
  );
}
