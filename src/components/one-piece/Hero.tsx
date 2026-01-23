import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import profilePic from './file.jpeg';

interface TypewriterTextProps {
  text: string;
  delay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text.charAt(i));
            i++;
            if (i >= text.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span>{displayedText}<span className="animate-pulse">|</span></span>;
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-white dark:from-gray-900 dark:via-purple-950 dark:to-gray-900 overflow-hidden flex items-center justify-center pt-32 md:pt-20 transition-colors duration-300">
      
      {/* Background Elements - Purple Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      {/* Subtle Wave Animation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex w-[200%]"
        >
          <svg
            className="relative block w-full h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-purple-500/10 dark:fill-purple-500/20 transition-colors duration-300"
            ></path>
          </svg>
          <svg
            className="relative block w-full h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-purple-500/10 dark:fill-purple-500/20 transition-colors duration-300"
            ></path>
          </svg>
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400 uppercase tracking-wider font-sans transition-colors w-full">
            <TypewriterText text="Full Stack Developer" />
          </h2>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white transition-colors break-words">
            Building Digital
            <br/>
            <motion.span 
               animate={{ 
                textShadow: [
                  "0 0 20px rgba(139, 92, 246, 0.3)",
                  "0 0 40px rgba(139, 92, 246, 0.5)",
                  "0 0 20px rgba(139, 92, 246, 0.3)"
                ],
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent relative inline-block"
            >
                Experiences
            </motion.span>
          </h1>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 font-normal w-full leading-relaxed">
            Crafting elegant solutions with modern technologies. Specializing in full-stack development and creating seamless user experiences.
          </p>
          <Link 
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
          >
            <motion.div 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-purple-600 to-purple-500 text-white text-lg font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all cursor-pointer relative overflow-hidden group mt-4"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 bg-purple-700/50"></div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -10 }}
          className="mx-auto"
        >
          <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 p-8 rounded-3xl shadow-2xl w-full max-w-md border border-purple-200/50 dark:border-purple-500/30 relative overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none"></div>
            
            {/* Profile Image */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative border-4 border-purple-500/30 rounded-2xl overflow-hidden shadow-xl">
                <img 
                    src={profilePic} 
                    alt="Profile" 
                    className="w-full h-80 object-cover"
                />
              </div>
            </div>
            
            <div className="text-center space-y-3 relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  DERANDRAINY MARIE
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                  MARTINOT DE SALLES
                </p>
                
                <div className="pt-4 flex items-center justify-center gap-2">
                    <div className="h-1 w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
                </div>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 pt-2">
                  Full Stack Developer & Designer
                </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
