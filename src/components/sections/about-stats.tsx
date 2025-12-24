import React from 'react';
import Image from 'next/image';

const AboutStats = () => {
  return (
    <section id="who-we-are" className="w-full flex flex-col items-center select-none">
      <div className="w-full max-w-[1200px] px-4 md:px-8 space-y-24 py-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 bg-[#EAE0D5] rounded-full">
              <span className="text-[12px] font-semibold text-[#2D241E] uppercase tracking-wider">
                Who we are
              </span>
            </div>
            <h2 className="text-[48px] md:text-[56px] font-display text-[#2D241E] leading-[1.1] mb-6">
              The AI agency built for <span className="opacity-40">you.</span>
            </h2>
          </div>
          <div className="flex items-center h-full">
            <p className="text-[18px] md:text-[20px] text-[#7A6F68] leading-[1.6]">
              We built this agency to help businesses avoid AI overwhelm. We listen first, recommend only what works, and build systems you'll actually use—without the hype or complexity.
            </p>
          </div>
        </div>

        <div className="relative w-full aspect-[2144/730] min-h-[400px] rounded-[24px] overflow-hidden flex items-center justify-center p-6 md:p-12">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/3jSoIlDJyMfLx6JTWfHwuwwhjSw-1.png"
              alt="Stats background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/5 mix-blend-overlay opacity-30"></div>
          </div>

          <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card flex flex-col items-center justify-center gap-2 py-10 px-6 text-center text-[#F8F3ED] transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
              <h1 className="text-[54px] md:text-[64px] font-display">1,500+</h1>
              <p className="text-[14px] md:text-[16px] font-sans opacity-80">
                Hours saved for clients monthly
              </p>
            </div>

            <div className="glass-card flex flex-col items-center justify-center gap-2 py-10 px-6 text-center text-[#F8F3ED] transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
              <h1 className="text-[54px] md:text-[64px] font-display">35%</h1>
              <p className="text-[14px] md:text-[16px] font-sans opacity-80">
                Average reduction in manual work
              </p>
            </div>

            <div className="glass-card flex flex-col items-center justify-center gap-2 py-10 px-6 text-center text-[#F8F3ED] transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
              <h1 className="text-[54px] md:text-[64px] font-display">45 days</h1>
              <p className="text-[14px] md:text-[16px] font-sans opacity-80">
                Average time to measurable ROI
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#F1EAE2] rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-[rgba(45,36,30,0.05)]">
          <div className="flex flex-col gap-4 max-w-[600px]">
            <div className="flex items-center gap-4 flex-wrap">
              <h3 className="text-[20px] md:text-[24px] font-display text-[#2D241E]">
                Want to be part of the team?
              </h3>
              <div className="bg-[#A48D7F] rounded-full px-3 py-1">
                <span className="text-[12px] font-bold text-[#F8F3ED] whitespace-nowrap">
                  3 vacancies available
                </span>
              </div>
            </div>
            <p className="text-[16px] text-[#7A6F68] leading-relaxed">
              We&apos;re always looking for talented people who want to help businesses cut through AI overwhelm and build systems that work.
            </p>
          </div>
          
          <a 
            href="mailto:hello@claura.ai" 
            className="btn-primary flex-shrink-0 min-w-[140px] text-center"
          >
            Apply now
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
