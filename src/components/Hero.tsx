import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-scroll';
import profilePic from './file.png';

interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-white flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            {/* Eyebrow label */}
            <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-4 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
              <span className="text-xs font-bold tracking-widest text-slate-600 uppercase">
                Ingénierie Software & Développement Full-Stack
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900 mb-6">
              Derandrainy
              <br />
              <span className="text-slate-500">
                M. De Salles
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-lg leading-relaxed font-normal">
              Conception d'applications web performantes, de solutions mobiles et d'outils système avec une rigueur d'ingénierie et un design soigné.
            </p>

            <div className="flex flex-wrap gap-3.5 w-full sm:w-auto">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="oneui-btn-primary px-7 py-3.5 text-sm sm:text-base cursor-pointer inline-flex items-center justify-center gap-2.5 w-full sm:w-auto"
                >
                  <span>Démarrer un Projet</span>
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </button>
              <Link to="projects" smooth duration={500} offset={-80} className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="oneui-btn-ghost px-7 py-3.5 text-sm sm:text-base cursor-pointer inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <span>Voir mes Réalisations</span>
                </motion.div>
              </Link>
            </div>

            <div className="mt-10 sm:mt-14 flex items-center gap-3">
              <div className="w-8 h-0.5 bg-slate-900" />
              <p className="text-xs sm:text-sm text-slate-500 font-semibold">
                Basé à Madagascar • Disponible pour Collaborations Internationales
              </p>
            </div>
          </motion.div>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex justify-center w-full max-w-sm mx-auto lg:max-w-none"
          >
            <div className="relative w-full max-w-[300px] sm:max-w-[360px] aspect-[4/5] bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src={profilePic}
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover grayscale-[10%] transition-all duration-300"
              />
            </div>

            {/* Kalam signature badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute -bottom-4 left-4 sm:left-8 bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-md"
            >
              <span className="font-['Kalam'] text-xl sm:text-22px text-slate-900 inline-block -rotate-6">
                dera.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
