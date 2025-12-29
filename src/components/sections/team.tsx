import React from 'react';
import Image from 'next/image';
import Head from "next/head";

/**
 * Team section for Daira EdTech
 * Meet the Founders section with call-to-action
 */
const TeamSection = () => {
  const teamMembers = [
    {
      name: "Rishikesh Amit Nayak",
      role: "Co-Founder",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/OX3H8eSRqaFBsMwnXROVH9bRFU-5.png",
    },
    {
      name: "Anikaet Irkal",
      role: "Co-Founder",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/PfjZwO9d2PL2A5bWGZ3MUj10K8-6.png",
    },
    {
      name: "Shrawani Choudhary",
      role: "Co-Founder",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38690446-cca0-49d2-bce9-31048cb9d371-claura-framer-ai/assets/images/EhBnCieO0c1Ukwm8ddezSzvlwPc-7.png",
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
      
      <section 
        className="section-padding bg-[#F8F3ED] py-[120px]"
        style={{ fontFamily: '"Noto Sans", sans-serif' }}
      >
        <div className="container mx-auto max-w-[1200px] px-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-[48px]">
            <div className="max-w-[600px]">
              <div className="inline-block bg-[#EAE0D5] px-3 py-1 rounded-[100px] mb-6">
                <span 
                  className="text-[12px] font-semibold text-[#2D241E] uppercase tracking-wider"
                  style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 600 }}
                >
                  Meet the Founders
                </span>
              </div>
              <h2 
                className="font-display text-[48px] md:text-[56px] leading-[1.2] text-[#2D241E]"
                style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
              >
                Driven by purpose. <span className="text-[#A48D7F] italic">Built by experience.</span>
              </h2>
            </div>
            <p 
              className="max-w-[360px] text-[16px] leading-[1.6] text-[#7A6F68]"
              style={{ fontFamily: '"Noto Sans", sans-serif' }}
            >
              No corporate layers. Our founders work directly with partners, governments, and communities to build solutions that matter.
            </p>
          </div>

          {/* Team Grid - 3 columns with taller cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-[24px] aspect-[3/5] flex flex-col justify-end"
              >
                {/* Background Image */}
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Text Content Overlay */}
                <div className="relative p-6 z-10">
                  <h3 
                    className="text-white font-medium text-[20px] mb-1"
                    style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 500 }}
                  >
                    {member.name}
                  </h3>
                  <p 
                    className="text-white/70 text-[14px]"
                    style={{ fontFamily: '"Noto Sans", sans-serif' }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action - Even more compact */}
          <div className="bg-[#F3EDE5] rounded-[24px] py-5 px-6 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 
                className="font-display text-[22px] md:text-[26px] text-[#2D241E] mb-1.5 leading-[1.2]"
                style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
              >
                Want to be part of the team?
              </h3>
              <p 
                className="text-[14px] text-[#5C5550] leading-[1.5] max-w-[600px]"
                style={{ fontFamily: '"Noto Sans", sans-serif' }}
              >
                We're always looking for talented people who want to help businesses cut through AI overwhelm and build systems that work.
              </p>
            </div>
            <a
              href="#careers"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#2D241E] text-white rounded-full font-semibold text-[14px] hover:bg-[#3D342E] transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 600 }}
            >
              Apply now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
