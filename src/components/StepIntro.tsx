import React from "react";
import { motion } from "framer-motion";
import profilePic from "./file.png";
import { rise, stagger } from "../lib/motion";
import { useNav } from "../lib/nav";

const facts = [
  { k: "Localisation", v: "Madagascar" },
  { k: "Focus", v: "Web · Backend · Mobile" },
  { k: "Statut", v: "Disponible" },
];

const StepIntro: React.FC = () => {
  const go = useNav();

  return (
    <section id="intro" className="step-section">
      <motion.div
        className="shell grid grid-cols-1 items-center gap-y-16 lg:grid-cols-12 lg:gap-x-20"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* ---------------------------------------------------------------- */}
        <div className="lg:col-span-7">
          <motion.div variants={rise} className="eyebrow">
            <span className="eyebrow-num">01</span>
            <span className="eyebrow-rule" />
            <span className="eyebrow-label">Ingénierie logicielle</span>
          </motion.div>

          <motion.h1
            variants={rise}
            className="display mt-8 text-[3rem] leading-[0.98] sm:text-[4rem] lg:text-[4.5rem] xl:text-[5rem]"
          >
            Derandrainy
            <br />
            <span className="text-[var(--ink-3)]">M. De Salles</span>
            <span className="ml-3 inline-block h-2.5 w-2.5 translate-y-[-0.35em] bg-[var(--accent)] align-middle" />
          </motion.h1>

          <motion.p
            variants={rise}
            className="lede mt-9 max-w-xl text-base sm:text-lg"
          >
            Ingénieur logiciel. Je conçois des applications pensées pour durer :
            bien architecturées, faciles à maintenir et prêtes à grandir — bien
            au-delà d'un simple langage.
          </motion.p>

          <motion.div
            variants={rise}
            className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <button
              type="button"
              onClick={() => go("projets")}
              className="btn btn-accent"
            >
              Voir les projets
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="square" strokeWidth={2} d="M4 12h16m0 0l-6-6m6 6l-6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go("contact")}
              className="btn btn-ghost"
            >
              Me contacter
            </button>
          </motion.div>

          <motion.dl
            variants={rise}
            className="mt-14 grid max-w-2xl grid-cols-1 border-t sm:grid-cols-3"
          >
            {facts.map((f) => (
              <div
                key={f.k}
                className="border-b py-5 sm:border-b-0 sm:border-r sm:pr-6 sm:last:border-r-0 sm:[&:not(:first-child)]:pl-6"
              >
                <dt className="kicker">{f.k}</dt>
                <dd className="mt-2 text-sm font-medium text-[var(--ink)]">
                  {f.v}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* ---------------------------------------------------------------- */}
        <motion.div
          variants={rise}
          className="hidden lg:col-span-5 lg:block"
        >
          <div className="group relative ml-auto w-full max-w-[22rem]">
            {/* offset accent frame — pure line work, no fill */}
            <span
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-full w-full border border-[var(--accent)]"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[var(--line-strong)] bg-[var(--bg-soft)]">
              <img
                src={profilePic}
                alt="Derandrainy M. De Salles"
                className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
            </div>
            <div className="relative flex items-center justify-between border border-t-0 border-[var(--line-strong)] bg-white px-4 py-3.5">
              <span className="kicker">Ingénieur logiciel</span>
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--accent-ink)]">
                MDG
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* scroll affordance */}
      <motion.div
        variants={rise}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.8 }}
        className="shell mt-16 flex items-center gap-3 text-[var(--ink-4)] lg:mt-20"
      >
        <span className="kicker">Défiler</span>
        <motion.svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path strokeLinecap="square" strokeWidth={2} d="M12 4v16m0 0l-6-6m6 6l6-6" />
        </motion.svg>
      </motion.div>
    </section>
  );
};

export default StepIntro;
