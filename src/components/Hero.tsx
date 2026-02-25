import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-scroll';
import profilePic from './file.jpeg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen bg-white flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        
        {}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left"
        >
          <h2 className="text-sm font-semibold mb-6 text-gray-500 tracking-[0.2em] uppercase">
            Software Engineer
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-gray-900">
            Derandrainy
            <br />
            M. de Salles.
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-light">
            I engineer robust, scalable digital solutions. Specializing in full-stack architecture and high-performance applications.
          </p>
          <div className="flex gap-4">
            <Link 
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-900 text-white text-base font-medium py-4 px-8 rounded hover:bg-black transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>View My Work</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </Link>
            <Link 
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-gray-900 border border-gray-200 text-base font-medium py-4 px-8 rounded hover:border-gray-900 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Contact Me</span>
              </motion.div>
            </Link>
          </div>
          
          <div className="mt-16 flex items-center gap-4 text-gray-500 text-sm">
            <div className="w-8 h-px bg-gray-300"></div>
            <p>Based in Madagascar • Available Remote</p>
          </div>
        </motion.div>

        {}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-sm aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden">
            <img 
              src={profilePic} 
              alt="Profile" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-xl border border-gray-100">
             <span className="font-['Kalam'] text-2xl text-gray-800 rotate-[-5deg] inline-block">dera.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
