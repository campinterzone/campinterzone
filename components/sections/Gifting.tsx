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

export default function Gifting() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.5;
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden bg-[#1E120A] min-h-screen flex flex-col justify-center">

      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/Burning Man 2024 Video.MOV" type="video/mp4" />
        <source src="/videos/Burning Man 2024 Video.MOV" type="video/quicktime" />
      </video>
      <div className="absolute inset-0 bg-[#1E120A]" style={{ opacity: 0.6 }} />

      <div className="relative z-10 py-16 md:py-32 px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {/* Letter-style callout box — transparent background */}
            <motion.div
              variants={fadeUp}
              className="border border-white/30 p-10 md:p-14 text-left mb-10"
              style={{ fontFamily: "'Courier New', Courier, monospace", backgroundColor: "rgba(0,0,0,0.15)" }}
            >
              <p className="text-white text-lg font-bold uppercase tracking-widest mb-6">
                We&apos;re Not Hard to Find
              </p>
              <hr className="border-white opacity-30 mb-8" />
              <p className="text-white text-base font-medium leading-loose mb-6">
                We&apos;re somewhere on the playa. Look for the lantern. Ask someone who looks
                like they&apos;ve read a good book recently. They&apos;ll know.
              </p>
              <p className="text-white text-base font-medium leading-loose mb-8">
                If you&apos;d like to camp with us, donate books, or just say hello before the dust
                starts — send a letter. We accept electronic correspondence too, reluctantly.
              </p>
              <a
                href="/join"
                className="inline-block font-heading uppercase tracking-[0.2em] text-sm px-10 py-4 border border-white text-white hover:bg-white hover:text-[#1E120A] transition-colors duration-150"
              >
                Get in Touch
              </a>
            </motion.div>

          </motion.div>

        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="border-t border-[#906558]" />
      </div>
    </section>
  );
}
