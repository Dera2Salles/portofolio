import React from "react";
import { motion } from "framer-motion";
import Step from "./Step";
import { rise } from "../lib/motion";

interface Experience {
  period: string;
  role: string;
  org: string;
  description: string;
  stack: string[];
  /** true = poste en cours, marqué d'un point d'état vert. */
  current?: boolean;
}

/* --------------------------------------------------------------------------
 * TODO — Remplace ces entrées par ton parcours réel (emplois, missions,
 * freelance, alternance, projets académiques marquants). L'ordre du tableau
 * est l'ordre d'affichage : le plus récent en premier.
 * ------------------------------------------------------------------------ */
const experiences: Experience[] = [
  {
    period: "2025 — Aujourd'hui",
    role: "Intitulé du poste",
    org: "Entreprise ou client",
    description:
      "Ce dont tu es responsable, les systèmes sur lesquels tu interviens, et un résultat concret que tu peux défendre en entretien.",
    stack: ["TypeScript", "NestJS", "PostgreSQL"],
    current: true,
  },
  {
    period: "2024 — 2025",
    role: "Intitulé du poste",
    org: "Entreprise ou client",
    description:
      "Ce dont tu étais responsable, et ce que ton passage a changé pour l'équipe ou le produit.",
    stack: ["React", "Django"],
  },
  {
    period: "2023 — 2024",
    role: "Formation ou première expérience",
    org: "École, université ou premier client",
    description:
      "Le socle : conception, algorithmique, premiers projets livrés.",
    stack: ["C", "Python"],
  },
];

const StepExperience: React.FC = () => {
  return (
    <Step
      id="experiences"
      number="04"
      label="Expériences"
      title={
        <>
          Un parcours, pas une liste
          <span className="text-[var(--accent)]">.</span>
        </>
      }
      lede="Chaque étape a ajouté une couche : d'abord écrire du code juste, puis le structurer, puis le faire tenir à l'échelle."
    >
      <ol className="relative border-l border-[var(--line-strong)]">
        {experiences.map((e) => (
          <motion.li
            key={`${e.period}-${e.role}`}
            variants={rise}
            className="group relative pb-12 pl-8 last:pb-0 sm:pl-10"
          >
            <span
              aria-hidden="true"
              className={`absolute left-0 top-[0.45rem] h-2 w-2 -translate-x-1/2 transition-colors duration-300 ${
                e.current
                  ? "bg-[var(--accent)]"
                  : "bg-[var(--line-strong)] group-hover:bg-[var(--accent)]"
              }`}
            />

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent-ink)]">
                {e.period}
              </span>
              {e.current && (
                <span className="flex items-center gap-2.5 border border-[var(--accent)] px-2.5 py-1">
                  <span className="status-dot" />
                  <span className="kicker text-[var(--accent-ink)]">
                    En poste
                  </span>
                </span>
              )}
            </div>

            <h3 className="display mt-4 text-xl sm:text-2xl">{e.role}</h3>

            <p className="mt-1.5 text-sm font-medium text-[var(--ink-3)]">
              {e.org}
            </p>

            <p className="lede mt-4 max-w-2xl text-sm">{e.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {e.stack.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </motion.li>
        ))}
      </ol>
    </Step>
  );
};

export default StepExperience;
