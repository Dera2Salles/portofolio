import { motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

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
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-purple-200/50 dark:border-purple-500/30 shadow-lg"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link 
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="relative">
                <div className="absolute inset-0 bg-purple-500 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-full"></div>
                <div className="relative z-10 p-2 bg-gradient-to-br from-purple-600 to-purple-500 text-white rounded-xl border-2 border-purple-400 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="font-bold text-xl">D</span> 
                </div>
            </div>
            <span className="hidden md:block font-bold text-2xl tracking-wide text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                DERA DEV
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href.substring(1)}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer"
                >
                  <motion.div
                    className="relative px-4 py-2 rounded-lg text-base font-semibold text-gray-700 dark:text-gray-300 transition-all duration-300 group overflow-hidden"
                  >
                    <span className="relative z-10 group-hover:text-white dark:group-hover:text-white transition-colors">{link.name}</span>
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <motion.button
                whileTap={{ scale: 0.9, rotate: 360 }}
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white border-2 border-purple-400 shadow-lg hover:shadow-purple-500/50 transition-all"
                aria-label="Toggle Dark Mode"
            >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white"
            >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 focus:outline-none transition-colors"
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
          className="md:hidden backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-t border-purple-200/50 dark:border-purple-500/30 relative z-50 shadow-xl"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href.substring(1)}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-500 hover:text-white block px-3 py-3 rounded-lg text-base font-semibold text-center transition-all cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
