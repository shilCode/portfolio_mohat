import React from "react";
import useRandomColors from "../hooks/useRandomColors";

const Header = () => {
  const { textColor } = useRandomColors();
  return (
    <div className="global-container ">
      <div>
        <p
          className={`${textColor} font-extrabold lg:text-3xl md:text-xl sm:text-xs `}
        >
          Mohat Shil
        </p>
      </div>
      <div className="lg:text-xl md:text-xl sm:text-xs  sm:items-center">
        <a
          className="mx-10"
          href="https://www.linkedin.com/in/mohat-shil/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedn
        </a>
        <a href="https://github.com/shilCode" target="_blank" rel="noreferrer">
          GitHub
        </a>

      </div>
    </div>
  );
};

export default Header;
