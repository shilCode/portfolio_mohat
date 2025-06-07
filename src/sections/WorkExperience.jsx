import React from "react";
import { motion } from "framer-motion";
import { MdWork } from "react-icons/md";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { ExternalLink } from "../components/common";
import MotionSection from "../components/common/MotionSection";

const WorkCard = ({ company, role, period, location, href, delay }) => (
  <motion.div
    className="w-1/2 space-y-4"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: delay * 0.2, duration: 0.5 }}
    whileHover={{ scale: 1.02 }}
  >
    <ExternalLink
      href={href}
      className="text-lg hover:text-palette1 transition-colors"
    >
      {company}
    </ExternalLink>
    <div className="ms-10 space-y-1">
      <p className="font-semibold">{role}</p>
      <p className="text-sm opacity-90 flex items-center gap-1">
        <FaClock className="text-xs" /> {period}
      </p>
      <p className="text-sm opacity-90 flex items-center gap-1">
        <FaMapMarkerAlt className="text-xs" /> {location}
      </p>
    </div>
  </motion.div>
);

const WorkExperience = () => {
  const jobs = [
    {
      company: "ABB Business Services",
      role: "QA Automation Engineer",
      period: "October 2023 - Present",
      location: "Krakow, Poland",
      href: "https://global.abb/group/en",
    },
    {
      company: "EPAM Systems",
      role: "Senior Software Engineer in Test",
      period: "May 2022 - September 2023",
      location: "Krakow, Poland",
      href: "https://www.epam.com/",
    },
    {
      company: "Keywords Studios",
      role: "QA Test Lead",
      period: "July 2021 - April 2022",
      location: "Katowice, Poland",
      href: "https://www.keywordsstudios.com/en/",
    },
    {
      company: "Testronic",
      role: "QA Associate Test Lead - Games",
      period: "October 2018 - June 2021",
      location: "Warsaw, Poland",
      href: "https://www.testroniclabs.com/",
    },
  ];

  return (
    <MotionSection className="glassmorphism mb-6 w-full">
      <div className="font-mono max-w-[1000px] mx-auto">
        <motion.h2
          className="pt-2 pb-6 lg:text-2xl sm:text-xl font-bold flex items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MdWork className="text-2xl" /> Work Experience
        </motion.h2>
        <div className="space-y-8">
          <div className="flex gap-x-8 justify-center">
            {jobs.slice(0, 2).map((job, index) => (
              <WorkCard key={job.company} {...job} delay={index} />
            ))}
          </div>
          <div className="flex gap-x-8 justify-center">
            {jobs.slice(2, 4).map((job, index) => (
              <WorkCard key={job.company} {...job} delay={index + 2} />
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default WorkExperience;
