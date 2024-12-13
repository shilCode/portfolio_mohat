import React, { useState } from "react";
const TechStack = () => {
    const [bgColor] = useState("");
  return (
    /* Tech Stack */
    <div className="global-container">
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
                🧪 E2E Testing:
                <div className="ms-10 ">
                  <a
                    href="https://playwright.dev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Playwright
                  </a>
                  <br />
                  <a
                    href="https://www.cypress.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cypress
                  </a>
                  <br />
                  <a href="https://pptr.dev/" target="_blank" rel="noreferrer">
                    Puppeteer
                  </a>
                  <br />
                  <a
                    href="https://webdriver.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WebdriverIO
                  </a>
                  <br />
                  <a
                    href="https://www.protractortest.org/#/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Protractor
                  </a>
                  <br />
                  <a href="https://jestjs.io/" target="_blank" rel="noreferrer">
                    Jest
                  </a>
                  <br />
                </div>
              </div>
            </div>

            <div className="flex w-1/2 ">
              <div>
                ⚓ Tools:
                <br />
                <a
                  className="ms-10 "
                  href="https://git-scm.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Git
                </a>
                <br />
                <a
                  className="ms-10 "
                  href="https://www.postman.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Postman
                </a>
                <br />
                <a
                  className="ms-10 "
                  href="https://jmeter.apache.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jmeter
                </a>
                <br />
                <a
                  className="ms-10 "
                  href="https://www.docker.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Docker
                </a>
                <br />
                <a
                  className="ms-10 "
                  href="https://kubernetes.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Kubernetes
                </a>
                <br />
                <a
                  className="ms-10 "
                  href="https://www.jenkins.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jenkins
                </a>
                <br />
                <a
                  className="ms-10 "
                  href="https://azure.microsoft.com/en-us/products/devops"
                  target="_blank"
                  rel="noreferrer"
                >
                  ADO Pipelines
                </a>
              </div>
            </div>
            <div className="w-1/2">
              👨‍🏫 Programming Languages:
              <div className="ms-10  ">
                <a
                  href="https://javascript.info/"
                  target="_blank"
                  rel="noreferrer"
                >
                  JavaScript
                </a>
                <br />
                <a
                  href="https://typescriptlang.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  TypeScript
                </a>
                <br />
              </div>{" "}
              <br />
            </div>
          </div>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
