"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Head from "next/head";
import { motion, useMotionValue, useTransform, useInView, animate } from 'framer-motion';

const AboutStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3, margin: "-100px" });
  
  const stats = [
    { number: 50000, label: "Children screened through Jiveesha" },
    { number: 15, label: "Districts implementing our solutions" },
    { number: 3, label: "Government partnerships (Central, State, Local)" }
  ];

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      
      <section 
        id="who-we-are" 
        className="w-full flex flex-col items-center select-none"
        style={{ fontFamily: '"Noto Sans", sans-serif' }}
        ref={ref}
      >
        <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 space-y-8 sm:space-y-10 md:space-y-12 py-16 sm:py-20 md:py-24 lg:py-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 sm:gap-8 md:gap-12 items-start">
            <motion.div 
              className="space-y-4 sm:space-y-5 md:space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center px-3 py-1 bg-[#EAE0D5] rounded-full"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <span 
                  className="text-[11px] sm:text-[12px] font-semibold text-[#2D241E] uppercase tracking-wider"
                  style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 600 }}
                >
                  Who we are
                </span>
              </motion.div>
              <motion.h2 
                className="text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-display text-[#2D241E] leading-[1.1] mb-4 sm:mb-5 md:mb-6 max-w-[500px]"
                style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8 }}
              >
                The <span className="opacity-40 block sm:inline">R&D Lab</span>
                <br className="hidden sm:block md:hidden" />
                <span className="block sm:inline">Built for Impact.</span>
              </motion.h2>
            </motion.div>
            
            <motion.div 
              className="flex items-center h-full mt-2 sm:mt-0"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p 
                className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#7A6F68] leading-[1.6] sm:leading-[1.65] md:leading-[1.7]"
                style={{ fontFamily: '"Noto Sans", sans-serif' }}
              >
                We founded Daira EdTech to bridge the gap where technology and social impact haven&apos;t yet reached. Starting with inclusive education, we now work across learning disabilities, higher education, competitive examinations for rural India, and policy enablement proving that technology can accelerate change in the most underserved sectors.
              </p>
            </motion.div>
          </div>

          <div className="relative w-full aspect-[5/4] sm:aspect-[4/3] md:aspect-[16/9] lg:aspect-[2144/730] min-h-[500px] sm:min-h-[450px] md:min-h-[420px] lg:min-h-[400px] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] overflow-hidden flex items-center justify-center p-5 sm:p-6 md:p-8 lg:p-12">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/3jSoIlDJyMfLx6JTWfHwuwwhjSw-1.png"
                alt="Stats background"
                fill
                className="object-cover"
                priority
              />
              <motion.div 
                className="absolute inset-0 bg-black/5 mix-blend-overlay"
                animate={isInView ? { opacity: 0.3 } : { opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            </div>

            <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass-card flex flex-col items-center justify-center gap-2 sm:gap-2.5 py-7 sm:py-8 md:py-9 lg:py-10 px-4 sm:px-5 md:px-6 text-center text-[#F8F3ED] rounded-[12px] sm:rounded-[14px] md:rounded-[16px]"
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { y: 50, opacity: 0, scale: 0.9 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                    delay: isInView ? 0.3 + (index * 0.2) : 0
                  }}
                >
                  <motion.h1 
                    className="text-[40px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[64px] font-display leading-none"
                    style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
                  >
                    <Counter 
                      end={stat.number} 
                      duration={2.5}
                      delay={index * 0.2}
                      trigger={isInView}
                    />
                  </motion.h1>
                  <motion.p 
                    className="text-[13px] sm:text-[13.5px] md:text-[14px] lg:text-[15px] xl:text-[16px] opacity-90 leading-[1.4] sm:leading-[1.42] md:leading-[1.45] lg:leading-[1.5] max-w-[280px] sm:max-w-[300px] md:max-w-full"
                    style={{ fontFamily: '"Noto Sans", sans-serif' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 }}
                  >
                    {stat.label}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="w-full bg-[#F5F1EA] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] p-6 sm:p-7 md:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6 border border-[#EDE5D8]/50"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-auto">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 sm:gap-3">
                <motion.h3 
                  className="text-[20px] sm:text-[21px] md:text-[22px] lg:text-[24px] font-display text-[#2D241E] leading-tight"
                  style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  Want to join our mission?
                </motion.h3>
                <motion.div 
                  className="bg-[#F5F1EA] border border-[#EDE5D8]/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span 
                    className="text-[12px] sm:text-[13px] md:text-[14px] font-semibold text-[#2D241E]"
                    style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 600 }}
                  >
                    Building the future of inclusive education
                  </span>
                </motion.div>
              </div>
              <motion.p 
                className="text-[14px] sm:text-[15px] md:text-[16px] text-[#7A6F68] leading-[1.6] sm:leading-[1.65] max-w-[500px]"
                style={{ fontFamily: '"Noto Sans", sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                We&apos;re looking for passionate researchers, developers, and changemakers who believe technology should serve everyone especially those who&apos;ve been left behind.
              </motion.p>
            </div>
            
            <motion.a 
              href="mailto:hello@dairaedtech.com" 
              className="btn-primary flex-shrink-0 w-full sm:w-auto min-w-[140px] text-center px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 text-[14px] sm:text-[15px] md:text-[16px] font-semibold bg-[#2D241E] hover:bg-[#1a160f] text-[#F8F3ED] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] transition-all duration-300"
              style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 600 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(45, 36, 30, 0.3)" 
              }}
              whileTap={{ scale: 0.98 }}
            >
              Join Our Team
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

const Counter = ({ end, duration = 2, delay = 0, trigger }: { 
  end: number; 
  duration?: number; 
  delay?: number; 
  trigger: boolean;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (trigger && !hasAnimated.current) {
      hasAnimated.current = true;
      const controls = animate(count, end, { 
        duration, 
        delay
      });
      return controls.stop;
    }
  }, [trigger, count, end, duration, delay]);

  return <motion.span>{rounded}</motion.span>;
};

export default AboutStats;
