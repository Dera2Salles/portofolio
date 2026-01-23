import { motion } from 'framer-motion';
import React from 'react';

const skills = [
  {
    name: "React",
    type: "Frontend",
    desc: "Building dynamic and flexible user interfaces with React.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "bg-blue-50 dark:bg-blue-900/10",
    borderColor: "border-blue-400"
  },
  {
    name: "Flutter",
    type: "Mobile",
    desc: "Cross-platform mobile development at lightning speed.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    color: "bg-cyan-50 dark:bg-cyan-900/10",
     borderColor: "border-cyan-400"
  },
  {
    name: "NestJS",
    type: "Backend",
    desc: "Scalable server-side applications with modular architecture.",
    icon: "https://nestjs.com/img/logo-small.svg",
    color: "bg-red-50 dark:bg-red-900/10",
     borderColor: "border-red-500"
  },
  {
    name: "MongoDB",
    type: "Database",
    desc: "Flexible and scalable NoSQL document storage.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "bg-green-50 dark:bg-green-900/10",
    borderColor: "border-green-500"
  },
   {
    name: "PostgreSQL",
    type: "Database",
    desc: "Powerful relational database with advanced features.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "bg-indigo-50 dark:bg-indigo-900/10",
     borderColor: "border-indigo-500"
  },
  {
    name: "Laravel",
    type: "Backend",
    desc: "Elegant PHP framework for rapid web development.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    color: "bg-red-50 dark:bg-red-900/10",
     borderColor: "border-red-500"
  },
  {
    name: "PHP",
    type: "Language",
    desc: "The foundation of modern web development.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    color: "bg-indigo-50 dark:bg-indigo-900/10",
     borderColor: "border-indigo-400"
  },
  {
    name: "Astro",
    type: "Frontend",
    desc: "Lightning-fast performance for content-focused sites.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg",
    color: "bg-orange-50 dark:bg-orange-900/10",
     borderColor: "border-orange-500"
  },
  {
    name: "Docker",
    type: "DevOps",
    desc: "Containerization for consistent application deployment.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "bg-sky-50 dark:bg-sky-900/10",
     borderColor: "border-sky-500"
  },
];

const DevilFruitSkills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-900 relative transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
           Technical Skills
        </h2>
        <div className="flex justify-center mb-16">
          <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className={`relative overflow-hidden group rounded-2xl p-6 ${skill.color} border-l-4 ${skill.borderColor} shadow-lg hover:shadow-xl transition-all backdrop-blur-xl bg-white/50 dark:bg-gray-800/50`}
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                         <img src={skill.icon} alt="bg-icon" className="w-24 h-24 grayscale" />
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-4 relative z-10">
                        <div className="p-3 bg-white dark:bg-gray-700 rounded-xl shadow-md border-2 border-purple-200 dark:border-purple-500/30">
                            <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">{skill.name}</h3>
                            <span className="text-xs font-semibold px-2 py-1 bg-purple-600/10 text-purple-700 dark:text-purple-300 rounded-full uppercase tracking-wide">{skill.type}</span>
                        </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 font-normal text-sm relative z-10 leading-relaxed">
                        {skill.desc}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default DevilFruitSkills;
