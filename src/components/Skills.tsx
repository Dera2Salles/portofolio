import { motion } from 'framer-motion';
import React from 'react';

const skills = [
  {
    name: "React",
    level: 90,
    category: "Frontend"
  },
  {
    name: "TypeScript",
    level: 85,
    category: "Language"
  },
  {
    name: "Node.js",
    level: 88,
    category: "Backend"
  },
  {
    name: "Flutter",
    level: 82,
    category: "Mobile"
  },
  {
    name: "MongoDB",
    level: 80,
    category: "Database"
  },
  {
    name: "PostgreSQL",
    level: 85,
    category: "Database"
  },
  {
    name: "Laravel",
    level: 78,
    category: "Backend"
  },
  {
    name: "Docker",
    level: 75,
    category: "DevOps"
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive set of technical skills developed through years of practice and real-world projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-3"
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-800">{skill.name}</span>
                <span className="text-sm text-gray-600">{skill.category}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-sky-500 to-sky-600 rounded-full"
                />
              </div>
              <div className="text-right text-sm text-gray-500">{skill.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
