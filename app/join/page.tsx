"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up form submission (email service / Formspree / Resend)
    setSubmitted(true);
  }

  return (
    <>
      <Navigation />
      <main className="bg-[#F5EDD8] pt-24 min-h-screen">
        <div className="max-w-2xl mx-auto px-6 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] mb-6">
              Correspondence
            </p>
            <div className="w-16 border-t border-[#B85C38] mx-auto mb-10" />
            <h1 className="font-heading font-semibold uppercase tracking-[0.2em] text-[#1E120A] mb-6">
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
            <div className="border-2 border-[#1E120A] p-12 text-center">
              <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] mb-4">
                Received
              </p>
              <p className="font-body text-[#1E120A] leading-loose">
                Your message has been received. We will be in touch before the
                burn. Welcome to the Interzone.
              </p>
            </div>
          ) : (
            /* Telegram / library card styled form */
            <div className="border-2 border-[#1E120A] p-10">
              <div className="border-b border-[#B85C38] pb-4 mb-8">
                <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35]">
                  Camp Interzone &mdash; Black Rock City
                </p>
                <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35]">
                  Incoming Transmission
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div>
                  <label className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] block mb-2">
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
                  <label className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] block mb-2">
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
                  <label className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] block mb-2">
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
                    <option value="other">Something else entirely</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] block mb-2">
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
                <div className="pt-4">
                  <Button type="submit" variant="filled" className="w-full justify-center">
                    Send Transmission
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
