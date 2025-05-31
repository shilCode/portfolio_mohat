import React from "react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className={cn(
      "flex justify-between items-center py-4 px-8 border-b border-border",
      "lg:text-xl md:text-xl sm:text-xs"
    )}>
      <div>
        <p className="font-extrabold lg:text-3xl md:text-xl sm:text-xs">
          Mohat Shil
        </p>
      </div>
      <nav className="flex items-center space-x-4">
        <Button variant="link" asChild>
          <a href="https://www.linkedin.com/in/mohat-shil/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </Button>
        <Button variant="link" asChild>
          <a href="https://github.com/shilCode" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </Button>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
