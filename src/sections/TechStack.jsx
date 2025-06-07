import React from "react";
import { motion } from "framer-motion";
import { TECH_STACK } from "../constants";
import { SectionTitle, ExternalLink } from "../components/common";
import MotionSection from "../components/common/MotionSection";

const TechLink = ({ href, children, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: delay * 0.1, duration: 0.5 }}
    whileHover={{ scale: 1.05, x: 10 }}
  >
    <ExternalLink href={href}>{children}</ExternalLink>
  </motion.div>
);

const TechSection = ({ title, items, emoji }) => (
  <div className="w-1/2">
    <motion.h3
      className="mb-3"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {emoji} {title}
    </motion.h3>
    <div className="ms-10 flex flex-col space-y-2">
      {items.map((item, index) => (
        <TechLink key={item.name} href={item.url} delay={index}>
          {item.name}
        </TechLink>
      ))}
    </div>
  </div>
);

const TechStack = () => {
  return (
    <MotionSection className="global-container glassmorphism mb-6">
      <div className="w-auto md:w-auto lg:w-auto lg:h-auto md:h-auto sm:h-auto overflow-hidden">
        <div className="pb-10">
          <SectionTitle>Technology Stack ⚙️</SectionTitle>
          <div className="flex flex-wrap">
            <TechSection
              title="E2E Testing"
              items={TECH_STACK.testing}
              emoji="🧪"
            />
            <TechSection title="Tools" items={TECH_STACK.tools} emoji="⚓" />
            <div className="w-1/2 mt-4">
              <TechSection
                title="Programming Languages"
                items={TECH_STACK.languages}
                emoji="👨‍🏫"
              />
            </div>
          </div>

        </div>
      </div>
    </MotionSection>
  );
};

export default TechStack;
