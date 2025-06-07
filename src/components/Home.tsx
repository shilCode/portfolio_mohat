import React from "react";

const Home: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl lg:text-5xl font-bold mb-6">
        Software Engineer in Test ✨
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed mb-4">
          👋🏼 I'm Mohat Shil, a dedicated Software Development Engineer in Test (SDET) with 5+ years of experience in leading MNCs, specializing in building robust, scalable, and efficient test automation solutions. My passion lies in leveraging cutting-edge technologies and frameworks to ensure high-quality software delivery.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          📚 With a Computer Engineering Bachelors degree (2021 graduate), I bring a strong foundation in software development coupled with a deep expertise in test automation strategies including E2E, API, and performance testing. I am always eager to learn and currently expanding my knowledge in DevOps and Cloud Computing.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          🎯 My goal is to understand systems end-to-end, drive continuous improvement, and make processes as efficient as feasible. Explore my contributions and projects on my{" "}
          <a
            href="https://github.com/shilCode"
            className="underline text-primary hover:text-primary-foreground"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>.
        </p>
      </div>
    </section>
  );
};
export default Home; 