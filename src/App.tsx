import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from "framer-motion";
import StepIntro from "./components/StepIntro";
import StepLearn from "./components/StepLearn";
import StepProjects from "./components/StepProjects";
import StepExperience from "./components/StepExperience";
import StepDesign from "./components/StepDesign";
import StepArchitecture from "./components/StepArchitecture";
import StepSystem from "./components/StepSystem";
import StepContact from "./components/StepContact";
import { NavContext } from "./lib/nav";
import { EASE } from "./lib/motion";

const steps = [
  { id: "intro", label: "Intro", Component: StepIntro },
  { id: "competences", label: "Compétences", Component: StepLearn },
  { id: "projets", label: "Projets", Component: StepProjects },
  { id: "experiences", label: "Expériences", Component: StepExperience },
  { id: "conception", label: "Conception", Component: StepDesign },
  { id: "architecture", label: "Architecture", Component: StepArchitecture },
  { id: "system-design", label: "System Design", Component: StepSystem },
  { id: "contact", label: "Contact", Component: StepContact },
];

// Distance (px) a wheel tick / swipe must cover before it's treated as intent.
const WHEEL_THRESHOLD = 12;
const SWIPE_THRESHOLD = 56;
const EDGE_TOLERANCE = 2;

/** Aligns fixed chrome with the .shell content column. */
const GUTTER = "clamp(1.5rem, 5vw, 6rem)";

/** The side rail lives outside the content column, hard against the edge. */
const RAIL_GUTTER = "clamp(1rem, 2.5vw, 3rem)";

/** Deep links: /#projets opens straight on that panel. */
const indexFromHash = () => {
  const id = window.location.hash.replace("#", "");
  const i = steps.findIndex((s) => s.id === id);
  return i === -1 ? 0 : i;
};

const Chevron: React.FC<{ up?: boolean }> = ({ up }) => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      strokeLinecap="square"
      strokeWidth={2}
      d={up ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"}
    />
  </svg>
);

const App: React.FC = () => {
  const [active, setActive] = useState(indexFromHash);
  const activeRef = useRef(active);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const isLocked = useRef(false);
  const touchStartY = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const transitionDuration = prefersReducedMotion ? 0.18 : 0.55;

  const navigate = useCallback(
    (index: number) => {
      if (index < 0 || index > steps.length - 1) return;
      if (index === activeRef.current || isLocked.current) return;
      isLocked.current = true;
      setActive(index);
      window.history.replaceState(null, "", `#${steps[index].id}`);
      window.setTimeout(
        () => {
          isLocked.current = false;
        },
        (transitionDuration + 0.12) * 1000
      );
    },
    [transitionDuration]
  );

  const goById = useCallback(
    (id: string) => {
      const index = steps.findIndex((s) => s.id === id);
      if (index !== -1) navigate(index);
    },
    [navigate]
  );

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isLocked.current) {
        e.preventDefault();
        return;
      }
      if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return;

      const panel = panelRef.current;
      if (!panel) return;

      const goingDown = e.deltaY > 0;
      const atTop = panel.scrollTop <= EDGE_TOLERANCE;
      const atBottom =
        panel.scrollTop + panel.clientHeight >=
        panel.scrollHeight - EDGE_TOLERANCE;

      if (goingDown && atBottom && activeRef.current < steps.length - 1) {
        e.preventDefault();
        navigate(activeRef.current + 1);
      } else if (!goingDown && atTop && activeRef.current > 0) {
        e.preventDefault();
        navigate(activeRef.current - 1);
      }
      // otherwise: let the panel scroll natively inside its own content
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isLocked.current) return;
      const panel = panelRef.current;
      if (!panel) return;

      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) < SWIPE_THRESHOLD) return;

      const atTop = panel.scrollTop <= EDGE_TOLERANCE;
      const atBottom =
        panel.scrollTop + panel.clientHeight >=
        panel.scrollHeight - EDGE_TOLERANCE;

      if (delta > 0 && atBottom && activeRef.current < steps.length - 1) {
        navigate(activeRef.current + 1);
      } else if (delta < 0 && atTop && activeRef.current > 0) {
        navigate(activeRef.current - 1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;
      if (isLocked.current) return;

      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        navigate(activeRef.current + 1);
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        navigate(activeRef.current - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        navigate(0);
      } else if (e.key === "End") {
        e.preventDefault();
        navigate(steps.length - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  const ActiveComponent = steps[active].Component;
  const progress = useMemo(
    () => ((active + 1) / steps.length) * 100,
    [active]
  );

  return (
    <MotionConfig reducedMotion="user">
      <NavContext.Provider value={goById}>
        <div className="fixed inset-0 h-[100dvh] w-screen overflow-hidden bg-[var(--bg)] text-[var(--ink)]">
          {/* ---------------------------------------------------------- header */}
          <header className="fixed inset-x-0 top-0 z-50 border-b bg-white/85 backdrop-blur-md">
            <div className="shell flex h-16 items-center justify-between gap-6 sm:h-[4.5rem]">
              <button
                type="button"
                onClick={() => navigate(0)}
                className="group flex items-center gap-3.5"
                aria-label="Revenir à l'introduction"
              >
                <span className="flex h-8 w-8 items-center justify-center border border-[var(--ink)] font-mono text-[11px] font-semibold text-[var(--ink)] transition-colors duration-200 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]">
                  DS
                </span>
                <span className="hidden font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--ink-2)] sm:block">
                  Derandrainy M. De&nbsp;Salles
                </span>
              </button>

              <div className="flex items-center gap-6">
                <span className="hidden items-center gap-2.5 lg:flex">
                  <span className="status-dot" />
                  <span className="kicker">Disponible</span>
                </span>
                <button
                  type="button"
                  onClick={() => goById("contact")}
                  className="btn btn-accent btn-sm"
                >
                  Contact
                </button>
              </div>
            </div>
          </header>

          {/* ----------------------------------------------------------- panel */}
          <AnimatePresence initial={false}>
            <motion.div
              key={steps[active].id}
              ref={panelRef}
              className="absolute inset-0 h-full w-full overflow-y-auto overscroll-none"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: transitionDuration, ease: EASE }}
            >
              <ActiveComponent />
            </motion.div>
          </AnimatePresence>

          {/* Screen-reader announcement of the current section */}
          <div className="sr-only" aria-live="polite">
            {`Section ${active + 1} sur ${steps.length} : ${steps[active].label}`}
          </div>

          {/* ------------------------------------------------------ side rail */}
          <nav
            aria-label="Sections"
            className="fixed top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 md:flex"
            style={{ right: RAIL_GUTTER }}
          >
            {steps.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => navigate(i)}
                aria-label={`Aller à la section ${s.label}`}
                aria-current={i === active ? "true" : undefined}
                className="group flex items-center justify-end gap-4 py-1"
              >
                <span
                  className={`pointer-events-none whitespace-nowrap font-mono text-[10px] font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
                    i === active
                      ? "text-[var(--ink)] opacity-100"
                      : "translate-x-1 text-[var(--ink-4)] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  }`}
                >
                  {s.label}
                </span>
                <span
                  className={`block h-[2px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    i === active
                      ? "w-8 bg-[var(--accent)]"
                      : "w-4 bg-[var(--line-strong)] group-hover:w-6 group-hover:bg-[var(--ink-3)]"
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* -------------------------------------------------- step counter */}
          <div
            className="pointer-events-none fixed bottom-8 z-40 hidden items-center gap-5 sm:flex"
            style={{ left: GUTTER }}
          >
            <span className="flex items-baseline gap-2 font-mono text-[11px] font-medium tracking-[0.1em]">
              <span className="text-[var(--ink)]">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="text-[var(--ink-4)]">/</span>
              <span className="text-[var(--ink-4)]">
                {String(steps.length).padStart(2, "0")}
              </span>
            </span>
            <span className="hidden h-px w-8 bg-[var(--line-strong)] lg:block" />
            <span className="kicker hidden lg:block">
              Flèches ou molette pour naviguer
            </span>
          </div>

          {/* --------------------------------------- mobile prev / next pager */}
          <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => navigate(active - 1)}
              disabled={active === 0}
              aria-label="Section précédente"
              className="flex h-11 w-11 items-center justify-center border border-[var(--line-strong)] bg-white text-[var(--ink)] transition-colors duration-200 disabled:opacity-30 active:bg-[var(--bg-soft)]"
            >
              <Chevron up />
            </button>
            <button
              type="button"
              onClick={() => navigate(active + 1)}
              disabled={active === steps.length - 1}
              aria-label="Section suivante"
              className="flex h-11 w-11 items-center justify-center border border-[var(--accent)] bg-[var(--accent)] text-[var(--ink)] transition-colors duration-200 disabled:border-[var(--line-strong)] disabled:bg-white disabled:opacity-30"
            >
              <Chevron />
            </button>
          </div>

          {/* ------------------------------------------------- progress rail */}
          <div className="fixed inset-x-0 bottom-0 z-50 h-[2px] bg-[var(--line-2)]">
            <motion.div
              className="h-full bg-[var(--accent)]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.6, ease: EASE }}
            />
          </div>
        </div>
      </NavContext.Provider>
    </MotionConfig>
  );
};

export default App;
