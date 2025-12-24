import React from 'react';
import { Star, PlayCircle } from 'lucide-react';

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

        {/* Animated Gradient Dot Grid */}
        <div className="mt-20 w-full max-w-[1100px] aspect-[1100/500] relative rounded-[32px] overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFE4CC] via-[#87CEEB] to-[#B0C4DE] opacity-90"></div>
          
          {/* Animated Glow Effects */}
          <div className="absolute top-[20%] left-[40%] w-[300px] h-[300px] bg-gradient-radial from-[#FF6B6B] via-[#FFD93D] to-transparent opacity-60 blur-[80px] animate-pulse"></div>
          <div className="absolute top-[30%] right-[35%] w-[250px] h-[250px] bg-gradient-radial from-[#FF8C94] via-[#FFA07A] to-transparent opacity-50 blur-[60px] animate-pulse delay-500"></div>
          
          {/* Dot Grid Overlay */}
          <div className="absolute inset-0 grid grid-cols-[repeat(24,1fr)] grid-rows-[repeat(8,1fr)] gap-6 p-8">
            {[...Array(192)].map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 rounded-full bg-white/60"
                style={{
                  animation: `pulse ${2 + (i % 3)}s ease-in-out infinite`,
                  animationDelay: `${(i % 10) * 0.1}s`
                }}
              ></div>
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
    </section>
  );
};

export default Hero;
