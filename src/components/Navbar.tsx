import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "home" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Team", href: "team" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center font-bold text-lg group-hover:bg-gray-700 transition-colors">
              D
            </div>
            <span className="font-semibold text-lg tracking-tight text-gray-900 hidden sm:block">
              Derandrainy.
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-100"
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
                className="block py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded font-medium transition-colors cursor-pointer"
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
