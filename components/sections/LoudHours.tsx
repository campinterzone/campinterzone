"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { reveal, revealViewport } from "@/components/motion";

const TICKER =
  "Loud hours daily · cold draft beer · books free to take · look for the stretch tent · ";

export default function LoudHours() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.5;
  }, []);

  return (
    <section
      id="loud-hours"
      className="relative overflow-hidden bg-[#1E120A] border-t border-[#906558] min-h-screen flex flex-col justify-center"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/gallery/bar-scene.jpg"
      >
        <source src="/videos/library loud hours 2.MOV" type="video/mp4" />
        <source src="/videos/library loud hours 2.MOV" type="video/quicktime" />
      </video>
      <div className="absolute inset-0 bg-[#1E120A] opacity-[0.6]" />

      <div className="relative grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-12 md:gap-16 items-center px-6 md:px-[4.5rem] py-28">
        <motion.div
          className="min-w-0 flex flex-col gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={reveal}
        >
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-[#C4A35A]">
            Mon to Sat
          </span>
          <h2
            className="font-heading font-light uppercase tracking-[0.06em] leading-[0.98] text-white"
            style={{ fontSize: "clamp(2.2rem, 5.6vw, 4.6rem)" }}
          >
            Library
            <br />
            Loud Hours
          </h2>
          <div className="w-[9rem] border-t border-[#906558]" />
          <p className="font-mono text-[1.15rem] uppercase tracking-[0.22em] text-[#C4A35A]">
            3 to 6 PM
          </p>
        </motion.div>

        <motion.div
          className="min-w-0 flex flex-col gap-7 border-l border-[rgba(144,101,88,0.6)] pl-8 md:pl-12"
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={reveal}
          custom={140}
        >
          <p className="text-[1.15rem] leading-[1.9] text-white/[0.86] text-pretty">
            Once a day, usually in the afternoon when the heat has settled into
            something almost tolerable, the library goes loud. Music. Cold draft
            beer, gifted, no transaction required. The books stay on the
            shelves, the people come out, and for a few hours the dust itself
            seems to have an opinion about the rhythm section.
          </p>
          <p className="font-heading font-light uppercase tracking-[0.16em] text-[1.1rem] leading-[1.6] text-white">
            The library is free. The beer is cold. You are welcome.
          </p>
        </motion.div>
      </div>

      {/* ── TICKER ── */}
      <div className="relative border-t border-b border-[rgba(144,101,88,0.6)] py-[0.9rem] overflow-hidden">
        <div className="ticker-track" aria-hidden="true">
          <span className="font-heading font-medium text-[0.72rem] uppercase tracking-[0.34em] text-[rgba(237,232,223,0.75)] whitespace-nowrap pr-10">
            {TICKER}
          </span>
          <span className="font-heading font-medium text-[0.72rem] uppercase tracking-[0.34em] text-[rgba(237,232,223,0.75)] whitespace-nowrap pr-10">
            {TICKER}
          </span>
        </div>
      </div>
    </section>
  );
}
