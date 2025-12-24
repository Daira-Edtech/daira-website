import React from 'react';

/**
 * WhyChooseUs Section
 * 
 * A comparison section detailing differences between "Other agencies" and "Claura".
 * Features the "We're not your typical AI agency" headline and scrolling pills/badges.
 */

const otherAgencyPoints = [
  "Sell what's trendy",
  "Unclear timelines",
  "Hidden costs",
  "Sell what's trendy",
  "Unclear timelines",
  "Hidden costs",
  "Sell what's trendy",
  "Unclear timelines",
  "Hidden costs",
  "Sell what's trendy",
  "Unclear timelines",
  "Hidden costs"
];

const clauraPoints = [
  "Build what matters",
  "Done with you",
  "Transparent process",
  "Real results",
  "Build what matters",
  "Done with you",
  "Transparent process",
  "Real results",
  "Build what matters",
  "Done with you",
  "Transparent process",
  "Real results"
];

export default function WhyChooseUs() {
  return (
    <section className="py-[120px] bg-[#F8F3ED] overflow-hidden" id="why-choose-us">
      <div className="container mx-auto max-w-[1200px] px-8 text-center mb-[80px]">
        {/* Why choose us Badge */}
        <div className="inline-block px-4 py-1.5 bg-[#EAE0D5] rounded-full mb-6">
          <span className="text-[12px] font-bold text-[#2D241E] uppercase tracking-wider">
            Why choose us
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="font-display text-[56px] leading-[1.2] text-[#2D241E] mb-6">
          We&apos;re not your <span className="text-[#7A6F68]">typical</span> AI agency.
        </h2>

        {/* Subtext */}
        <p className="max-w-[600px] mx-auto text-[16px] leading-relaxed text-[#7A6F68]">
          We skip the buzzwords and experimental projects to build systems that actually work for your business.
        </p>
      </div>

      <div className="relative flex flex-col gap-12">
        {/* Other Agencies Row */}
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {otherAgencyPoints.map((point, idx) => (
              <div 
                key={idx} 
                className="px-6 py-3 bg-[rgba(45,36,30,0.05)] border border-[rgba(45,36,30,0.1)] rounded-full text-[#7A6F68] text-[15px] font-medium"
              >
                {point}
              </div>
            ))}
          </div>
          
          <div className="container mx-auto max-w-[1200px] px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-left">
              <div>
                <h3 className="font-display text-[40px] text-[#2D241E] mb-4">Other agencies</h3>
              </div>
              <div>
                <p className="text-[18px] leading-relaxed text-[#7A6F68]">
                  Other agencies overwhelm you with buzzwords, take months to deliver, and leave you with tools you can&apos;t use.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="container mx-auto max-w-[1200px] px-8">
          <hr className="border-[rgba(45,36,30,0.1)]" />
        </div>

        {/* Claura Row */}
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 animate-marquee-reverse whitespace-nowrap">
            {clauraPoints.map((point, idx) => (
              <div 
                key={idx} 
                className="px-6 py-3 bg-[#2D241E] border border-[#2D241E] rounded-full text-[#F8F3ED] text-[15px] font-medium"
              >
                {point}
              </div>
            ))}
          </div>

          <div className="container mx-auto max-w-[1200px] px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-left">
              <div>
                <h3 className="font-display text-[40px] text-[#2D241E] mb-4">Claura</h3>
              </div>
              <div>
                <p className="text-[18px] leading-relaxed text-[#7A6F68]">
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
