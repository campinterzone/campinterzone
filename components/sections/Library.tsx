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
        {/* The stacked wordmark replaces a text heading here. Its viewBox is
            trimmed to the lettering, so the width below sizes the ink itself. */}
        <h2 className="leading-[0]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/lost-times-library-logo.svg"
            alt="Lost Times Library"
            className="block w-[clamp(14rem,26vw,22rem)] h-auto invert"
          />
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
