import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    title: "SabotsyMarket",
    description: "Laravel e-commerce platform with modern features and responsive design",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/Dera2Salles/sabotsy-market-laravel",
    live: "#",
  },
  {
    title: "ASJA University Website",
    description: "Official website for ASJA University built with modern React and TypeScript",
    tech: ["React", "TypeScript", "Vite", "Tailwind"],
    github: "#",
    live: "https://asjaweb.com",
  },
  {
    title: "DangerZone",
    description: "Web application for tracking danger zones using geolocation services",
    tech: ["TypeScript", "Map API", "Node.js"],
    github: "https://github.com/Dera2Salles/DangerZone",
    live: "#",
  },
  {
    title: "E-contrat",
    description: "Android application for digital contract signing and management",
    tech: ["Android", "Java", "Firebase"],
    github: "https://github.com/Dera2Salles/E_contrat",
    live: "#",
  },
  {
    title: "Arosaina",
    description: "Secure serverless P2P file transfer using Wi-Fi Direct technology",
    tech: ["Flutter", "P2P", "Wi-Fi Direct"],
    github: "https://github.com/Dera2Salles",
    live: "#",
  },
  {
    title: "C-tools",
    description: "Low-level system utilities in C for file handling, automation, and Linux system operations.",
    tech: ["Langage C", "System programming", "Linux"],
    github: "https://github.com/Dera2Salles/C-tools.git",
    live: "#",
  },
  {
    title: "Help desk",
    description: "Ticket management platform for reporting, tracking, and resolving technical issues in an organized workflow.",
    tech: ["Python", "Django", "Web"],
    github: "https://github.com/Dera2Salles/Help-desk.git",
    live: "#",
  },
  {
    title: "Time Table",
    description: "Command-line scheduling tool in Java for managing timetables, tasks, and daily planning efficiently.",
    tech: ["Java", "Maven"],
    github: "https://github.com/Dera2Salles/Time-table.git",
    live: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-16 sm:py-24 lg:py-32 bg-white relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-4 py-1.5 self-start">
            <span className="text-xs font-bold tracking-widest text-slate-600 uppercase">
              Projets Réalisés
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Projets & Réalisations
              </h2>
              <div className="w-12 h-1 bg-slate-900 rounded-full mt-3 sm:mt-4" />
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-sm leading-relaxed font-normal">
              Une sélection de projets illustrant mes compétences en architecture logicielle et développement full-stack.
            </p>
          </div>
        </motion.div>

        {/* Projects list */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="oneui-card p-5 sm:p-7 flex flex-col sm:flex-row items-start gap-4 sm:gap-8"
            >
              {/* Index number */}
              <div className="font-mono text-xs font-semibold text-slate-400 sm:pt-1 min-w-[24px]">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 bg-slate-100 border border-slate-200 rounded-lg text-slate-600 hover:text-slate-900 hover:border-slate-400 transition-all"
                    >
                      <Github size={15} />
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 bg-slate-100 border border-slate-200 rounded-lg text-slate-600 hover:text-slate-900 hover:border-slate-400 transition-all"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed font-normal">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="oneui-pill text-xs">{tech}</span>
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
