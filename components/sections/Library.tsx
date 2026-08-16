"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { reveal, revealViewport } from "@/components/motion";

export default function Library() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.5;
  }, []);

  return (
    <section
      id="library"
      className="relative min-h-screen overflow-hidden flex items-end bg-[#1E120A] border-t border-[#906558]"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/gallery/library-sign.jpg"
      >
        <source src="/videos/lost times library.MOV" type="video/mp4" />
        <source src="/videos/lost times library.MOV" type="video/quicktime" />
      </video>
      <div className="absolute inset-0 bg-[#1E120A] opacity-[0.58]" />

      <motion.div
        className="relative w-full max-w-[56rem] flex flex-col gap-7 px-6 md:px-[4.5rem] pt-32 md:pt-32 pb-20 md:pb-24"
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={reveal}
      >
        {/*
          Design calls for the stacked `lost-times-library-logo.png` wordmark
          here, inverted to white. That export is not in the repo yet — until it
          lands, the wordmark is set in type. To swap it in, drop the PNG at
          public/images/lost-times-library-logo.png and replace the <h2> below with:

          <h2 className="leading-[0]">
            <img
              src="/images/lost-times-library-logo.png"
              alt="Lost Times Library"
              className="block w-[clamp(14rem,26vw,22rem)] h-auto invert"
            />
          </h2>
        */}
        <h2
          className="font-heading font-light uppercase tracking-[0.14em] leading-[1.05] text-white"
          style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)" }}
        >
          Lost Times
          <br />
          Library
        </h2>

        <div className="w-[9rem] border-t border-[#906558]" />

        <p className="max-w-[36rem] text-[1.15rem] leading-[1.85] text-white/85 text-pretty">
          A collection of books, freely given in the middle of Black Rock City.
          Browse the shelves. Take what calls to you. Leave something behind if
          you like, though nothing is required. A book is a gift. We offer many.
        </p>
      </motion.div>
    </section>
  );
}
