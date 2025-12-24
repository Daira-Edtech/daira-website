import React from 'react';

const LogoCloud: React.FC = () => {
  // Expanded brand list for carousel effect
  const brands = [
    { name: 'nice.', style: 'text-[28px] font-serif font-bold italic tracking-tighter' },
    { name: 'theo', style: 'text-[26px] font-serif italic' },
    { name: 'AMSTERDAM', style: 'text-[20px] font-sans font-bold uppercase' },
    { name: '★ Hamilton', style: 'text-[22px] font-serif font-medium' },
    { name: 'CALIFORNIA', style: 'text-[18px] font-sans font-black tracking-[0.15em] uppercase' },
    { name: 'Brooklyn', style: 'text-[24px] font-serif italic' },
    { name: 'PHOENIX', style: 'text-[20px] font-sans font-bold uppercase' },
    { name: '◆ Denver', style: 'text-[22px] font-serif' },
    { name: 'SEATTLE', style: 'text-[18px] font-sans font-black tracking-[0.15em] uppercase' },
    { name: 'Austin', style: 'text-[26px] font-serif italic' },
  ];

  return (
    <section className="w-full bg-[#F8F3ED] py-16 px-6 sm:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Title - Centered */}
        <div className="text-center mb-12">
          <p className="text-[rgba(45,36,30,0.5)] text-[14px] font-sans font-medium uppercase tracking-wider">
            Brands we've helped implement AI:
          </p>
        </div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative flex overflow-hidden">
          {/* First Set */}
          <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
            {brands.map((brand, index) => (
              <span
                key={`brand-1-${index}`}
                className={`${brand.style} text-[#2D241E] opacity-40 hover:opacity-100 transition-opacity duration-300`}
              >
                {brand.name}
              </span>
            ))}
          </div>

          {/* Duplicate Set for Seamless Loop */}
          <div className="flex items-center gap-12 animate-marquee whitespace-nowrap" aria-hidden="true">
            {brands.map((brand, index) => (
              <span
                key={`brand-2-${index}`}
                className={`${brand.style} text-[#2D241E] opacity-40 hover:opacity-100 transition-opacity duration-300`}
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Visual Divider */}
      <div className="h-[1px] w-full max-w-[1200px] mx-auto mt-20 bg-[rgba(45,36,30,0.05)]" />
    </section>
  );
};

export default LogoCloud;
