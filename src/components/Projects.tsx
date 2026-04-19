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
      style={{
        padding: "120px 0",
        background: "var(--mocha-base)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex", flexDirection: "column", gap: "12px",
            marginBottom: "72px",
          }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "var(--mocha-s0)", border: "1px solid var(--mocha-s1)",
            borderRadius: "var(--r-pill)", padding: "6px 16px",
            alignSelf: "flex-start",
          }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", color: "var(--mocha-ov1)", textTransform: "uppercase" }}>
              Featured Work
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <h2 style={{
                fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 900,
                color: "var(--mocha-text)", letterSpacing: "-0.5px", lineHeight: 1.1,
              }}>
                Selected Projects
              </h2>
              <div style={{ width: "48px", height: "3px", background: "var(--mocha-sub1)", borderRadius: "var(--r-pill)", marginTop: "16px" }} />
            </div>
            <p style={{ fontSize: "16px", color: "var(--mocha-ov1)", maxWidth: "380px", lineHeight: 1.7, fontWeight: 400 }}>
              Selected projects demonstrating architecture, problem-solving, and full-stack capabilities.
            </p>
          </div>
        </motion.div>

        {/* Projects list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.04 }}
              className="oneui-card"
              style={{
                padding: "28px 32px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: "32px",
              }}
            >
              {/* Index number */}
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px", fontWeight: 600,
                color: "var(--mocha-ov0)",
                paddingTop: "4px",
                minWidth: "28px",
              }}>
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px", flexWrap: "wrap" }}>
                  <h3 style={{
                    fontSize: "20px", fontWeight: 800,
                    color: "var(--mocha-text)", letterSpacing: "-0.2px",
                  }}>
                    {project.title}
                  </h3>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        width: "32px", height: "32px",
                        background: "var(--mocha-s0)", border: "1px solid var(--mocha-s1)",
                        borderRadius: "var(--r-sm)",
                        color: "var(--mocha-sub0)",
                        transition: "color 0.2s ease, border-color 0.2s ease",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--mocha-text)";
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--mocha-s2)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--mocha-sub0)";
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--mocha-s1)";
                      }}
                    >
                      <Github size={15} />
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex", alignItems: "center", justifyContent: "center",
                          width: "32px", height: "32px",
                          background: "var(--mocha-s0)", border: "1px solid var(--mocha-s1)",
                          borderRadius: "var(--r-sm)",
                          color: "var(--mocha-sub0)",
                          transition: "color 0.2s ease, border-color 0.2s ease",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color = "var(--mocha-text)";
                          (e.currentTarget as HTMLElement).style.borderColor = "var(--mocha-s2)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color = "var(--mocha-sub0)";
                          (e.currentTarget as HTMLElement).style.borderColor = "var(--mocha-s1)";
                        }}
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <p style={{ fontSize: "15px", color: "var(--mocha-ov1)", marginBottom: "16px", lineHeight: 1.65, fontWeight: 400 }}>
                  {project.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="oneui-pill">{tech}</span>
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
