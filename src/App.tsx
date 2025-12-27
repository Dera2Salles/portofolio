import React from "react";
import BountyProjects from "./components/one-piece/BountyProjects";
import DenDenContact from "./components/one-piece/DenDenContact";
import DevilFruitSkills from "./components/one-piece/DevilFruitSkills";
import Footer from "./components/one-piece/Footer";
import Hero from "./components/one-piece/Hero";
import MusicPlayer from "./components/one-piece/MusicPlayer";
import Navbar from "./components/one-piece/Navbar";
import Services from "./components/one-piece/Services";

const App: React.FC = () => {
  return (
    <div className="bg-op-cream min-h-screen text-gray-900 font-sans selection:bg-op-red selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <DevilFruitSkills />
      <BountyProjects />
      <DenDenContact />
      <Footer />
      <MusicPlayer />
    </div>
  );
};

export default App;
