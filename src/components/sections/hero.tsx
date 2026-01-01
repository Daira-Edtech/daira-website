"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Star, PlayCircle } from 'lucide-react';

const Hero = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const rect = grid.getBoundingClientRect();
    const mouse = { x: 0, y: 0 };

    const dots = grid.querySelectorAll('.dot') as NodeListOf<HTMLElement>;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      dots.forEach((dot, i) => {
        const dotRect = dot.getBoundingClientRect();
        const dotX = dotRect.left + dotRect.width / 2 - rect.left;
        const dotY = dotRect.top + dotRect.height / 2 - rect.top;
        
        const dx = mouse.x - dotX;
        const dy = mouse.y - dotY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120 && hovered) {
          dot.style.transform = `scale(1.8) translate(${dx * 0.1}px, ${dy * 0.1}px)`;
          dot.style.opacity = '1';
          dot.style.filter = 'brightness(2) drop-shadow(0 0 12px rgba(255,255,255,0.8))';
        } else {
          dot.style.transform = 'scale(1)';
          dot.style.opacity = '0.6';
          dot.style.filter = 'brightness(1)';
        }
      });
    };

    grid.addEventListener('mousemove', handleMouseMove);
    grid.addEventListener('mouseenter', () => setHovered(true));
    grid.addEventListener('mouseleave', () => {
      setHovered(false);
      dots.forEach((dot) => {
        dot.style.transform = 'scale(1)';
        dot.style.opacity = '0.6';
        dot.style.filter = 'brightness(1)';
      });
    });

    return () => {
      grid.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hovered]);

  return (
    <section 
      className="relative flex flex-col items-center justify-center pt-20 sm:pt-24 md:pt-28 lg:pt-[120px] pb-10 sm:pb-12 md:pb-16 lg:pb-[80px] px-4 sm:px-6 md:px-8 overflow-hidden bg-[#F8F3ED]"
      id="hero"
    >
      <div className="container relative z-10 max-w-[1200px] mx-auto flex flex-col items-center text-center">
        
        {/* Star Rating Info */}
        <div className="flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3 mb-5 sm:mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-0.5 sm:gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} fill="#A48D7F" color="#A48D7F" className="opacity-100 sm:w-[14px] sm:h-[14px] md:w-4 md:h-4" />
            ))}
          </div>
          <p className="text-[11px] sm:text-[12px] md:text-[14px] font-sans font-medium text-[#2D241E] opacity-70 tracking-tight px-3 sm:px-4">
            Backed by India AI Mission, Govt of India
          </p>
        </div>

        {/* SIMPLE CLEAN TITLE */}
        <h1 className="hero-heading font-display text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px] 2xl:text-[80px] text-[#2D241E] max-w-[900px] mb-3 sm:mb-4 md:mb-6 lg:mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 leading-[1.1] px-2">
          From Research to <span className="italic text-[#7A6F68]">Real Impact.</span>
        </h1>

        {/* Descriptive Subtext */}
        <p className="body-text text-[14px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[20px] leading-[1.55] sm:leading-[1.6] md:leading-[1.65] max-w-[640px] mb-6 sm:mb-8 md:mb-10 text-[#7A6F68] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 px-2 sm:px-4">
          We are an R&D lab solving deep-rooted challenges in learning through research, technology, and inclusive design. From learning disabilities to employability we build, develop, and co-own solutions that matter.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-400 px-4 sm:px-0 max-w-[500px] sm:max-w-none">
          <a 
            href="#partner-with-us" 
            className="btn-primary flex items-center justify-center px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-4 bg-[#2D241E] text-[#F8F3ED] rounded-full font-medium transition-transform hover:scale-105 w-full sm:w-auto text-[13px] sm:text-[14px] md:text-base whitespace-nowrap"
          >
            Partner With Us
          </a>
          <button className="btn-secondary flex items-center justify-center gap-2 px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-4 border border-[#2D241E] text-[#2D241E] rounded-full font-medium transition-all hover:bg-[#2D241E]/5 w-full sm:w-auto text-[13px] sm:text-[14px] md:text-base whitespace-nowrap">
            How we work
            <PlayCircle size={16} className="fill-[#2D241E] text-[#F8F3ED] sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
          </button>
        </div>

        {/* EXACT GRID + Mouse Interaction */}
        <div 
          ref={gridRef}
          className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 w-full max-w-[1100px] aspect-[5/4] sm:aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9] xl:aspect-[1100/500] relative rounded-[14px] sm:rounded-[18px] md:rounded-[24px] lg:rounded-[32px] overflow-hidden cursor-pointer group mx-2 sm:mx-4 md:mx-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFE4CC] via-[#87CEEB] to-[#B0C4DE] opacity-90"></div>
          
          <div className="absolute top-[20%] left-[40%] w-[120px] sm:w-[160px] md:w-[220px] lg:w-[280px] xl:w-[300px] h-[120px] sm:h-[160px] md:h-[220px] lg:h-[280px] xl:h-[300px] bg-gradient-radial from-[#FF6B6B] via-[#FFD93D] to-transparent opacity-60 blur-[35px] sm:blur-[50px] md:blur-[65px] lg:blur-[80px] animate-pulse"></div>
          <div className="absolute top-[30%] right-[35%] w-[100px] sm:w-[140px] md:w-[190px] lg:w-[230px] xl:w-[250px] h-[100px] sm:h-[140px] md:h-[190px] lg:h-[230px] xl:h-[250px] bg-gradient-radial from-[#FF8C94] via-[#FFA07A] to-transparent opacity-50 blur-[25px] sm:blur-[35px] md:blur-[50px] lg:blur-[60px] animate-pulse delay-500"></div>
          
          <div className="absolute inset-0 grid grid-cols-[repeat(10,1fr)] sm:grid-cols-[repeat(14,1fr)] md:grid-cols-[repeat(18,1fr)] lg:grid-cols-[repeat(22,1fr)] xl:grid-cols-[repeat(24,1fr)] grid-rows-[repeat(5,1fr)] sm:grid-rows-[repeat(6,1fr)] md:grid-rows-[repeat(7,1fr)] lg:grid-rows-[repeat(8,1fr)] gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 p-3 sm:p-4 md:p-6 lg:p-8 pointer-events-none">
            {[...Array(240)].map((_, i) => (
              <div 
                key={i} 
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-white/60 dot transition-all duration-300 ease-out"
                style={{
                  animation: `pulse ${2 + (i % 3)}s ease-in-out infinite`,
                  animationDelay: `${(i % 10) * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 animate-in fade-in duration-1000 delay-500">
          <p className="text-[11px] sm:text-[12px] md:text-[14px] font-sans text-[#7A6F68] uppercase tracking-widest font-semibold opacity-60">
            {/* Trusted Partners & Recognitions */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
