import React from 'react';
import Image from 'next/image';

const CaseStudyHighlight = () => {
  return (
    <section  id="impact-stories" className="py-[120px] px-6 md:px-16 flex justify-center w-full bg-[#F8F3ED]">
      <div className="max-w-[1300px] w-full grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-12 lg:gap-16 items-start">
        {/* Left Content Side */}
        <div className="flex flex-col">
          {/* Label Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-[#EAE0D5] rounded-full text-[12px] font-semibold text-[#2D241E] uppercase tracking-wider">
              Impact Story
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-[48px] md:text-[56px] leading-[1.1] text-[#2D241E] mb-6">
            Transforming early intervention <br />
            <span className="text-[#A48D7F]">at scale.</span>
          </h2>

          {/* Subheading */}
          <h3 className="font-display text-[28px] md:text-[32px] text-[#2D241E] mb-10 leading-[1.3]">
            Jiveesha: AI-Powered Neurodevelopmental Screening
          </h3>

          {/* Descriptions */}
          <div className="space-y-6 mb-14">
            <p className="text-[#7A6F68] text-[15px] md:text-[16px] leading-[1.7]">
              India has over 21 million children with developmental delays, but less than 10% receive early intervention due to lack of screening infrastructure and trained professionals.
            </p>
            <p className="text-[#7A6F68] text-[15px] md:text-[16px] leading-[1.7]">
              Developed in partnership with NIEPID (Government of India), Jiveesha is an AI-powered, multilingual platform that enables large-scale screening, professional diagnosis support, and personalized intervention plans.
            </p>
            <p className="text-[#7A6F68] text-[15px] md:text-[16px] leading-[1.7]">
              Deployed across multiple districts under Samagra Shiksha Abhiyan, Jiveesha is proving that early intervention at scale is possible.
            </p>
          </div>

          {/* Stats Cards Row */}
          <div className="flex flex-wrap gap-6">
            {/* Stat Card 1 */}
            <div className="bg-white/40 backdrop-blur-[20px] rounded-[24px] p-7 border border-white/20 min-w-[160px]">
              <div className="text-[44px] font-display text-[#2D241E] leading-tight mb-2">
                50,000+
              </div>
              <div className="text-[16px] text-[#2D241E] font-semibold">
                Children screened
              </div>
              <div className="text-[13px] text-[#7A6F68] mt-1">
                Since launch
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white/40 backdrop-blur-[20px] rounded-[24px] p-7 border border-white/20 min-w-[160px]">
              <div className="text-[44px] font-display text-[#2D241E] leading-tight mb-2">
                15+
              </div>
              <div className="text-[16px] text-[#2D241E] font-semibold">
                Districts
              </div>
              <div className="text-[13px] text-[#7A6F68] mt-1">
                Implementing solution
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white/40 backdrop-blur-[20px] rounded-[24px] p-7 border border-white/20 min-w-[160px]">
              <div className="text-[44px] font-display text-[#2D241E] leading-tight mb-2">
                85%
              </div>
              <div className="text-[16px] text-[#2D241E] font-semibold">
                Reduction
              </div>
              <div className="text-[13px] text-[#7A6F68] mt-1">
                In screening time
              </div>
            </div>
          </div>
        </div>

        {/* Right Branding Image Side */}
        <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-[24px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/LBKnMROG8HBkFthEPXAy7RIQ8-4.png"
            alt="Jiveesha Platform"
            fill
            className="object-cover"
            priority
          />
          {/* Logo overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-3 text-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-10 h-10"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span className="text-[36px] font-display">Jiveesha</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHighlight;
