import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: 'home' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Team', href: 'team' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link 
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="p-2 bg-sky-600 text-white rounded-lg">
              <span className="font-bold text-xl">DM</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-800 hidden md:block">
              DERANDRAINY MARIE
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                smooth={true}
                duration={500}
                offset={-80}
                className="relative px-4 py-2 text-gray-600 hover:text-sky-600 font-medium transition-colors cursor-pointer group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-sky-600 group-hover:w-8 transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-100 shadow-lg"
        >
          <div className="px-4 py-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg font-medium transition-colors cursor-pointer"
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
