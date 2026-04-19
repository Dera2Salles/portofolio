import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-scroll';
import profilePic from './file.png';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "var(--mocha-base)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "80px",
        overflow: "hidden",
      }}
    >
      {/* Background texture dots */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `radial-gradient(circle, rgba(69,71,90,0.4) 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
        opacity: 0.5,
      }} />
      {/* Subtle glow top-right */}
      <div style={{
        position: "absolute", top: "-120px", right: "-80px",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(186,194,222,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", width: "100%", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}
          className="grid-cols-1 md:grid-cols-2">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}
          >
            {/* Eyebrow label */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "var(--mocha-s0)", border: "1px solid var(--mocha-s1)",
              borderRadius: "var(--r-pill)", padding: "6px 16px",
              marginBottom: "28px",
            }}>
              <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--mocha-sub1)" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", color: "var(--mocha-sub0)", textTransform: "uppercase" }}>
                Software Engineer
              </span>
            </div>

            <h1 style={{
              fontSize: "clamp(48px, 7vw, 80px)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
              color: "var(--mocha-text)",
              marginBottom: "24px",
            }}>
              Derandrainy
              <br />
              <span style={{ color: "var(--mocha-sub0)" }}>M. De Salles.</span>
            </h1>

            <p style={{
              fontSize: "18px", color: "var(--mocha-ov1)",
              marginBottom: "40px", maxWidth: "480px",
              lineHeight: 1.75, fontWeight: 400,
            }}>
              I engineer robust, scalable digital solutions. Specializing in full-stack architecture and high-performance applications.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link to="projects" smooth duration={500} offset={-80}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="oneui-btn-primary"
                  style={{
                    padding: "14px 28px", fontSize: "15px",
                    cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px",
                  }}
                >
                  <span>View My Work</span>
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </Link>
              <Link to="contact" smooth duration={500} offset={-80}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="oneui-btn-ghost"
                  style={{
                    padding: "14px 28px", fontSize: "15px",
                    cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px",
                  }}
                >
                  <span>Contact Me</span>
                </motion.div>
              </Link>
            </div>

            <div style={{ marginTop: "56px", display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "32px", height: "1px", background: "var(--mocha-s2)" }} />
              <p style={{ fontSize: "13px", color: "var(--mocha-ov0)", fontWeight: 500 }}>
                Based in Madagascar • Available Remote
              </p>
            </div>
          </motion.div>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{ position: "relative", display: "flex", justifyContent: "flex-end" }}
          >
            {/* Decorative ring behind photo */}
            <div style={{
              position: "absolute", top: "-20px", right: "-20px",
              width: "calc(100% + 40px)", height: "calc(100% + 40px)",
              borderRadius: "var(--r-xl)",
              border: "1px solid var(--mocha-s0)",
              pointerEvents: "none",
            }} />

            <div style={{
              position: "relative", width: "100%", maxWidth: "360px",
              aspectRatio: "4/5",
              background: "var(--mocha-mantle)",
              borderRadius: "var(--r-xl)",
              overflow: "hidden",
              border: "1px solid var(--mocha-s1)",
            }}>
              <img
                src={profilePic}
                alt="Profile"
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%", objectFit: "cover",
                  filter: "grayscale(100%)",
                  transition: "filter 0.7s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
                onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
              />
            </div>

            {/* Kalam signature badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{
                position: "absolute", bottom: "-20px", left: "-20px",
                background: "var(--mocha-mantle)",
                border: "1px solid var(--mocha-s1)",
                borderRadius: "var(--r-md)",
                padding: "16px 24px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
              }}
            >
              <span style={{
                fontFamily: "'Kalam', cursive", fontSize: "24px",
                color: "var(--mocha-text)",
                display: "inline-block", transform: "rotate(-5deg)",
              }}>dera.</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
