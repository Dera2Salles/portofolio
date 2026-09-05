import React from "react";
import { motion } from "framer-motion";
import { rise, stagger } from "../lib/motion";
import { useNav } from "../lib/nav";

const EMAIL = "dera.ah.14@gmail.com";

/* TODO — Ajoute ici tes profils publics quand tu veux les afficher :
   { label: "GitHub", value: "@ton-pseudo", href: "https://github.com/..." } */
const details = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "Localisation", value: "Madagascar · UTC+3", href: "" },
  {
    label: "Disponibilité",
    value: "Ouvert aux collaborations internationales",
    href: "",
  },
];

const StepContact: React.FC = () => {
  const go = useNav();

  return (
    <section id="contact" className="step-section">
      <motion.div
        className="shell"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={rise} className="eyebrow">
          <span className="eyebrow-num">08</span>
          <span className="eyebrow-rule" />
          <span className="eyebrow-label">Contact</span>
        </motion.div>

        <motion.h2
          variants={rise}
          className="display mt-8 max-w-4xl text-[2.5rem] sm:text-[3.5rem] lg:text-[4.25rem]"
        >
          Travaillons ensemble
          <span className="text-[var(--accent)]">.</span>
        </motion.h2>

        <motion.p variants={rise} className="lede mt-8 max-w-xl text-base sm:text-lg">
          Vous avez un projet à concevoir, à architecturer ou à faire passer à
          l'échelle ? Parlons-en.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-20">
          <motion.div variants={rise} className="lg:col-span-5">
            <a href={`mailto:${EMAIL}`} className="btn btn-accent w-full sm:w-auto">
              Écrire un message
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="square" strokeWidth={2} d="M4 12h16m0 0l-6-6m6 6l-6 6" />
              </svg>
            </a>
            <p className="mt-6 flex items-center gap-2.5">
              <span className="status-dot" />
              <span className="kicker">Disponible pour de nouveaux projets</span>
            </p>
          </motion.div>

          <motion.dl variants={rise} className="border-t lg:col-span-7">
            {details.map((d) => (
              <div
                key={d.label}
                className="grid grid-cols-1 gap-1 border-b py-5 sm:grid-cols-[9rem_1fr] sm:items-baseline sm:gap-6"
              >
                <dt className="kicker">{d.label}</dt>
                <dd className="text-sm font-medium text-[var(--ink)]">
                  {d.href ? (
                    <a href={d.href} className="link">
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.footer
          variants={rise}
          className="mt-20 flex flex-col items-start justify-between gap-5 border-t pt-8 sm:flex-row sm:items-center"
        >
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--ink-2)]">
            Derandrainy Marie Martinot De Salles
          </p>
          <div className="flex items-center gap-6">
            <p className="font-mono text-[11px] text-[var(--ink-4)]">
              © {new Date().getFullYear()} — Tous droits réservés
            </p>
            <button
              type="button"
              onClick={() => go("intro")}
              className="link font-mono text-[11px] font-semibold uppercase tracking-[0.14em]"
            >
              Haut de page
            </button>
          </div>
        </motion.footer>
      </motion.div>
    </section>
  );
};

export default StepContact;
