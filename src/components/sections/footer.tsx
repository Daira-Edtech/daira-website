import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Navigate',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'What We Do', href: '/services' },
        { name: 'Team', href: '/team' },
      ],
    },
    {
      title: 'Impact',
      links: [
        { name: 'Jiveesha', href: '/jiveesha' },
        { name: 'Impact Stories', href: '/impact-stories' },
        { name: 'Updates', href: '/updates' },
        { name: 'Research', href: '/research' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { name: 'Partner With Us', href: '/partner' },
        { name: 'LinkedIn', href: 'https://linkedin.com' },
        { name: 'Twitter', href: 'https://twitter.com' },
        { name: 'YouTube', href: 'https://youtube.com' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Accessibility', href: '/accessibility' },
      ],
    },
  ];

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      
      <footer 
        className="w-full bg-[#F8F3ED] text-[#2D241E] pt-24 pb-12 overflow-hidden"
        style={{ fontFamily: '"Noto Sans", sans-serif' }}
      >
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8">
          {/* Top Branding Section */}
          <div className="flex flex-col items-center text-center space-y-6 mb-16">
            <h2 
              className="text-[36px] sm:text-[42px] md:text-[48px] leading-tight tracking-tight"
              style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 400 }}
            >
              Daira EdTech
            </h2>
            <p 
              className="text-[14px] sm:text-[15px] md:text-[16px] text-[#2D241E]/80 max-w-[400px] px-4"
              style={{ fontFamily: '"Noto Sans", sans-serif' }}
            >
              Research. Technology. Impact.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 sm:gap-6 mt-4">
              <a href="https://linkedin.com" className="opacity-60 hover:opacity-100 transition-opacity">
                <span className="sr-only">LinkedIn</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="opacity-60 hover:opacity-100 transition-opacity">
                <span className="sr-only">Twitter</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://youtube.com" className="opacity-60 hover:opacity-100 transition-opacity">
                <span className="sr-only">YouTube</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Large Floral Graphic with Fade at Bottom Only */}
          <div className="relative w-full flex justify-center mb-12 sm:mb-14 md:mb-16 pointer-events-none">
            <div className="relative w-[220px] sm:w-[260px] md:w-[280px] lg:w-[320px]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/nOTrxDdMtR8XwWdL7sE4DA27w-10.png"
                alt="Decorative floral graphic"
                width={1008}
                height={1008}
                priority
                className="object-contain"
              />
              {/* Fade effect only at the very bottom - keeps bright orange intact */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#F8F3ED] via-transparent via-50% to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-12 pb-12 sm:pb-14 md:pb-16">
            {footerLinks.map((section) => (
              <div key={section.title} className="flex flex-col space-y-4 sm:space-y-6">
                <h4 
                  className="text-[12px] sm:text-[13px] md:text-[14px] uppercase tracking-wider text-[#2D241E]"
                  style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 600 }}
                >
                  {section.title}
                </h4>
                <ul className="flex flex-col space-y-3 sm:space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-[13px] sm:text-[14px] md:text-[15px] text-[#2D241E]/60 hover:text-[#2D241E] transition-colors"
                        style={{ fontFamily: '"Noto Sans", sans-serif' }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 sm:pt-8 border-t border-[#2D241E]/10 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-[#2D241E]/50 text-[11px] sm:text-[12px] md:text-[13px]">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
              <p 
                className="text-center md:text-left"
                style={{ fontFamily: '"Noto Sans", sans-serif' }}
              >
                © 2025 Daira EdTech Private Limited. All rights reserved.
              </p>
            </div>
            <p 
              className="text-center md:text-right px-4 md:px-0"
              style={{ fontFamily: '"Noto Sans", sans-serif' }}
            >
              An R&D lab working at the intersection of technology and social impact.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
