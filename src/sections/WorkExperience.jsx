import React from "react";
import { MdWork } from "react-icons/md";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { ExternalLink } from "../components/common";

const WorkExperience = () => {
  return (
    <div className="global-container glassmorphism mb-6">
      <div className="font-mono">
        <h2 className="pt-2 pb-6 lg:text-2xl sm:text-xl font-bold flex items-center gap-2">
          <MdWork className="text-2xl" /> Work Experience
        </h2>
        <div className="space-y-8">
          <div className="flex gap-x-8">
            <div className="w-1/2 space-y-4">
              <ExternalLink
                href="https://global.abb/group/en"
                className="text-lg hover:text-palette1 transition-colors"
              >
                ABB Business Services
              </ExternalLink>
              <div className="ms-10 space-y-1">
                <p className="font-semibold">QA Automation Engineer</p>
                <p className="text-sm opacity-90 flex items-center gap-1">
                  <FaClock className="text-xs" /> October 2023 - Present
                </p>
                <p className="text-sm opacity-90 flex items-center gap-1">
                  <FaMapMarkerAlt className="text-xs" /> Krakow, Poland
                </p>
              </div>
            </div>

            <div className="w-1/2 space-y-4">
              <ExternalLink
                href="https://www.epam.com/"
                className="text-lg hover:text-palette2 transition-colors"
              >
                EPAM Systems
              </ExternalLink>
              <div className="ms-10 space-y-1">
                <p className="font-semibold">Senior Software Engineer in Test</p>
                <p className="text-sm opacity-90 flex items-center gap-1">
                  <FaClock className="text-xs" /> May 2022 - September 2023
                </p>
                <p className="text-sm opacity-90 flex items-center gap-1">
                  <FaMapMarkerAlt className="text-xs" /> Krakow, Poland
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-x-8">
            <div className="w-1/2 space-y-4">
              <ExternalLink
                href="https://www.keywordsstudios.com/en/"
                className="text-lg hover:text-palette3 transition-colors"
              >
                Keywords Studios
              </ExternalLink>
              <div className="ms-10 space-y-1">
                <p className="font-semibold">QA Test Lead</p>
                <p className="text-sm opacity-90 flex items-center gap-1">
                  <FaClock className="text-xs" /> July 2021 - April 2022
                </p>
                <p className="text-sm opacity-90 flex items-center gap-1">
                  <FaMapMarkerAlt className="text-xs" /> Katowice, Poland
                </p>
              </div>
            </div>

            <div className="w-1/2 space-y-4">
              <ExternalLink
                href="https://www.testroniclabs.com/"
                className="text-lg hover:text-palette1 transition-colors"
              >
                Testronic
              </ExternalLink>
              <div className="ms-10 space-y-1">
                <p className="font-semibold">QA Associate Test Lead - Games</p>
                <p className="text-sm opacity-90 flex items-center gap-1">
                  <FaClock className="text-xs" /> October 2018 - June 2021
                </p>
                <p className="text-sm opacity-90 flex items-center gap-1">
                  <FaMapMarkerAlt className="text-xs" /> Warsaw, Poland
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkExperience;
