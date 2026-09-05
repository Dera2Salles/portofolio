import React from "react";
import { motion } from "framer-motion";
import Step from "./Step";
import { rise } from "../lib/motion";

const methods = [
  {
    kind: "Méthode",
    name: "Merise",
    desc: "Modélisation du système d'information, de l'analyse des besoins jusqu'au schéma physique de la base de données.",
    items: ["MCD", "MLD", "MPD"],
  },
  {
    kind: "Notation",
    name: "UML",
    desc: "Modélisation orientée objet pour une vision claire du système, partagée avec toute l'équipe.",
    items: ["Cas d'utilisation", "Classes", "Séquences"],
  },
];

const StepDesign: React.FC = () => {
  return (
    <Step
      id="conception"
      number="05"
      label="Conception"
      title={
        <>
          Concevoir avant de coder
          <span className="text-[var(--accent)]">.</span>
        </>
      }
      lede="Une application fiable commence par une modélisation claire. J'utilise les méthodes de conception éprouvées pour structurer le système d'information et l'architecture avant d'écrire la première ligne."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {methods.map((m) => (
          <motion.article key={m.name} variants={rise} className="card flex flex-col p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="kicker">{m.kind}</span>
              <span className="h-px flex-1 bg-[var(--line)]" />
            </div>

            <h3 className="display mt-6 text-3xl">{m.name}</h3>

            <p className="lede mt-4 mb-8 text-sm">{m.desc}</p>

            <div className="mt-auto flex flex-wrap gap-2 border-t pt-6">
              {m.items.map((i) => (
                <span key={i} className="tag">
                  {i}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Step>
  );
};

export default StepDesign;
