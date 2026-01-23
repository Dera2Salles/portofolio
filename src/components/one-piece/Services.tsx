import { motion } from 'framer-motion';
import { Layers, Layout, RefreshCw, Server } from 'lucide-react';
import React from 'react';

const services = [
  {
    title: "Web Development",
    desc: "Creating modern, fast and responsive websites and web applications.",
    icon: <Layout className="w-12 h-12 text-purple-600" />,
  },
  {
    title: "API Design",
    desc: "Robust backend architecture and secure APIs to connect your data.",
    icon: <Server className="w-12 h-12 text-purple-500" />,
  },
  {
    title: "Cross-Platform Apps",
    desc: "Complete solutions across all platforms (Android, iOS, Windows, Web).",
    icon: <Layers className="w-12 h-12 text-purple-400" />,
  },
  {
    title: "Maintenance & Updates",
    desc: "Maintenance, optimization and modernization of existing sites.",
    icon: <RefreshCw className="w-12 h-12 text-purple-600" />,
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Services
            </h2>
            <div className="inline-block h-1 w-24 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 font-normal">
                What I can do for your project
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
                    className="backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-purple-200/50 dark:border-purple-500/20 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 group"
                >
                    <div className="mb-6 p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl inline-block group-hover:from-purple-500/20 group-hover:to-purple-600/20 transition-colors duration-300">
                        <div className="transform group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
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
