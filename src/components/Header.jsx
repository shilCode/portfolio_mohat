import { FaGithub, FaLinkedin } from "react-icons/fa";
import useRandomColors from "../hooks/useRandomColors";
import { SOCIAL_LINKS } from "../constants";
import { ExternalLink } from "./common";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { textColor } = useRandomColors();
  return (    <div className="glassmorphism mb-4 mt-2 w-full backdrop-saturate-150">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex justify-between items-center w-full">
          <p
            className={`${textColor} font-extrabold lg:text-3xl md:text-xl sm:text-xs`}
          >
            Mohat Shil
          </p>
          <div className="lg:text-2xl md:text-xl sm:text-lg flex gap-4 items-center">
            <ExternalLink
              href={SOCIAL_LINKS.LINKEDIN}
              className="hover:text-[#0A66C2] transition-colors"
            >
              <FaLinkedin />
            </ExternalLink>
            <ExternalLink
              href={SOCIAL_LINKS.GITHUB}
              className="hover:text-gray-400 transition-colors"
            >
              <FaGithub />
            </ExternalLink>
            <div className="border-l border-gray-400 h-6 mx-2 opacity-20" />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
