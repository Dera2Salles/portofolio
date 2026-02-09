import React from "react";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Team from "./components/Team";

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
