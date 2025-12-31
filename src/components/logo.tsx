import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="transition-opacity hover:opacity-80">
      <h1 className="font-headline text-2xl font-bold tracking-tighter text-primary">
        FlickPick
      </h1>
    </Link>
  );
}
