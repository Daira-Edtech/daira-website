"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import Head from "next/head";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
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
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  // ✅ Staggered title variants
  const titleContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const titleItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const accordionVariants: Variants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 }
  };

  const iconVariants: Variants = {
    closed: { rotate: 0, scale: 1 },
    open: { rotate: 135, scale: 1.1 }
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
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#F3EDE5] px-4 py-2 rounded-full">
              <span className="text-[13px] font-medium text-[#2D241E] tracking-wide" style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 500 }}>
                FAQ
              </span>
            </div>
          </motion.div>

          {/* ✅ STAGGERED Title on scroll */}
          <motion.div 
            className="text-center mb-16 max-w-[750px]"
            variants={titleContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="font-display text-[52px] md:text-[64px] text-[#2D241E] mb-6 leading-[1.15] tracking-tight"
              variants={titleItemVariants}
              style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
            >
              Your questions <span className="text-[#7A6F68]">answered.</span>
            </motion.h2>
            
            <motion.p 
              className="text-[#5C5550] text-[16px] md:text-[17px] leading-[1.6] max-w-[600px] mx-auto"
              variants={titleItemVariants}
              style={{ fontFamily: '"Noto Sans", sans-serif' }}
            >
              Everything you need to know about working with us. Still have questions? Schedule a call and we'll walk you through it.
            </motion.p>
          </motion.div>

          {/* Accordion - unchanged */}
          <div className="w-full max-w-[900px] space-y-4">
            {faqData.map((item, index) => {
              const isOpen = openIndexes.includes(index);
              
              return (
                <div
                  key={index}
                  className="bg-[#F3EDE5] rounded-[20px] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between px-8 py-7 text-left focus:outline-none"
                  >
                    <span 
                      className="text-[18px] md:text-[20px] font-normal text-[#2D241E] pr-6 leading-[1.4]"
                      style={{ fontFamily: '"Noto Sans", sans-serif' }}
                    >
                      {item.question}
                    </span>
                    <motion.div 
                      className="flex-shrink-0"
                      variants={iconVariants}
                      animate={isOpen ? "open" : "closed"}
                      transition={{ duration: 0.2 }}
                    >
                      <Plus className="w-6 h-6 text-[#2D241E]" strokeWidth={2.5} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={accordionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div 
                          className="px-8 pb-7 text-[#5C5550] text-[15px] md:text-[16px] leading-[1.7]"
                          style={{ fontFamily: '"Noto Sans", sans-serif' }}
                        >
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
