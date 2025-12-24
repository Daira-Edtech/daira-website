"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";

/**
 * ContactForm Component
 * Clones the final CTA and contact form section with pixel perfect accuracy.
 * Theme: Light (#F8F3ED background)
 */
export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedChallenge, setSelectedChallenge] = useState<string>("");

  const services = [
    "AI Assessment",
    "Workflow Automation",
    "Custom AI Tools",
    "Training & Support",
    "Implementing AI",
    "All of the above",
  ];

  const challenges = [
    "Too many manual tasks",
    "Unclear where to start",
    "Previous solutions didn't work",
    "Need to scale operations",
  ];

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <section className="section-padding bg-[#F8F3ED] overflow-hidden" id="book-a-call">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Side Info Block */}
          <div className="flex flex-col justify-between p-10 lg:p-16 rounded-[24px] bg-white/40 backdrop-blur-md border border-white/20">
            <div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#A48D7F" color="#A48D7F" />
                ))}
              </div>
              <p className="text-[12px] font-semibold uppercase tracking-wider text-[#7A6F68] mb-8">
                Helped over 100+ businesses
              </p>
              
              <h2 className="font-display text-[48px] lg:text-[64px] leading-[1.1] text-[#2D241E] mb-6">
                Turn confusion into clarity, <span className="text-[#A48D7F]">today.</span>
              </h2>
              
              <p className="body-text text-[18px] max-w-md">
                Book a free 30-minute assessment and we&apos;ll show you exactly where AI can save you time and money.
              </p>
            </div>

            <div className="mt-16 pt-12 border-t border-[#2D241E]/10">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-40 grayscale">
                <span className="font-display text-[24px]">Hamilton</span>
                <span className="font-display text-[24px]">Amsterdam</span>
                <span className="font-display text-[24px] italic">Theo</span>
              </div>
            </div>
          </div>

          {/* Right Side Form Block */}
          <div className="p-10 lg:p-12 rounded-[24px] bg-white/40 backdrop-blur-md border border-white/20">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full px-6 py-4 rounded-[16px] bg-[#F1EAE2] border-none text-[#2D241E] focus:ring-1 focus:ring-[#2D241E] placeholder:text-[#7A6F68]/60 transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full px-6 py-4 rounded-[16px] bg-[#F1EAE2] border-none text-[#2D241E] focus:ring-1 focus:ring-[#2D241E] placeholder:text-[#7A6F68]/60 transition-all"
                  required
                />
              </div>

              {/* Service Selection */}
              <div>
                <p className="text-[14px] font-medium text-[#7A6F68] mb-4">
                  What services are you interested in?
                </p>
                <div className="flex flex-wrap gap-3">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                        selectedServices.includes(service)
                          ? "bg-[#2D241E] text-white"
                          : "bg-[#F1EAE2] text-[#2D241E] hover:bg-[#EAE0D5]"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Challenge Selection */}
              <div>
                <p className="text-[14px] font-medium text-[#7A6F68] mb-4">
                  What&apos;s your biggest automation challenge?
                </p>
                <div className="flex flex-wrap gap-3">
                  {challenges.map((challenge) => (
                    <button
                      key={challenge}
                      type="button"
                      onClick={() => setSelectedChallenge(challenge)}
                      className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                        selectedChallenge === challenge
                          ? "bg-[#2D241E] text-white"
                          : "bg-[#F1EAE2] text-[#2D241E] hover:bg-[#EAE0D5]"
                      }`}
                    >
                      {challenge}
                    </button>
                  ))}
                </div>
              </div>

              {/* Textarea */}
              <textarea
                placeholder="Tell us about your business..."
                rows={4}
                className="w-full px-6 py-4 rounded-[16px] bg-[#F1EAE2] border-none text-[#2D241E] focus:ring-1 focus:ring-[#2D241E] placeholder:text-[#7A6F68]/60 transition-all resize-none"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-5 rounded-full bg-[#2D241E] text-white font-semibold text-[16px] flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform active:scale-[0.99]"
              >
                Book a call
                <ArrowUpRight size={18} />
              </button>

              <p className="text-center text-[12px] text-[#7A6F68]">
                By submitting, you agree to our{" "}
                <a href="#" className="underline font-medium hover:text-[#2D241E]">
                  terms of service
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}