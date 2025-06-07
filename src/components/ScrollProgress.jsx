import React from "react";
import { motion, useSpring } from "framer-motion";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { useTheme } from "../context/ThemeContext";

const ScrollProgress = () => {
  const progress = useScrollProgress();
  const { isDark } = useTheme();

  const scaleX = useSpring(progress / 100, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 origin-left z-50 ${
        isDark
          ? "bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500"
          : "bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400"
      }`}
      style={{
        scaleX,
        opacity: 0.8,
      }}
    />
  );
};

export default ScrollProgress;
