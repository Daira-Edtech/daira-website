import React from 'react';
import Image from 'next/image';

const CaseStudyHighlight = () => {
  return (
    <section className="py-[120px] px-6 md:px-16 flex justify-center w-full bg-[#F8F3ED]">
      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Left Content Side */}
        <div className="flex flex-col">
          {/* Label Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-[#EAE0D5] rounded-full text-[12px] font-semibold text-[#2D241E] uppercase tracking-wider">
              Case study
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-[48px] md:text-[56px] leading-[1.1] text-[#2D241E] mb-8">
            We help automate <br />
            <span className="text-[#A48D7F]">what matters</span> most.
          </h2>

          {/* Descriptions */}
          <div className="space-y-6 mb-12 max-w-[500px]">
            <p className="text-[#7A6F68] text-[16px] leading-[1.6]">
              Hamilton, a growing e-commerce business, was overwhelmed by repetitive
              order processing and customer support tasks.
            </p>
            <p className="text-[#7A6F68] text-[16px] leading-[1.6]">
              We analyzed their workflows, identified high-impact opportunities, and
              built custom automation that integrated seamlessly with their existing
              tools.
            </p>
            <p className="text-[#7A6F68] text-[16px] leading-[1.6]">
              Within 30 days, they saw measurable results.
            </p>
          </div>

          {/* Stats Cards Row */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Stat Card 1 */}
            <div className="flex-1 bg-white/40 backdrop-blur-[20px] rounded-[24px] p-8 border border-white/20">
              <div className="text-[48px] font-display text-[#2D241E] leading-tight">
                50+
              </div>
              <div className="text-[16px] text-[#2D241E] font-medium mt-2">
                Hours saved
              </div>
              <div className="text-[14px] text-[#7A6F68] mt-1">
                In the first month
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="flex-1 bg-white/40 backdrop-blur-[20px] rounded-[24px] p-8 border border-white/20">
              <div className="text-[48px] font-display text-[#2D241E] leading-tight">
                40%
              </div>
              <div className="text-[16px] text-[#2D241E] font-medium mt-2">
                Reduction
              </div>
              <div className="text-[14px] text-[#7A6F68] mt-1">
                In manual work
              </div>
            </div>
          </div>
        </div>

        {/* Right Branding Image Side */}
        <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[700px] rounded-[24px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/LBKnMROG8HBkFthEPXAy7RIQ8-4.png"
            alt="Hamilton Case Study Branding"
            fill
            className="object-cover"
            priority
          />
          {/* Logo overlay matching screenshot placement */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="flex items-center gap-2 text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-8 h-8"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span className="text-[32px] font-display">Hamilton</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHighlight;