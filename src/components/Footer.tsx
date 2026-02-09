import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-800 font-semibold">DERANDRAINY MARIE MARTINOT DE SALLES</p>
            <p className="text-gray-600 text-sm">Full Stack Developer</p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 text-sm mb-2">
              &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Crafted with precision and attention to detail
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <a 
              href="mailto:dera.ah.14@gmail.com" 
              className="text-sky-600 hover:text-sky-700 text-sm font-medium transition-colors"
            >
              dera.ah.14@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
