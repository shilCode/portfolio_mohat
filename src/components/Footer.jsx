import { React } from "react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

const Footer = () => {
  return (
    <footer className={cn("flex flex-col items-center py-6 px-8 border-t border-border mt-10")}>
      <Button variant="link" asChild>
        <a
          href="mailto:2850542@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="font-extrabold text-xl"
        >
          ✉️ 2850542@gmail.com
        </a>
      </Button>
      <p className="text-sm text-muted-foreground mt-2">© {new Date().getFullYear()} Mohat Shil. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
