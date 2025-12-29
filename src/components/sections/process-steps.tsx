"use client";

import React, { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import Head from "next/head";
import { motion, useInView } from 'framer-motion';

const ProcessSteps = () => {
  const pathRef = useRef<SVGLineElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>(0);
  const isAnimatingRef = useRef(false);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2, margin: "-100px" });

  useEffect(() => {
    if (!pathRef.current || !sectionRef.current) return;

    const pathLength = pathRef.current.getTotalLength();
    const path = pathRef.current;
    
    const resetPath = () => {
      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength}`;
      isAnimatingRef.current = false;
    };

    let startTime = 0;
    let phase = 0;

    const animate = (timestamp: number) => {
      if (!isAnimatingRef.current) return;

      const elapsed = timestamp - startTime;

      switch (phase) {
        case 0:
          if (elapsed < 5000) {
            const progress = elapsed / 5000;
            path.style.strokeDashoffset = `${pathLength * (1 - progress)}`;
            rafRef.current = requestAnimationFrame(animate);
          } else {
            phase = 1;
            startTime = timestamp;
            rafRef.current = requestAnimationFrame(animate);
          }
          break;

        case 1:
          if (elapsed < 3000) {
            rafRef.current = requestAnimationFrame(animate);
          } else {
            phase = 2;
            startTime = timestamp;
            rafRef.current = requestAnimationFrame(animate);
          }
          break;

        case 2:
          if (elapsed < 1500) {
            const progress = elapsed / 1500;
            path.style.strokeDashoffset = `${pathLength * progress}`;
            rafRef.current = requestAnimationFrame(animate);
          } else {
            phase = 3;
            startTime = timestamp;
            rafRef.current = requestAnimationFrame(animate);
          }
          break;

        case 3:
          if (elapsed < 500) {
            rafRef.current = requestAnimationFrame(animate);
          } else {
            resetPath();
            startTime = performance.now();
            phase = 0;
            rafRef.current = requestAnimationFrame(animate);
          }
          break;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isInView) {
            cancelAnimationFrame(rafRef.current);
            resetPath();
            isAnimatingRef.current = true;
            startTime = performance.now();
            phase = 0;
            rafRef.current = requestAnimationFrame(animate);
          } else {
            cancelAnimationFrame(rafRef.current);
            isAnimatingRef.current = false;
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
    resetPath();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [isInView]);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      
      <section 
        ref={sectionRef} 
        className="bg-[#F8F3ED] py-[120px] px-8 md:px-16" 
        id="how-we-work"
        style={{ fontFamily: '"Noto Sans", sans-serif' }}
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[80px] lg:gap-[120px] items-start">
          <div className="flex flex-col items-start max-w-[500px]">
            <motion.div 
              className="bg-[#EAE0D5] px-4 py-1.5 rounded-[100px] mb-8"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 15,
                delay: 0.1 
              }}
            >
              <span 
                className="text-[14px] font-semibold text-[#2D241E]"
                style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 600 }}
              >
                How We Work
              </span>
            </motion.div>
            <motion.h2 
              className="font-display text-[48px] md:text-[56px] leading-[1.1] text-[#2D241E] mb-6"
              style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20,
                delay: 0.2 
              }}
            >
              From Research to <motion.span 
                className="text-[#7A6F68] italic underline transition-all hover:text-[#2D241E]"
                whileHover={{ scale: 1.02 }}
              >Real-World</motion.span> Implementation.
            </motion.h2>
            <motion.p 
              className="text-[16px] md:text-[18px] leading-[1.6] text-[#7A6F68] mb-10"
              style={{ fontFamily: '"Noto Sans", sans-serif' }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ 
                type: "spring", 
                stiffness: 280, 
                damping: 18,
                delay: 0.3 
              }}
            >
              Our approach combines rigorous research, technology development, and deep government partnerships to create solutions that scale.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20,
                delay: 0.4 
              }}
            >
              <motion.a 
                href="#partner-with-us" 
                className="bg-[#2D241E] text-[#F8F3ED] px-8 py-4 rounded-[100px] font-medium text-[16px] hover:scale-105 transition-transform duration-200"
                style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 500 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(45, 36, 30, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                Partner With Us
              </motion.a>
              <motion.button 
                className="flex items-center gap-2 border border-[#2D241E] text-[#2D241E] px-8 py-4 rounded-[100px] font-medium text-[16px] hover:bg-[#2D241E]/5 transition-colors duration-200"
                style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 500 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Watch the video
                <Play className="w-5 h-5 fill-current" />
              </motion.button>
            </motion.div>
          </div>

          <div className="flex flex-col gap-12 relative">
            <svg className="absolute left-[24px] top-6 hidden md:block pointer-events-none" style={{ height: 'calc(100% - 48px)', width: '2px' }} preserveAspectRatio="none" viewBox="0 0 2 100">
              <line x1="1" y1="0" x2="1" y2="100" stroke="#2D241E" strokeOpacity="0.1" strokeWidth="1" />
              <line ref={pathRef} x1="1" y1="0" x2="1" y2="100" stroke="#2D241E" strokeWidth="2" strokeLinecap="round" />
            </svg>
            
            {/* Step 1 */}
            <motion.div 
              className="flex flex-col md:flex-row gap-6 md:gap-10 relative z-10"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                type: "spring", 
                stiffness: 320, 
                damping: 22,
                delay: 0.5 
              }}
            >
              <motion.div 
                className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F8F3ED] border border-[#2D241E]/10 flex items-center justify-center text-[20px] text-[#2D241E] shadow-sm"
                style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                01
              </motion.div>
              <div className="flex flex-col">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <h3 
                    className="text-[24px] font-display text-[#2D241E]"
                    style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
                  >
                    Understand & Research
                  </h3>
                  <span 
                    className="bg-[#F1EAE2] px-2 py-0.5 rounded-[4px] text-[12px] font-semibold text-[#7A6F68] uppercase tracking-wider"
                    style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 600 }}
                  >
                    Months 1-3
                  </span>
                </div>
                <p 
                  className="text-[16px] leading-[1.6] text-[#7A6F68]"
                  style={{ fontFamily: '"Noto Sans", sans-serif' }}
                >
                  We immerse ourselves in the problem — working with communities, experts, and government bodies to understand ground realities before writing a single line of code.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              className="flex flex-col md:flex-row gap-6 md:gap-10 relative z-10"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                type: "spring", 
                stiffness: 320, 
                damping: 22,
                delay: 0.65 
              }}
            >
              <motion.div 
                className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F8F3ED] border border-[#2D241E]/10 flex items-center justify-center text-[20px] text-[#2D241E] shadow-sm"
                style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                02
              </motion.div>
              <div className="flex flex-col">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <h3 
                    className="text-[24px] font-display text-[#2D241E]"
                    style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
                  >
                    Build & Validate
                  </h3>
                  <span 
                    className="bg-[#F1EAE2] px-2 py-0.5 rounded-[4px] text-[12px] font-semibold text-[#7A6F68] uppercase tracking-wider"
                    style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 600 }}
                  >
                    Months 3-6
                  </span>
                </div>
                <p 
                  className="text-[16px] leading-[1.6] text-[#7A6F68]"
                  style={{ fontFamily: '"Noto Sans", sans-serif' }}
                >
                  We develop solutions in partnership with clinical experts and institutions like NIEPID, ensuring every product meets rigorous standards for efficacy and accessibility.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              className="flex flex-col md:flex-row gap-6 md:gap-10 relative z-10"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                type: "spring", 
                stiffness: 320, 
                damping: 22,
                delay: 0.8 
              }}
            >
              <motion.div 
                className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F8F3ED] border border-[#2D241E]/10 flex items-center justify-center text-[20px] text-[#2D241E] shadow-sm"
                style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                03
              </motion.div>
              <div className="flex flex-col">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <h3 
                    className="text-[24px] font-display text-[#2D241E]"
                    style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
                  >
                    Pilot & Scale
                  </h3>
                  <span 
                    className="bg-[#F1EAE2] px-2 py-0.5 rounded-[4px] text-[12px] font-semibold text-[#7A6F68] uppercase tracking-wider"
                    style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 600 }}
                  >
                    Months 6-12
                  </span>
                </div>
                <p 
                  className="text-[16px] leading-[1.6] text-[#7A6F68]"
                  style={{ fontFamily: '"Noto Sans", sans-serif' }}
                >
                  We deploy with government partners at district, state, or national level — proving implementation is possible and building the evidence base for policy change.
                </p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div 
              className="flex flex-col md:flex-row gap-6 md:gap-10 relative z-10"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                type: "spring", 
                stiffness: 320, 
                damping: 22,
                delay: 0.95 
              }}
            >
              <motion.div 
                className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F8F3ED] border border-[#2D241E]/10 flex items-center justify-center text-[20px] text-[#2D241E] shadow-sm"
                style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                04
              </motion.div>
              <div className="flex flex-col">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <h3 
                    className="text-[24px] font-display text-[#2D241E]"
                    style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
                  >
                    Policy & Sustainability
                  </h3>
                  <span 
                    className="bg-[#F1EAE2] px-2 py-0.5 rounded-[4px] text-[12px] font-semibold text-[#7A6F68] uppercase tracking-wider"
                    style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 600 }}
                  >
                    Ongoing
                  </span>
                </div>
                <p 
                  className="text-[16px] leading-[1.6] text-[#7A6F68]"
                  style={{ fontFamily: '"Noto Sans", sans-serif' }}
                >
                  Beyond deployment, we work on policy enablement, professional training, and ecosystem building to ensure lasting impact.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessSteps;
