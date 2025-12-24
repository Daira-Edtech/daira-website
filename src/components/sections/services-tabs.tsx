"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * SERVICES INTERACTIVE SECTION
 * Features a vertical tab list on the left and dynamic content on the right.
 * Layout: 12-column grid or equivalent flex layout.
 * Background: #F8F3ED
 */

const servicesData = [
  {
    id: "01",
    title: "Discover",
    description: "We analyze your workflows and identify where automation creates the most value for your business.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/gb6dqmVVpchoV18EyxBIX5c2yrU-2.png",
  },
  {
    id: "02",
    title: "Build",
    description: "Custom automation designed for how you work, eliminating repetitive tasks without disrupting.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/gb6dqmVVpchoV18EyxBIX5c2yrU-2.png", // Reusing asset as placeholder for build
  },
  {
    id: "03",
    title: "Deploy",
    description: "We handle installation, testing, and launch so your systems work perfectly from day one.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/gb6dqmVVpchoV18EyxBIX5c2yrU-2.png", // Reusing asset
  },
  {
    id: "04",
    title: "Optimize",
    description: "Ongoing training and support to ensure your automation keeps delivering results over time.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/gb6dqmVVpchoV18EyxBIX5c2yrU-2.png", // Reusing asset
  },
];

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#F8F3ED] py-[120px] px-8 overflow-hidden" id="services">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col gap-12 mb-[80px]">
          <div className="inline-flex items-center self-start">
            <span className="bg-[#EAE0D5] text-[#2D241E] px-4 py-1 rounded-full text-[12px] font-semibold uppercase tracking-wider">
              Services
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <h2 className="font-display text-[56px] leading-[1.2] text-[#2D241E] max-w-[500px]">
              We handle <span className="text-[#7A6F68]">everything</span> so you don't have to.
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#7A6F68] max-w-[420px] pt-4">
              From identifying opportunities to building systems and training your team—we manage the entire process while you focus on running your business.
            </p>
          </div>
        </div>

        {/* Interactive Tabs Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 min-h-[500px]">
          {/* Tabs Navigation (Left) */}
          <div className="flex flex-col w-full md:w-[45%] space-y-4">
            {servicesData.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "relative flex items-center justify-between px-8 py-6 rounded-[24px] text-left transition-all duration-300 group",
                  activeTab === index 
                    ? "bg-[rgba(255,255,255,0.4)] border border-[rgba(45,36,30,0.1)] shadow-sm" 
                    : "bg-transparent border border-transparent hover:bg-[rgba(255,255,255,0.2)]"
                )}
              >
                <h3 
                  className={cn(
                    "font-display text-[48px] leading-tight transition-colors duration-300",
                    activeTab === index ? "text-[#2D241E]" : "text-[rgba(45,36,30,0.3)]"
                  )}
                >
                  {service.title}
                </h3>
                <span 
                  className={cn(
                    "text-[14px] font-semibold px-2 py-0.5 rounded-md self-start mt-2",
                    activeTab === index 
                      ? "bg-[#2D241E] text-[#F8F3ED]" 
                      : "bg-[#EAE0D5] text-[#7A6F68] group-hover:bg-[#2D241E] group-hover:text-[#F8F3ED] transition-colors"
                  )}
                >
                  {service.id}
                </span>
              </button>
            ))}
          </div>

          {/* Feature Display (Right) */}
          <div className="w-full md:w-[50%] flex flex-col gap-8 opacity-100 transition-opacity duration-500">
            {/* Visual Container */}
            <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden bg-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.2)] shadow-xl">
              <Image
                src={servicesData[activeTab].image}
                alt={servicesData[activeTab].title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              {/* Optional Glass Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>

            {/* Content Under Image */}
            <div className="flex flex-col gap-4 px-2">
              <h4 className="text-[20px] font-semibold text-[#2D241E]">
                {servicesData[activeTab].title}
              </h4>
              <p className="text-[16px] leading-[1.6] text-[#7A6F68] max-w-[450px]">
                {servicesData[activeTab].description}
              </p>
              <a 
                href="/book-a-call" 
                className="inline-flex items-center gap-2 mt-2 text-[#2D241E] font-semibold hover:gap-3 transition-all group"
              >
                <MoveRight className="w-4 h-4" />
                <span>Book a free call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
