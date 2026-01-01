import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full h-16 px-3 sm:px-4 md:px-6 lg:px-8 flex items-center bg-[#f5efe9]/95 backdrop-blur-sm z-[1000]">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between relative">
        {/* Desktop Left Links */}
        <div className="hidden md:flex space-x-8 lg:space-x-12">
          <a href="#who-we-are" className="text-gray-900/90 text-sm font-medium hover:text-gray-900 transition-all duration-300">About</a>
          <a href="#impact-stories" className="text-gray-900/90 text-sm font-medium hover:text-gray-900 transition-all duration-300">Impact Stories</a>
          <a href="#updates" className="text-gray-900/90 text-sm font-medium hover:text-gray-900 transition-all duration-300">Updates</a>
        </div>
        
        {/* CENTER LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none">
          <h1 className="text-[22px] sm:text-[26px] md:text-[36px] lg:text-[42px] font-normal text-black font-halant leading-none tracking-[-0.02em]">
            Daira EdTech
          </h1>
        </div>
        
        {/* Desktop CTA */}
        <a 
          href="#partner-with-us" 
          className="hidden md:block bg-black text-[#f5efe9] px-4 lg:px-6 py-2 text-sm font-semibold rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
        >
          Partner With Us
        </a>

        {/* Mobile Hamburger */}
        <button 
          onClick={toggleMenu}
          className="md:hidden z-[1001] text-gray-900 p-1 hover:bg-gray-100/50 rounded transition-all duration-200 ml-auto"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu with Slide from Top Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop with fade animation */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-black/5 z-[998]"
              onClick={closeMenu}
            />
            
            {/* Menu slides down from top */}
            <motion.div 
              initial={{ 
                y: -100,
                opacity: 0,
              }}
              animate={{ 
                y: 0,
                opacity: 1,
              }}
              exit={{ 
                y: -100,
                opacity: 0,
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30,
                opacity: {
                  duration: 0.2
                }
              }}
              className="md:hidden fixed top-16 left-0 right-0 z-[999] bg-[#f5efe9]/95 backdrop-blur-md px-6 py-6 flex flex-col items-stretch space-y-2 w-full"
            >
              <a href="#who-we-are" onClick={closeMenu} className="text-gray-900 text-lg font-medium hover:text-gray-700 transition-all duration-300 w-full text-center py-1.5 block">About</a>
              <a href="#impact-stories" onClick={closeMenu} className="text-gray-900 text-lg font-medium hover:text-gray-700 transition-all duration-300 w-full text-center py-1.5 block">Impact Stories</a>
              <a href="#updates" onClick={closeMenu} className="text-gray-900 text-lg font-medium hover:text-gray-700 transition-all duration-300 w-full text-center py-1.5 block">Updates</a>
              <a 
                href="#partner-with-us" 
                onClick={closeMenu}
                className="w-full bg-black text-[#f5efe9] py-2.5 text-base font-semibold rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Partner With Us
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
