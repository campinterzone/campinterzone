"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Button from "@/components/Button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const genres = [
  "Travel & Exploration",
  "Literature & Fiction",
  "Philosophy & Buddhism",
  "Art & Photography",
  "Beat Generation",
  "Poetry",
  "History & Culture",
  "Mysteries & Noir",
];

export default function Library() {
  return (
    <section id="library" className="bg-[#EAD9B8] py-24 px-6">
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
          <motion.h2 variants={fadeUp} className="font-heading font-semibold uppercase tracking-[0.15em] text-[#1E120A] mb-6">
            The Lost Times Library
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-[#1E120A] text-lg leading-loose max-w-2xl mx-auto mb-12">
            Named for a fictional Tangier newspaper that may or may not have
            existed, the Lost Times Library is exactly what it sounds like: a
            collection of books, freely given. Browse the shelves. Take what
            calls to you. Leave something behind if you like — though nothing
            is required. A book is a gift. We offer many.
          </motion.p>
        </motion.div>

        {/* Genre grid with hover effects */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#1E120A] mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {genres.map((genre, i) => (
            <motion.div
              key={genre}
              variants={fadeUp}
              className={`font-heading uppercase tracking-widest text-xs text-[#1E120A] py-5 px-4 flex items-center justify-center text-center cursor-default
                bg-[#EAD9B8] hover:bg-[#1E120A] hover:text-[#F5EDD8]
                ${i % 4 !== 3 ? "border-r border-[#1E120A]" : ""}
                ${i < 4 ? "border-b border-[#1E120A]" : ""}`}
            >
              {genre}
            </motion.div>
          ))}
        </motion.div>

        {/* Library card */}
        <motion.div
          className="max-w-sm mx-auto border-2 border-[#1E120A] p-8 mb-12 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] mb-4">
            Library Card
          </p>
          <div className="border-b border-dotted border-[#1E120A] pb-3 mb-4">
            <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] mb-1">Name of Borrower</p>
            <p className="font-body text-[#1E120A]">You</p>
          </div>
          <div className="border-b border-dotted border-[#1E120A] pb-3 mb-4">
            <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] mb-1">Book Selected</p>
            <p className="font-body text-[#1E120A] italic">Your choice</p>
          </div>
          <div>
            <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] mb-1">Due Date</p>
            <p className="font-body text-[#1E120A]">Never.</p>
          </div>
        </motion.div>

        {/* Library sign photo */}
        <motion.div
          className="border-4 border-[#1E120A] mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <Image
            src="/images/gallery/library-sign.jpg"
            alt="The Lost Times Library sign at dawn"
            width={1200}
            height={800}
            className="block w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Button href="/join" variant="outline">Find Us on the Playa</Button>
        </motion.div>

        <div className="border-t border-[#B85C38] mt-20" />
      </div>
    </section>
  );
}
