import React from 'react';
import { Star, PlayCircle } from 'lucide-react';

/**
 * Hero component for Claura AI Agency website.
 * Features: 5-star rating, hero headline, descriptive subtext, dual CTA buttons,
 * and a decorative dot grid pattern background.
 */
const Hero = () => {
  return (
    <section 
      className="relative flex flex-col items-center justify-center pt-[120px] pb-[80px] px-8 overflow-hidden bg-[#F8F3ED]"
      id="hero"
    >
      <div className="container relative z-10 max-w-[1200px] mx-auto flex flex-col items-center text-center">
        
        {/* Star Rating Info */}
        <div className="flex flex-col items-center gap-3 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                fill="#A48D7F" 
                color="#A48D7F" 
                className="opacity-100" 
              />
            ))}
          </div>
          <p className="text-[14px] font-sans font-medium text-[#2D241E] opacity-70 tracking-tight">
            Helped over 100+ businesses
          </p>
        </div>

        {/* Hero Headline */}
        <h1 className="hero-heading font-display text-[#2D241E] max-w-[900px] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          From AI confusion to <span className="italic">clarity.</span>
        </h1>

        {/* Descriptive Subtext */}
        <p className="body-text text-[20px] leading-[1.6] max-w-[640px] mb-10 text-[#7A6F68] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          We identify where AI saves time and money in your business, then build and implement the systems that make it happen.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-400">
          <a 
            href="#book-a-call" 
            className="btn-primary flex items-center justify-center px-8 py-4 bg-[#2D241E] text-[#F8F3ED] rounded-full font-medium transition-transform hover:scale-105"
          >
            Book a free call
          </a>
          <button 
            className="btn-secondary flex items-center justify-center gap-2 px-8 py-4 border border-[#2D241E] text-[#2D241E] rounded-full font-medium transition-all hover:bg-[#2D241E]/5"
          >
            How we work
            <PlayCircle size={20} className="fill-[#2D241E] text-[#F8F3ED]" />
          </button>
        </div>

        {/* Decorative Dot Grid Pattern */}
        <div className="mt-20 w-full max-w-[1000px] aspect-[1008/325] opacity-20 pointer-events-none select-none">
          <div className="grid grid-cols-[repeat(25,1fr)] grid-rows-[repeat(10,1fr)] gap-8 w-full h-full justify-items-center content-center">
            {[...Array(250)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#2D241E]"></div>
            ))}
          </div>
        </div>

        {/* Brand/Social Proof Text */}
        <div className="mt-16 animate-in fade-in duration-1000 delay-500">
          <p className="text-[14px] font-sans text-[#7A6F68] uppercase tracking-widest font-semibold opacity-60">
            Brands we&apos;ve helped implement AI:
          </p>
        </div>
      </div>

      {/* Background soft glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[20%] left-[30%] w-[400px] h-[400px] bg-[#A48D7F] opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[20%] right-[30%] w-[300px] h-[300px] bg-[#EAE0D5] opacity-20 blur-[100px] rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;