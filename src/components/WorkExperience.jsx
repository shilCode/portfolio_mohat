import React from "react";

const WorkExperience = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
        Work Experience 👾
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-2">ABB Business Services</h3>
          <p className="text-lg text-muted-foreground mb-1">QA Automation Engineer</p>
          <p className="text-sm text-muted-foreground mb-1">October 2023 - Present</p>
          <p className="text-sm text-muted-foreground mb-4">Krakow, Poland</p>
          <a
            href="https://global.abb/group/en"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            Visit Website
          </a>
        </div>

        <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-2">EPAM Systems</h3>
          <p className="text-lg text-muted-foreground mb-1">Senior Software Engineer in Test</p>
          <p className="text-sm text-muted-foreground mb-1">May 2022 - September 2023</p>
          <p className="text-sm text-muted-foreground mb-4">Krakow, Poland</p>
          <a
            href="https://www.epam.com/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            Visit Website
          </a>
        </div>

        <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-2">Keywords Studios</h3>
          <p className="text-lg text-muted-foreground mb-1">QA Test Lead</p>
          <p className="text-sm text-muted-foreground mb-1">July 2021 - April 2022</p>
          <p className="text-sm text-muted-foreground mb-4">Katowice, Poland</p>
          <a
            href="https://www.keywordsstudios.com/en/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            Visit Website
          </a>
        </div>

        <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-2">Testronic</h3>
          <p className="text-lg text-muted-foreground mb-1">QA Associate Test Lead - Games</p>
          <p className="text-sm text-muted-foreground mb-1">October 2018 - June 2021</p>
          <p className="text-sm text-muted-foreground mb-4">Warsaw, Poland</p>
          <a
            href="https://www.testroniclabs.com/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            Visit Website
          </a>
        </div>
      </div>
    </section>
  );
};
export default WorkExperience;
