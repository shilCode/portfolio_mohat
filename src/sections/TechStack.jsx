import React from "react";
import { TECH_STACK } from "../constants";
import { SectionTitle, ExternalLink } from "../components/common";

const TechSection = ({ title, items, emoji }) => (
  <div className="w-1/2">
    <h3 className="mb-3">
      {emoji} {title}
    </h3>
    <div className="ms-10 flex flex-col space-y-2">
      {items.map((item) => (
        <ExternalLink key={item.name} href={item.url}>
          {item.name}
        </ExternalLink>
      ))}
    </div>
  </div>
);

const TechStack = () => {
  return (
    /* Tech Stack */
    <div className="global-container glassmorphism mb-6">
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
    </div>
  );
};

export default TechStack;
