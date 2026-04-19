import { motion } from "framer-motion";
import React from "react";

const skills = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "C", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "NestJs", category: "Backend" },
  { name: "Flutter", category: "Mobile" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Laravel", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "Docker", category: "DevOps" },
];

const categoryColors: Record<string, string> = {
  Frontend: "#89b4fa",
  Language: "#bac2de",
  Backend: "#cba6f7",
  Mobile: "#89dceb",
  Database: "#94e2d5",
  DevOps: "#fab387",
};

const Skills: React.FC = () => {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section
      id="skills"
      style={{
        padding: "120px 0",
        background: "var(--mocha-mantle)",
        position: "relative",
      }}
    >
      {/* top divider */}
      <div className="mocha-divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "64px" }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "var(--mocha-s0)", border: "1px solid var(--mocha-s1)",
            borderRadius: "var(--r-pill)", padding: "6px 16px", marginBottom: "20px",
          }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", color: "var(--mocha-ov1)", textTransform: "uppercase" }}>
              Technical Capabilities
            </span>
          </div>
          <h2 style={{
            fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 900,
            color: "var(--mocha-text)", letterSpacing: "-0.5px",
            lineHeight: 1.1, marginBottom: "16px",
          }}>
            What I Work With
          </h2>
          <p style={{ fontSize: "18px", color: "var(--mocha-ov1)", maxWidth: "520px", lineHeight: 1.7, fontWeight: 400 }}>
            Core competencies and technologies I leverage to build highly performant, scalable applications.
          </p>
        </motion.div>

        {/* Category grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
        }}>
          {categories.map((category, catIdx) => {
            const color = categoryColors[category] ?? "#bac2de";
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.08 }}
                className="oneui-card"
                style={{ padding: "24px" }}
              >
                {/* Category header */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                  <div style={{
                    width: "8px", height: "8px", borderRadius: "50%",
                    background: color, flexShrink: 0,
                    boxShadow: `0 0 8px ${color}55`,
                  }} />
                  <h3 style={{
                    fontSize: "11px", fontWeight: 700, textTransform: "uppercase",
                    letterSpacing: "0.12em", color: color,
                  }}>
                    {category}
                  </h3>
                </div>
                {/* Divider */}
                <div style={{ height: "1px", background: "var(--mocha-s0)", marginBottom: "16px" }} />
                {/* Skills */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {skills.filter((s) => s.category === category).map((skill, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{
                        width: "5px", height: "5px", borderRadius: "50%",
                        background: "var(--mocha-ov0)", flexShrink: 0,
                      }} />
                      <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--mocha-sub1)" }}>
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mocha-divider" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
    </section>
  );
};

export default Skills;
