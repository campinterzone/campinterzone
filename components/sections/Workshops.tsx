"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const workshops = [
  {
    title: "Buddhism & Meditation",
    description:
      "Morning sessions exploring Buddhist philosophy, mindfulness, and seated meditation. No experience required. Cushions provided.",
    time: "Mornings",
  },
  {
    title: "Yoga & Breathwork",
    description:
      "Movement and breath practice in the cooler morning air. Gentle enough for beginners, grounding enough to carry through the day.",
    time: "Mornings",
  },
  {
    title: "Board Games",
    description:
      "A rotating selection of games, from quick card games to longer strategy sessions. Drop in, drop out. Stakes are low; company is good.",
    time: "Afternoons",
  },
  {
    title: "Creative Activities",
    description:
      "Writing, drawing, and other impromptu creative sessions. Sometimes structured, sometimes not. The desert is a productive place.",
    time: "Variable",
  },
];

export default function Workshops() {
  return (
    <section id="workshops" className="bg-[#F5EDD8] py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] mb-6">
            Camp Offering
          </motion.p>
          <motion.div variants={fadeUp} className="w-16 border-t border-[#B85C38] mx-auto mb-10" />
          <motion.h2 variants={fadeUp} className="font-heading font-semibold uppercase tracking-[0.15em] text-[#1E120A] mb-6">
            Workshops &amp; Events
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-[#1E120A] text-lg leading-loose max-w-2xl mx-auto">
            Every day at the Interzone, something is happening. These are
            invitations, not obligations. Come for one, stay for all, or
            simply sit with your beer and let the sounds wash over you.
          </motion.p>
        </motion.div>

        {/* Workshop grid with hover effects */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#1E120A]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {workshops.map((w, i) => (
            <motion.div
              key={w.title}
              variants={fadeUp}
              className={`p-10 group hover:bg-[#1E120A] cursor-default
                ${i % 2 === 0 ? "border-r border-[#1E120A]" : ""}
                ${i < 2 ? "border-b border-[#1E120A]" : ""}`}
            >
              <span className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] group-hover:text-[#B85C38] border border-[#B85C38] px-3 py-1 inline-block mb-4">
                {w.time}
              </span>
              <h3 className="font-heading font-semibold uppercase tracking-[0.12em] text-[#1E120A] group-hover:text-[#F5EDD8] mb-4">
                {w.title}
              </h3>
              <p className="font-body text-[#1E120A] group-hover:text-[#EAD9B8] leading-loose">
                {w.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="border-t border-[#B85C38] mt-20" />
      </div>
    </section>
  );
}
