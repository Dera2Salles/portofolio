import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    title: "SabotsyMarket",
    description:
      "Laravel e-commerce platform with modern features and responsive design",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/Dera2Salles/sabotsy-market-laravel",
    live: "#",
  },
  {
    title: "ASJA University Website",
    description:
      "Official website for ASJA University built with modern React and TypeScript",
    tech: ["React", "TypeScript", "Vite", "Tailwind"],
    github: "#",
    live: "https://asjaweb.com",
  },
  {
    title: "DangerZone",
    description:
      "Web application for tracking danger zones using geolocation services",
    tech: ["TypeScript", "Map API", "Node.js"],
    github: "https://github.com/Dera2Salles/DangerZone",
    live: "#",
  },
  {
    title: "E-contrat",
    description:
      "Android application for digital contract signing and management",
    tech: ["Android", "Java", "Firebase"],
    github: "https://github.com/Dera2Salles/E_contrat",
    live: "#",
  },
  {
    title: "Arosaina",
    description:
      "Secure serverless P2P file transfer using Wi-Fi Direct technology",
    tech: ["Flutter", "P2P", "Wi-Fi Direct"],
    github: "https://github.com/Dera2Salles",
    live: "#",
  },
  {
    title: "C-tools",
    description:
      "Low-level system utilities in C for file handling, automation, and Linux system operations.",
    tech: ["Langage C", "System programming", "Linux"],
    github: "https://github.com/Dera2Salles/C-tools.git",
    live: "#",
  },
  {
    title: "Help desk",
    description:
      "Ticket management platform for reporting, tracking, and resolving technical issues in an organized workflow.",
    tech: ["Python", "Django", "Web"],
    github: "https://github.com/Dera2Salles/Help-desk.git",
    live: "#",
  },
  {
    title: "Time Table",
    description:
      "Command-line scheduling tool in Java for managing timetables, tasks, and daily planning efficiently.",
    tech: ["Java" , "Maven"],
    github: "https://github.com/Dera2Salles/Time-table.git",
    live: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Featured Work
            </h2>
            <div className="w-12 h-1 bg-gray-900 mt-6"></div>
          </div>
          <p className="text-lg text-gray-500 max-w-md font-light">
            Selected projects demonstrating architecture, problem-solving, and
            full-stack capabilities.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="group flex flex-col md:flex-row gap-8 md:gap-16 items-start"
            >
              <div className="w-full md:w-1/3 pt-2">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-3xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="flex space-x-3 mb-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-900 transition-colors"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1.5 bg-gray-50 text-gray-600 text-sm font-medium border border-gray-100 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
