import React from "react";
import { motion } from "framer-motion";
import Step from "./Step";
import { rise } from "../lib/motion";

const methods = [
  {
    kind: "Analyse",
    name: "Besoins & User Stories",
    desc: "Définition claire des attentes avec le client. Traduction des besoins en User Stories pour s'assurer que chaque fonctionnalité apporte de la valeur.",
    items: ["Ateliers", "Backlog", "User Stories"],
  },
  {
    kind: "Développement",
    name: "Livraison Itérative",
    desc: "Développement par petits cycles (sprints). Livraisons régulières permettant d'ajuster le produit rapidement et de valider les hypothèses.",
    items: ["Agile", "Sprints", "CI/CD"],
  },
  {
    kind: "Suivi",
    name: "Communication",
    desc: "Points réguliers avec les utilisateurs et clients. Transparence sur l'avancement et feedbacks fréquents pour rester aligné sur les objectifs.",
    items: ["Feedbacks", "Démos", "Transparence"],
  },
];

const StepDesign: React.FC = () => {
  return (
    <Step
      id="approche"
      number="05"
      label="Approche"
      title={
        <>
          Méthode de travail
          <span className="text-[var(--accent)]">.</span>
        </>
      }
      lede="Mon processus de développement est centré sur l'utilisateur : de l'analyse initiale jusqu'à la livraison continue."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {methods.map((m) => (
          <motion.article key={m.name} variants={rise} className="card flex flex-col p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="kicker">{m.kind}</span>
              <span className="h-px flex-1 bg-[var(--line)]" />
            </div>

            <h3 className="display mt-6 text-2xl">{m.name}</h3>

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
