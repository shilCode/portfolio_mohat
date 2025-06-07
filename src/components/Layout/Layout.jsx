import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ParticleBackground from "../ParticleBackground";
import ScrollProgress from "../ScrollProgress";
import { useTheme } from "../../context/ThemeContext";

const Layout = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gradient-dark text-white" : "bg-gradient-light text-gray-800"
      }`}
    >
      <ScrollProgress />
      <ParticleBackground />
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <Header />
        <main className="space-y-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
