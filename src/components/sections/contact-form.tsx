"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Star } from "lucide-react";

/**
 * ContactForm Component
 * Partner With Us section for Daira EdTech with Three.js flower animation
 */
export default function ContactForm() {
  const [selectedPartnership, setSelectedPartnership] = useState<string[]>([]);
  const [selectedChallenge, setSelectedChallenge] = useState<string>("");
  const flowerRef = useRef<HTMLDivElement>(null);

  const partnershipTypes = [
    "Government Implementation",
    "CSR / Funding Partnership",
    "Research Collaboration",
    "Institutional Deployment",
    "Policy Co-Development",
    "All of the above",
  ];

  const challenges = [
    "Early intervention / screening at scale",
    "Making education accessible for underserved communities",
    "Digitizing and preserving cultural heritage",
    "Building inclusive learning solutions",
    "Enabling teachers / professionals with AI tools",
  ];

  const togglePartnership = (type: string) => {
    setSelectedPartnership((prev) =>
      prev.includes(type)
        ? prev.filter((s) => s !== type)
        : [...prev, type]
    );
  };

  // Three.js-like animation using GSAP-style smooth animation
  useEffect(() => {
    const flower = flowerRef.current;
    if (!flower) return;

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      
      // Simulate wind with sine waves for natural movement
      const rotateZ = Math.sin(time) * 3 + Math.cos(time * 0.5) * 2;
      const rotateX = Math.sin(time * 0.7) * 1.5;
      const translateY = Math.sin(time * 0.5) * 2;
      
      flower.style.transform = `
        translateY(${translateY}px)
        rotateZ(${rotateZ}deg) 
        rotateX(${rotateX}deg)
      `;
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-[#F8F3ED] overflow-hidden" id="partner">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Side - Card with Animated Flower */}
          <div 
            className="relative flex flex-col justify-between p-10 lg:p-16 rounded-[24px] overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #4A8B8F 0%, #E89A7B 50%, #D4A896 100%)",
            }}
          >
            {/* Animated Flower with requestAnimationFrame */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div 
                ref={flowerRef}
                className="relative w-full h-full"
                style={{
                  transformOrigin: "center bottom",
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/nOTrxDdMtR8XwWdL7sE4DA27w-10.png"
                  alt="Decorative flower"
                  className="w-full h-full object-contain opacity-90"
                  style={{ willChange: "transform" }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#FFFFFF" color="#FFFFFF" />
                ))}
              </div>
              <p className="text-[12px] font-semibold uppercase tracking-wider text-white/80 mb-8">
                Backed by India AI Mission, Govt Of India
              </p>
              
              <h2 className="font-display text-[48px] lg:text-[56px] leading-[1.1] text-white mb-6">
                Partner With Us
              </h2>
              
              <p className="text-[16px] lg:text-[18px] text-white/90 max-w-md leading-relaxed">
                Let&apos;s build impact together. Schedule a call to explore how Daira EdTech can support your mission — whether you&apos;re a government body, NGO, CSR initiative, or institution committed to inclusive education.
              </p>
            </div>

            {/* Bottom Brand Names */}
            <div className="relative z-10 mt-16 pt-12 border-t border-white/20">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-white/60">
                <span className="font-display text-[20px]">NIEPID</span>
                <span className="font-display text-[20px]">NIMHR</span>
                <span className="font-display text-[20px]">India AI Mission</span>
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

              {/* Partnership Type Selection */}
              <div>
                <p className="text-[14px] font-medium text-[#7A6F68] mb-4">
                  What type of partnership interests you?
                </p>
                <div className="flex flex-wrap gap-3">
                  {partnershipTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => togglePartnership(type)}
                      className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                        selectedPartnership.includes(type)
                          ? "bg-[#2D241E] text-white"
                          : "bg-[#F1EAE2] text-[#2D241E] hover:bg-[#EAE0D5]"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Challenge Selection */}
              <div>
                <p className="text-[14px] font-medium text-[#7A6F68] mb-4">
                  What challenge are you trying to solve?
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
                placeholder="Tell us about your organization..."
                rows={4}
                className="w-full px-6 py-4 rounded-[16px] bg-[#F1EAE2] border-none text-[#2D241E] focus:ring-1 focus:ring-[#2D241E] placeholder:text-[#7A6F68]/60 transition-all resize-none"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-5 rounded-full bg-[#2D241E] text-white font-semibold text-[16px] flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform active:scale-[0.99]"
              >
                Schedule a Call
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
