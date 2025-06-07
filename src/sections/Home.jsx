import React from "react";
import { FaGithub, FaGraduationCap } from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";
import { AiFillExperiment } from "react-icons/ai";
import { ExternalLink } from "../components/common";

const Home = () => {
  return (
    <div className="global-container glassmorphism mb-6">
      <div className="flex justify-between items-center pt-10">
        <div>
          <h2 className="font-mono pt-5 lg:text-2xl md:text-2xl sm:text-xl font-bold">
            Software Test Automation Engineer
          </h2>
          <div className="font-mono pt-5 pb-10">
            <div className="flex items-center gap-2 pb-2">
              <FaGraduationCap className="text-xl" />
              <span>
                Graduated in 2021 with a Computer Engineering Bachelors degree.
              </span>
            </div>
            <div className="flex items-center gap-2 pb-2">
              <AiFillExperiment className="text-xl" />
              <span>
                As a passionate Test Automation Enthusiast, I specialize in
                cutting-edge technologies and testing frameworks.
              </span>
            </div>
            <div className="flex items-center gap-2 pb-2">
              <BsCodeSquare className="text-xl" />
              <span>
                Explore my latest projects and contributions on my{" "}
                <ExternalLink
                  href="https://github.com/shilCode"
                  className="underline"
                >
                  <span className="flex items-center gap-1">
                    GitHub{" "}
                    <FaGithub className="inline" />
                  </span>
                </ExternalLink>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
