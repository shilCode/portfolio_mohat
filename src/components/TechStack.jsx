import React from "react";
import { Bug, Bot, GitBranch, Mail, Server,   Hammer, Cloud, Code } from 'lucide-react';

const TechStack = () => {
  const technologies = {
    "E2E Testing": [
      { name: "Playwright", url: "https://playwright.dev/", icon: Bug },
      { name: "Cypress", url: "https://www.cypress.io/", icon: Bug },
      { name: "Puppeteer", url: "https://pptr.dev/", icon: Bot },
      { name: "WebdriverIO", url: "https://webdriver.io/", icon: Bug },
      { name: "Protractor", url: "https://www.protractortest.org/#/", icon: null }, // No direct icon in Lucide, can use a generic one or null
      { name: "Jest", url: "https://jestjs.io/", icon: Bug },
    ],
    "Tools": [
      { name: "Git", url: "https://git-scm.com/", icon: GitBranch },
      { name: "Postman", url: "https://www.postman.com/", icon: Mail },
      { name: "Jmeter", url: "https://jmeter.apache.org/", icon: Server }, // Using Server as a generic tool icon
      { name: "Docker", url: "https://www.docker.com/",  },
      { name: "Kubernetes", url: "https://kubernetes.io/",  },
      { name: "Jenkins", url: "https://www.jenkins.io/", icon: Hammer }, // Using HardDrive as a generic tool icon
      { name: "ADO Pipelines", url: "https://azure.microsoft.com/en-us/products/devops", icon: Cloud },
    ],
    "Programming Languages": [
      { name: "JavaScript", url: "https://javascript.info/", icon: Code },
      { name: "TypeScript", url: "https://typescriptlang.org/", icon: Code },
    ],
  };

  return (
    /* Tech Stack */
    <div className="global-container">
      <div
        className="w-auto md:w-auto lg:w-auto lg:h-auto md:h-auto sm:h-auto overflow-hidden"
      >
        <div className="pb-10">
          <h2 className="  font-mono pt-5 pb-4 lg:text-2xl sm:text-xl font-bold">
            Technology Stack ⚙️
          </h2>
          <div className="flex flex-wrap">
            {Object.entries(technologies).map(([category, items]) => (
              <div key={category} className="w-1/2 mb-4">
                <h3 className="font-bold mb-2">{category}:</h3>
                <div className="ms-10">
                  {items.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div key={tech.name} className="flex items-center mb-1">
                        {Icon && <Icon className="mr-2" size={16} />}
                        <a
                          href={tech.url}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline"
                        >
                          {tech.name}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
