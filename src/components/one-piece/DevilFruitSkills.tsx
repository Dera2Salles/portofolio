import { motion } from 'framer-motion';
import React from 'react';

const skills = [
  {
    name: "Gomu Gomu no React",
    type: "Paramecia",
    desc: "Rubber-like flexibility for dynamic UIs.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "bg-blue-100 dark:bg-blue-900/20",
    borderColor: "border-blue-400"
  },
  {
    name: "Goro Goro no Flutter",
    type: "Logia",
    desc: "Lightning fast cross-platform development.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    color: "bg-cyan-100 dark:bg-cyan-900/20",
     borderColor: "border-cyan-400"
  },
  {
    name: "Tori Tori no NestJS",
    type: "Zoan",
    desc: "Rising like a Phoenix with modular architecture.",
    icon: "https://nestjs.com/img/logo-small.svg",
    color: "bg-red-100 dark:bg-red-900/20",
     borderColor: "border-red-600"
  },
  {
    name: "Mochi Mochi no Mongo",
    type: "Paramecia",
    desc: "Versatile and shape-shifting document storage.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "bg-green-100 dark:bg-green-900/20",
    borderColor: "border-green-500"
  },
   {
    name: "Ope Ope no SQL",
    type: "Paramecia",
    desc: "Surgical precision with relational data (PostgreSQL).",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "bg-indigo-100 dark:bg-indigo-900/20",
     borderColor: "border-indigo-500"
  },
  {
    name: "Mera Mera no Laravel",
    type: "Logia",
    desc: "Elegant syntax that fuels rapid development.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    color: "bg-red-100 dark:bg-red-900/20",
     borderColor: "border-red-500"
  },
  {
    name: "Zou Zou no PHP",
    type: "Zoan",
    desc: "The mammoth foundation of the web.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    color: "bg-indigo-100 dark:bg-indigo-900/20",
     borderColor: "border-indigo-400"
  },
  {
    name: "Pika Pika no Astro",
    type: "Logia",
    desc: "Light-speed performance for content sites.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg",
    color: "bg-orange-100 dark:bg-orange-900/20",
     borderColor: "border-orange-500"
  },
  {
    name: "Shiro Shiro no Docker",
    type: "Paramecia",
    desc: "Fortress-like containerization for apps.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "bg-sky-100 dark:bg-sky-900/20",
     borderColor: "border-sky-500"
  },
];

const DevilFruitSkills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-op-dark dark:bg-[#0f0f1a] relative transition-colors duration-300">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-center text-op-gold mb-16 uppercase drop-shadow-md font-serif tracking-widest">
           Devil Fruit Arsenal
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`relative overflow-hidden group rounded-xl p-6 ${skill.color} border-l-8 ${skill.borderColor} shadow-xl`}
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                         <img src={skill.icon} alt="bg-icon" className="w-24 h-24 grayscale" />
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-4 relative z-10">
                        <div className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md border-2 border-current text-gray-800 dark:text-gray-200">
                            <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">{skill.name}</h3>
                            <span className="text-[10px] font-black px-2 py-0.5 bg-black/80 text-op-gold rounded uppercase tracking-wider">{skill.type}</span>
                        </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 font-medium text-sm relative z-10">
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
