import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import React from 'react';

import asjaLogo from './asja-logo.png';
import eContratLogo from './e_contrat.png';

const githubLogo = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";

const projects = [
  {
    title: "Sabotsy Market",
    image: githubLogo,
    tech: ["Laravel", "PHP", "MySQL"],
    desc: "Laravel version of the SabotsyMarket web application.",
    link: "https://github.com/Dera2Salles/sabotsy-market-laravel"
  },
  {
    title: "ASJA Website",
    image: asjaLogo,
    tech: ["TypeScript", "React", "Vite"],
    desc: "The new official website for ASJA University (Athénée Saint Joseph Antsirabe).",
    link: "https://asjaweb.com"
  },
  {
    title: "DangerZone",
    image: githubLogo,
    tech: ["TypeScript", "GeoLocation", "Maps"],
    desc: "Web application for tracking danger zones in Madagascar.",
    link: "https://github.com/Dera2Salles/DangerZone"
  },
  {
    title: "E_contrat",
    image: eContratLogo,
    tech: ["Android", "Mobile", "Java/Kotlin"],
    desc: "Android application for signing contracts instantly and simply.",
    link: "https://github.com/Dera2Salles/E_contrat"
  },
  {
    title: "Arosaina",
    image: githubLogo,
    tech: ["Flutter", "P2P", "Wi-Fi Direct"],
    desc: "Secure serverless P2P transfer application with Flutter. Share via Wi-Fi Direct without internet.",
    link: "https://github.com/Dera2Salles"
  },
];

const BountyProjects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
           Featured Projects
        </h2>
        <p className="text-center text-purple-600 dark:text-purple-400 text-lg mb-16 font-normal">Showcasing my recent work</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 whileHover={{ y: -10 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.4 }}
                 className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-2xl overflow-hidden shadow-xl border border-purple-200/50 dark:border-purple-500/30 max-w-sm mx-auto w-full group hover:border-purple-500 dark:hover:border-purple-400 transition-all"
               >
                 {/* Image Container */}
                 <div className="h-48 w-full overflow-hidden relative bg-gradient-to-br from-purple-500/10 to-purple-600/10">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-purple-800/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-3">
                        <div className="flex space-x-4">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full hover:bg-purple-100 hover:scale-110 transition-all">
                              <Github className="w-6 h-6 text-purple-600"/>
                            </a>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full hover:bg-purple-100 hover:scale-110 transition-all">
                              <ExternalLink className="w-6 h-6 text-purple-600"/>
                            </a>
                        </div>
                        <span className="text-white font-semibold tracking-wide text-sm uppercase">View Project</span>
                    </div>
                 </div>
                 
                 <div className="p-6">
                   {/* Project Title */}
                   <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                   
                   {/* Description */}
                   <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 min-h-[60px]">
                       {project.desc}
                   </p>
                   
                   {/* Tech Stack */}
                   <div className="flex flex-wrap gap-2">
                       {project.tech.map(t => (
                           <span key={t} className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-purple-600/10 text-purple-700 dark:text-purple-300 text-xs font-semibold rounded-full border border-purple-500/20">
                             {t}
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

export default BountyProjects;
