"use client";

import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

const labelClass =
  "font-heading font-semibold text-[0.62rem] uppercase tracking-[0.22em] text-[#6B5045]";

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.5;
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("https://formspree.io/f/mbdzajbe", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(e.currentTarget),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#1E120A]">
      <Navigation ctaLabel="Back to Camp" ctaHref="/" opaque />

      <main className="relative overflow-hidden flex-1 flex items-center">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/gallery/camp-exterior.jpg"
        >
          <source src="/videos/Burning Man 2024 Video.MOV" type="video/mp4" />
          <source src="/videos/Burning Man 2024 Video.MOV" type="video/quicktime" />
        </video>
        <div className="absolute inset-0 bg-[#1E120A] opacity-[0.7]" />

        <div className="relative w-full max-w-[76rem] mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-12 md:gap-16 items-start px-6 md:px-[4.5rem] pt-32 pb-24 md:py-28">

          {/* ── LEFT: the invitation ── */}
          <div className="min-w-0 flex flex-col gap-7">
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-[#C4A35A]">
              Make contact
            </span>
            <h1
              className="font-heading font-light uppercase tracking-[0.11em] leading-[1.08] text-white"
              style={{ fontSize: "clamp(1.8rem, 4.4vw, 3.4rem)" }}
            >
              We&apos;re Not
              <br />
              Hard to Find
            </h1>
            <div className="w-[6rem] border-t border-[#906558]" />
            <p className="max-w-[30rem] text-[1.1rem] leading-[1.9] text-white/85 text-pretty">
              We&apos;re somewhere on the playa. Look for the lantern. Ask
              someone who looks like they&apos;ve read a good book recently.
              They&apos;ll know.
            </p>
            <p className="max-w-[30rem] text-[1.1rem] leading-[1.9] text-white/85 text-pretty">
              If you&apos;d like to camp with us, donate books, or just say hello
              before the dust starts, send a letter. We accept electronic
              correspondence too, reluctantly.
            </p>
            <div className="border-t border-[rgba(144,101,88,0.6)] pt-6 font-mono tracking-[0.1em]">
              <span className="text-[#C4A35A] text-[0.82rem] uppercase tracking-[0.2em]">
                6:30 &amp; B &middot; Black Rock City
              </span>
            </div>
          </div>

          {/* ── RIGHT: the transmission card ── */}
          <div className="min-w-0 border border-[#1E120A] bg-[#FFF8E7] text-[#1E120A] p-8 md:p-10 flex flex-col gap-6">
            <p className="font-heading font-semibold text-[0.68rem] uppercase tracking-[0.24em] text-[#6B5045]">
              Incoming Transmission
            </p>

            {submitted ? (
              <div className="flex flex-col gap-5 font-mono">
                <span className="text-[1.15rem] font-bold uppercase tracking-[0.08em]">
                  Received.
                </span>
                <span className="text-[0.98rem] leading-[1.8]">
                  Your letter is on the pile by the door. Someone reads that pile
                  most mornings.
                </span>
                <Button
                  variant="outline"
                  className="self-start"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-[1.35rem]">
                <label className="flex flex-col gap-[0.4rem]">
                  <span className={labelClass}>Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Or the one you're using now"
                    className="card-input"
                  />
                </label>

                <label className="flex flex-col gap-[0.4rem]">
                  <span className={labelClass}>Electronic Address</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@elsewhere"
                    className="card-input"
                  />
                </label>

                <label className="flex flex-col gap-[0.4rem]">
                  <span className={labelClass}>Last Book You Finished</span>
                  <input
                    type="text"
                    name="book"
                    placeholder="Title, author, honestly"
                    className="card-input"
                  />
                </label>

                <label className="flex flex-col gap-[0.4rem]">
                  <span className={labelClass}>Message</span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="What brings you to the zone"
                    className="card-input resize-none"
                  />
                </label>

                {error && (
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[#8B2E1F]">
                    Transmission failed. Please try again.
                  </p>
                )}

                <Button type="submit" className="self-start" disabled={loading}>
                  {loading ? "Sending…" : "Send Transmission"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
