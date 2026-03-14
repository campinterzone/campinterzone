"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.5;
  }, []);

  return (
    <>
      {/* ── VIDEO SECTION ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-[#1E120A] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero/poster.jpg"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div className="absolute inset-0 bg-[#1E120A] opacity-40" />

        <motion.div
          className="relative z-10 max-w-6xl mx-auto px-6 py-32"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.img
            src="/logo.svg"
            alt="Interzone"
            className="mx-auto mb-12 h-16 md:h-24 w-auto"
            style={{ filter: "invert(1)" }}
            variants={fadeIn}
          />
          <motion.p
            variants={fadeUp}
            className="font-heading uppercase tracking-[0.3em] text-[#906558] text-sm mb-6"
          >
            Black Rock City &mdash; est. 2019
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-heading font-semibold uppercase tracking-[0.15em] mb-6"
            style={{ color: "#ffffff", fontSize: "clamp(1.6rem, 5vw, 4rem)" }}
          >
            A Hidden Café at the Edge of the Known World
          </motion.h1>
          <motion.div variants={fadeUp} className="w-24 border-t border-[#906558] mx-auto mb-8" />
          <motion.p
            variants={fadeUp}
            className="text-white text-lg md:text-xl max-w-xl mx-auto mb-12 text-balance"
            style={{ fontFamily: "'Courier New', Courier, monospace" }}
          >
            Somewhere in the dust, a lantern is on.
          </motion.p>
        </motion.div>
      </section>

      {/* ── INTERZONE INTRO ── */}
      <section className="relative overflow-hidden flex flex-col justify-center min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/tangier-map.jpg"
            alt="Vintage map of Tangier, Morocco"
            fill
            className="object-cover object-center"
            style={{ opacity: 0.18 }}
          />
        </div>
        <div className="absolute inset-0 bg-[#EDE8DF]" style={{ opacity: 0.72 }} />

        <div className="relative z-10 py-24 px-8">
          <div className="max-w-7xl mx-auto">

            {/* Closing statement */}
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <p className="font-heading font-light uppercase tracking-[0.2em] text-[#1E120A] leading-tight" style={{ fontSize: "clamp(1rem, 3vw, 3.5rem)" }}>
                You are free to remake yourself.
              </p>
              <p className="font-heading font-light uppercase tracking-[0.2em] text-[#906558] mt-2 leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}>
                Rewrite your history.
              </p>
              <p className="font-heading font-light uppercase tracking-[0.2em] text-[#1E120A] mt-2 leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}>
                Start over.
              </p>
            </motion.div>

            {/* Our Inspiration box */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <div
                className="border border-[#8B7355] p-10 md:p-14"
                style={{ backgroundColor: "#F0E8D0", fontFamily: "'Courier New', Courier, monospace" }}
              >
                <p className="text-[#1E120A] text-xs font-bold uppercase tracking-widest mb-6">Our Inspiration</p>
                <hr className="border-[#8B7355] mb-8" />
                <p className="text-[#1E120A] text-lg font-medium leading-loose mb-6">
                  Camp Interzone is inspired by this time and place. We seek to
                  recreate the atmosphere of a café hidden away in Tangier — because
                  this theme so closely mirrors Burning Man itself: a place of
                  tolerance, diversity, and artistic expression where one is free to
                  explore the human experience in all its forms.
                </p>
                <p className="text-[#1E120A] text-lg font-medium leading-loose">
                  It is said about Tangier that you can be anyone there. That is
                  what we offer on the playa.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
