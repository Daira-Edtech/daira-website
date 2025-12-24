import React from 'react';

/**
 * LogoCloud component cloning the partner brand section based on the design instructions:
 * "Brands we’ve helped implement AI" text followed by a horizontal list of partner logos.
 */

const LogoCloud: React.FC = () => {
  // Brand names derived from the screenshots and content
  const brands = [
    { name: 'Nice', style: 'text-2xl font-serif font-bold italic' },
    { name: 'Theo', style: 'text-2xl font-serif italic' },
    { name: 'Amsterdam', style: 'text-xl font-sans font-semibold border-b border-current' },
    { name: 'Hamilton', style: 'text-xl font-serif tracking-tight' },
    { name: 'CALIFORNIA', style: 'text-lg font-sans font-bold tracking-[0.2em]' },
  ];

  // We duplicate the brands to create a continuous marquee effect if needed, 
  // though the screenshot shows a static distribution across the layout.
  // The layout shows the text "Brands we've helped implement AI:" on the left
  // and logos on the right in a flex row.

  return (
    <section className="w-full bg-[#F8F3ED] py-16 px-6 sm:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Helper Text */}
        <div className="flex-shrink-0 w-full lg:w-auto text-center lg:text-left">
          <p className="text-[rgba(45,36,30,0.5)] text-[14px] font-sans font-medium uppercase tracking-wider leading-relaxed">
            Brands we’ve helped <br className="hidden lg:block" /> implement AI:
          </p>
        </div>

        {/* Logos Container */}
        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-12 gap-y-8 flex-grow">
          <div className="flex items-center space-x-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
            {/* Logo 1: nice. */}
            <span className="text-[28px] font-serif font-bold italic tracking-tighter text-[#2D241E]">
              nice.
            </span>
            
            {/* Logo 2: theo */}
            <span className="text-[26px] font-serif italic text-[#2D241E]">
              theo
            </span>
            
            {/* Logo 3: Amsterdam */}
            <span className="text-[20px] font-sans font-bold text-[#2D241E] uppercase tracking-normal">
              Amsterdam
            </span>
            
            {/* Logo 4: Hamilton */}
            <div className="flex items-center gap-1">
              <span className="text-xl text-[#2D241E]">★</span>
              <span className="text-[22px] font-serif font-medium text-[#2D241E]">Hamilton</span>
            </div>
            
            {/* Logo 5: CALIFORNIA */}
            <span className="text-[18px] font-sans font-black text-[#2D241E] tracking-[0.15em] uppercase">
              California
            </span>
          </div>
        </div>
      </div>
      
      {/* Visual Divider / Spacing logic as seen in the mockup for separating from the hero bottom */}
      <div className="h-[1px] w-full max-w-[1200px] mx-auto mt-20 bg-[rgba(45,36,30,0.05)]" />
    </section>
  );
};

export default LogoCloud;