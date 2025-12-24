import React from 'react';
import Image from 'next/image';

/**
 * Team section component based on the Claura website design.
 * Features a 4-column profile layout with Marcus Chen, Amira Hassan, David Park, and Elena Martinez.
 */

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Marcus Chen",
      role: "Lead AI Consultant",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/OX3H8eSRqaFBsMwnXROVH9bRFU-5.png",
    },
    {
      name: "Amira Hassan",
      role: "Automation Specialist",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/PfjZwO9d2PL2A5bWGZ3MUj10K8-6.png",
    },
    {
      name: "David Park",
      role: "Implementation Engineer",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/EhBnCieO0c1Ukwm8ddezSzvlwPc-7.png",
    },
    {
      name: "Elena Martinez",
      role: "Client Success Manager",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/cM208i1SEfcZpMxgzpTuWXe5N8-8.png",
    },
  ];

  return (
    <section className="section-padding bg-[#F8F3ED] py-[120px]">
      <div className="container mx-auto max-w-[1200px] px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-[48px]">
          <div className="max-w-[600px]">
            <div className="inline-block bg-[#EAE0D5] px-3 py-1 rounded-[100px] mb-6">
              <span className="text-[12px] font-semibold text-[#2D241E] uppercase tracking-wider">
                Meet the team
              </span>
            </div>
            <h2 className="font-display text-[48px] md:text-[56px] leading-[1.2] text-[#2D241E]">
              You&apos;re in <span className="text-[#A48D7F] italic">experienced</span> hands.
            </h2>
          </div>
          <p className="max-w-[360px] text-[16px] leading-[1.6] text-[#7A6F68]">
            No layers of management. You work directly with the specialists who understand your business and build your automation from start to finish.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-[24px] aspect-[4/5] flex flex-col justify-end"
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Text Content Overlay */}
              <div className="relative p-6 z-10">
                <h3 className="text-white font-sans font-medium text-[20px] mb-1">
                  {member.name}
                </h3>
                <p className="text-white/70 font-sans text-[14px]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;