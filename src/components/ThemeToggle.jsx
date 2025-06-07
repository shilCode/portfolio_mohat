import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsSun, BsMoon, BsDisplay } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDark, themePreference, setTheme } = useTheme();

  const cycleTheme = () => {
    const themes = ["light", "dark", "system"];
    const currentIndex = themes.indexOf(themePreference);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  const getIcon = () => {
    switch (themePreference) {
      case "light":
        return <BsSun className="text-yellow-500" />;
      case "dark":
        return <BsMoon className="text-slate-300" />;
      case "system":
        return (
          <BsDisplay className={isDark ? "text-slate-300" : "text-slate-700"} />
        );
      default:
        return null;
    }
  };

  return (
    <motion.button
      onClick={cycleTheme}
      className="p-2 rounded-full hover:bg-opacity-80"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={themePreference}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="text-xl"
        >
          {getIcon()}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
