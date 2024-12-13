import { React } from "react";
import useRandomColors from "../hooks/useRandomColors";

const Footer = () => {
  const { textColor } = useRandomColors;

  return (
    /* footer */
    <div className="global-container">
      <div className=" bg-none font-mono pt-5">
        <a
          href="mailto:2850542@gmail.com"
          target="_blank"
          className={`${textColor} font-extrabold  text-xl`}
          rel="noreferrer"
        >
          ✉️ 2850542@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
