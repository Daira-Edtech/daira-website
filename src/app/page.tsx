'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IntroSplash } from "@/components/IntroSplash";
import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import LogoCloud from "@/components/sections/logo-cloud";
import AboutStats from "@/components/sections/about-stats";
import ServicesTabs from "@/components/sections/services-tabs";
import TestimonialQuote from "@/components/sections/testimonial-quote";
import ProcessSteps from "@/components/sections/process-steps";
import WhyChooseUs from "@/components/sections/why-choose-us";
import CaseStudyHighlight from "@/components/sections/case-study-highlight";
import TeamSection from "@/components/sections/team";
import FAQ from "@/components/sections/faq";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/sections/footer";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      {/* Intro Splash Screen */}
      <IntroSplash isVisible={showIntro} onComplete={handleIntroComplete} />
      
      {/* Main Website Content */}
      <AnimatePresence>
        {!showIntro && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-screen flex-col bg-[#F8F3ED]"
          >
            <Navbar />
            <main>
              <Hero />
              <LogoCloud />
              <AboutStats />
              <ServicesTabs />
              <TestimonialQuote />
              <ProcessSteps />
              <WhyChooseUs />
              <CaseStudyHighlight />
              <TeamSection />
              <FAQ />
              <ContactForm />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
