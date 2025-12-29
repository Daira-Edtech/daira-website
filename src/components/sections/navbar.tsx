import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full h-16 px-8 flex items-center bg-[#f5efe9]/95 backdrop-blur-sm  z-[1000]">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
        {/* Left Links */}
        <div className="flex space-x-12">
          <a href="#who-we-are" className="text-gray-900/90 text-sm font-medium hover:text-gray-900 transition-all duration-300">About</a>
          <a href="#impact-stories" className="text-gray-900/90 text-sm font-medium hover:text-gray-900 transition-all duration-300">Impact Stories</a>
          <a href="#updates" className="text-gray-900/90 text-sm font-medium hover:text-gray-900 transition-all duration-300">Updates</a>
        </div>
        
        {/* Center Title */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-[42px] font-normal text-black font-halant leading-none tracking-[-0.02em]">Daira EdTech</h1>
        </div>
        
        {/* Right CTA */}
        <a 
          href="#partner-with-us" 
          className="bg-black text-[#f5efe9] px-6 py-2 text-sm font-semibold rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Partner With Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
