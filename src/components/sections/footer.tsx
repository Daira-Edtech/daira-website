import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Navigate',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Team', href: '/team' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'How We Work', href: '/how-we-work' },
        { name: 'FAQ', href: '/faq' },
        { name: 'News', href: '/news' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { name: 'Book a Call', href: '/book-a-call' },
        { name: 'Twitter', href: 'https://twitter.com' },
        { name: 'Instagram', href: 'https://instagram.com' },
        { name: 'Meta', href: 'https://meta.com' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Accessibility', href: '/accessibility' },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#F8F3ED] text-[#2D241E] pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-8">
        {/* Top Branding Section */}
        <div className="flex flex-col items-center text-center space-y-6 mb-16">
          <h2 className="font-display text-[48px] leading-tight tracking-tight">Claura</h2>
          <p className="font-sans text-[16px] text-[#2D241E]/80 max-w-[400px]">
            Helping you automate what matters.
          </p>
          
          {/* Social Icons Placeholder (as seen in screenshots) */}
          <div className="flex gap-6 mt-4">
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
              <span className="sr-only">Twitter</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
              <span className="sr-only">Instagram</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
              <span className="sr-only">Meta</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        {/* Large Floral Graphic */}
        <div className="relative w-full flex justify-center mb-32 pointer-events-none">
          <div className="w-[450px] transform scale-125 md:scale-150">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/nOTrxDdMtR8XwWdL7sE4DA27w-10.png"
              alt="Decorative floral graphic"
              width={1008}
              height={1008}
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 pb-16">
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col space-y-6">
              <h4 className="font-sans font-semibold text-[14px] uppercase tracking-wider text-[#2D241E]">
                {section.title}
              </h4>
              <ul className="flex flex-col space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-sans text-[15px] text-[#2D241E]/60 hover:text-[#2D241E] transition-colors"
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
        <div className="pt-8 border-t border-[#2D241E]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[#2D241E]/50 text-[13px] font-sans">
          <div className="flex gap-4">
            <p>© 2025 Claura. All rights reserved.</p>
          </div>
          <p className="text-center md:text-right">
            Created by Hamza Ehsan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;