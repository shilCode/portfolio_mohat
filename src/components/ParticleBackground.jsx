import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useTheme } from "../context/ThemeContext";

const ParticleBackground = () => {
  const { isDark } = useTheme();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className="fixed inset-0 -z-10"
      init={particlesInit}
      options={{
        background: {
          opacity: 0,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: isDark ? "#ffffff" : "#000000" },
          links: {
            color: isDark ? "#ffffff" : "#000000",
            distance: 150,
            enable: true,
            opacity: isDark ? 0.2 : 0.3,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: isDark ? 0.2 : 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
