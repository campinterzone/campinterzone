"use client";

import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-[#1E120A] overflow-hidden">
      {/* Video background — swap src with actual video file when available */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero/poster.jpg"
      >
        {/* Add actual video source: <source src="/videos/hero.mp4" type="video/mp4" /> */}
      </video>

      {/* Overlay tint */}
      <div className="absolute inset-0 bg-[#1E120A] opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32">
        {/* Logo mark */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.svg"
          alt="Interzone"
          className="mx-auto mb-12 h-16 md:h-24 w-auto"
          style={{ filter: "brightness(0) invert(1)" }}
        />

        {/* Tagline */}
        <p className="font-body text-[#EAD9B8] text-lg md:text-xl tracking-wide mb-4">
          Black Rock City &mdash; est. 2019
        </p>

        {/* Headline */}
        <h1 className="font-heading font-semibold uppercase tracking-[0.2em] text-[#F5EDD8] mb-6">
          A Hidden Café at the Edge of the Known World
        </h1>

        {/* Rule */}
        <div className="w-24 border-t border-[#B85C38] mx-auto mb-8" />

        {/* Sub-tagline */}
        <p className="font-body text-[#EAD9B8] text-base md:text-lg max-w-xl mx-auto mb-12 leading-loose">
          Free books. Cold beer. Live music. Open doors.
          <br />
          Somewhere in the dust, a lantern is on.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#story" variant="filled">
            Enter the Zone
          </Button>
          <Button href="#library" variant="outline">
            Visit the Library
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2">
        <span className="font-heading uppercase tracking-widest text-xs text-[#6B4C35]">
          Scroll
        </span>
        <div className="h-8 w-px bg-[#B85C38]" />
      </div>
    </section>
  );
}
