"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

const servicesData = [
  {
    title: "Discover",
    description: "We identify deep-rooted challenges in education and learning through rigorous research with communities, governments, and experts.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/gb6dqmVVpchoV18EyxBIX5c2yrU-2.png",
  },
  {
    title: "Build", 
    description: "We build AI-powered, multilingual, and accessible solutions designed for ground realities from rural schools to district administrations.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/gb6dqmVVpchoV18EyxBIX5c2yrU-2.png",
  },
  {
    title: "Deploy",
    description: "We work alongside governments at central, state, and local levels to deploy solutions at scale proving technology can transform public systems.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/gb6dqmVVpchoV18EyxBIX5c2yrU-2.png",
  },
  {
    title: "Optimize",
    description: "We provide continuous support, training, and policy frameworks to ensure solutions create lasting impact, not just pilots.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/gb6dqmVVpchoV18EyxBIX5c2yrU-2.png",
  },
];

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [displayTab, setDisplayTab] = useState(0);

  return (
    <section className="bg-[#F8F3ED] py-[120px] px-8 overflow-hidden" id="services">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-12 mb-[80px]">
          <div className="inline-flex items-center self-start">
            <span className="bg-[#EAE0D5] text-[#2D241E] px-4 py-1.5 rounded-full text-[12px] font-semibold uppercase tracking-wider">
              What We Do
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <h2 className="font-display text-[56px] leading-[1.1] text-[#2D241E] max-w-[500px]">
              We handle <span className="text-[#7A6F68]">everything</span> so you don't have to.
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#7A6F68] max-w-[420px] pt-4">
              From identifying gaps in education to building AI-powered solutions and enabling policy implementation we handle research, development, and deployment end-to-end.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Tabs */}
          <div className="space-y-3">
            {servicesData.map((service, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  setDisplayTab(index);
                }}
                onMouseEnter={() => {
                  setActiveTab(index);
                  setDisplayTab(index);
                }}
                className={cn(
                  "relative flex items-center justify-between w-full px-8 py-4 rounded-[20px] text-left transition-all duration-500 group hover:scale-[1.02]",
                  activeTab === index
                    ? "bg-[#F5F1EA]/90 border border-[#EDE5D8]/70 shadow-lg scale-[1.08] py-5 px-7" 
                    : "bg-[#F5F1EA]/90 border border-[#EDE5D8]/50 hover:bg-[#F5F1EA]/90 hover:border-[#EDE5D8]/70 hover:shadow-md py-4"
                )}
              >
                <h3 
                  className="font-display text-[38px] md:text-[42px] leading-tight font-semibold transition-all duration-500 flex items-baseline gap-1"
                  style={{
                    transform: `translateX(${activeTab === index ? '1.5rem' : '1rem'})`
                  }}
                >
                  <span className={cn(
                    "transition-all duration-500",
                    activeTab === index 
                      ? "text-[#2D241E] font-bold" 
                      : "text-[#7A6F68]/80 group-hover:text-[#2D241E]/90"
                  )}>
                    {service.title}
                  </span>
                </h3>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full aspect-[16/11] rounded-[24px] overflow-hidden bg-[#F5F1EA]/70 backdrop-blur-sm border border-[#EDE5D8]/50 shadow-xl group/image hover:shadow-2xl transition-all duration-700 max-h-[320px]">
              <Image
                key={`image-${displayTab}`} // Force full re-render
                src={servicesData[displayTab].image}
                alt={servicesData[displayTab].title}
                fill
                className="object-cover transition-all duration-700 group-hover/image:scale-[1.05]"
                priority={false}
                unoptimized // Fix Next.js image optimization issues
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D241E]/10 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="flex flex-col gap-3 px-1">
              <h4 className="text-[22px] font-semibold text-[#2D241E] leading-tight transition-all duration-500">
                {servicesData[displayTab].title}
              </h4>
              <p className="text-[16px] leading-[1.6] text-[#7A6F68] max-w-[450px] transition-all duration-500">
                {servicesData[displayTab].description}
              </p>
              <a 
                href="#partner-with-us" 
                className="inline-flex items-center gap-2 text-[#2D241E] font-semibold hover:gap-3 transition-all duration-300 group"
              >
                <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>Partner With Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
