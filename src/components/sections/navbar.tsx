import React from 'react';

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 right-0 z-[100] w-full flex justify-center">
      <nav 
        className="w-full h-[85px] flex items-center justify-between px-8 md:px-16 bg-[#F8F3ED]/80 backdrop-blur-md border-b border-[rgba(45,36,30,0.1)] transition-all duration-300"
      >
        <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between relative h-full">
          
          {/* Left: Links */}
          <div className="flex items-center gap-8 flex-1">
            <a 
              href="/about" 
              className="text-[#2D241E] text-[14px] font-normal font-sans hover:opacity-70 transition-opacity"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              About
            </a>
            <a 
              href="/case-studies" 
              className="text-[#2D241E] text-[14px] font-normal font-sans hover:opacity-70 transition-opacity whitespace-nowrap"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Case Studies
            </a>
            <a 
              href="/news" 
              className="text-[#2D241E] text-[14px] font-normal font-sans hover:opacity-70 transition-opacity"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              News
            </a>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <a href="/" className="inline-block">
           
           <h3 
  className="font-halant text-[42px] font-normal text-[#2B180A]"
  style={{ 
    letterSpacing: '-0.02em' 
  }}
>
  Claura
</h3>

           
            </a>
          </div>

          {/* Right: CTA Button */}
          <div className="flex justify-end flex-1">
            <a 
              href="/book-a-call" 
              className="bg-[#2D241E] text-[#F8F3ED] px-6 py-3 rounded-full text-[14px] font-medium transition-transform active:scale-95 hover:scale-[1.02]"
              style={{ 
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Book a free call
            </a>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
