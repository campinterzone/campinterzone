"use client";

import { motion } from "framer-motion";
import FramedImage from "@/components/FramedImage";
import { reveal, revealViewport } from "@/components/motion";

const PLAYA_EVENTS = "https://playaevents.burningman.org";

type PlayaEvent = {
  dayName: string;
  date: string;
  month: string;
  title: string;
  slot: string;
  tag: string;
  href: string;
  description: string;
  featured?: boolean;
};

/**
 * Source of truth for names, dates, and times:
 * https://playaevents.burningman.org/playa_event/search/2026/?q=Interzone
 * Descriptions are rewritten in the site's voice rather than pasted.
 */
const events: PlayaEvent[] = [
  {
    dayName: "Mon to Sat",
    date: "All",
    month: "Aug 31 - Sep 5",
    title: "Library Loud Hours",
    slot: "3:00 to 6:00 PM",
    tag: "Beverages",
    href: `${PLAYA_EVENTS}/playa_event/56367/`,
    description:
      "Take a book from our library and enjoy craft beer on tap. The library goes loud every afternoon. Walk in and stay as long as you like.",
    featured: true,
  },
  {
    dayName: "Monday",
    date: "31",
    month: "Aug",
    title: "Books 'n Brews Welcome Party",
    slot: "8:00 to 10:30 PM",
    tag: "Music and party",
    href: `${PLAYA_EVENTS}/playa_event/56969/`,
    description:
      "Celebrate the start of another burn with craft beer and peruse our library. Shelves full of books waiting to find new owners.",
  },
  {
    dayName: "Wednesday",
    date: "02",
    month: "Sep",
    title: "Tai Chi Workshop",
    slot: "10:00 to 11:30 AM",
    tag: "Class and workshop",
    href: `${PLAYA_EVENTS}/playa_event/56966/`,
    description:
      "An intro to moving meditation, basic Tai Chi movement, and interactive practice. Presence, balance, and learning to be where you are.",
  },
  {
    dayName: "Friday",
    date: "04",
    month: "Sep",
    title: "Death Cafe",
    slot: "1:00 to 2:00 PM",
    tag: "Class and workshop",
    href: `${PLAYA_EVENTS}/playa_event/56968/`,
    description:
      "Join an open discussion about death, dying, and end of life issues, held in the spirit of radical honesty and without easy answers.",
  },
];

export default function Workshops() {
  return (
    <section
      id="workshops"
      className="relative bg-[#EDE8DF] text-[#1E120A] border-t border-[#906558] px-6 md:px-[4.5rem] py-24 md:py-32"
    >
      <div className="max-w-[82rem] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] gap-12 lg:gap-20 items-start">

        {/* ── LEFT RAIL ── */}
        <div className="min-w-0 flex flex-col gap-10 lg:sticky lg:top-28">
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={reveal}
          >
            <h2
              className="font-heading font-light uppercase tracking-[0.13em] leading-[1.1]"
              style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.7rem)" }}
            >
              2026 Events &amp;
              <br />
              Workshops
            </h2>
            <div className="w-[5rem] border-t border-[#906558]" />
            <p className="max-w-[24rem] font-mono text-[0.85rem] uppercase tracking-[0.2em] text-[#6B5045]">
              Aug 31 to Sep 6, 2026
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={reveal}
            custom={120}
          >
            <FramedImage
              src="/images/gallery/library-sign.jpg"
              alt="The Lost Times Library sign at camp"
              width={900}
              height={700}
              imageClassName="w-full h-[20rem] object-cover"
            />
          </motion.div>
        </div>

        {/* ── EVENT LIST ── */}
        <div className="min-w-0 flex flex-col">
          {events.map((event) => (
            <motion.div
              key={event.title}
              className={`border-t py-11 grid grid-cols-[4.5rem_minmax(0,1fr)] sm:grid-cols-[8rem_minmax(0,1fr)] gap-6 sm:gap-10 items-start ${
                event.featured ? "border-[#1E120A]" : "border-[#906558]"
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={reveal}
            >
              {/* Date stack — weekday / numeral / month */}
              <div className="flex flex-col gap-[0.35rem] items-start">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-[#6B5045]">
                  {event.dayName}
                </span>
                <span
                  className={`font-display font-bold text-[3rem] leading-[0.9] ${
                    event.featured ? "text-[#B08020]" : "text-[#1E120A]"
                  }`}
                >
                  {event.date}
                </span>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[#6B5045]">
                  {event.month}
                </span>
              </div>

              <div className="min-w-0 flex flex-col gap-4">
                <div className="flex items-baseline justify-between gap-8 flex-wrap">
                  <h3
                    className="font-heading font-light uppercase tracking-[0.12em] leading-[1.2]"
                    style={{ fontSize: "clamp(1.2rem, 2.4vw, 1.75rem)" }}
                  >
                    <a
                      href={event.href}
                      target="_blank"
                      rel="noopener"
                      className="text-[#1E120A] no-underline hover:text-[#B08020]"
                    >
                      {event.title}
                    </a>
                  </h3>
                  <span className="font-mono text-[0.8rem] tracking-[0.1em] text-[#1E120A] whitespace-nowrap">
                    {event.slot}
                  </span>
                </div>

                <p className="max-w-[34rem] text-[1.05rem] leading-[1.85] text-[#1E120A] text-pretty">
                  {event.description}
                </p>

                <div className="flex items-center gap-6 flex-wrap">
                  <span
                    className={`font-heading font-semibold text-[0.6rem] uppercase tracking-[0.24em] ${
                      event.featured ? "text-[#B08020]" : "text-[#6B5045]"
                    }`}
                  >
                    {event.tag}
                  </span>
                  <a
                    href={event.href}
                    target="_blank"
                    rel="noopener"
                    className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-[#6B5045] hover:text-[#B08020]"
                  >
                    Listing on PlayaEvents
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            className="border-t border-[#906558] pt-8 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[#6B5045]"
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={reveal}
          >
            Workshops are added through the week. The board by the door is the
            only schedule that counts.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
