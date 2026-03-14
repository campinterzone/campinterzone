"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const drawerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const drawers = [
  { label: "Beat Generation", range: "BEAT — BURROUGHS" },
  { label: "Travel & Exploration", range: "TRAVEL — BOWLES" },
  { label: "Literature & Fiction", range: "LIT. — FICTION" },
  { label: "Philosophy & Buddhism", range: "PHIL. — BUDDHISM" },
  { label: "Poetry", range: "POETRY — VERSE" },
  { label: "Art & Photography", range: "ART — PHOTO." },
  { label: "History & Culture", range: "HIST. — CULTURE" },
  { label: "Mysteries & Noir", range: "MYSTERY — NOIR" },
];

const dueDates = [
  { due: "AUG 26 23", returned: "SEP 4 23" },
  { due: "AUG 27 23", returned: "SEP 1 23" },
  { due: "AUG 28 24", returned: "SEP 2 24" },
  { due: "AUG 26 24", returned: "——————" },
  { due: "——————", returned: "" },
  { due: "——————", returned: "" },
];

export default function Library() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.5;
  }, []);

  return (
    <section id="library">

      {/* ── CINEMATIC VIDEO HEADER ── */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/lost times library.MOV" type="video/mp4" />
          <source src="/videos/lost times library.MOV" type="video/quicktime" />
        </video>
        <div className="absolute inset-0 bg-[#1E120A]" style={{ opacity: 0.55 }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pt-20 pb-40">

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-20 items-center">

            {/* ── LEFT: Heading + Description text ── */}
            <motion.div
              className="text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeUp}
                className="mb-8"
                style={{ fontFamily: "'Courier New', Courier, monospace", letterSpacing: "0.1em", fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "#ffffff", textTransform: "uppercase", fontWeight: 700, lineHeight: 1.1 }}
              >
                Lost Times Library
              </motion.h2>
              <motion.div variants={fadeUp} className="w-16 border-t border-[#906558] mb-10" />
              <motion.p variants={fadeUp} className="font-body text-white text-xl leading-loose">
                The Lost Times Library is a collection of books, freely given in the middle of Black Rock City.
                Browse the shelves. Take what calls to you. Leave something behind
                if you like — though nothing is required. A book is a gift.
                We offer many.
              </motion.p>
            </motion.div>

            {/* ── RIGHT: Polaroid photo, tilted ── */}
            <motion.div
              className="hidden md:block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              style={{ transform: "rotate(-3deg) translateY(-8px) scale(0.34)" }}
            >
              <div className="bg-white p-6 pb-14">
                <Image
                  src="/images/gallery/library-sign.jpg"
                  alt="The Lost Times Library sign at dawn"
                  width={600}
                  height={700}
                  className="block w-full object-cover"
                />
                <p className="text-center text-[#6B5045] uppercase tracking-widest mt-3" style={{ fontFamily: "'Courier New', monospace", fontSize: "1.4rem" }}>
                  Lost Times Library — BRC
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── PARCHMENT CONTENT ── */}
      <div className="bg-[#E0D5C5] py-28 px-6">
        <div className="max-w-7xl mx-auto">

          {/* ── CARD CATALOG CABINET ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="relative z-10"
          >
            {/* Cabinet top rail */}
            <div className="bg-[#5C3A1E] border-2 border-[#3D2610] py-2 px-6 flex items-center justify-between">
              <span className="font-heading uppercase tracking-widest text-xs text-[#C4A35A]">
                Lost Times Library
              </span>
              <span className="font-heading uppercase tracking-widest text-xs text-[#C4A35A]">
                Subject Catalogue
              </span>
            </div>

            {/* Drawer grid */}
            <div className="bg-[#7A4F2A] border-2 border-t-0 border-[#3D2610] p-4 grid grid-cols-1 md:grid-cols-4 gap-3">
              {drawers.map((drawer, i) => (
                <motion.div
                  key={drawer.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10px" }}
                  variants={drawerVariants}
                  className="group cursor-pointer"
                >
                  <div
                    className="bg-[#8B5E3C] border border-[#5C3A1E] p-3 flex flex-col items-center gap-2
                      group-hover:-translate-y-2 group-hover:shadow-[0_4px_0_#3D2610]"
                    style={{ transition: "transform 0.15s ease, box-shadow 0.15s ease" }}
                  >
                    <div className="self-end border border-[#C4A35A] bg-[#EDE8DF] px-1.5 py-0.5 min-w-[2rem] text-center">
                      <span className="font-heading text-[9px] text-[#1E120A]">{i + 1}</span>
                    </div>
                    <div className="w-full border-2 border-[#C4A35A] bg-[#EDE8DF] px-2 py-1.5">
                      <p className="font-heading uppercase tracking-wide text-[11px] md:text-[8px] text-[#6B5045] leading-tight">
                        {drawer.range}
                      </p>
                      <p className="font-heading uppercase tracking-wider text-[13px] md:text-[9px] text-[#1E120A] font-semibold leading-snug mt-0.5">
                        {drawer.label}
                      </p>
                    </div>
                    <div className="w-8 h-3 border-2 border-[#C4A35A] bg-[#D4AF5A]" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Cabinet bottom rail */}
            <div className="bg-[#5C3A1E] border-2 border-t-0 border-[#3D2610] py-2 px-6">
              <span className="font-heading uppercase tracking-widest text-[9px] text-[#C4A35A]">
                Black Rock City Branch &mdash; Open Daily
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
