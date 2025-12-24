"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqData = [
  {
    question: "Do I need technical knowledge to work with you?",
    answer:
      "No. We handle all the technical work from start to finish. You just need to share how your business operates, and we take care of the rest.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most clients see measurable results within 45 days. We focus on quick wins first, then build on that foundation over time.",
  },
  {
    question: "What if the automation doesn't work for my business?",
    answer:
      "We start with a thorough assessment to ensure automation makes sense for your specific workflows. If something isn't working, we refine it until it does.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on your needs and scope. After our free assessment, we'll provide a clear proposal with transparent pricing and no hidden fees.",
  },
  {
    question: "What happens after implementation?",
    answer:
      "We provide training for your team and ongoing support to ensure everything runs smoothly. As your business evolves, we help optimize and refine your systems.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F8F3ED] py-[120px] px-8 md:px-16" id="faq">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="mb-6">
          <div className="bg-[#EAE0D5] px-3 py-1 rounded-full border border-[rgba(45,36,30,0.1)]">
            <span className="text-[12px] font-semibold text-[#2D241E] uppercase tracking-wider">
              FAQ
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-12 max-w-[800px]">
          <h2 className="font-display text-[48px] md:text-[56px] text-[#2D241E] mb-6 leading-[1.2]">
            Your questions <span className="text-[#A48D7F]">answered.</span>
          </h2>
          <p className="text-[#2D241E]/70 text-[16px] md:text-[18px] leading-[1.6] max-w-[600px] mx-auto">
            Everything you need to know about working with us. Still have questions? Book a free call and we'll walk you through it.
          </p>
        </div>

        {/* Accordion List */}
        <div className="w-full max-w-[800px] space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-[rgba(255,255,255,0.4)] rounded-[24px] border border-[rgba(45,36,30,0.1)] overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className="font-sans text-[18px] md:text-[20px] font-medium text-[#2D241E]">
                  {item.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-[#2D241E]/60 transition-transform duration-300" />
                  ) : (
                    <Plus className="w-6 h-6 text-[#2D241E]/60 transition-transform duration-300" />
                  )}
                </div>
              </button>

              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-6 md:px-8 pb-8 text-[#2D241E]/80 text-[16px] leading-[1.6]">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}