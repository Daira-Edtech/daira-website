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
      className="relative flex flex-col items-center justify-center pt-[120px] pb-[80px] px-8 overflow-hidden bg-[#F8F3ED]"
      id="hero"
    >
      <div className="container relative z-10 max-w-[1200px] mx-auto flex flex-col items-center text-center">
        
        {/* Star Rating Info */}
        <div className="flex flex-col items-center gap-3 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#A48D7F" color="#A48D7F" className="opacity-100" />
            ))}
          </div>
          <p className="text-[14px] font-sans font-medium text-[#2D241E] opacity-70 tracking-tight">
            Backed by India AI Mission, Govt of India
          </p>
        </div>

        {/* Hero Headline */}
        <h1 className="hero-heading font-display text-[#2D241E] max-w-[900px] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          From Research to <span className="italic">Real Impact.</span>
        </h1>

        {/* Descriptive Subtext */}
        <p className="body-text text-[20px] leading-[1.6] max-w-[640px] mb-10 text-[#7A6F68] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          We are an R&D lab solving deep-rooted challenges in learning through research, technology, and inclusive design. From learning disabilities to employability we build, develop, and co-own solutions that matter.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-400">
          <a 
            href="#partner-with-us" 
            className="btn-primary flex items-center justify-center px-8 py-4 bg-[#2D241E] text-[#F8F3ED] rounded-full font-medium transition-transform hover:scale-105"
          >
            Partner With Us
          </a>
          <button className="btn-secondary flex items-center justify-center gap-2 px-8 py-4 border border-[#2D241E] text-[#2D241E] rounded-full font-medium transition-all hover:bg-[#2D241E]/5">
            How we work
            <PlayCircle size={20} className="fill-[#2D241E] text-[#F8F3ED]" />
          </button>
        </div>

        {/* EXACT GRID + Mouse Interaction - TS Fixed */}
        <div 
          ref={gridRef}
          className="mt-20 w-full max-w-[1100px] aspect-[1100/500] relative rounded-[32px] overflow-hidden cursor-pointer group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFE4CC] via-[#87CEEB] to-[#B0C4DE] opacity-90"></div>
          
          <div className="absolute top-[20%] left-[40%] w-[300px] h-[300px] bg-gradient-radial from-[#FF6B6B] via-[#FFD93D] to-transparent opacity-60 blur-[80px] animate-pulse"></div>
          <div className="absolute top-[30%] right-[35%] w-[250px] h-[250px] bg-gradient-radial from-[#FF8C94] via-[#FFA07A] to-transparent opacity-50 blur-[60px] animate-pulse delay-500"></div>
          
          <div className="absolute inset-0 grid grid-cols-[repeat(24,1fr)] grid-rows-[repeat(8,1fr)] gap-6 p-8 pointer-events-none">
            {[...Array(192)].map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 rounded-full bg-white/60 dot transition-all duration-300 ease-out"
                style={{
                  animation: `pulse ${2 + (i % 3)}s ease-in-out infinite`,
                  animationDelay: `${(i % 10) * 0.1}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 animate-in fade-in duration-1000 delay-500">
          <p className="text-[14px] font-sans text-[#7A6F68] uppercase tracking-widest font-semibold opacity-60">
            {/* Trusted Partners & Recognitions */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
