import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-scroll';
import profilePic from './file.jpeg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-b from-white to-sky-50 flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left"
        >
          <h2 className="text-lg font-medium mb-4 text-sky-600 uppercase tracking-widest">
            Full Stack Developer
          </h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="block">DERANDRAINY</span>
            <span className="block text-sky-600">MARIE</span>
            <span className="block">MARTINOT DE SALLES</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
            Crafting elegant digital solutions with modern technologies. 
            Specializing in full-stack development and creating seamless user experiences.
          </p>
          <Link 
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-sky-600 text-white text-lg font-medium py-3 px-8 rounded-lg hover:bg-sky-700 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>View My Work</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </Link>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-200 to-sky-100 rounded-2xl blur-lg opacity-50"></div>
            <img 
              src={profilePic} 
              alt="Profile" 
              className="relative w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
          
          {/* Info Card */}
          <div className="mt-8 p-6 bg-white rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-12 bg-sky-600 rounded-full"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Based in Madagascar</h3>
                <p className="text-gray-600">Available for remote work</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
