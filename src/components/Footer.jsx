import React from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import useRandomColors from "../hooks/useRandomColors";
import { ExternalLink } from "./common";

const Footer = () => {
  const { textColor } = useRandomColors;

  return (
    /* footer */
    <motion.div
      className="global-container glassmorphism mt-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" bg-none font-mono pt-5">
        <motion.a
          href="mailto:2850542@gmail.com"
          target="_blank"
          className={`${textColor} font-extrabold text-xl inline-flex items-center gap-2`}
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MdEmail className="text-2xl" />
          2850542@gmail.com
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Footer;
