import React from "react";
import { motion } from "framer-motion";
import { TECH_STACK } from "../constants";
import { SectionTitle, ExternalLink } from "../components/common";
import MotionSection from "../components/common/MotionSection";
import { 
  SiPlaywright, 
  SiCypress, 
  SiPuppeteer, 
  SiWebdriverio, 
  SiProtractor,
  SiJest,
  SiGit,
  SiPostman,
  SiApachejmeter,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiAzuredevops,
  SiJavascript,
  SiTypescript
} from 'react-icons/si';

const techIcons = {
  'Playwright': SiPlaywright,
  'Cypress': SiCypress,
  'Puppeteer': SiPuppeteer,
  'WebdriverIO': SiWebdriverio,
  'Protractor': SiProtractor,
  'Jest': SiJest,
  'Git': SiGit,
  'Postman': SiPostman,
  'Jmeter': SiApachejmeter,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'Jenkins': SiJenkins,
  'ADO Pipelines': SiAzuredevops,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript
};

const TechLink = ({ href, children, delay }) => {
  const Icon = techIcons[children] || null;
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05, x: 10 }}
    >
      <ExternalLink href={href} className="flex items-center gap-2 hover:text-palette1">
        {Icon && <Icon className="text-xl" />}
        {children}
      </ExternalLink>
    </motion.div>
  );
};

const TechSection = ({ title, items, emoji }) => (
  <div className="w-1/2">
    <motion.h3
      className="mb-3 text-lg font-semibold"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {emoji} {title}
    </motion.h3>
    <div className="ms-10 flex flex-col space-y-3">
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
    <MotionSection className="glassmorphism mb-6 w-full">
      <div className="max-w-[1000px] mx-auto">
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
