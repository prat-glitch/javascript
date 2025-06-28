import React from "react";
import { Github } from "lucide-react"; // GitHub icon

const projects = [
  {
    title: "Password Generator",
    description:
      "Generates secure passwords with customization. Built with React and Tailwind.",
    tech: ["JavaScript", "React", "React Router", "Tailwind"],
    link: "https://dynamic-dango-b14c27.netlify.app/",
    github: "https://github.com/prat-glitch/reactseries/tree/main/05passwordgenerator",
  },
  {
    title: "Personal Portfolio",
    description: "Responsive portfolio website built with React.js and Tailwind CSS.",
    tech: ["React", "Tailwind", "Vite"],
    link: "#",
    github: "#",
  },
  {
    title: "BG Changer",
    description: "Changes background color when a button is clicked.",
    tech: ["React", "Tailwind", "JavaScript"],
    link: "https://dreamy-jalebi-f1ad2b.netlify.app/",
    github: "https://github.com/prat-glitch/reactseries/tree/main/bgchanger",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-blue-300">My</span> <span className="text-indigo-600">Projects</span>
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-md p-6 transition hover:shadow-2xl hover:-translate-y-1 duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400
                     hover:text-black"
                    aria-label="View source on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>

              <p className="text-sm text-blue-300 mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-600 text-xs font-medium px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-indigo-600 hover:underline font-medium text-sm"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
