import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home", href: "home" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed", width: "100%", zIndex: 50,
        background: scrolled ? "rgba(24,24,37,0.92)" : "rgba(30,30,46,0.7)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${scrolled ? "rgba(69,71,90,0.8)" : "rgba(49,50,68,0.5)"}`,
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>

          {/* Logo */}
          <Link to="home" smooth duration={500} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <div style={{
              background: "linear-gradient(135deg, #bac2de, #585b70)",
              padding: "2px", borderRadius: "10px",
            }}>
              <div style={{
                background: "var(--mocha-base)", borderRadius: "8px",
                width: "36px", height: "36px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 900, fontSize: "15px", color: "var(--mocha-text)",
                fontFamily: "'JetBrains Mono', monospace",
              }}>D</div>
            </div>
            <span style={{ fontWeight: 800, fontSize: "16px", color: "var(--mocha-text)", letterSpacing: "-0.3px" }}>
              Derandrainy.
            </span>
          </Link>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className="hidden md:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                smooth duration={500} offset={-80}
                style={{
                  fontSize: "14px", fontWeight: 600,
                  color: "var(--mocha-sub0)",
                  cursor: "pointer", padding: "8px 16px",
                  borderRadius: "var(--r-pill)",
                  transition: "color 0.2s ease, background 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "var(--mocha-text)";
                  (e.target as HTMLElement).style.background = "var(--mocha-s0)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "var(--mocha-sub0)";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            style={{
              background: "var(--mocha-s0)", border: "1px solid var(--mocha-s1)",
              borderRadius: "var(--r-sm)", padding: "8px",
              color: "var(--mocha-sub1)", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "var(--mocha-mantle)",
              borderTop: "1px solid var(--mocha-s0)",
              overflow: "hidden",
            }}
            className="md:hidden"
          >
            <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: "4px" }}>
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href} smooth duration={500} offset={-80}
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: "block", padding: "12px 16px",
                    color: "var(--mocha-sub1)", fontWeight: 600, fontSize: "15px",
                    borderRadius: "var(--r-sm)", cursor: "pointer",
                    transition: "background 0.15s ease, color 0.15s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.background = "var(--mocha-s0)";
                    (e.target as HTMLElement).style.color = "var(--mocha-text)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.background = "transparent";
                    (e.target as HTMLElement).style.color = "var(--mocha-sub1)";
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
