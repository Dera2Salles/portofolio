import React from "react";

interface FooterProps {
  onOpenContact?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-black tracking-wider text-white">
              DERANDRAINY MARIE MARTINOT DE SALLES
            </p>
            <p className="text-xs text-slate-400 mt-1 font-medium">
              Ingénieur Software Full-Stack & Systems Freelance
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={onOpenContact}
              className="text-xs text-slate-300 hover:text-white underline underline-offset-4 cursor-pointer font-medium"
            >
              Planifier une Escale / Mission Freelance
            </button>
            <p className="text-[11px] text-slate-500 mt-1">
              © {new Date().getFullYear()} Dera. All rights reserved.
            </p>
          </div>

          <div>
            <a
              href="mailto:dera.ah.14@gmail.com"
              className="text-xs font-semibold text-slate-300 hover:text-white transition-colors"
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
