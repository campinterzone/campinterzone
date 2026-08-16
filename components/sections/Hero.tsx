"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0, 0, 0.2, 1];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col justify-end bg-[#1E120A]"
    >
      {/*
        The looping hero video is retained for later use — swap the still below
        for this block to bring it back:

        <video
          className="absolute inset-0 w-full h-full object-cover opacity-55"
          autoPlay muted loop playsInline
          poster="/images/gallery/camp-night.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Image
          src="/images/hero/hero-night.jpg"
          alt="Camp Interzone at night — the stretch tent under the neon sign"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[#1E120A] opacity-[0.42]" />

      <div className="relative flex flex-col gap-8 max-w-[64rem] px-6 md:px-[4.5rem] pt-36 md:pt-[9rem] pb-24 md:pb-[6.5rem]">
        {/* Leads the hero sequence, ahead of the headline at 700ms and the rule at 1400ms. */}
        <motion.img
          src="/logo.svg"
          alt="Camp Interzone"
          className="block w-[clamp(12rem,32vw,30rem)] h-auto invert mb-8"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
        />

        <motion.h1
          className="font-heading font-light uppercase tracking-[0.09em] leading-[1.04] text-white"
          style={{ fontSize: "clamp(1.9rem, 5.4vw, 4.8rem)" }}
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
        >
          A Hidden Caf&eacute;
          <br />
          <span className="text-[#C4A35A]">at the Edge</span>
          <br />
          of the Known World
        </motion.h1>

        <motion.div
          className="w-[12rem] border-t border-[#906558] origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 1.4, ease: EASE }}
        />
      </div>
    </section>
  );
}
