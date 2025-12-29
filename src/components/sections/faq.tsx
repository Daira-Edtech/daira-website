"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Head from "next/head";

const faqData = [
  {
    question: "What makes Daira different from other EdTech companies?",
    answer:
      "We're an R&D lab, not a typical startup. We focus on sectors where technology hasn't reached — inclusive education, rural access, and policy enablement. We build with government partnerships from day one, ensuring our solutions can scale through public systems, not just private markets.",
  },
  {
    question: "Do you only work in education?",
    answer:
      "We started with inclusive education because it's one of the most underserved sectors. But our R&D capabilities extend to any domain where technology and social impact intersect — from cultural preservation (Sanskriti Suraksha) to agricultural AI (Kishan Know). If there's a gap that needs research-backed, ground-tested technology, we're interested.",
  },
  {
    question: "How can organizations or governments partner with you?",
    answer:
      "We're open to research collaborations, implementation partnerships, and CSR engagements. Reach out through our contact form, and we'll schedule a call to understand your needs and explore how we can work together.",
  },
  {
    question: "Are your solutions only for India?",
    answer:
      "While our current implementations are in India, our technology — especially around inclusive education and AI-powered screening — is designed to be adapted for any context. We're open to international partnerships and collaborations.",
  },
];

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    // Toggle individual items - multiple can be open
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      
      <section 
        className="bg-[#F8F3ED] py-[120px] px-8 md:px-16" 
        id="faq"
        style={{ fontFamily: '"Noto Sans", sans-serif' }}
      >
        <div className="max-w-[1100px] mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="mb-8">
            <div className="bg-[#F3EDE5] px-4 py-2 rounded-full">
              <span 
                className="text-[13px] font-medium text-[#2D241E] tracking-wide"
                style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 500 }}
              >
                FAQ
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-16 max-w-[750px]">
            <h2 
              className="font-display text-[52px] md:text-[64px] text-[#2D241E] mb-6 leading-[1.15] tracking-tight"
              style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
            >
              Your questions <span className="text-[#7A6F68]">answered.</span>
            </h2>
            <p 
              className="text-[#5C5550] text-[16px] md:text-[17px] leading-[1.6] max-w-[600px] mx-auto"
              style={{ fontFamily: '"Noto Sans", sans-serif' }}
            >
              Everything you need to know about working with us. Still have questions? Schedule a call and we'll walk you through it.
            </p>
          </div>

          {/* Accordion List */}
          <div className="w-full max-w-[900px] space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-[#F3EDE5] rounded-[20px] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between px-8 py-7 text-left focus:outline-none"
                  aria-expanded={openIndexes.includes(index)}
                >
                  <span 
                    className="text-[18px] md:text-[20px] font-normal text-[#2D241E] pr-6 leading-[1.4]"
                    style={{ fontFamily: '"Noto Sans", sans-serif' }}
                  >
                    {item.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndexes.includes(index) ? (
                      <X className="w-6 h-6 text-[#2D241E]" strokeWidth={2} />
                    ) : (
                      <Plus className="w-6 h-6 text-[#2D241E]" strokeWidth={2} />
                    )}
                  </div>
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    openIndexes.includes(index)
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div 
                      className="px-8 pb-7 text-[#5C5550] text-[15px] md:text-[16px] leading-[1.7]"
                      style={{ fontFamily: '"Noto Sans", sans-serif' }}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
