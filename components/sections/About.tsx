"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { reveal, revealViewport } from "@/components/motion";

export default function About() {
  return (
    <section
      id="story"
      className="relative bg-[#EDE8DF] text-[#1E120A] border-t border-[#906558]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">

        {/* ── STICKY MAP PANEL ── */}
        <div className="relative border-b lg:border-b-0 lg:border-r border-[#906558]">
          <div className="relative lg:sticky lg:top-0 h-[50vh] lg:h-screen overflow-hidden">
            <Image
              src="/images/tangier-map.jpg"
              alt="Vintage map of Tangier, Morocco"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-[#EDE8DF] opacity-[0.22]" />
            <div className="absolute left-6 md:left-10 bottom-6 md:bottom-10 right-6 md:right-10 flex flex-col gap-[0.4rem] font-mono">
              <span className="text-[0.72rem] uppercase tracking-[0.22em] text-[#1E120A]">
                Tangier, 1:6,500
              </span>
              <span className="text-[0.62rem] uppercase tracking-[0.2em] text-[#6B5045]">
                Wagner &amp; Debes, Leipzig
              </span>
            </div>
          </div>
        </div>

        {/* ── EDITORIAL COLUMN ── */}
        <div className="flex flex-col gap-10 max-w-[46rem] px-6 py-24 md:pl-[4.5rem] md:pr-20 md:py-32">
          <motion.h2
            className="font-heading font-light uppercase tracking-[0.13em] leading-[1.12] text-[#1E120A]"
            style={{ fontSize: "clamp(1.7rem, 3.6vw, 2.9rem)" }}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={reveal}
            custom={80}
          >
            A city outside
            <br />
            the laws of
            <br />
            any nation
          </motion.h2>

          <motion.p
            className="italic text-[1.3rem] leading-[1.7] text-[#6B5045] text-pretty"
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={reveal}
            custom={120}
          >
            For a time it was the freest place on earth. We keep a small version
            of the arrangement in the dust.
          </motion.p>

          <motion.div
            className="flex flex-col gap-[1.4rem]"
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={reveal}
            custom={160}
          >
            <p className="text-pretty">
              <span className="float-left font-display font-bold text-[4rem] leading-[0.8] mt-[0.3rem] mr-[0.6rem] text-[#906558]">
                T
              </span>
              angier was an international territory from 1912 to 1956, though it
              took until 1923 for the European powers to formally agree on a
              self-governed neutral zone. The port mattered too much for any one
              nation to hold it, so they settled on shared governance. The result
              was a city that belonged to no one, and therefore to everyone.
            </p>
            <p className="text-pretty">
              That arrangement drew writers, artists, and musicians. William
              Burroughs wrote <em>Naked Lunch</em> there. Paul Bowles never left.
              Allen Ginsberg passed through.
            </p>
            <p className="text-pretty">
              Its tolerance also made it a haven for gay men at a time when very
              few places on earth offered the same. In Tangier you could be
              anyone. That was the point.
            </p>
          </motion.div>

          <motion.div
            className="border-t border-[#906558] pt-10 flex flex-col gap-[0.35rem] font-heading font-light uppercase tracking-[0.2em] leading-[1.2]"
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={reveal}
            custom={180}
          >
            <span
              className="text-[#1E120A]"
              style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.7rem)" }}
            >
              You are free to remake yourself.
            </span>
            <span
              className="text-[#906558]"
              style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.7rem)" }}
            >
              Rewrite your history.
            </span>
            <span
              className="text-[#1E120A]"
              style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.7rem)" }}
            >
              Start over.
            </span>
          </motion.div>

          <motion.div
            className="border border-[#8B7355] bg-[#F0E8D0] px-8 py-10 md:px-[3.25rem] md:py-12"
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={reveal}
            custom={200}
          >
            <p className="font-body text-[1.35rem] leading-[1.75] text-[#1E120A] text-pretty">
              We recreate the atmosphere of a caf&eacute; hidden away in Tangier,
              because that theme mirrors Burning Man itself: a place of
              tolerance, diversity, and artistic expression. It is said about
              Tangier that you can be anyone there. That is what we offer on the
              playa.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
