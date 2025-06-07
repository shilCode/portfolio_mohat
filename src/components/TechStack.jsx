import React, { useState } from "react";
const TechStack = () => {
    const [bgColor] = useState("");
  return (
    /* Tech Stack */
    <div className="global-container glassmorphism mb-6">
      <div
        className={`w-auto md:w-auto lg:w-auto lg:h-auto md:h-auto sm:h-auto ${bgColor} overflow-hidden`}
      >
        <div className="pb-10">
          <h2 className="  font-mono pt-5 pb-4 lg:text-2xl sm:text-xl font-bold">
            Technology Stack ⚙️
          </h2>
          <div className="flex flex-wrap">
            <div className="w-1/2">
              <div>
                <h3 className="mb-3">🧪 E2E Testing:</h3>
                <div className="ms-10 flex flex-col space-y-2">
                  <a
                    href="https://playwright.dev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Playwright
                  </a>
                  <a
                    href="https://www.cypress.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cypress
                  </a>
                  <a href="https://pptr.dev/" target="_blank" rel="noreferrer">
                    Puppeteer
                  </a>
                  <a
                    href="https://webdriver.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WebdriverIO
                  </a>
                  <a
                    href="https://www.protractortest.org/#/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Protractor
                  </a>
                  <a href="https://jestjs.io/" target="_blank" rel="noreferrer">
                    Jest
                  </a>
                </div>
              </div>
            </div>

            <div className="flex w-1/2">
              <div className="w-full">
                <h3 className="mb-3">⚓ Tools:</h3>
                <div className="flex flex-col space-y-2">
                  <a
                    className="ms-10"
                    href="https://git-scm.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Git
                  </a>
                  <a
                    className="ms-10"
                    href="https://www.postman.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Postman
                  </a>
                  <a
                    className="ms-10"
                    href="https://jmeter.apache.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Jmeter
                  </a>
                  <a
                    className="ms-10"
                    href="https://www.docker.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Docker
                  </a>
                  <a
                    className="ms-10"
                    href="https://kubernetes.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kubernetes
                  </a>
                  <a
                    className="ms-10"
                    href="https://www.jenkins.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Jenkins
                  </a>
                  <a
                    className="ms-10"
                    href="https://azure.microsoft.com/en-us/products/devops"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ADO Pipelines
                  </a>
                </div>
              </div>
            </div>
            <div className="w-1/2 mt-4">
              <h3 className="mb-3">👨‍🏫 Programming Languages:</h3>
              <div className="ms-10 flex flex-col space-y-2">
                <a
                  href="https://javascript.info/"
                  target="_blank"
                  rel="noreferrer"
                >
                  JavaScript
                </a>
                <a
                  href="https://typescriptlang.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  TypeScript
                </a>
              </div>
            </div>
          </div>

          <hr className="mt-6" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
