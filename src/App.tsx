import React, { useState } from "react";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ContactModal from "./components/ContactModal";

const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh", color: "#0F172A" }}>
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <Hero onOpenContact={() => setIsContactOpen(true)} />
      <Skills />
      <Projects />
      <Contact onOpenContact={() => setIsContactOpen(true)} />
      <Footer onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

export default App;
