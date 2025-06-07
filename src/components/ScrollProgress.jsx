import React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useTheme } from '../context/ThemeContext';

const ScrollProgress = () => {
  const progress = useScrollProgress();
  const { isDark } = useTheme();
  
  const scaleX = useSpring(progress / 100, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const backgroundColor = useTransform(
    scaleX,
    [0, 1],
    [isDark ? '#60a5fa' : '#3b82f6', isDark ? '#34d399' : '#10b981']
  );

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
      style={{
        scaleX,
        backgroundColor
      }}
    />
  );
};

export default ScrollProgress;
