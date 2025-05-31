import React from "react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import ThemeToggle from './ThemeToggle';
import { Link } from "react-router-dom";

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
          <Link to="https://www.linkedin.com/in/mohat-shil/" target="_blank" rel="noreferrer">
            LinkedIn
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link to="https://github.com/shilCode" target="_blank" rel="noreferrer">
            GitHub
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link to="/projects">
            Projects
          </Link>
        </Button>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header; 