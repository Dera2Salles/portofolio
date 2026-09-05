import React from "react";
import { motion } from "framer-motion";
import Step from "./Step";
import { rise } from "../lib/motion";

const solid = [
  {
    letter: "S",
    name: "Single Responsibility",
    desc: "Une classe, une seule raison de changer.",
  },
  {
    letter: "O",
    name: "Open / Closed",
    desc: "Ouvrir à l'extension, fermer à la modification.",
  },
  {
    letter: "L",
    name: "Liskov Substitution",
    desc: "Les sous-classes restent interchangeables.",
  },
  {
    letter: "I",
    name: "Interface Segregation",
    desc: "Des interfaces fines, pas de dépendances inutiles.",
  },
  {
    letter: "D",
    name: "Dependency Inversion",
    desc: "Dépendre des abstractions, pas des implémentations.",
  },
];

const StepArchitecture: React.FC = () => {
  return (
    <Step
      id="architecture"
      number="06"
      label="Architecture"
      title={
        <>
          Une architecture solide, qui dure
          <span className="text-[var(--accent)]">.</span>
        </>
      }
      lede="Appliquer les principes SOLID et la Clean Architecture garantit une base de code claire, testable et facile à faire évoluer au fil des années."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {solid.map((p) => (
          <motion.div
            key={p.letter}
            variants={rise}
            className="card group flex items-start gap-4 p-6"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--line)] bg-[var(--bg-soft)] font-mono text-lg font-semibold text-[var(--ink)] transition-colors duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--ink)]">
              {p.letter}
            </span>
            <div>
              <p className="text-sm font-semibold leading-snug text-[var(--ink)]">
                {p.name}
              </p>
              <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-[var(--ink-3)]">
                {p.desc}
              </p>
            </div>
          </motion.div>
        ))}

        <motion.div
          variants={rise}
          className="card card-invert flex flex-col justify-center p-6"
        >
          <div className="flex items-center gap-3">
            <span className="marker" />
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              Clean Architecture
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/85">
            La logique métier au centre, indépendante de l'interface, des
            frameworks et de la base de données.
          </p>
        </motion.div>
      </div>
    </Step>
  );
};

export default StepArchitecture;
