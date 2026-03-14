"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const events = [
  {
    title: "Library\nLoud Hours",
    description:
      "Music, cold draft beer, and an open door. The library goes loud every afternoon. Walk in. Stay as long as you like.",
    time: "Daily Mon – Sat",
    slot: "3:00 – 6:00 PM",
    bg: "#FFF8E7",
    pin: "#B08020",
    rotate: "2deg",
  },
  {
    title: "Books 'N Brews\nWelcome Party",
    description:
      "The official opening of the Lost Times Library. Cold beer, warm company, and shelves full of books waiting to find new owners.",
    time: "Mon Aug 26",
    slot: "8:00 – 11:00 PM",
    bg: "#F0EBD8",
    pin: "#4A7B6F",
    rotate: "-2deg",
  },
  {
    title: "Tai Chi\nWorkshop",
    description:
      "Moving meditation at its slowest and most deliberate. A practice in presence, balance, and learning to be where you are.",
    time: "Mon & Wed",
    slot: "10:00 – 11:30 AM",
    bg: "#EFF3E8",
    pin: "#1E120A",
    rotate: "1.5deg",
  },
  {
    title: "Connecting\nwith the Cosmos",
    description:
      "A Kundalini yoga and breathwork session designed to open, ground, and reorient. No experience required — just a willingness to breathe.",
    time: "Tue Aug 27",
    slot: "10:00 – 11:00 AM",
    bg: "#FFF8E7",
    pin: "#B08020",
    rotate: "-1deg",
  },
  {
    title: "Yearning\nfor Yoga",
    description:
      "A morning yoga session suited to the desert: grounding, gentle, and restorative. Begin the day with intention.",
    time: "Thu Aug 29",
    slot: "10:00 – 11:00 AM",
    bg: "#F5EDE0",
    pin: "#4A7B6F",
    rotate: "-1.5deg",
  },
  {
    title: "Attitudes on\nDeath Symposium",
    description:
      "An open conversation on mortality, meaning, and how we face the end — held in the spirit of radical honesty and without easy answers.",
    time: "Fri Aug 30",
    slot: "1:00 – 2:00 PM",
    bg: "#EAE8F0",
    pin: "#1E120A",
    rotate: "1deg",
  },
];

export default function Workshops() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.5;
  }, []);

  return (
    <section id="workshops" className="relative">

      {/* ── VIDEO + CARDS ── */}
      <div className="relative overflow-hidden bg-[#1E120A]">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/library loud hours 2.MOV" type="video/mp4" />
          <source src="/videos/library loud hours 2.MOV" type="video/quicktime" />
        </video>
        <div className="absolute inset-0 bg-[#1E120A]" style={{ opacity: 0.6 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-32 pt-24 md:pt-40">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              style={{ fontFamily: "'Courier New', Courier, monospace", letterSpacing: "0.1em", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#ffffff", textTransform: "uppercase", fontWeight: 700 }}
            >
              Events &amp; Workshops
            </motion.h2>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {events.map((event) => (
                <motion.div
                  key={event.title}
                  variants={fadeUp}
                  className="relative"
                  style={{ transform: `rotate(${event.rotate})` }}
                  whileHover={{ rotate: 0, scale: 1.03, zIndex: 10, transition: { duration: 0.15 } }}
                >
                  {/* Pushpin */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-2 border-[#3D2610] z-10"
                    style={{ backgroundColor: event.pin }}
                  />
                  {/* Paper */}
                  <div
                    className="border border-[#C4B898] px-5 pt-7 pb-5"
                    style={{ backgroundColor: event.bg, fontFamily: "'Courier New', Courier, monospace" }}
                  >
                    <div className="border-b-2 border-[#B08020] mb-4 pb-3">
                      <h3
                        className="font-bold text-[#1E120A] uppercase leading-tight text-xl md:text-[0.85rem]"
                        style={{ letterSpacing: "0.05em", whiteSpace: "pre-line" }}
                      >
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-[#1E120A] leading-relaxed mb-4" style={{ fontSize: "0.72rem" }}>
                      {event.description}
                    </p>
                    <div className="border-t border-dashed border-[#8B7355] pt-3 flex justify-between items-end">
                      <span className="uppercase tracking-widest text-[#1E120A]" style={{ fontSize: "0.6rem" }}>
                        {event.time}
                      </span>
                      <span className="font-bold text-[#1E120A]" style={{ fontSize: "0.65rem" }}>
                        {event.slot}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-[#EDE8DF] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-[#906558]" />
        </div>
      </div>
    </section>
  );
}
