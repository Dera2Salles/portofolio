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
        className={`relative group flex items-center justify-center w-16 h-16 rounded-full border-2 border-purple-400 shadow-2xl transition-all duration-300
          ${isPlaying ? 'bg-gradient-to-br from-purple-600 to-purple-500' : 'bg-gradient-to-br from-purple-500 to-purple-600'}`}
        title={isPlaying ? "Pause" : "Play Music"}
      >
        {/* Glow effect when playing */}
        {isPlaying && (
          <div className="absolute inset-0 rounded-full bg-purple-500 blur-lg animate-pulse opacity-50"></div>
        )}

        <div className="relative z-10 text-white group-hover:scale-110 transition-transform">
          {isPlaying ? (
            <Pause className="w-8 h-8 fill-current" />
          ) : (
            <Music className="w-8 h-8 fill-current" />
          )}
        </div>

        {/* Tooltip */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-purple-500/30">
          {isPlaying ? "PAUSE" : "PLAY MUSIC"}
        </div>
      </motion.button>
    </div>
  );
};

export default MusicPlayer;
