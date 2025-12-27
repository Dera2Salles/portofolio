import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import React from 'react';

const projects = [
  {
    title: "Sabotsy Market",
    bounty: "500,000,000",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=500&auto=format&fit=crop",
    tech: ["Laravel", "PHP", "MySQL"],
    desc: "Version Laravel de l'application web SabotsyMarket."
  },
  {
    title: "Site Web ASJA",
    bounty: "450,000,000",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop",
    tech: ["TypeScript", "React", "Vite"],
    desc: "Le nouveau site officiel de l'université ASJA (Athénée Saint Joseph Antsirabe)."
  },
  {
    title: "DangerZone",
    bounty: "300,000,000",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&auto=format&fit=crop",
    tech: ["TypeScript", "GeoLocation", "Maps"],
    desc: "Application web pour le suivi des zones de danger à Madagascar."
  },
  {
    title: "E_contrat",
    bounty: "250,000,000",
    image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=500&auto=format&fit=crop",
    tech: ["Android", "Mobile", "Java/Kotlin"],
    desc: "Application Android permettant de signer des contrats instantanément et simplement."
  },
  {
    title: "Arosaina",
    bounty: "100,000,000",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop",
    tech: ["Flutter", "P2P", "Wi-Fi Direct"],
    desc: "Application de transfert P2P sécurisée et sans serveur avec Flutter. Partage via Wi-Fi Direct sans internet."
  },
];

const BountyProjects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] bg-op-blue dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center text-op-cream dark:text-op-red mb-4 uppercase drop-shadow-md transition-colors font-serif tracking-in-expand">
           Tableau des Primes
        </h2>
        <p className="text-center text-op-gold text-lg mb-16 uppercase tracking-widest font-bold">Projets Recherchés</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? 1 : -1 }}
                 whileInView={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? 2 : -2 }}
                 whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.4 }}
                 className="bg-[#F4E4BC] p-5 shadow-2xl relative border-[12px] border-[#4e342e] max-w-sm mx-auto w-full group overflow-hidden"
               >
                 {/* Paper Texture Overlay */}
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-map.png')] opacity-20 pointer-events-none mix-blend-multiply"></div>
                 
                 {/* Pin */}
                 <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gray-300 shadow-md border-2 border-gray-500 z-20"></div>

                 {/* WANTED Header */}
                 <div className="text-center mb-2 px-1 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-serif font-black tracking-[0.2em] text-[#3e2723] uppercase scale-y-125 pt-2">WANTED</h2>
                    <h3 className="text-sm md:text-base font-serif font-bold tracking-widest text-[#3e2723] opacity-80 -mt-1 mb-2">DEAD OR ALIVE</h3>
                 </div>

                 {/* Image Container */}
                 <div className="border-[3px] border-[#3e2723] bg-gray-800 h-48 w-full mb-3 overflow-hidden relative shadow-inner group-hover:shadow-xl transition-shadow">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale sepia contrast-125 brightness-90 group-hover:grayscale-0 group-hover:sepia-0 group-hover:brightness-100 transition-all duration-500" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-3">
                        <div className="flex space-x-4">
                            <a href="#" className="p-3 bg-white rounded-full hover:bg-op-gold hover:scale-110 transition-all"><Github className="w-6 h-6 text-black"/></a>
                            <a href="#" className="p-3 bg-white rounded-full hover:bg-op-gold hover:scale-110 transition-all"><ExternalLink className="w-6 h-6 text-black"/></a>
                        </div>
                        <span className="text-white font-serif tracking-widest text-sm uppercase">Voir le Projet</span>
                    </div>
                 </div>
                 
                 {/* Project Title */}
                 <h3 className="text-2xl md:text-3xl font-black text-[#3e2723] uppercase text-center mb-1 font-serif tracking-tighter leading-none">{project.title}</h3>
                 
                 {/* Bounty Amount */}
                 <div className="text-center mb-4 flex items-baseline justify-center space-x-2 border-t-2 border-b-2 border-[#3e2723]/20 py-1 mx-4">
                     <span className="text-sm font-bold text-[#3e2723] opacity-70 serif uppercase">Bounty</span>
                     <div className="flex items-center">
                        <span className="text-xl font-serif font-bold text-[#3e2723] mr-1">฿</span>
                        <span className="text-2xl md:text-3xl font-black text-[#3e2723] tracking-widest">{project.bounty}</span>
                        <span className="text-xl font-serif font-bold text-[#3e2723] ml-1">-</span>
                     </div>
                 </div>

                 {/* Description */}
                 <div className="px-2 mb-4 h-16 flex items-center justify-center">
                    <p className="text-[#3e2723] text-sm font-serif text-center font-semibold leading-tight line-clamp-3 opacity-90">
                        {project.desc}
                    </p>
                 </div>
                 
                 {/* Tech Stack Marine Tags */}
                 <div className="flex flex-wrap justify-center gap-2 mb-2">
                     {project.tech.map(t => (
                         <span key={t} className="px-2 py-0.5 bg-[#3e2723] text-[#F4E4BC] text-[10px] font-black uppercase rounded-sm border border-[#F4E4BC]/50 shadow-sm">{t}</span>
                     ))}
                 </div>

                 {/* Marine Badge/Stamp */}
                 <div className="absolute bottom-4 right-4 text-[#3e2723] opacity-10 font-black text-xs rotate-[-15deg] border-4 border-[#3e2723] p-1 rounded-full w-16 h-16 flex items-center justify-center pointer-events-none group-hover:opacity-100 group-hover:text-red-800 group-hover:border-red-800 transition-all duration-300">
                    <span className="text-center leading-none text-[8px]">MARINE<br/>APPROVED</span>
                 </div>

                 <div className="absolute bottom-2 left-4 text-[10px] font-bold text-[#3e2723] opacity-60">
                    MARINE
                 </div>
               </motion.div> 
            ))}
        </div>
      </div>
    </section>
  );
};

export default BountyProjects;
