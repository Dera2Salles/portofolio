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
    <section id="home" className="relative min-h-screen bg-op-cream dark:bg-op-dark overflow-hidden flex items-center justify-center pt-32 md:pt-20 transition-colors duration-300">
      
      {/* Background Elements - Red Mist / Haki Aura */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-op-red/10 dark:to-op-red/30 pointer-events-none" />
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] bg-repeat" />
      
      {/* Wave Animation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 drop-shadow-2xl">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="flex w-[200%]"
        >
          {/* First Wave Instance */}
          <svg
            className="relative block w-full h-[150px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-op-red dark:fill-red-900 transition-colors duration-300"
            ></path>
          </svg>
          {/* Second Wave Instance for Seamless Loop */}
          <svg
            className="relative block w-full h-[150px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-op-red opacity-50 dark:fill-red-900 dark:opacity-40 transition-colors duration-300"
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
          <h2 className="text-xl md:text-3xl font-bold mb-4 text-op-red dark:text-op-gold uppercase tracking-wide md:tracking-widest font-serif transition-colors w-full">
            <TypewriterText text="Développeur Pirate Niveau 99" />
          </h2>
          <h1 className="text-3xl md:text-7xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white transition-colors break-words drop-shadow-sm">
            MAÎTRISANT LE <br/>
            <motion.span 
               animate={{ 
                textShadow: [
                  "0 0 10px rgba(214, 52, 71, 0.5), 0 0 20px rgba(214, 52, 71, 0.3)",
                  "0 0 25px rgba(214, 52, 71, 0.8), 0 0 40px rgba(139, 92, 246, 0.6)",
                  "0 0 10px rgba(214, 52, 71, 0.5), 0 0 20px rgba(214, 52, 71, 0.3)"
                ],
                scale: [1, 1.02, 1]
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="text-op-red text-stroke-red relative inline-block group"
            >
                HAKI DU FULLSTACK
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-op-gold opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
            </motion.span>
          </h1>
          <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 font-medium w-full">
            Hissant les voiles sur la Grand Line du code. Création d'interfaces légendaires et conquête des mers du backend.
          </p>
          <Link 
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
          >
            <motion.div 
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(214, 52, 71, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-op-red text-white text-xl font-bold py-4 px-10 rounded-full shadow-[0_4px_14px_0_rgba(214,52,71,0.39)] border-2 border-transparent hover:border-op-gold transition-all cursor-pointer relative overflow-hidden group mt-4"
            >
              <span className="relative z-10">VOIR LES PRIMES</span>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-red-700/50"></div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Wanted Poster */}
        <motion.div 
          initial={{ opacity: 0, y: 100, rotate: 5 }}
          animate={{ opacity: 1, y: 0, rotate: 3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          className="mx-auto"
        >
          <div className="bg-[#F4E4BC] p-6 rounded-sm shadow-2xl w-full max-w-md transform rotate-3 border-[12px] border-[#3e2723] relative z-30">
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-map.png')] opacity-30 pointer-events-none mix-blend-multiply"></div>
            
            <div className="flex justify-between items-center mb-2 px-2">
              <span className="text-3xl font-serif font-black tracking-widest text-[#3e2723]">WANTED</span>
            </div>
            
            <div className="border-[3px] border-[#3e2723] h-64 md:h-80 w-full mb-4 bg-gray-800 overflow-hidden relative group">
                <img 
                    src={profilePic} 
                    alt="Profile" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            
            <div className="text-center space-y-2">
                <h2 className="text-4xl font-black text-[#3e2723] uppercase font-serif tracking-tighter shadow-sm">MORT OU VIF</h2>
                <h3 className="text-xl md:text-2xl font-bold text-[#3e2723] font-serif leading-tight px-2">DERANDRAINY MARIE<br/><span className="text-lg">MARTINOT DE SALLES</span></h3>
                
                <div className="flex items-center justify-center space-x-2 mt-4">
                    <span className="text-2xl font-serif font-bold text-[#3e2723]">฿</span>
                    <span className="text-4xl font-black text-[#3e2723] tracking-widest">5,000,000,000</span>
                </div>
            </div>

             <div className="absolute bottom-2 right-4 text-xs font-bold text-[#3e2723] opacity-60">
                MARINE
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
