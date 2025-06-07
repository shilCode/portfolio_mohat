import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaGraduationCap } from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";
import { AiFillExperiment } from "react-icons/ai";
import { ExternalLink } from "../components/common";
import MotionSection from "../components/common/MotionSection";

const AnimatedInfo = ({ icon: Icon, children, delay }) => (
  <motion.div
    className="flex items-center gap-2 pb-2"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: delay * 0.2, duration: 0.5 }}
    whileHover={{ x: 10 }}
  >
    <Icon className="text-xl" />
    <span>{children}</span>
  </motion.div>
);

const Home = () => {
  return (
    <MotionSection className="glassmorphism mb-6 w-full">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col items-center pt-10">
          <motion.h2
            className="font-mono pt-5 lg:text-2xl md:text-2xl sm:text-xl font-bold text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Software Test Automation Engineer
          </motion.h2>
          <div className="font-mono pt-5 pb-10 w-full max-w-3xl">
            <AnimatedInfo icon={FaGraduationCap} delay={0}>
              Graduated in 2021 with a Computer Engineering Bachelors degree.
            </AnimatedInfo>
            <AnimatedInfo icon={AiFillExperiment} delay={1}>
              As a passionate Test Automation Enthusiast, I specialize in cutting-edge technologies and testing frameworks.
            </AnimatedInfo>
            <AnimatedInfo icon={BsCodeSquare} delay={2}>
              Explore my latest projects and contributions on my{" "}
              <ExternalLink
                href="https://github.com/shilCode"
                className="underline inline-flex items-center gap-1 hover:text-palette1"
              >
                GitHub <FaGithub className="inline" />
              </ExternalLink>
            </AnimatedInfo>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default Home;
