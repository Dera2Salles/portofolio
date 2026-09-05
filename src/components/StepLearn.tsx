import React from "react";
import { motion } from "framer-motion";
import Step from "./Step";
import { rise } from "../lib/motion";

const groups = [
  { label: "Langages", items: ["TypeScript", "Python", "C"] },
  { label: "Front & Mobile", items: ["React", "Flutter"] },
  { label: "Back-end", items: ["NestJS", "Laravel", "Django"] },
  { label: "Données", items: ["PostgreSQL", "MongoDB"] },
  { label: "Infrastructure", items: ["Docker"] },
];

const adaptable = [
  "Toute stack",
  "Tout framework",
  "Tout écosystème",
  "Nouveau langage",
];

const StepLearn: React.FC = () => {
  return (
    <Step
      id="competences"
      number="02"
      label="Compétences"
      title={
        <>
          Mes compétences ne se résument pas à un langage
          <span className="text-[var(--accent)]">.</span>
        </>
      }
      lede={
        <>
          Un langage n'est qu'un outil. Ce qui compte, c'est la logique, la
          conception et l'architecture qui le soutiennent. C'est pourquoi je
          peux apprendre n'importe quelle technologie rapidement et être
          productif dès les premières semaines.
        </>
      }
    >
      <div className="border-t">
        {groups.map((g) => (
          <motion.div
            key={g.label}
            variants={rise}
            className="grid grid-cols-1 gap-3 border-b py-5 sm:grid-cols-[10rem_1fr] sm:items-center sm:gap-6"
          >
            <span className="kicker">{g.label}</span>
            <div className="flex flex-wrap gap-2">
              {g.items.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={rise}
        className="mt-10 border border-[var(--line)] bg-[var(--bg-soft)] p-7"
      >
        <div className="flex items-center gap-3">
          <span className="marker" />
          <span className="kicker text-[var(--accent-ink)]">
            Appris rapidement, selon vos besoins
          </span>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {adaptable.map((t) => (
            <span key={t} className="tag-dashed">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </Step>
  );
};

export default StepLearn;
