import React from "react";
const WorkExperience = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-8 flex flex-col h-full font-mono text-white">
      <div>
        {/* Experience */}
        <hr />
        <div>
          <h2 className="  font-mono pt-5 pb-4 lg:text-2xl sm:text-xl font-bold">
            Work Experience 👾
          </h2>
          <div>
            <div className=" flex pb-10 ">
              <div className=" w-1/2">
                <a
                  href="https://global.abb/group/en"
                  target="_blank"
                  rel="noreferrer"
                >
                  ABB Business Services
                </a>
                <div className="ms-10 ">
                  <ul>QA Automation Engineer</ul>
                  <ul>October 2023 - Present</ul>
                  <ul>Krakow, Poland</ul>
                </div>
              </div>

              <div className=" w-1/2">
                <a
                  href="https://www.epam.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  EPAM Systems
                </a>
                <div className="ms-10 ">
                  <ul>Senior Software Engineer in Test</ul>
                  <ul>May 2022 - September 2023</ul>
                  <ul>Krakow, Poland</ul>
                </div>
              </div>
            </div>
            <div className="pb-10 flex ">
              <div className=" w-1/2">
                <a
                  href="https://www.keywordsstudios.com/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Keywords Studios
                </a>
                <div className="ms-10 ">
                  <ul>QA Test Lead</ul>
                  <ul>July 2021 - April 2022</ul>
                  <ul>Katowice, Poland</ul>
                </div>
              </div>

              <div className="w-1/2">
                <a
                  href="https://www.testroniclabs.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Testronic
                </a>
                <div className="ms-10 ">
                  <ul>QA Associate Test Lead - Games</ul>
                  <ul>October 2018 - June 2021</ul>
                  <ul>Warsaw, Poland</ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};
export default WorkExperience;
