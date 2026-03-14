"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function About() {
  return (
    <section id="story" className="relative overflow-hidden flex flex-col justify-center min-h-[80vh]">

      {/* ── MAP BACKGROUND ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/tangier-map.jpg"
          alt="Vintage map of Tangier, Morocco"
          fill
          className="object-cover object-center"
          style={{ opacity: 0.18 }}
        />
      </div>
      {/* Warm parchment tint over map */}
      <div className="absolute inset-0 bg-[#EDE8DF]" style={{ opacity: 0.72 }} />

      {/* ── CONTENT ── */}
      <div className="relative z-10 py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section label */}
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading font-light uppercase tracking-[0.15em] text-[#1E120A]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.15em" }}
            >
              The International Zone
            </motion.h2>
          </motion.div>

          {/* Opening — full width */}
          <motion.p
            className="font-body text-[#1E120A] text-xl leading-relaxed text-left max-w-3xl mx-auto mb-10 italic"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            Interzone is based on Tangier, Morocco&apos;s International Zone — a city that existed
            outside the laws of any nation, and became, for a time, the freest place on earth.
          </motion.p>

          {/* History paragraphs — single column, full width */}
          <motion.div
            className="mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="font-body text-[#1E120A] leading-loose max-w-3xl mx-auto">
              <p className="mb-6">
                Tangier existed in some form as an international territory from
                1912 to 1956 — though it wasn&apos;t until 1923 that the European
                powers formally agreed to designate it a self-governed neutral
                zone. Due to its importance as a trading port, many nations had
                vied for control. Eventually they settled on shared governance:
                a city that belonged to no one, and therefore to everyone.
              </p>
              <p className="mb-6">
                This important status — both as a port city and a diplomatic
                neutral zone — allowed an open society to flourish. One that
                blended every culture passing through it, free from the judgment
                of the outside world. It was returned to Morocco in 1956.
              </p>
              <p className="mb-6">
                That bohemian atmosphere quickly drew writers, artists, and
                musicians. William Burroughs wrote{" "}
                <em>Naked Lunch</em> there. Paul Bowles never left. Allen
                Ginsberg passed through. The city gained a reputation for
                hedonism and became a destination for travelers seeking the
                things illegal or frowned upon elsewhere.
              </p>
              <p>
                Its tolerance also made it a haven for gay men at a time when
                very few places on earth offered the same. In Tangier, you
                could be anyone. That was the point.
              </p>
            </motion.div>
          </motion.div>

          <div className="border-t border-[#906558] mt-4" />
        </div>
      </div>
    </section>
  );
}
