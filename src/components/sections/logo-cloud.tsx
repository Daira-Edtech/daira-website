import React from 'react';

const LogoCloud: React.FC = () => {
  const partners = [
    { name: 'NIEPID', style: 'text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-serif font-bold tracking-tight' },
    { name: 'Government of India', style: 'text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] xl:text-[28px] font-sans font-semibold' },
    { name: 'NIMHR', style: 'text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[34px] font-serif font-medium italic' },
    { name: 'TiE', style: 'text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-sans font-bold uppercase tracking-wider' },
    { name: 'Rotary', style: 'text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-serif font-semibold' },
    { name: 'India AI Mission', style: 'text-[14px] sm:text-[16px] md:text-[20px] lg:text-[23px] xl:text-[26px] font-sans font-bold uppercase tracking-[0.1em]' },
    { name: 'MeitY', style: 'text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-mono font-bold' },
    { name: 'Samagra Shiksha', style: 'text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] xl:text-[28px] font-sans font-medium' },
    { name: 'VIT Chennai', style: 'text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-serif italic' },
  ];

  return (
    <section className="w-full bg-[#F8F3ED] py-10 sm:py-12 md:py-14 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* RESPONSIVE TITLE */}
        <div className="text-center mb-5 sm:mb-6 md:mb-7 lg:mb-8">
          <p className="text-[rgba(45,36,30,0.5)] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-sans font-medium uppercase tracking-wider px-2">
            Trusted Partners & Recognitions
          </p>
        </div>

        {/* RESPONSIVE MARQUEE */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 h-14 sm:h-16 md:h-18 lg:h-20">
            {partners.map((partner, index) => (
              <span
                key={`partner-1-${index}`}
                className={`${partner.style} text-[#2D241E] opacity-40 whitespace-nowrap flex-shrink-0 py-3 sm:py-4 md:py-6 lg:py-8 hover:opacity-70 transition-opacity duration-300`}
              >
                {partner.name}
              </span>
            ))}
            {partners.map((partner, index) => (
              <span
                key={`partner-2-${index}`}
                className={`${partner.style} text-[#2D241E] opacity-40 whitespace-nowrap flex-shrink-0 py-3 sm:py-4 md:py-6 lg:py-8 hover:opacity-70 transition-opacity duration-300`}
              >
                {partner.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* RESPONSIVE DIVIDER */}
      <div className="h-[1px] w-full max-w-[1200px] mx-auto mt-10 sm:mt-12 md:mt-16 lg:mt-20 bg-[rgba(45,36,30,0.05)]" />
    </section>
  );
};

export default LogoCloud;
