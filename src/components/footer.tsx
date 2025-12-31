import { Github, Twitter, Youtube } from 'lucide-react';
import { Logo } from './logo';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} FlickPick. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
            <a href="https://x.com" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                <Twitter size={20} />
            </a>
             <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                <Github size={20} />
            </a>
             <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                <Youtube size={20} />
            </a>
        </div>
      </div>
    </footer>
  );
}
