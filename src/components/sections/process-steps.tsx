import React from 'react';
import { Play } from 'lucide-react';

const ProcessSteps = () => {
  return (
    <section className="bg-[#F8F3ED] py-[120px] px-8 md:px-16" id="how-we-work">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[80px] lg:gap-[120px] items-start">
        
        {/* Left Side: Content */}
        <div className="flex flex-col items-start max-w-[500px]">
          <div className="bg-[#EAE0D5] px-4 py-1.5 rounded-[100px] mb-8">
            <span className="text-[14px] font-semibold text-[#2D241E] font-sans">
              How we work
            </span>
          </div>
          
          <h2 className="font-display text-[48px] md:text-[56px] leading-[1.1] text-[#2D241E] mb-6">
            Getting you results <span className="text-[#7A6F68] italic underline transition-all hover:text-[#2D241E]">without</span> the complexity.
          </h2>
          
          <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#7A6F68] mb-10 font-sans">
            Our three-step process takes you from identifying opportunities to launching systems, with clear communication and support at every stage.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#book-a-call" 
              className="bg-[#2D241E] text-[#F8F3ED] px-8 py-4 rounded-[100px] font-medium text-[16px] hover:scale-105 transition-transform duration-200"
            >
              Book a free call
            </a>
            <button 
              className="flex items-center gap-2 border border-[#2D241E] text-[#2D241E] px-8 py-4 rounded-[100px] font-medium text-[16px] hover:bg-[#2D241E]/5 transition-colors duration-200"
            >
              Watch the video
              <Play className="w-5 h-5 fill-current" />
            </button>
          </div>
        </div>

        {/* Right Side: Step List */}
        <div className="flex flex-col gap-12 relative">
          {/* Vertical connector line */}
          <div className="absolute left-[24px] top-0 bottom-0 w-[1px] bg-[#2D241E]/10 z-0 hidden md:block" />
          
          {/* Step 01 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 relative z-10">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F8F3ED] border border-[#2D241E]/10 flex items-center justify-center font-display text-[20px] text-[#2D241E] shadow-sm">
              01
            </div>
            <div className="flex flex-col">
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h3 className="text-[24px] font-display text-[#2D241E]">Discovery & Assessment</h3>
                <span className="bg-[#F1EAE2] px-2 py-0.5 rounded-[4px] text-[12px] font-semibold text-[#7A6F68] font-sans uppercase tracking-wider">
                  Week 1
                </span>
              </div>
              <p className="text-[16px] leading-[1.6] text-[#7A6F68] font-sans">
                We analyze your workflows and identify where automation creates the most value for your business.
              </p>
            </div>
          </div>

          {/* Step 02 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 relative z-10">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F8F3ED] border border-[#2D241E]/10 flex items-center justify-center font-display text-[20px] text-[#2D241E] shadow-sm">
              02
            </div>
            <div className="flex flex-col">
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h3 className="text-[24px] font-display text-[#2D241E]">Build & Deploy</h3>
                <span className="bg-[#F1EAE2] px-2 py-0.5 rounded-[4px] text-[12px] font-semibold text-[#7A6F68] font-sans uppercase tracking-wider">
                  Weeks 2-4
                </span>
              </div>
              <p className="text-[16px] leading-[1.6] text-[#7A6F68] font-sans">
                We create and launch custom systems tailored to your operations without disrupting daily work.
              </p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 relative z-10">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F8F3ED] border border-[#2D241E]/10 flex items-center justify-center font-display text-[20px] text-[#2D241E] shadow-sm">
              03
            </div>
            <div className="flex flex-col">
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h3 className="text-[24px] font-display text-[#2D241E]">Train & Support</h3>
                <span className="bg-[#F1EAE2] px-2 py-0.5 rounded-[4px] text-[12px] font-semibold text-[#7A6F68] font-sans uppercase tracking-wider">
                  Ongoing
                </span>
              </div>
              <p className="text-[16px] leading-[1.6] text-[#7A6F68] font-sans">
                We train your team and provide ongoing support to keep your automation running smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
