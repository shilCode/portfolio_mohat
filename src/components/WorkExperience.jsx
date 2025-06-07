import React from "react";
const WorkExperience = () => {
  return (
    <div className="global-container glassmorphism mb-6">
      <div className="font-mono">
        
        <h2 className="pt-2 pb-6 lg:text-2xl sm:text-xl font-bold">
          Work Experience 👾
        </h2>
        <div className="space-y-8">
          <div className="flex gap-x-8">
            <div className="w-1/2 space-y-4">
              <a
                href="https://global.abb/group/en"
                target="_blank"
                rel="noreferrer"
                className="text-lg hover:text-palette1 transition-colors"
              >
                ABB Business Services
              </a>
              <div className="ms-10 space-y-1">
                <p className="font-semibold">QA Automation Engineer</p>
                <p className="text-sm opacity-90">October 2023 - Present</p>
                <p className="text-sm opacity-90">Krakow, Poland</p>
              </div>
            </div>

            <div className="w-1/2 space-y-4">
              <a
                href="https://www.epam.com/"
                target="_blank"
                rel="noreferrer"
                className="text-lg hover:text-palette2 transition-colors"
              >
                EPAM Systems
              </a>
              <div className="ms-10 space-y-1">
                <p className="font-semibold">
                  Senior Software Engineer in Test
                </p>
                <p className="text-sm opacity-90">May 2022 - September 2023</p>
                <p className="text-sm opacity-90">Krakow, Poland</p>
              </div>
            </div>
          </div>

          <div className="flex gap-x-8">
            <div className="w-1/2 space-y-4">
              <a
                href="https://www.keywordsstudios.com/en/"
                target="_blank"
                rel="noreferrer"
                className="text-lg hover:text-palette3 transition-colors"
              >
                Keywords Studios
              </a>
              <div className="ms-10 space-y-1">
                <p className="font-semibold">QA Test Lead</p>
                <p className="text-sm opacity-90">July 2021 - April 2022</p>
                <p className="text-sm opacity-90">Katowice, Poland</p>
              </div>
            </div>

            <div className="w-1/2 space-y-4">
              <a
                href="https://www.testroniclabs.com/"
                target="_blank"
                rel="noreferrer"
                className="text-lg hover:text-palette1 transition-colors"
              >
                Testronic
              </a>
              <div className="ms-10 space-y-1">
                <p className="font-semibold">QA Associate Test Lead - Games</p>
                <p className="text-sm opacity-90">October 2018 - June 2021</p>
                <p className="text-sm opacity-90">Warsaw, Poland</p>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};
export default WorkExperience;
