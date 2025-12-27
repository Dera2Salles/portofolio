import { motion } from 'framer-motion';
import { Anchor, Layers, Layout, RefreshCw, Server } from 'lucide-react';
import React from 'react';

const services = [
  {
    title: "Développement Web",
    desc: "Création de sites vitrines et d'applications web modernes, rapides et responsives.",
    icon: <Layout className="w-12 h-12 text-op-red" />,
    pirateTitle: "Construction Navale"
  },
  {
    title: "Conception d'API",
    desc: "Architecture backend robuste et APIs sécurisées pour connecter vos données.",
    icon: <Server className="w-12 h-12 text-op-blue" />,
    pirateTitle: "Cartographie & Routes"
  },
  {
    title: "Applis Web, Mobile & Desktop",
    desc: "Solutions complètes sur toutes les plateformes (Android, iOS, Windows, Web).",
    icon: <Layers className="w-12 h-12 text-op-gold" />,
    pirateTitle: "Arsenal Polyvalent"
  },
  {
    title: "Mise à jour & Refonte",
    desc: "Maintenance, optimisation et modernisation de sites existants.",
    icon: <RefreshCw className="w-12 h-12 text-green-600" />,
    pirateTitle: "Réparations & Chantiers"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-op-cream dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-10 opacity-5">
        <Anchor className="w-64 h-64 text-[#3e2723]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#3e2723] dark:text-op-gold mb-4 uppercase drop-shadow-md font-serif tracking-widest">
            Mes Services
            </h2>
            <div className="inline-block border-b-4 border-op-red w-24"></div>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 font-medium">
                Ce que je peux faire pour votre équipage
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-white dark:bg-[#1a0f0a] rounded-lg p-8 shadow-lg border-2 border-[#3e2723]/10 dark:border-op-gold/20 hover:border-op-red dark:hover:border-op-red transition-all duration-300 group"
                >
                    <div className="mb-6 p-4 bg-gray-50 dark:bg-black/30 rounded-full inline-block group-hover:bg-op-cream transition-colors duration-300 shadow-inner">
                        <div className="transform group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                        </div>
                    </div>
                    
                    <h4 className="text-xs font-black text-op-red uppercase tracking-widest mb-2">{service.pirateTitle}</h4>
                    <h3 className="text-xl font-bold text-[#3e2723] dark:text-white mb-3">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {service.desc}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
