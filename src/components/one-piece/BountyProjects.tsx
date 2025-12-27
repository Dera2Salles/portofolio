import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import React from 'react';

const projects = [
  {
    title: "Sabotsy Market",
    bounty: "500,000,000",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=500&auto=format&fit=crop",
    tech: ["Laravel", "PHP", "MySQL"],
    desc: "Laravel version of the SabotsyMarket web app."
  },
  {
    title: "ASJA Website",
    bounty: "450,000,000",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop",
    tech: ["TypeScript", "React", "Vite"],
    desc: "The new official website of ASJA (Athénée Saint Joseph Antsirabe) University."
  },
  {
    title: "DangerZone",
    bounty: "300,000,000",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&auto=format&fit=crop",
    tech: ["TypeScript", "GeoLocation", "Maps"],
    desc: "Web app for tracking danger zones in Madagascar."
  },
  {
    title: "E_contrat",
    bounty: "250,000,000",
    image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=500&auto=format&fit=crop",
    tech: ["Android", "Mobile", "Java/Kotlin"],
    desc: "Android app that allows you to sign contracts instantly and friendly."
  },
  {
    title: "Arosaina Presentation",
    bounty: "100,000,000",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop",
    tech: ["Public", "Presentation", "Web"],
    desc: "AroSaina project presentation and showcase."
  },
];

const BountyProjects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] bg-op-blue dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center text-op-cream dark:text-op-red mb-4 uppercase drop-shadow-md transition-colors">
           Bounty Board
        </h2>
        <p className="text-center text-op-gold text-lg mb-16 uppercase tracking-widest">Wanted Projects</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.2 }}
                 className="bg-[#F4E4BC] p-4 shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300 relative border-l-4 border-l-op-red"
               >
                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-400 shadow-inner border border-gray-600"></div>
                 
                 <div className="border-4 border-[#3e2723] p-2 h-full flex flex-col">
                    <div className="relative h-48 mb-4 border-2 border-[#3e2723] overflow-hidden group">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale sepia contrast-125 group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-500" />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-4">
                            <a href="#" className="p-2 bg-white rounded-full hover:bg-op-gold transition-colors"><Github className="w-6 h-6 text-black"/></a>
                            <a href="#" className="p-2 bg-white rounded-full hover:bg-op-gold transition-colors"><ExternalLink className="w-6 h-6 text-black"/></a>
                        </div>
                    </div>
                    
                    <h3 className="text-2xl font-black text-[#3e2723] uppercase text-center mb-1 font-serif">{project.title}</h3>
                    <div className="text-center mb-4">
                        <span className="text-sm font-bold text-[#3e2723] opacity-80">Reward: </span>
                        <span className="text-xl font-black text-[#3e2723]">฿ {project.bounty}</span>
                    </div>
                    
                    <p className="text-[#3e2723] text-sm font-serif mb-4 flex-grow text-center px-2">
                        {project.desc}
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-2 mt-auto">
                        {project.tech.map(t => (
                            <span key={t} className="px-2 py-1 bg-[#3e2723] text-[#F4E4BC] text-xs font-bold uppercase rounded-sm">{t}</span>
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
