import React from "react";
import { Bug, Bot, GitBranch, Mail, Server, Hammer, Cloud, Code, GitFork } from 'lucide-react';

interface Technology {
  name: string;
  url: string;
  icon?: React.ElementType; // Use React.ElementType for Lucide icons
}

interface TechCategory {
  [key: string]: Technology[];
}

const TechStack: React.FC = () => {
  const technologies: TechCategory = {
    "E2E Testing": [
      { name: "Playwright", url: "https://playwright.dev/", icon: Bug },
      { name: "Cypress", url: "https://www.cypress.io/", icon: Bug },
      { name: "Puppeteer", url: "https://pptr.dev/", icon: Bot },
      { name: "WebdriverIO", url: "https://webdriver.io/", icon: Bug },
      { name: "Protractor", url: "https://www.protractortest.org/#/", icon: GitFork }, 
      { name: "Jest", url: "https://jestjs.io/", icon: Bug },
    ],
    "Tools": [
      { name: "Git", url: "https://git-scm.com/", icon: GitBranch },
      { name: "Postman", url: "https://www.postman.com/", icon: Mail },
      { name: "Jmeter", url: "https://jmeter.apache.org/", icon: Server }, 
      { name: "Docker", url: "https://www.docker.com/", icon: Cloud },
      { name: "Kubernetes", url: "https://kubernetes.io/", icon: Server },
      { name: "Jenkins", url: "https://www.jenkins.io/", icon: Hammer }, 
      { name: "ADO Pipelines", url: "https://azure.microsoft.com/en-us/products/devops", icon: Cloud },
    ],
    "Programming Languages": [
      { name: "JavaScript", url: "https://javascript.info/", icon: Code },
      { name: "TypeScript", url: "https://typescriptlang.org/", icon: Code },
    ],
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
        Technology Stack ⚙️
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(technologies).map(([category, items]) => (
          <div key={category} className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4 text-primary">{category}:</h3>
            <div className="space-y-3">
              {items.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div key={tech.name} className="flex items-center">
                    {Icon && <Icon className="mr-3 text-muted-foreground" size={20} />}
                    <a
                      href={tech.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg hover:underline text-foreground"
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
    </section>
  );
};

export default TechStack; 