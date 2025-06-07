import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import useRandomColors from "../hooks/useRandomColors";
import { SOCIAL_LINKS } from "../constants";
import { ExternalLink } from "./common";

const Header = () => {
  const { textColor } = useRandomColors();
  return (
    <div className="global-container glassmorphism mb-6">
      <div>
        <p
          className={`${textColor} font-extrabold lg:text-3xl md:text-xl sm:text-xs `}
        >
          Mohat Shil
        </p>
      </div>
      <div className="lg:text-2xl md:text-xl sm:text-lg sm:items-center flex gap-6">
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
      </div>
    </div>
  );
};

export default Header;
