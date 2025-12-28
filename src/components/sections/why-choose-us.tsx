'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const innovativePoints = [
  "Custom AI solutions",
  "Rapid implementation",
  "Ongoing optimization",
];

type CardType = 'other' | 'claura' | 'innovative' | null;

export default function WhyChooseUs() {
  const [hoveredCard, setHoveredCard] = useState<CardType>(null);

  return (
    <section className="py-[120px] bg-[#F8F3ED] overflow-hidden" id="why-choose-us">
      <div className="container mx-auto max-w-[1400px] px-8 text-center mb-[80px]">
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

      <div className="container mx-auto max-w-[1400px] px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Other Agencies */}
          {hoveredCard !== 'other' && (
            <motion.div 
              layoutId="other-agencies-card"
              onMouseEnter={() => setHoveredCard('other')}
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 30,
                mass: 0.5,
              }}
              className="relative rounded-[32px] overflow-hidden h-[380px] shadow-xl cursor-pointer will-change-transform"
            >
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 30%, #2d1b4e 60%, #1e1e3f 100%)',
                }}
              />
              <div className="absolute inset-0 bg-black/40" />
              
              <div className="relative z-10 h-full flex flex-col justify-between p-10">
                <div className="flex flex-wrap gap-3">
                  {otherAgencyPoints.map((point, idx) => (
                    <div 
                      key={idx}
                      className="px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-white text-[13px] font-medium shadow-lg"
                    >
                      {point}
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="font-display text-[48px] text-white mb-3 leading-tight drop-shadow-lg">
                    Other agencies
                  </h3>
                  <p className="text-[15px] leading-relaxed text-white/95 drop-shadow-md">
                    Overwhelm with buzzwords and delays.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Card 2: Claura */}
          {hoveredCard !== 'claura' && (
            <motion.div 
              layoutId="claura-card"
              onMouseEnter={() => setHoveredCard('claura')}
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 30,
                mass: 0.5,
              }}
              className="relative rounded-[32px] overflow-hidden h-[380px] shadow-xl cursor-pointer will-change-transform"
            >
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 20%, #f093fb 50%, #fbc2eb 80%, #a8edea 100%)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/30 via-purple-400/20 to-blue-400/30" />
              
              <div className="relative z-10 h-full flex flex-col justify-between p-10">
                <div className="flex flex-wrap gap-3">
                  {clauraPoints.map((point, idx) => (
                    <div 
                      key={idx}
                      className="px-4 py-2 bg-white/40 backdrop-blur-md border border-white/50 rounded-full text-white text-[13px] font-semibold shadow-lg"
                    >
                      {point}
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="font-display text-[48px] text-white mb-3 leading-tight drop-shadow-2xl">
                    Claura
                  </h3>
                  <p className="text-[15px] leading-relaxed text-white drop-shadow-lg">
                    Simple language, fast results.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Card 3: Innovative */}
          {hoveredCard !== 'innovative' && (
            <motion.div 
              layoutId="innovative-card"
              onMouseEnter={() => setHoveredCard('innovative')}
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 30,
                mass: 0.5,
              }}
              className="relative rounded-[32px] overflow-hidden h-[380px] shadow-xl cursor-pointer will-change-transform"
            >
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 30%, #FF6347 60%, #FF4500 100%)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-red-400/20 to-yellow-400/20" />
              
              <div className="relative z-10 h-full flex flex-col justify-between p-10">
                <div className="flex flex-wrap gap-3">
                  {innovativePoints.map((point, idx) => (
                    <div 
                      key={idx}
                      className="px-4 py-2 bg-white/35 backdrop-blur-md border border-white/45 rounded-full text-white text-[13px] font-semibold shadow-lg"
                    >
                      {point}
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="font-display text-[48px] text-white mb-3 leading-tight drop-shadow-2xl">
                    Innovative
                  </h3>
                  <p className="text-[15px] leading-relaxed text-white drop-shadow-lg">
                    Cutting-edge AI implementation.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </div>

      {/* Modal - Less Blur */}
      <AnimatePresence mode="wait">
        {hoveredCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.25,
              ease: [0.32, 0.72, 0, 1]
            }}
            className="fixed inset-0 z-[60] flex items-center justify-center px-4 pointer-events-none"
            style={{ perspective: '2000px' }}
          >
            {/* Backdrop - Less Blur, Faster */}
            <motion.div 
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setHoveredCard(null)}
              className="absolute inset-0 bg-black/60 pointer-events-auto"
              style={{
                WebkitBackdropFilter: 'blur(12px)',
              }}
            />

            {/* Expanded Card */}
            <motion.div
              layoutId={`${hoveredCard}-${hoveredCard === 'other' ? 'agencies-' : ''}card`}
              onMouseEnter={() => setHoveredCard(hoveredCard)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative w-full max-w-4xl rounded-[32px] overflow-hidden pointer-events-auto will-change-transform"
              style={{ 
                height: '85vh',
                boxShadow: '0 25px 100px -10px rgba(0, 0, 0, 0.5)',
              }}
              transition={{
                layout: {
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  mass: 1.2,
                  duration: 0.9,
                },
              }}
            >
              {hoveredCard === 'other' && (
                <>
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 30%, #2d1b4e 60%, #1e1e3f 100%)',
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  
                  <motion.div 
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    className="relative z-10 h-full flex flex-col p-12 overflow-y-auto"
                  >
                    <div className="flex flex-wrap gap-3 mb-8">
                      {otherAgencyPoints.map((point, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: 0.3 + (idx * 0.05),
                            duration: 0.4,
                            ease: [0.32, 0.72, 0, 1]
                          }}
                          className="px-4 py-2.5 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-white text-[14px] font-medium shadow-lg"
                        >
                          {point}
                        </motion.div>
                      ))}
                    </div>
                    
                    <h3 className="font-display text-[72px] text-white mb-6 leading-tight drop-shadow-lg">
                      Other agencies
                    </h3>
                    <p className="text-[22px] leading-relaxed text-white/95 max-w-2xl drop-shadow-md mb-10">
                      Other agencies overwhelm you with buzzwords, take months to deliver, and leave you with tools you can&apos;t use.
                    </p>
                    
                    <motion.ul 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        delay: 0.5,
                        duration: 0.6,
                        ease: [0.32, 0.72, 0, 1]
                      }}
                      className="space-y-4 text-white/90 text-[18px]"
                    >
                      {["Endless meetings with no clear outcomes", "Experimental tech that doesn't integrate", "Hidden costs and scope creep", "No ongoing support after launch"].map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: 0.55 + (idx * 0.08),
                            duration: 0.5,
                            ease: [0.32, 0.72, 0, 1]
                          }}
                        >
                          ❌ {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </>
              )}

              {hoveredCard === 'claura' && (
                <>
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 20%, #f093fb 50%, #fbc2eb 80%, #a8edea 100%)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400/30 via-purple-400/20 to-blue-400/30" />
                  
                  <motion.div 
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    className="relative z-10 h-full flex flex-col p-12 overflow-y-auto"
                  >
                    <div className="flex flex-wrap gap-3 mb-8">
                      {clauraPoints.map((point, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: 0.3 + (idx * 0.05),
                            duration: 0.4,
                            ease: [0.32, 0.72, 0, 1]
                          }}
                          className="px-4 py-2.5 bg-white/40 backdrop-blur-md border border-white/50 rounded-full text-white text-[14px] font-semibold shadow-lg"
                        >
                          {point}
                        </motion.div>
                      ))}
                    </div>
                    
                    <h3 className="font-display text-[72px] text-white mb-6 leading-tight drop-shadow-2xl">
                      Claura
                    </h3>
                    <p className="text-[22px] leading-relaxed text-white max-w-2xl drop-shadow-lg mb-10">
                      At Claura, we use simple language, deliver results in weeks, and build systems that work from day one.
                    </p>
                    
                    <motion.ul 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        delay: 0.5,
                        duration: 0.6,
                        ease: [0.32, 0.72, 0, 1]
                      }}
                      className="space-y-4 text-white text-[18px]"
                    >
                      {["Clear roadmap from day one", "Proven systems tailored to your business", "Transparent pricing with no surprises", "Continuous support and optimization"].map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: 0.55 + (idx * 0.08),
                            duration: 0.5,
                            ease: [0.32, 0.72, 0, 1]
                          }}
                        >
                          ✅ {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </>
              )}

              {hoveredCard === 'innovative' && (
                <>
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 30%, #FF6347 60%, #FF4500 100%)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-red-400/20 to-yellow-400/20" />
                  
                  <motion.div 
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    className="relative z-10 h-full flex flex-col p-12 overflow-y-auto"
                  >
                    <div className="flex flex-wrap gap-3 mb-8">
                      {innovativePoints.map((point, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: 0.3 + (idx * 0.05),
                            duration: 0.4,
                            ease: [0.32, 0.72, 0, 1]
                          }}
                          className="px-4 py-2.5 bg-white/35 backdrop-blur-md border border-white/45 rounded-full text-white text-[14px] font-semibold shadow-lg"
                        >
                          {point}
                        </motion.div>
                      ))}
                    </div>
                    
                    <h3 className="font-display text-[72px] text-white mb-6 leading-tight drop-shadow-2xl">
                      Innovative
                    </h3>
                    <p className="text-[22px] leading-relaxed text-white max-w-2xl drop-shadow-lg mb-10">
                      Cutting-edge AI implementation with custom solutions designed specifically for your unique challenges.
                    </p>
                    
                    <motion.ul 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        delay: 0.5,
                        duration: 0.6,
                        ease: [0.32, 0.72, 0, 1]
                      }}
                      className="space-y-4 text-white text-[18px]"
                    >
                      {["Latest AI technologies", "Rapid prototyping and deployment", "Scalable architecture", "Continuous innovation updates"].map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: 0.55 + (idx * 0.08),
                            duration: 0.5,
                            ease: [0.32, 0.72, 0, 1]
                          }}
                        >
                          ✅ {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
