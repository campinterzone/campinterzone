"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

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
    <>
      <Navigation />
      <main className="bg-[#EDE8DF] pt-24 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 md:px-6 py-12 md:py-20">
          {/* Header */}
          <div className="text-left mb-16">
            <p className="font-heading uppercase tracking-widest text-xs text-[#6B5045] mb-6">
              Correspondence
            </p>
            <div className="w-16 border-t border-[#906558] mb-10" />
            <h1 className="font-heading font-semibold uppercase tracking-[0.2em] text-[#1E120A] mb-6 whitespace-nowrap" style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}>
              Make Contact
            </h1>
            <p className="font-body text-[#1E120A] leading-loose">
              You have found the Interzone. Leave word and we will find you —
              somewhere in the dust, by lantern light, in the hour before the
              music starts.
            </p>
          </div>

          {submitted ? (
            /* Confirmation */
            <div
              className="border border-[#8B7355] p-10 md:p-14"
              style={{ backgroundColor: "#F0E8D0", fontFamily: "'Courier New', Courier, monospace" }}
            >
              <p className="text-[#1E120A] text-xs font-bold uppercase tracking-widest mb-6">Received</p>
              <hr className="border-[#8B7355] mb-8" />
              <p className="text-[#1E120A] text-base font-medium leading-loose">
                Your message has been received. We will be in touch before the
                burn. Welcome to the Interzone.
              </p>
            </div>
          ) : (
            /* Telegram / library card styled form */
            <div className="border border-[#1E120A] p-10">
              <div className="border-b border-[#906558] pb-4 mb-8">
                <p className="font-heading uppercase tracking-widest text-xs text-[#6B5045]">
                  Camp Interzone &mdash; Black Rock City
                </p>
                <p className="font-heading uppercase tracking-widest text-xs text-[#6B5045]">
                  Incoming Transmission
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
                {/* Name */}
                <div>
                  <label className="font-heading uppercase tracking-widest text-xs text-[#6B5045] block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name or alias"
                    className="card-input"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-heading uppercase tracking-widest text-xs text-[#6B5045] block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Where to reach you"
                    className="card-input"
                  />
                </div>

                {/* Interest */}
                <div>
                  <label className="font-heading uppercase tracking-widest text-xs text-[#6B5045] block mb-2">
                    I am interested in
                  </label>
                  <select
                    name="interest"
                    className="card-input font-body text-[#1E120A] cursor-pointer"
                  >
                    <option value="visiting">Visiting the camp</option>
                    <option value="joining">Joining the camp</option>
                    <option value="volunteering">Volunteering / helping</option>
                    <option value="performing">Performing music</option>
                    <option value="donation">Library donation</option>
                    <option value="other">Something else entirely</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="font-heading uppercase tracking-widest text-xs text-[#6B5045] block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Say what you will."
                    className="card-input resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-4 space-y-4">
                  {error && (
                    <p className="text-sm text-red-700 uppercase tracking-widest">
                      Transmission failed. Please try again.
                    </p>
                  )}
                  <Button type="submit" variant="filled" className="w-full justify-center" disabled={loading}>
                    {loading ? "Sending…" : "Send Transmission"}
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
