"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Button from "@/components/Button";

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
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-[#1E120A] overflow-hidden">
      {/* Video background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <video
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1E120A] opacity-40" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 py-32"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Logo */}
        <motion.img
          src="/logo.svg"
          alt="Interzone"
          className="mx-auto mb-12 h-16 md:h-24 w-auto"
          style={{ filter: "invert(1)" }}
          variants={fadeIn}
        />

        {/* Location */}
        <motion.p
          variants={fadeUp}
          className="font-heading uppercase tracking-[0.3em] text-[#B85C38] text-sm mb-6"
        >
          Black Rock City &mdash; est. 2019
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-heading font-semibold uppercase tracking-[0.15em] text-[#F5EDD8] mb-6"
        >
          A Hidden Café at the Edge of the Known World
        </motion.h1>

        {/* Rule */}
        <motion.div variants={fadeUp} className="w-24 border-t border-[#B85C38] mx-auto mb-8" />

        {/* Sub-tagline */}
        <motion.p
          variants={fadeUp}
          className="font-body text-[#EAD9B8] text-lg md:text-xl max-w-xl mx-auto mb-12 leading-loose"
        >
          Free books. Cold beer. Live music. Open doors.
          <br />
          Somewhere in the dust, a lantern is on.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#story" variant="filled">Enter the Zone</Button>
          <Button href="#library" variant="outline">Visit the Library</Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="font-heading uppercase tracking-widest text-xs text-[#6B4C35]">
          Scroll
        </span>
        <motion.div
          className="h-8 w-px bg-[#B85C38]"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
