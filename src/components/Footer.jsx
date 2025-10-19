import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import useRandomColors from "../hooks/useRandomColors";
import { ExternalLink } from "./common";
import { SOCIAL_LINKS } from "../constants";

const Footer = () => {
  const { textColor } = useRandomColors;

  return (
   
    
      <div className="max-w-[1000px] mx-auto flex justify-center items-center mt-10">
        <div className="font-mono flex flex-col items-center space-y-4 py-2">
          <h3 className="text-lg font-semibold opacity-90">Let's Connect! 👋</h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <motion.a
              href="mailto:2850542@gmail.com"
              target="_blank"
              className={`${textColor} font-semibold text-lg inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-opacity-10 hover:bg-white`}
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdEmail className="text-2xl" />
              Email Me
            </motion.a>

            <motion.a
              href={SOCIAL_LINKS.LINKEDIN}
              target="_blank"
              className="text-[#0A66C2] font-semibold text-lg inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-opacity-10 hover:bg-white"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="text-2xl" />
              Connect on LinkedIn
            </motion.a>
          </div>
        </div>
      </div>
    
  );
};

export default Footer;
