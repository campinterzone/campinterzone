"use client";

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
  return (
    <section id="gifting" className="bg-[#EAD9B8] py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] mb-6">
            Our Philosophy
          </motion.p>
          <motion.div variants={fadeUp} className="w-16 border-t border-[#B85C38] mx-auto mb-10" />
          <motion.h2 variants={fadeUp} className="font-heading font-semibold uppercase tracking-[0.15em] text-[#1E120A] mb-10">
            The Gift
          </motion.h2>
        </motion.div>

        <motion.blockquote
          className="border-l-4 border-[#B85C38] pl-8 text-left mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <p className="font-body text-[#1E120A] text-xl leading-loose italic">
            &ldquo;The economy of the Interzone is the economy of the gift.
            Nothing is for sale here. Everything is offered without
            expectation of return. You are not a customer. You are not a
            visitor. You are a guest — and a guest, in Tangier as on the
            playa, is sacred.&rdquo;
          </p>
        </motion.blockquote>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="font-body text-[#1E120A] text-lg leading-loose mb-8">
            The books in our library are yours to keep. The beer at Loud Hours
            is poured with no tab attached. The workshops cost nothing. This is
            not a promotional strategy. It is how we understand our presence on
            the playa — and, perhaps, in the world.
          </motion.p>
          <motion.p variants={fadeUp} className="font-body text-[#1E120A] text-lg leading-loose">
            Burning Man&apos;s gift economy is not a new idea; it is an old one,
            recovered. In Tangier&apos;s cafés, hospitality was the first
            principle. We try to practice the same.
          </motion.p>
        </motion.div>

        <div className="border-t border-[#B85C38] mt-20" />
      </div>
    </section>
  );
}
