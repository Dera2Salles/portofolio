import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-8 border-t border-purple-500/30">
      <div className="container mx-auto px-4 text-center">
        <p className="text-purple-400 font-semibold text-lg mb-2">Designed & Built by DERANDRAINY Marie Martinot De Salles</p>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
