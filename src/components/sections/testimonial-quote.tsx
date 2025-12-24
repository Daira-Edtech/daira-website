import React from 'react';
import Image from 'next/image';

/**
 * TestimonialQuote component clones the featured testimonial section.
 * It features a large bold quote overlaying an abstract nature background image.
 */

const TestimonialQuote: React.FC = () => {
  return (
    <section className="relative w-full max-w-[1200px] mx-auto overflow-hidden px-4 sm:px-6 lg:px-8 mb-[120px]">
      <div 
        className="relative min-h-[500px] md:min-h-[560px] w-full flex flex-col justify-center p-10 md:p-16 rounded-[24px] overflow-hidden group"
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
          <div className="mb-6 opacity-80 text-white">
            <svg 
              width="44" 
              height="32" 
              viewBox="0 0 44 32" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.6667 0C8.35555 0 0 8.35555 0 18.6667V32H13.3333V18.6667C13.3333 15.7222 15.7222 13.3333 18.6667 13.3333V0ZM44 0C33.6889 0 25.3333 8.35555 25.3333 18.6667V32H38.6667V18.6667C38.6667 15.7222 41.0556 13.3333 44 13.3333V0Z" />
            </svg>
          </div>

          <blockquote className="mb-10 text-white">
            <h2 className="font-display text-[32px] md:text-[44px] lg:text-[48px] leading-[1.1] md:leading-[1.15] tracking-tight text-balance">
              They didn&apos;t overwhelm us with options. They just built exactly what we needed. We&apos;re saving 15 hours a week and saw ROI in under two months.
            </h2>
          </blockquote>

          <div className="flex flex-col gap-1">
            <cite className="not-italic font-sans text-[18px] md:text-[20px] font-medium text-white">
              Sarah Chen
            </cite>
            <span className="font-sans text-[14px] md:text-[16px] text-white/80">
              Founder at BrightPath Consulting
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialQuote;
