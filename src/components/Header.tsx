import React, { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import ThemeToggle from './ThemeToggle';
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={cn(
      "flex justify-between items-center py-4 px-8 border-b border-border",
      "lg:text-xl md:text-xl sm:text-xs relative"
    )}>
      <div>
        <p className="font-extrabold lg:text-3xl md:text-xl sm:text-xs">
          Mohat Shil
        </p>
      </div>
      <nav className="hidden md:flex items-center space-x-4">
        <Button variant="link" asChild>
          <Link to="/">Home</Link>
        </Button>
        <Button variant="link" asChild>
          <Link to="/work-experience">Experience</Link>
        </Button>
        <Button variant="link" asChild>
          <Link to="/tech-stack">Skills</Link>
        </Button>
        <Button variant="link" asChild>
          <Link to="/projects">Projects</Link>
        </Button>
     
        <ThemeToggle />
      </nav>

      <div className="md:hidden flex items-center">
        <ThemeToggle />
        <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="ml-2">
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg z-10 py-4">
          <nav className="flex flex-col items-center space-y-4">
            <Button variant="link" asChild onClick={toggleMobileMenu}>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="link" asChild onClick={toggleMobileMenu}>
              <Link to="/work-experience">Experience</Link>
            </Button>
            <Button variant="link" asChild onClick={toggleMobileMenu}>
              <Link to="/tech-stack">Skills</Link>
            </Button>
            <Button variant="link" asChild onClick={toggleMobileMenu}>
              <Link to="/projects">Projects</Link>
            </Button>
            <Button variant="link" asChild onClick={toggleMobileMenu}>
              <Link to="https://www.linkedin.com/in/mohat-shil/" target="_blank" rel="noreferrer">
                LinkedIn
              </Link>
            </Button>
            <Button variant="link" asChild onClick={toggleMobileMenu}>
              <Link to="https://github.com/shilCode" target="_blank" rel="noreferrer">
                GitHub
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 