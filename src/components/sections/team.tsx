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
        className="section-padding bg-[#F8F3ED] py-16 sm:py-20 md:py-24 lg:py-28 xl:py-[120px]"
        style={{ fontFamily: '"Noto Sans", sans-serif' }}
      >
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 sm:gap-6 mb-10 sm:mb-12 md:mb-[48px]">
            <div className="max-w-[600px]">
              <div className="inline-block bg-[#EAE0D5] px-3 py-1 rounded-[100px] mb-4 sm:mb-5 md:mb-6">
                <span 
                  className="text-[11px] sm:text-[12px] font-semibold text-[#2D241E] uppercase tracking-wider"
                  style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 600 }}
                >
                  Meet the Founders
                </span>
              </div>
              <h2 
                className="font-display text-[32px] sm:text-[36px] md:text-[44px] lg:text-[48px] xl:text-[56px] leading-[1.2] text-[#2D241E]"
                style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
              >
                Driven by purpose. <span className="text-[#A48D7F] italic">Built by experience.</span>
              </h2>
            </div>
            <p 
              className="max-w-[360px] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] text-[#7A6F68]"
              style={{ fontFamily: '"Noto Sans", sans-serif' }}
            >
              No corporate layers. Our founders work directly with partners, governments, and communities to build solutions that matter.
            </p>
          </div>

          {/* Team Grid - 3 columns with taller cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-[20px] sm:rounded-[22px] md:rounded-[24px] aspect-[3/5] flex flex-col justify-end"
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
                <div className="relative p-4 sm:p-5 md:p-6 z-10">
                  <h3 
                    className="text-white font-medium text-[17px] sm:text-[18px] md:text-[19px] lg:text-[20px] mb-1"
                    style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 500 }}
                  >
                    {member.name}
                  </h3>
                  <p 
                    className="text-white/70 text-[13px] sm:text-[14px]"
                    style={{ fontFamily: '"Noto Sans", sans-serif' }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action - Even more compact */}
          <div className="bg-[#F3EDE5] rounded-[20px] sm:rounded-[22px] md:rounded-[24px] py-4 sm:py-5 px-5 sm:px-6 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-5">
            <div className="flex-1">
              <h3 
                className="font-display text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] text-[#2D241E] mb-1.5 sm:mb-2 leading-[1.2]"
                style={{ fontFamily: '"Noto Sans", sans-serif', fontWeight: 700 }}
              >
                Want to be part of the team?
              </h3>
              <p 
                className="text-[13px] sm:text-[14px] text-[#5C5550] leading-[1.5] sm:leading-[1.55] max-w-[600px]"
                style={{ fontFamily: '"Noto Sans", sans-serif' }}
              >
                We&apos;re always looking for talented people who want to help businesses cut through AI overwhelm and build systems that work.
              </p>
            </div>
            <a
              href="#careers"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#2D241E] text-white rounded-full font-semibold text-[13px] sm:text-[14px] hover:bg-[#3D342E] transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap w-full sm:w-auto justify-center"
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
