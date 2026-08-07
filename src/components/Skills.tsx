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
  Frontend: "#0F172A",
  Language: "#334155",
  Backend: "#475569",
  Mobile: "#0284C7",
  Database: "#0D9488",
  DevOps: "#D97706",
};

const Skills: React.FC = () => {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 lg:py-32 bg-white relative"
    >
      {/* top divider */}
      <div className="mocha-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-4 py-1.5 mb-5">
            <span className="text-xs font-bold tracking-widest text-slate-600 uppercase">
              Compétences Techniques
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Technologies & Outils
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed font-normal">
            Technologies et langages maîtrisés pour concevoir des applications scalables, réactives et performantes.
          </p>
        </motion.div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, catIdx) => {
            const color = categoryColors[category] ?? "#475569";
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.08 }}
                className="oneui-card p-5 sm:p-6"
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: color }}
                  />
                  <h3
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: color }}
                  >
                    {category}
                  </h3>
                </div>
                {/* Divider */}
                <div className="h-px bg-slate-100 mb-4" />
                {/* Skills */}
                <div className="flex flex-col gap-2.5">
                  {skills.filter((s) => s.category === category).map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                      <span className="text-sm font-semibold text-slate-800">
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

      <div className="mocha-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default Skills;
