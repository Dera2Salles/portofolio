import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import React from 'react';

const projects = [
  {
    title: "Sabotsy Market",
    description: "Laravel e-commerce platform with modern features and responsive design",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/Dera2Salles/sabotsy-market-laravel",
    live: "#"
  },
  {
    title: "ASJA University Website",
    description: "Official website for ASJA University built with modern React and TypeScript",
    tech: ["React", "TypeScript", "Vite", "Tailwind"],
    github: "#",
    live: "https://asjaweb.com"
  },
  {
    title: "DangerZone",
    description: "Web application for tracking danger zones using geolocation services",
    tech: ["TypeScript", "Map API", "Node.js"],
    github: "https://github.com/Dera2Salles/DangerZone",
    live: "#"
  },
  {
    title: "E_contrat Mobile App",
    description: "Android application for digital contract signing and management",
    tech: ["Android", "Java", "Firebase"],
    github: "https://github.com/Dera2Salles/E_contrat",
    live: "#"
  },
  {
    title: "Arosaina P2P",
    description: "Secure serverless P2P file transfer using Wi-Fi Direct technology",
    tech: ["Flutter", "P2P", "Wi-Fi Direct"],
    github: "https://github.com/Dera2Salles",
    live: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-sky-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work showcasing different technologies and solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <div className="flex space-x-2">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.live !== "#" && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-sky-50 text-sky-600 text-sm font-medium rounded-full"
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
