import React from 'react';

const LogoCloud: React.FC = () => {
  const partners = [
    { name: 'NIEPID', style: 'text-[28px] sm:text-[36px] font-serif font-bold tracking-tight' },
    { name: 'Government of India', style: 'text-[22px] sm:text-[28px] font-sans font-semibold' },
    { name: 'NIMHR', style: 'text-[26px] sm:text-[34px] font-serif font-medium italic' },
    { name: 'TiE', style: 'text-[24px] sm:text-[32px] font-sans font-bold uppercase tracking-wider' },
    { name: 'Rotary', style: 'text-[24px] sm:text-[32px] font-serif font-semibold' },
    { name: 'India AI Mission', style: 'text-[20px] sm:text-[26px] font-sans font-bold uppercase tracking-[0.1em]' },
    { name: 'MeitY', style: 'text-[28px] sm:text-[36px] font-mono font-bold' },
    { name: 'Samagra Shiksha', style: 'text-[22px] sm:text-[28px] font-sans font-medium' },
    { name: 'VIT Chennai', style: 'text-[24px] sm:text-[32px] font-serif italic' },
  ];

  return (
    <section className="w-full bg-[#F8F3ED] py-12 sm:py-16 px-4 sm:px-6 lg:px-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* RESPONSIVE TITLE */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-[rgba(45,36,30,0.5)] text-[13px] sm:text-[14px] font-sans font-medium uppercase tracking-wider px-2">
            Trusted Partners & Recognitions
          </p>
        </div>

        {/* RESPONSIVE MARQUEE */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee items-center gap-12 sm:gap-16 lg:gap-20 h-16 sm:h-20">
            {partners.map((partner, index) => (
              <span
                key={`partner-1-${index}`}
                className={`${partner.style} text-[#2D241E] opacity-40 whitespace-nowrap flex-shrink-0 py-4 sm:py-8 hover:opacity-70 transition-opacity duration-300`}
              >
                {partner.name}
              </span>
            ))}
            {partners.map((partner, index) => (
              <span
                key={`partner-2-${index}`}
                className={`${partner.style} text-[#2D241E] opacity-40 whitespace-nowrap flex-shrink-0 py-4 sm:py-8 hover:opacity-70 transition-opacity duration-300`}
              >
                {partner.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* RESPONSIVE DIVIDER */}
      <div className="h-[1px] w-full max-w-[1200px] mx-auto mt-12 sm:mt-20 bg-[rgba(45,36,30,0.05)]" />
    </section>
  );
};

export default LogoCloud;
