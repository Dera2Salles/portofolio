import React from "react";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div style={{ background: "var(--mocha-base)", minHeight: "100vh", color: "var(--mocha-text)" }}>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
