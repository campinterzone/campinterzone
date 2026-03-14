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
    <section id="story" className="bg-[#F5EDD8] py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] mb-6">
            The Story
          </motion.p>
          <motion.div variants={fadeUp} className="w-16 border-t border-[#B85C38] mx-auto mb-10" />
          <motion.h2 variants={fadeUp} className="font-heading font-semibold uppercase tracking-[0.15em] text-[#1E120A]">
            The International Zone
          </motion.h2>
        </motion.div>

        {/* Opening — full width */}
        <motion.p
          className="font-body text-[#1E120A] text-xl leading-relaxed text-center max-w-3xl mx-auto mb-16 italic"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          The Interzone is the setting for William Burroughs&apos;s famous book{" "}
          <em>Naked Lunch</em>. It is based on Tangier, Morocco&apos;s
          International Zone — a city that existed outside the laws of any nation,
          and became, for a time, the freest place on earth.
        </motion.p>

        <div className="border-t border-[#B85C38] mb-16" />

        {/* Two-column history */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="font-body text-[#1E120A] leading-loose">
            <p className="mb-6">
              Tangier existed in some form as an international territory from
              1912 to 1956 — though it wasn&apos;t until 1923 that the European
              powers formally agreed to designate it a self-governed neutral
              zone. Due to its importance as a trading port, many nations had
              vied for control. Eventually they settled on shared governance:
              a city that belonged to no one, and therefore to everyone.
            </p>
            <p>
              This important status — both as a port city and a diplomatic
              neutral zone — allowed an open society to flourish. One that
              blended every culture passing through it, free from the judgment
              of the outside world. It was returned to Morocco in 1956.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="font-body text-[#1E120A] leading-loose">
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

        {/* Camp connection — dark accent block */}
        <motion.div
          className="border-2 border-[#1E120A] bg-[#EAD9B8] p-10 md:p-14 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] mb-6">
            Our Inspiration
          </p>
          <p className="font-body text-[#1E120A] text-lg leading-loose mb-6">
            Camp Interzone is inspired by this time and place. We seek to
            recreate the atmosphere of a café hidden away in Tangier — because
            this theme so closely mirrors Burning Man itself: a place of
            tolerance, diversity, and artistic expression where one is free to
            explore the human experience in all its forms.
          </p>
          <p className="font-body text-[#1E120A] text-lg leading-loose">
            It is said about Tangier that you can be anyone there. That is
            what we offer on the playa.
          </p>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <p className="font-heading uppercase tracking-[0.2em] text-2xl md:text-4xl text-[#1E120A] leading-tight">
            You are free to remake yourself.
          </p>
          <p className="font-heading uppercase tracking-[0.2em] text-2xl md:text-4xl text-[#B85C38] mt-2 leading-tight">
            Rewrite your history.
          </p>
          <p className="font-heading uppercase tracking-[0.2em] text-2xl md:text-4xl text-[#1E120A] mt-2 leading-tight">
            Start over.
          </p>
        </motion.div>

        {/* Camp photo */}
        <motion.div
          className="border-4 border-[#1E120A]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <Image
            src="/images/gallery/camp-team.jpg"
            alt="Camp Interzone crew on the playa"
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
