"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { reveal, revealViewport } from "@/components/motion";

export default function Gifting() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.5;
  }, []);

  return (
    <section
      id="contact"
      className="bg-[#EDE8DF] text-[#1E120A] border-t border-[#906558] px-6 md:px-[4.5rem] py-24 md:py-32"
    >
      <div className="max-w-[82rem] mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-12 md:gap-20 items-center">

        <motion.div
          className="min-w-0 flex flex-col gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={reveal}
        >
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-[#6B5045]">
            Get in touch
          </span>
          <h2
            className="font-heading font-light uppercase tracking-[0.11em] leading-[1.1] text-[#1E120A]"
            style={{ fontSize: "clamp(1.7rem, 3.6vw, 2.9rem)" }}
          >
            We&apos;re not
            <br />
            hard to find
          </h2>
          <div className="w-[5rem] border-t border-[#906558]" />
          <p className="max-w-[32rem] text-[1.1rem] leading-[1.9] text-pretty">
            We&apos;re somewhere on the playa. Ask someone who looks like
            they&apos;ve read a good book recently. They&apos;ll know.
          </p>
          <p className="max-w-[32rem] text-[1.1rem] leading-[1.9] text-pretty">
            If you&apos;d like to camp with us, donate books, or just say hello
            before the dust starts, send a letter. We accept electronic
            correspondence too, reluctantly.
          </p>
          <Button href="/join" variant="outline" className="self-start">
            Contact
          </Button>
        </motion.div>

        <motion.div
          className="min-w-0 border-4 border-[#1E120A] bg-[#1E120A] leading-[0]"
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={reveal}
          custom={140}
        >
          <video
            ref={videoRef}
            className="block w-full h-[30rem] object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/gallery/camp-exterior.jpg"
          >
            <source src="/videos/Burning Man 2024 Video.MOV" type="video/mp4" />
            <source src="/videos/Burning Man 2024 Video.MOV" type="video/quicktime" />
          </video>
        </motion.div>
      </div>
    </section>
  );
}
