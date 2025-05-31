import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    title: "Mohat Shil",
    description:
      "A personal portfolio website showcasing my skills and projects, built with React and Shadcn UI.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    githubLink: "https://github.com/shilCode/porfolio",
    liveLink: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce application with user authentication, product listings, and a shopping cart.",
    technologies: ["Node.js", "Express", "MongoDB", "React", "Redux"],
    githubLink: "https://github.com/your-username/ecommerce-platform",
  },
  {
    title: "Task Management App",
    description:
      "A simple task management application to help users organize their daily tasks.",
    technologies: ["React", "Firebase", "Chakra UI"],
    githubLink: "https://github.com/your-username/task-management-app",
    liveLink: "#",
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
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
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
