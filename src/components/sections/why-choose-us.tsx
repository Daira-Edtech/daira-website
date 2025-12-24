import React from 'react';

const otherAgencyPoints = [
  "Sell what's trendy",
  "Unclear timelines",
  "Hidden costs",
];

const clauraPoints = [
  "Build what matters",
  "Done with you",
  "Transparent process",
  "Real results",
];

export default function WhyChooseUs() {
  return (
    <section className="py-[120px] bg-[#F8F3ED] overflow-hidden" id="why-choose-us">
      <div className="container mx-auto max-w-[1200px] px-8 text-center mb-[80px]">
        <div className="inline-block px-4 py-1.5 bg-[#EAE0D5] rounded-full mb-6">
          <span className="text-[12px] font-bold text-[#2D241E] uppercase tracking-wider">
            Why choose us
          </span>
        </div>

        <h2 className="font-display text-[56px] leading-[1.2] text-[#2D241E] mb-6">
          We&apos;re not your <span className="italic text-[#7A6F68]">typical</span> AI agency.
        </h2>

        <p className="max-w-[600px] mx-auto text-[16px] leading-relaxed text-[#7A6F68]">
          We skip the buzzwords and experimental projects to build systems that actually work for your business.
        </p>
      </div>

      <div className="container mx-auto max-w-[1200px] px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Other Agencies Card - DARK */}
          <div className="relative rounded-[32px] overflow-hidden h-[500px]">
            {/* Dark background */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 30%, #2d1b4e 60%, #1e1e3f 100%)',
              }}
            />
            
            {/* Darker overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-10">
              <div className="flex flex-wrap gap-3">
                {otherAgencyPoints.map((point, idx) => (
                  <div 
                    key={idx} 
                    className="px-4 py-2.5 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-white text-[14px] font-medium shadow-lg"
                  >
                    {point}
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-display text-[52px] text-white mb-4 leading-tight drop-shadow-lg">
                  Other agencies
                </h3>
                <p className="text-[17px] leading-relaxed text-white/95 max-w-md drop-shadow-md">
                  Other agencies overwhelm you with buzzwords, take months to deliver, and leave you with tools you can&apos;t use.
                </p>
              </div>
            </div>
          </div>

          {/* Claura Card - BRIGHT with dark overlay */}
          <div className="relative rounded-[32px] overflow-hidden h-[500px]">
            {/* Bright orange/pink gradient */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 20%, #f093fb 50%, #fbc2eb 80%, #a8edea 100%)',
              }}
            />
            
            {/* Semi-transparent overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/30 via-purple-400/20 to-blue-400/30" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-10">
              <div className="flex flex-wrap gap-3">
                {clauraPoints.map((point, idx) => (
                  <div 
                    key={idx} 
                    className="px-4 py-2.5 bg-white/40 backdrop-blur-md border border-white/50 rounded-full text-white text-[14px] font-semibold shadow-lg"
                  >
                    {point}
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-display text-[52px] text-white mb-4 leading-tight drop-shadow-2xl">
                  Claura
                </h3>
                <p className="text-[17px] leading-relaxed text-white max-w-md drop-shadow-lg">
                  At Claura, we use simple language, deliver results in weeks, and build systems that work from day one.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
