import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Compass } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

interface NavbarProps {
  onOpenContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Accueil", href: "home" },
    { name: "Compétences", href: "skills" },
    { name: "Projets", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <Link
            to="home"
            smooth
            duration={500}
            className="cursor-pointer flex items-center gap-3 group"
          >
            <div className="bg-slate-900 p-0.5 rounded-xl shadow-xs">
              <div className="bg-slate-900 rounded-lg w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center font-black text-sm sm:text-base text-white font-mono">
                D
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg text-slate-900 leading-tight tracking-tight">
                Derandrainy.
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 tracking-wider uppercase">
                Développeur Full-Stack
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links & Modal CTA */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                smooth
                duration={500}
                offset={-80}
                className="text-xs lg:text-sm font-semibold text-slate-600 hover:text-slate-900 px-3 lg:px-4 py-2 rounded-full hover:bg-slate-100 transition-all cursor-pointer"
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={onOpenContact}
              className="ml-2 px-4 py-2 lg:px-5 lg:py-2.5 bg-slate-900 text-white font-bold text-xs rounded-full hover:bg-slate-800 transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Compass size={14} />
              <span>Démarrer un Projet</span>
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden bg-slate-100 border border-slate-200 rounded-xl p-2 text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer flex items-center justify-center"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-slate-200 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-4 flex flex-col gap-1.5">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-slate-700 hover:text-slate-900 font-semibold text-sm rounded-xl hover:bg-slate-100 transition-all cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenContact();
                }}
                className="mt-2 w-full py-3 bg-slate-900 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Compass size={16} />
                <span>Démarrer un Projet (Modal)</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
