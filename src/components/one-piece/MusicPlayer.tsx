import { motion } from 'framer-motion';
import { Music, Pause } from 'lucide-react';
import React, { useRef, useState } from 'react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => {
          console.error("Playback failed:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <audio
        ref={audioRef}
        src="https://archive.org/download/tvtunes_16762/One%20Piece%20-%20We%20Are.mp3"
        loop
      />
      
      <motion.button
        onClick={toggleMusic}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`relative group flex items-center justify-center w-16 h-16 rounded-full border-4 border-[#5c3a1e] shadow-2xl transition-all duration-300
          ${isPlaying ? 'bg-op-red' : 'bg-op-gold'}`}
        title={isPlaying ? "Mettre en pause" : "Écouter We Are!"}
      >
        {/* Dial Texture */}
        <div className="absolute inset-0 rounded-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/old-map.png')] pointer-events-none"></div>
        
        {/* Glow effect when playing */}
        {isPlaying && (
          <div className="absolute inset-0 rounded-full bg-op-red blur-lg animate-pulse opacity-50"></div>
        )}

        <div className="relative z-10 text-[#3e2723] group-hover:text-white transition-colors">
          {isPlaying ? (
            <Pause className="w-8 h-8 fill-current" />
          ) : (
            <Music className="w-8 h-8 fill-current" />
          )}
        </div>

        {/* Small "Label" */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#3e2723] text-op-gold text-[10px] font-black px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-op-gold">
          {isPlaying ? "PAUSE" : "PLAY WE ARE!"}
        </div>
      </motion.button>
    </div>
  );
};

export default MusicPlayer;
