"use client";

import { useEffect, useRef } from "react";
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

export default function LoudHours() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.6;
  }, []);

  return (
    <section id="loud-hours" className="relative overflow-hidden bg-[#1E120A]">

      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/library loud hours 2.MOV" type="video/mp4" />
        <source src="/videos/library loud hours 2.MOV" type="video/quicktime" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1E120A]" style={{ opacity: 0.6 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="mb-6"
            style={{ fontFamily: "'Courier New', Courier, monospace", letterSpacing: "0.1em", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#ffffff", textTransform: "uppercase", fontWeight: 700 }}
          >
            Library Loud Hours
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-body text-lg leading-loose max-w-3xl mx-auto mb-20"
            style={{ color: "#ffffff" }}
          >
            Once a day — usually the afternoon, when the heat has settled into
            something almost tolerable — the library goes loud. Music.
            Cold draft beer, gifted, no transaction required. The books stay
            on the shelves, the people come out, and for a few hours the dust
            itself seems to have an opinion about the rhythm section.
          </motion.p>
        </motion.div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="border-t border-[#906558]" />
      </div>
    </section>
  );
}
