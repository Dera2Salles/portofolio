import { motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const links = [
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300">
      {/* Wood Texture Background container */}
      <div className="absolute inset-0 bg-[#3e2723] dark:bg-[#1a0f0a] border-b-4 border-op-gold shadow-2xl">
         <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] bg-repeat"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Jolly Roger Style */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="relative">
                <div className="absolute inset-0 bg-op-red blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-full"></div>
                {/* Replaced Anchor with a more "Pirate" icon if available, ensuring valid import. Using Skull from lucide which is standard. */}
                <div className="relative z-10 p-2 bg-op-gold text-[#3e2723] rounded-full border-2 border-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    <span className="font-serif font-black text-xl">☠️</span> 
                </div>
            </div>
            <span className="hidden md:block font-serif font-black text-2xl tracking-widest text-op-cream text-shadow-sm group-hover:text-op-gold transition-colors">
                STRAW HAT DEV
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-2">
              {links.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 rounded-sm text-lg font-bold text-op-cream transition-all duration-300 group overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors">{link.name}</span>
                  {/* Haki Hover Effect */}
                  <div className="absolute inset-0 bg-op-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.a>
              ))}
            </div>

            {/* Dark Mode Toggle - Gold Coin Style */}
            <motion.button
                whileTap={{ scale: 0.9, rotate: 360 }}
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full bg-op-gold text-[#3e2723] border-2 border-[#5c3a1e] shadow-[0_2px_0_#b48a3c] hover:translate-y-[2px] hover:shadow-none transition-all"
                aria-label="Toggle Dark Mode"
            >
                {isDark ? <Sun className="w-6 h-6 fill-current" /> : <Moon className="w-6 h-6 fill-current" />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full bg-op-gold text-[#3e2723]"
            >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-op-gold hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-[#2d1b18] border-t-4 border-op-gold relative z-50 shadow-2xl"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-op-cream hover:bg-op-red hover:text-white block px-3 py-3 rounded-md text-lg font-black text-center uppercase tracking-widest border-b border-white/10 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
