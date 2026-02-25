import { motion } from "framer-motion";
import React from "react";

const skills = [
  {
    name: "React",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    category: "Language",
  },
  {
    name: "C",
    category: "Language",
  },
  {
    name: "Python",
    category: "Language",
  },
  {
    name: "NestJs",
    category: "Backend",
  },
  {
    name: "Flutter",
    category: "Mobile",
  },
  {
    name: "MongoDB",
    category: "Database",
  },
  {
    name: "PostgreSQL",
    category: "Database",
  },
  {
    name: "Laravel",
    category: "Backend",
  },
  {
    name: "Django",
    category: "Backend",
  },
  {
    name: "Docker",
    category: "DevOps",
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Technical Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl font-light">
            Core competencies and technologies I leverage to build highly
            performant, scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from(new Set(skills.map((s) => s.category))).map(
            (category, catIdx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-4 text-gray-900 border-b border-gray-200 pb-2">
                  {category}
                </h3>
                <div className="flex flex-col gap-3">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    ))}
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
