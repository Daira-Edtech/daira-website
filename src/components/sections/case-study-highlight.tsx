'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Head from "next/head";
import { motion, useInView } from 'framer-motion';

const CaseStudyHighlight = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3, margin: "-100px" });

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      
      <section 
        ref={ref}
        id="impact-stories" 
        className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full bg-[#F8F3ED] overflow-hidden"
        style={{ fontFamily: '"Noto Sans", sans-serif' }}
      >
        <div className="max-w-[1300px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 items-start">
            {/* Left Content Side */}
            <div className="flex flex-col w-full">
              {/* Label Badge */}
              <motion.div 
                className="mb-3 sm:mb-4 md:mb-5 lg:mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span 
                  className="inline-flex items-center px-2.5 sm:px-3 py-0.5 sm:py-1 bg-[#EAE0D5] rounded-full text-[10px] sm:text-[11px] md:text-[12px] font-semibold text-[#2D241E] uppercase tracking-wider"
                  style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 600 }}
                >
                  Impact Story
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2 
                className="font-display text-[26px] sm:text-[30px] md:text-[36px] lg:text-[44px] xl:text-[52px] 2xl:text-[56px] leading-[1.15] sm:leading-[1.12] md:leading-[1.1] text-[#2D241E] mb-3 sm:mb-4 md:mb-5 lg:mb-6"
                style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transforming early intervention{' '}
                <span className="text-[#A48D7F] block sm:inline">at scale.</span>
              </motion.h2>

              {/* Subheading */}
              <motion.h3 
                className="font-display text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] text-[#2D241E] mb-5 sm:mb-6 md:mb-8 lg:mb-10 leading-[1.3]"
                style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Jiveesha: AI-Powered Neurodevelopmental Screening
              </motion.h3>

              {/* Descriptions */}
              <motion.div 
                className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p 
                  className="text-[#7A6F68] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[1.6] sm:leading-[1.65] md:leading-[1.7]"
                  style={{ fontFamily: '"Noto Sans", sans-serif' }}
                >
                  India has over 21 million children with developmental delays, but less than 10% receive early intervention due to lack of screening infrastructure and trained professionals.
                </p>
                <p 
                  className="text-[#7A6F68] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[1.6] sm:leading-[1.65] md:leading-[1.7]"
                  style={{ fontFamily: '"Noto Sans", sans-serif' }}
                >
                  Developed in partnership with NIEPID (Government of India), Jiveesha is an AI-powered, multilingual platform that enables large-scale screening, professional diagnosis support, and personalized intervention plans.
                </p>
                <p 
                  className="text-[#7A6F68] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[1.6] sm:leading-[1.65] md:leading-[1.7]"
                  style={{ fontFamily: '"Noto Sans", sans-serif' }}
                >
                  Deployed across multiple districts under Samagra Shiksha Abhiyan, Jiveesha is proving that early intervention at scale is possible.
                </p>
              </motion.div>

              {/* Stats Cards Row */}
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full">
                {/* Stat Card 1 */}
                <motion.div 
                  className="bg-white/40 backdrop-blur-[20px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] lg:rounded-[24px] p-3.5 sm:p-4 md:p-5 lg:p-6 xl:p-7 border border-white/20 w-full cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.03,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="text-[30px] sm:text-[34px] md:text-[38px] lg:text-[42px] xl:text-[44px] font-display text-[#2D241E] leading-tight mb-1 sm:mb-1.5 md:mb-2"
                    style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    50,000+
                  </motion.div>
                  <div 
                    className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#2D241E] font-semibold"
                    style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 600 }}
                  >
                    Children screened
                  </div>
                  <div 
                    className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] text-[#7A6F68] mt-0.5 sm:mt-1"
                    style={{ fontFamily: '"Noto Sans", sans-serif' }}
                  >
                    Since launch
                  </div>
                </motion.div>

                {/* Stat Card 2 */}
                <motion.div 
                  className="bg-white/40 backdrop-blur-[20px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] lg:rounded-[24px] p-3.5 sm:p-4 md:p-5 lg:p-6 xl:p-7 border border-white/20 w-full cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.8, delay: 0.65 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.03,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="text-[30px] sm:text-[34px] md:text-[38px] lg:text-[42px] xl:text-[44px] font-display text-[#2D241E] leading-tight mb-1 sm:mb-1.5 md:mb-2"
                    style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    15+
                  </motion.div>
                  <div 
                    className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#2D241E] font-semibold"
                    style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 600 }}
                  >
                    Districts
                  </div>
                  <div 
                    className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] text-[#7A6F68] mt-0.5 sm:mt-1"
                    style={{ fontFamily: '"Noto Sans", sans-serif' }}
                  >
                    Implementing solution
                  </div>
                </motion.div>

                {/* Stat Card 3 */}
                <motion.div 
                  className="bg-white/40 backdrop-blur-[20px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] lg:rounded-[24px] p-3.5 sm:p-4 md:p-5 lg:p-6 xl:p-7 border border-white/20 w-full cursor-pointer xs:col-span-2 sm:col-span-1"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.03,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="text-[30px] sm:text-[34px] md:text-[38px] lg:text-[42px] xl:text-[44px] font-display text-[#2D241E] leading-tight mb-1 sm:mb-1.5 md:mb-2"
                    style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    85%
                  </motion.div>
                  <div 
                    className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#2D241E] font-semibold"
                    style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 600 }}
                  >
                    Reduction
                  </div>
                  <div 
                    className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] text-[#7A6F68] mt-0.5 sm:mt-1"
                    style={{ fontFamily: '"Noto Sans", sans-serif' }}
                  >
                    In screening time
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Branding Image Side */}
            <motion.div 
              className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ 
                scale: 1.03,
                rotate: 1,
                transition: { duration: 0.4 }
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full"
              >
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/LBKnMROG8HBkFthEPXAy7RIQ8-4.png"
                  alt="Jiveesha Platform"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </motion.div>
              {/* Logo overlay */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div 
                  className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-white pointer-events-auto"
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 flex-shrink-0"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </motion.svg>
                  <span 
                    className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-[36px] font-display whitespace-nowrap"
                    style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
                  >
                    Jiveesha
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyHighlight;
