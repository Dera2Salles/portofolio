import React from "react";
import { motion } from "framer-motion";
import Step from "./Step";
import { rise } from "../lib/motion";

interface Project {
  year: string;
  name: string;
  role: string;
  description: string;
  stack: string[];
  /** Laisse une chaîne vide pour masquer le lien. */
  href: string;
}

/* --------------------------------------------------------------------------
 * TODO — Remplace ces entrées par tes vrais projets.
 * Le premier élément du tableau est affiché en pleine largeur (projet phare) ;
 * les suivants passent en grille deux colonnes. Ajoute, retire ou réordonne
 * librement : la mise en page s'adapte au nombre d'entrées.
 * ------------------------------------------------------------------------ */
const projects: Project[] = [
  {
    year: "2025",
    name: "Projet phare",
    role: "Conception · Architecture · Développement",
    description:
      "Deux à trois phrases : le problème résolu, ce que tu as construit, les décisions d'architecture qui comptent, et le résultat mesurable (utilisateurs, temps de réponse, volume traité).",
    stack: ["React", "NestJS", "PostgreSQL", "Docker"],
    href: "",
  },
  {
    year: "2024",
    name: "Deuxième projet",
    role: "Développeur back-end",
    description:
      "Une à deux phrases décrivant le périmètre, ton rôle exact et l'impact concret.",
    stack: ["Django", "PostgreSQL"],
    href: "",
  },
  {
    year: "2024",
    name: "Troisième projet",
    role: "Développeur mobile",
    description:
      "Une à deux phrases décrivant le périmètre, ton rôle exact et l'impact concret.",
    stack: ["Flutter", "MongoDB"],
    href: "",
  },
];

const Arrow = () => (
  <svg
    width="15"
    height="15"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="square" strokeWidth={2} d="M7 17L17 7m0 0H8m9 0v9" />
  </svg>
);

const StepProjects: React.FC = () => {
  return (
    <Step
      id="projets"
      number="03"
      label="Projets"
      title={
        <>
          Ce que j'ai construit
          <span className="text-[var(--accent)]">.</span>
        </>
      }
      lede="Une sélection de réalisations, choisies pour ce qu'elles disent des décisions techniques prises plutôt que pour leur nombre."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((p, i) => {
          const featured = i === 0;
          return (
            <motion.article
              key={p.name}
              variants={rise}
              className={`card group flex flex-col p-7 sm:p-8 ${
                featured ? "md:col-span-2" : ""
              }`}
            >
              <header className="flex items-start justify-between gap-6">
                <div className="flex items-center gap-3">
                  <span className="eyebrow-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="eyebrow-rule" />
                  <span className="kicker">{p.year}</span>
                </div>
                {p.href && (
                  <span className="text-[var(--ink-4)] transition-colors duration-200 group-hover:text-[var(--accent-ink)]">
                    <Arrow />
                  </span>
                )}
              </header>

              <h3
                className={`display mt-6 ${
                  featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                }`}
              >
                {p.name}
              </h3>

              <p className="kicker mt-3 normal-case tracking-[0.08em]">
                {p.role}
              </p>

              <p
                className={`lede mt-5 mb-8 text-sm ${
                  featured ? "max-w-2xl" : ""
                }`}
              >
                {p.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2 border-t pt-6">
                {p.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>

              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link mt-6 inline-flex w-fit items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em]"
                >
                  Voir le projet
                  <Arrow />
                </a>
              )}
            </motion.article>
          );
        })}
      </div>
    </Step>
  );
};

export default StepProjects;
