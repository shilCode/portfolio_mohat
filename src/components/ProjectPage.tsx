import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  overview: string;
  longDescription?: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  impact?: string;
  automationDetails?: string;
  keyContributions?: string[];
}

const projects: Project[] = [
  {
    title: "Mohat Shil Personal Portfolio",
    overview:
      "A personal portfolio website showcasing my skills and projects, built with React and Shadcn UI.",
    longDescription:
      "This project serves as my digital resume, built from the ground up to demonstrate my front-end development and design skills. While primarily a display platform, I implemented automated build processes and ensured responsive design across devices. The goal was to create a fast, accessible, and visually appealing site to effectively present my professional profile.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Next.js"],
    githubLink: "https://github.com/shilCode/porfolio",
    liveLink: "#",
    impact: "N/A (Personal portfolio)",
    automationDetails: "Automated deployment via Vercel, responsive design testing across various breakpoints.",
    keyContributions: [
      "Designed and developed the responsive UI using Tailwind CSS and Shadcn UI.",
      "Configured CI/CD pipeline for automated deployments.",
      "Ensured cross-browser compatibility and accessibility.",
    ],
  },
  {
    title: "E-commerce Platform Automation",
    overview:
      "Developed and maintained a comprehensive end-to-end test suite for a full-stack e-commerce application.",
    longDescription:
      "This project involved building robust automation tests for a complex e-commerce platform, covering user authentication, product browsing, shopping cart functionality, and order processing. The focus was on creating reliable, maintainable, and scalable tests to ensure application quality across multiple releases.",
    technologies: ["Playwright", "TypeScript", "Node.js", "Jest", "Docker"],
    githubLink: "https://github.com/your-username/ecommerce-platform-automation",
    liveLink: "https://example.com/ecommerce-platform",
    impact: "Reduced critical bug escapes to production by 40% and accelerated regression cycles by 60%.",
    automationDetails:
      "Implemented a Playwright-based end-to-end test framework with page object model. Integrated API testing using Jest for faster feedback loops. Utilized Docker for consistent test environments and CI/CD integration.",
    keyContributions: [
      "Designed and implemented the core Playwright test automation framework.",
      "Developed over 200 automated end-to-end test cases covering critical user flows.",
      "Integrated automation tests into GitLab CI/CD pipeline, enabling automated daily runs.",
      "Mentored junior team members on automation best practices and framework usage.",
    ],
  },
  {
    title: "API Test Automation for Task Management App",
    overview:
      "Built an automated API testing framework for a task management application to ensure backend service reliability.",
    longDescription:
      "This project focused on ensuring the stability and performance of backend APIs for a task management application. I developed an automated test suite that validated various API endpoints, covering CRUD operations for tasks, user authentication, and data integrity. The goal was to catch backend issues early in the development cycle.",
    technologies: ["Cypress", "JavaScript", "Chai", "Mocha", "Postman (for initial exploration)"],
    githubLink: "https://github.com/your-username/task-management-app-api-tests",
    liveLink: "#",
    impact: "Improved API reliability by 30%, preventing data corruption issues before reaching the UI layer.",
    automationDetails:
      "Created a Cypress-based framework for API testing, leveraging `cy.request()` for direct API calls. Implemented data-driven testing for various scenarios. Set up comprehensive assertions using Chai for response validation.",
    keyContributions: [
      "Designed and implemented the API test automation framework from scratch.",
      "Developed over 150 automated API test cases, covering all major endpoints.",
      "Integrated API tests into the CI/CD pipeline for continuous validation.",
      "Collaborated with developers to improve API contract definitions and error handling.",
    ],
  },
  // Add more projects here
];

const ProjectPage: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
        My Projects ✨
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold mb-2">
                {project.title}
              </CardTitle>
              <CardDescription>{project.overview}</CardDescription>
            </CardHeader>
            <CardContent>
              {project.impact && (
                <p className="text-lg font-semibold mb-2">Impact: <span className="font-normal text-muted-foreground">{project.impact}</span></p>
              )}
              {project.automationDetails && (
                <p className="text-lg font-semibold mb-2">Automation Details: <span className="font-normal text-muted-foreground">{project.automationDetails}</span></p>
              )}
              {project.keyContributions && project.keyContributions.length > 0 && (
                <div className="mb-2">
                  <p className="text-lg font-semibold">Key Contributions:</p>
                  <ul className="list-disc list-inside text-muted-foreground">
                    {project.keyContributions.map((contribution, idx) => (
                      <li key={idx}>{contribution}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              {project.githubLink && (
                <Button asChild variant="outline" size="icon">
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {project.liveLink && (
                <Button asChild variant="outline" size="icon">
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
