'use client';

import React from 'react';

export default function WhyChooseUs() {
  return (
    <section
      className="py-[100px] bg-[#F8F3ED] overflow-hidden"
      id="why-daira"
    >
      {/* Heading */}
      <div className="container mx-auto max-w-[1400px] px-8 text-center mb-[60px]">
        <div className="inline-block px-4 py-1.5 bg-[#EAE0D5] rounded-full mb-6">
          <span className="text-[12px] font-bold text-[#2D241E] uppercase tracking-wider">
            Why Daira
          </span>
        </div>

        <h2 className="font-display text-[56px] leading-[1.2] text-[#2D241E] mb-6">
          We&apos;re not your <span className="italic text-[#7A6F68]">typical</span> EdTech startup.
        </h2>

        <p className="max-w-[700px] mx-auto text-[16px] leading-relaxed text-[#7A6F68]">
          We&apos;re an R&D lab that builds for impact, not just exits — working
          where others won&apos;t go.
        </p>
      </div>

      {/* Cards */}
      <div className="container mx-auto max-w-[1300px] px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Typical EdTech */}
          <div className="relative rounded-[32px] overflow-hidden min-h-[420px] shadow-2xl">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  'url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/nOTrxDdMtR8XwWdL7sE4DA27w-10.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(90px) grayscale(100%) brightness(0.6)',
                transform: 'scale(1.4)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#3F3024]/95 via-[#6B5642]/85 to-[#D6C3AE]/95" />

            {/* content fully centered */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8 md:px-12 py-6">
              <h3 className="font-display text-[40px] md:text-[44px] text-white leading-[1.1] drop-shadow-md mb-8">
                Typical EdTech
              </h3>

              <div className="space-y-3 text-white/90 text-[14px] leading-[1.8] max-w-[430px] text-justify">
                <p>Build for urban, English-speaking markets</p>
                <p>Focus on test prep and content delivery</p>
                <p>No government integration</p>
                <p>Solutions that work in labs, not in fields</p>
              </div>

              <div className="w-full pt-4 border-t border-white/25 mt-8">
                <p className="text-white/75 text-[13px] italic text-center">
                  Most EdTech builds for the 10% who already have access
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Daira EdTech */}
          <div className="relative rounded-[32px] overflow-hidden min-h-[420px] shadow-2xl">
            <div
              className="absolute inset-0 opacity-85"
              style={{
                backgroundImage:
                  'url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/nOTrxDdMtR8XwWdL7sE4DA27w-10.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(80px) saturate(1.25) brightness(0.9)',
                transform: 'scale(1.4)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#3A2718]/95 via-[#7A5433]/90 to-[#C9A27B]/90" />

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8 md:px-12 py-6">
              <h3 className="font-display text-[40px] md:text-[44px] text-white leading-[1.1] drop-shadow-md mb-8">
                Daira EdTech
              </h3>

              <div className="space-y-3 text-white text-[14px] leading-[1.8] font-medium max-w-[430px] text-justify">
                <p>Build for underserved, multilingual India</p>
                <p>Focus on inclusion, early intervention, accessibility</p>
                <p>Deep government partnerships at all levels</p>
                <p>Proven implementations in real districts</p>
              </div>

              <div className="w-full pt-4 border-t border-white/30 mt-8">
                <p className="text-white text-[13px] italic font-medium text-center">
                  We build for the 90% — where technology is needed most
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
