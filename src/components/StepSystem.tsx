import React from "react";
import { motion } from "framer-motion";
import Step from "./Step";
import { rise } from "../lib/motion";

const topics = [
  {
    name: "Load balancing",
    desc: "Répartir la charge pour des temps de réponse stables.",
  },
  {
    name: "Mise en cache",
    desc: "Réduire la latence sur les accès fréquents.",
  },
  {
    name: "Bases de données & indexation",
    desc: "Passer à l'échelle sans ralentir les requêtes.",
  },
  {
    name: "Files de messages",
    desc: "Découpler les services et absorber les pics de trafic.",
  },
  {
    name: "Observabilité",
    desc: "Mesurer, diagnostiquer et améliorer en continu.",
  },
];

const StepSystem: React.FC = () => {
  return (
    <Step
      id="system-design"
      number="07"
      label="System Design"
      title={
        <>
          Des applications pensées pour la scale
          <span className="text-[var(--accent)]">.</span>
        </>
      }
      lede="La maîtrise du system design permet de concevoir des architectures robustes et scalables : vos applications restent fluides, disponibles et maintenables quand elles grandissent."
    >
      <div className="border-t">
        {topics.map((t, i) => (
          <motion.div
            key={t.name}
            variants={rise}
            className="group grid grid-cols-[2.5rem_1fr] items-start gap-x-4 border-b py-6 transition-colors duration-300 hover:bg-[var(--bg-soft)] sm:grid-cols-[3.5rem_1fr] sm:px-2"
          >
            <span className="font-mono text-[11px] font-semibold tracking-[0.1em] text-[var(--ink-4)] transition-colors duration-300 group-hover:text-[var(--accent-ink)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-[0.9375rem] font-semibold text-[var(--ink)]">
                {t.name}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink-3)]">
                {t.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Step>
  );
};

export default StepSystem;
