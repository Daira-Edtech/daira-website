import React, { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

const ProcessSteps = () => {
  const pathRef = useRef<SVGLineElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>(0);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    if (!pathRef.current || !sectionRef.current) return;

    const pathLength = pathRef.current.getTotalLength();
    const path = pathRef.current;
    
    // Always reset to start state
    const resetPath = () => {
      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength}`;
      isAnimatingRef.current = false;
    };

    let startTime = 0;
    let phase = 0; // 0=forward, 1=delay, 2=reverse, 3=wait

    const animate = (timestamp: number) => {
      if (!isAnimatingRef.current) return;

      const elapsed = timestamp - startTime;

      switch (phase) {
        // Phase 0: Forward (5s slow)
        case 0:
          if (elapsed < 5000) {
            const progress = elapsed / 5000;
            path.style.strokeDashoffset = `${pathLength * (1 - progress)}`;
            rafRef.current = requestAnimationFrame(animate);
          } else {
            phase = 1;
            startTime = timestamp;
            rafRef.current = requestAnimationFrame(animate);
          }
          break;

        // Phase 1: Delay at bottom (3s)
        case 1:
          if (elapsed < 3000) {
            rafRef.current = requestAnimationFrame(animate);
          } else {
            phase = 2;
            startTime = timestamp;
            rafRef.current = requestAnimationFrame(animate);
          }
          break;

        // Phase 2: Reverse (1.5s)
        case 2:
          if (elapsed < 1500) {
            const progress = elapsed / 1500;
            path.style.strokeDashoffset = `${pathLength * progress}`;
            rafRef.current = requestAnimationFrame(animate);
          } else {
            phase = 3;
            startTime = timestamp;
            rafRef.current = requestAnimationFrame(animate);
          }
          break;

        // Phase 3: Wait before restart (0.5s)
        case 3:
          if (elapsed < 500) {
            rafRef.current = requestAnimationFrame(animate);
          } else {
            resetPath();
            startTime = performance.now();
            phase = 0;
            rafRef.current = requestAnimationFrame(animate);
          }
          break;
      }
    };

    // Intersection Observer - PERFECT RESET
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cancelAnimationFrame(rafRef.current);
            resetPath();
            isAnimatingRef.current = true;
            startTime = performance.now();
            phase = 0;
            rafRef.current = requestAnimationFrame(animate);
          } else {
            cancelAnimationFrame(rafRef.current);
            isAnimatingRef.current = false;
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
    resetPath();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F8F3ED] py-[120px] px-8 md:px-16" id="how-we-work">
      {/* Your exact JSX - no changes */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[80px] lg:gap-[120px] items-start">
        <div className="flex flex-col items-start max-w-[500px]">
          <div className="bg-[#EAE0D5] px-4 py-1.5 rounded-[100px] mb-8">
            <span className="text-[14px] font-semibold text-[#2D241E] font-sans">How We Work</span>
          </div>
          <h2 className="font-display text-[48px] md:text-[56px] leading-[1.1] text-[#2D241E] mb-6">
            From Research to <span className="text-[#7A6F68] italic underline transition-all hover:text-[#2D241E]">Real-World</span> Implementation.
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#7A6F68] mb-10 font-sans">
            Our approach combines rigorous research, technology development, and deep government partnerships to create solutions that scale.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#partner-with-us" className="bg-[#2D241E] text-[#F8F3ED] px-8 py-4 rounded-[100px] font-medium text-[16px] hover:scale-105 transition-transform duration-200">
              Partner With Us
            </a>
            <button className="flex items-center gap-2 border border-[#2D241E] text-[#2D241E] px-8 py-4 rounded-[100px] font-medium text-[16px] hover:bg-[#2D241E]/5 transition-colors duration-200">
              Watch the video
              <Play className="w-5 h-5 fill-current" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-12 relative">
          <svg className="absolute left-[24px] top-6 hidden md:block pointer-events-none" style={{ height: 'calc(100% - 48px)', width: '2px' }} preserveAspectRatio="none" viewBox="0 0 2 100">
            <line x1="1" y1="0" x2="1" y2="100" stroke="#2D241E" strokeOpacity="0.1" strokeWidth="1" />
            <line ref={pathRef} x1="1" y1="0" x2="1" y2="100" stroke="#2D241E" strokeWidth="2" strokeLinecap="round" />
          </svg>
          
          {/* Your 4 steps exactly the same */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 relative z-10"><div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F8F3ED] border border-[#2D241E]/10 flex items-center justify-center font-display text-[20px] text-[#2D241E] shadow-sm">01</div><div className="flex flex-col"><div className="flex flex-wrap items-baseline gap-3 mb-2"><h3 className="text-[24px] font-display text-[#2D241E]">Understand & Research</h3><span className="bg-[#F1EAE2] px-2 py-0.5 rounded-[4px] text-[12px] font-semibold text-[#7A6F68] font-sans uppercase tracking-wider">Months 1-3</span></div><p className="text-[16px] leading-[1.6] text-[#7A6F68] font-sans">We immerse ourselves in the problem — working with communities, experts, and government bodies to understand ground realities before writing a single line of code.</p></div></div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 relative z-10"><div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F8F3ED] border border-[#2D241E]/10 flex items-center justify-center font-display text-[20px] text-[#2D241E] shadow-sm">02</div><div className="flex flex-col"><div className="flex flex-wrap items-baseline gap-3 mb-2"><h3 className="text-[24px] font-display text-[#2D241E]">Build & Validate</h3><span className="bg-[#F1EAE2] px-2 py-0.5 rounded-[4px] text-[12px] font-semibold text-[#7A6F68] font-sans uppercase tracking-wider">Months 3-6</span></div><p className="text-[16px] leading-[1.6] text-[#7A6F68] font-sans">We develop solutions in partnership with clinical experts and institutions like NIEPID, ensuring every product meets rigorous standards for efficacy and accessibility.</p></div></div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 relative z-10"><div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F8F3ED] border border-[#2D241E]/10 flex items-center justify-center font-display text-[20px] text-[#2D241E] shadow-sm">03</div><div className="flex flex-col"><div className="flex flex-wrap items-baseline gap-3 mb-2"><h3 className="text-[24px] font-display text-[#2D241E]">Pilot & Scale</h3><span className="bg-[#F1EAE2] px-2 py-0.5 rounded-[4px] text-[12px] font-semibold text-[#7A6F68] font-sans uppercase tracking-wider">Months 6-12</span></div><p className="text-[16px] leading-[1.6] text-[#7A6F68] font-sans">We deploy with government partners at district, state, or national level — proving implementation is possible and building the evidence base for policy change.</p></div></div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 relative z-10"><div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F8F3ED] border border-[#2D241E]/10 flex items-center justify-center font-display text-[20px] text-[#2D241E] shadow-sm">04</div><div className="flex flex-col"><div className="flex flex-wrap items-baseline gap-3 mb-2"><h3 className="text-[24px] font-display text-[#2D241E]">Policy & Sustainability</h3><span className="bg-[#F1EAE2] px-2 py-0.5 rounded-[4px] text-[12px] font-semibold text-[#7A6F68] font-sans uppercase tracking-wider">Ongoing</span></div><p className="text-[16px] leading-[1.6] text-[#7A6F68] font-sans">Beyond deployment, we work on policy enablement, professional training, and ecosystem building to ensure lasting impact.</p></div></div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
