import React from "react";

const Home: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">

          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Software Development Engineer in Test 📱🕸️🖥️
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            👋🏼 I'm Mohat Shil, a SDET with 5+ years of experience in multiple MNCs.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            🎓 Graduated in 2021 with a Computer Engineering Bachelors degree.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            🗡 As a passionate Test Automation Enthusiast, I specialize in cutting-edge technologies and testing frameworks.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            🔍 Explore my latest projects and contributions on my{" "}
            <a
              href="https://github.com/shilCode"
              className="underline text-primary hover:text-primary-foreground"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            .
          </p>
          <p className="text-lg leading-relaxed mb-4">
            📚 I'm currently learning about DevOps and Cloud Computing.
          </p>
          <p className="text-lg leading-relaxed">
            🎯 My goal is to learn, understand how things actually work - E2E and make systems as efficient as feasible.
          </p>

    </section>
  );
};
export default Home; 