import React from 'react';
import Image from 'next/image';

const TestimonialQuote: React.FC = () => {
  return (
    <section className="relative w-full max-w-[1200px] mx-auto overflow-hidden px-3 sm:px-4 md:px-6 lg:px-8 mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-[120px]">
      <div 
        className="relative min-h-[420px] sm:min-h-[460px] md:min-h-[500px] lg:min-h-[540px] xl:min-h-[560px] w-full flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-14 xl:p-16 rounded-[18px] sm:rounded-[20px] md:rounded-[24px] overflow-hidden group"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/CDafpAJFtQbOD92OMLiiTjjPVRU-3.png"
            alt="Abstract nature testimonial background"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[800px]">
          <div className="mb-4 sm:mb-5 md:mb-6 opacity-80 text-white">
            <svg 
              width="36" 
              height="26"
              viewBox="0 0 44 32" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-[36px] h-[26px] sm:w-[40px] sm:h-[29px] md:w-[44px] md:h-[32px]"
            >
              <path d="M18.6667 0C8.35555 0 0 8.35555 0 18.6667V32H13.3333V18.6667C13.3333 15.7222 15.7222 13.3333 18.6667 13.3333V0ZM44 0C33.6889 0 25.3333 8.35555 25.3333 18.6667V32H38.6667V18.6667C38.6667 15.7222 41.0556 13.3333 44 13.3333V0Z" />
            </svg>
          </div>

          <blockquote className="mb-6 sm:mb-7 md:mb-8 lg:mb-10 text-white">
            <h2 className="font-display text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] leading-[1.15] sm:leading-[1.2] md:leading-[1.15] lg:leading-[1.1] tracking-tight text-balance">
              &quot;Daira EdTech&apos;s Jiveesha platform has transformed how we approach early intervention. For the first time, we can screen children at scale and connect them with the right support before it&apos;s too late.&quot;
            </h2>
          </blockquote>

          <div className="flex flex-col gap-0.5 sm:gap-1">
            <cite className="not-italic font-sans text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] font-medium text-white">
              Dr. [Name], Director
            </cite>
            <span className="font-sans text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-white/80">
              NIEPID, Government of India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialQuote;
