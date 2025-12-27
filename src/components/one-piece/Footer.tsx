import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 border-t-4 border-op-gold">
      <div className="container mx-auto px-4 text-center">
        <p className="text-op-gold font-bold text-lg mb-2">Designed by the Future Pirate King</p>
        <p className="text-sm opacity-50">&copy; {new Date().getFullYear()} One Piece Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
