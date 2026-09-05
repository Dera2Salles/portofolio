import React from "react";
import { motion } from "framer-motion";
import { rise, stagger, staggerTight } from "../lib/motion";

interface StepProps {
  id: string;
  number: string;
  label: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Shared shell for every content section.
 *
 * Desktop uses a 4 / 8 editorial split: the section identity (number, label,
 * title, lede) sits in a narrow left column, the substance in a wide right
 * column separated by a single hairline. Below `lg` the two stack and the
 * hairline becomes a horizontal rule, so the reading order never changes.
 */
const Step: React.FC<StepProps> = ({
  id,
  number,
  label,
  title,
  lede,
  children,
}) => {
  return (
    <section id={id} className="step-section">
      <motion.div
        className="shell grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-16 xl:gap-x-20"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <div className="lg:col-span-4">
          <motion.div variants={rise} className="eyebrow">
            <span className="eyebrow-num">{number}</span>
            <span className="eyebrow-rule" />
            <span className="eyebrow-label">{label}</span>
          </motion.div>

          <motion.h2
            variants={rise}
            className="display mt-7 text-[2rem] sm:text-[2.5rem] lg:text-[2.25rem] xl:text-[2.5rem]"
          >
            {title}
          </motion.h2>

          {lede && (
            <motion.p
              variants={rise}
              className="lede mt-7 max-w-xl text-[0.9375rem] sm:text-base"
            >
              {lede}
            </motion.p>
          )}
        </div>

        <motion.div
          variants={staggerTight}
          className="border-t pt-12 lg:col-span-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16 xl:pl-20"
        >
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Step;
