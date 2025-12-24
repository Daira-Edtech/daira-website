import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-8">
      <nav
        className="relative w-full max-w-[1140px] h-[58px] rounded-full overflow-hidden"
        style={{
          background: 'rgba(57, 50, 41, 0.65)',
          backdropFilter: 'blur(40px) saturate(200%)',
          WebkitBackdropFilter: 'blur(40px) saturate(200%)',
          border: '1.5px solid rgba(248, 243, 237, 0.25)',
          boxShadow: `
            0 8px 40px 0 rgba(0, 0, 0, 0.12),
            0 2px 8px 0 rgba(0, 0, 0, 0.06),
            inset 0 1px 1px 0 rgba(255, 255, 255, 0.12),
            inset 0 -1px 1px 0 rgba(0, 0, 0, 0.08)
          `,
        }}
      >
        {/* Top glass reflection */}
        <div 
          className="absolute top-0 left-0 right-0 h-[50%] pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
            borderRadius: '9999px 9999px 0 0',
          }}
        />

        {/* Bottom subtle shadow */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none"
          style={{
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.08) 0%, transparent 100%)',
            borderRadius: '0 0 9999px 9999px',
          }}
        />

        <div className="relative w-full h-full flex items-center justify-between px-12">
          
          {/* Left Links */}
          <div className="flex items-center gap-10">
            <a
              href="/about"
              className="text-[#F8F3ED] text-[14px] font-medium hover:text-[#EAE0D5] transition-all duration-300"
            >
              About
            </a>
            <a
              href="/case-studies"
              className="text-[#F8F3ED] text-[14px] font-medium hover:text-[#EAE0D5] transition-all duration-300 whitespace-nowrap"
            >
              Case Studies
            </a>
            <a
              href="/news"
              className="text-[#F8F3ED] text-[14px] font-medium hover:text-[#EAE0D5] transition-all duration-300"
            >
              News
            </a>
          </div>

          {/* Center Logo */}
          <a href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h3 
              className="font-halant text-[36px] font-normal text-[#F8F3ED]"
              style={{ letterSpacing: '-0.02em' }}
            >
              Claura
            </h3>
          </a>

          {/* Right CTA */}
          <a
            href="/book-a-call"
            className="relative bg-[#F8F3ED] text-[#2D241E] px-6 py-2.5 rounded-full text-[14px] font-semibold overflow-hidden transition-transform active:scale-95"
            style={{
              boxShadow: '0 4px 24px rgba(248, 243, 237, 0.25)',
            }}
          >
            <span className="relative z-10">Book a call</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
