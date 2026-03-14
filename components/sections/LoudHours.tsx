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

export default function LoudHours() {
  return (
    <section id="loud-hours" className="bg-[#1E120A] py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] mb-6">
            Camp Offering
          </motion.p>
          <motion.div variants={fadeUp} className="w-16 border-t border-[#B85C38] mx-auto mb-10" />
          <motion.h2 variants={fadeUp} className="font-heading font-semibold uppercase tracking-[0.15em] text-[#F5EDD8] mb-6">
            Library Loud Hours
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-[#EAD9B8] text-lg leading-loose max-w-2xl mx-auto mb-16">
            Once a day — usually the afternoon, when the heat has settled into
            something almost tolerable — the library goes loud. Live music.
            Cold draft beer, gifted, no transaction required. The books stay
            on the shelves, the people come out, and for a few hours the dust
            itself seems to have an opinion about the rhythm section.
          </motion.p>
        </motion.div>

        {/* Two columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#B85C38] max-w-2xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            className="p-10 border-b md:border-b-0 md:border-r border-[#B85C38] hover:bg-[#B85C38] group"
          >
            <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] group-hover:text-[#F5EDD8] mb-4">What</p>
            <p className="font-body text-[#EAD9B8] leading-loose">
              Live music from camp and guest musicians. Cold draft beer, poured
              freely. The library as venue. No stage, no cover, no queue.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="p-10 hover:bg-[#B85C38] group"
          >
            <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] group-hover:text-[#F5EDD8] mb-4">When</p>
            <p className="font-body text-[#EAD9B8] leading-loose">
              Daily at the Interzone. Check our camp schedule on the playa for
              exact times each day. Walk-ins always welcome.
            </p>
          </motion.div>
        </motion.div>

        {/* Bar photo */}
        <motion.div
          className="border-4 border-[#B85C38] mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <Image
            src="/images/gallery/bar-scene.jpg"
            alt="The bar at Library Loud Hours"
            width={1200}
            height={800}
            className="block w-full object-cover"
          />
        </motion.div>

        <div className="border-t border-[#B85C38] mt-20" />
      </div>
    </section>
  );
}
