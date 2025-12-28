import React from 'react';
import Image from 'next/image';

const AboutStats = () => {
  return (
    <section id="who-we-are" className="w-full flex flex-col items-center select-none">
      <div className="w-full max-w-[1200px] px-4 md:px-8 space-y-12 py-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 bg-[#EAE0D5] rounded-full">
              <span className="text-[12px] font-semibold text-[#2D241E] uppercase tracking-wider">
                Who we are
              </span>
            </div>
            <h2 className="text-[52px] md:text-[64px] lg:text-[72px] font-display text-[#2D241E] leading-[1.1] mb-6 max-w-[500px]">
              The <span className="opacity-40 block md:inline">R&D Lab</span>
              <br className="md:hidden" />
              <span>Built for Impact.</span>
            </h2>
          </div>
          <div className="flex items-center h-full">
            <p className="text-[18px] md:text-[20px] text-[#7A6F68] leading-[1.6]">
              We founded Daira EdTech to bridge the gap where technology and social impact haven't yet reached. Starting with inclusive education, we now work across learning disabilities, higher education, competitive examinations for rural India, and policy enablement proving that technology can accelerate change in the most underserved sectors.
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
              <h1 className="text-[54px] md:text-[64px] font-display">50,000</h1>
              <p className="text-[14px] md:text-[16px] font-sans opacity-80">
                Children screened through Jiveesha
              </p>
            </div>

            <div className="glass-card flex flex-col items-center justify-center gap-2 py-10 px-6 text-center text-[#F8F3ED] transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
              <h1 className="text-[54px] md:text-[64px] font-display">15</h1>
              <p className="text-[14px] md:text-[16px] font-sans opacity-80">
                Districts implementing our solutions
              </p>
            </div>

            <div className="glass-card flex flex-col items-center justify-center gap-2 py-10 px-6 text-center text-[#F8F3ED] transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
              <h1 className="text-[54px] md:text-[64px] font-display">3</h1>
              <p className="text-[14px] md:text-[16px] font-sans opacity-80">
                Government partnerships (Central, State, Local)
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#F5F1EA] rounded-[24px] p-8 md:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border border-[#EDE5D8]/50">
          <div className="flex flex-col gap-4 w-full lg:w-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3">
              <h3 className="text-[22px] md:text-[24px] font-display text-[#2D241E] leading-tight">
                Want to join our mission?
              </h3>
              <div className="bg-[#F5F1EA] border border-[#EDE5D8]/50 px-4 py-2 rounded-full">
                <span className="text-[13px] md:text-[14px] font-semibold text-[#2D241E]">
                  Building the future of inclusive education
                </span>
              </div>
            </div>
            <p className="text-[16px] text-[#7A6F68] leading-[1.6] max-w-[500px]">
              We're looking for passionate researchers, developers, and changemakers who believe technology should serve everyone especially those who've been left behind.
            </p>
          </div>
          
          <a 
            href="mailto:hello@dairaedtech.com" 
            className="btn-primary flex-shrink-0 min-w-[140px] text-center px-8 py-4 font-semibold bg-[#2D241E] hover:bg-[#1a160f] text-[#F8F3ED] rounded-[20px] transition-all duration-300"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
