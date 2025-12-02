"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const OurTechnologySection = () => {
  const technologyLogos = [
    "/images/technology-images/tech1.webp",
    "/images/technology-images/tech2.webp",
    "/images/technology-images/tech3.webp",
    "/images/technology-images/tech4.webp",
    "/images/technology-images/tech5.webp",
    "/images/technology-images/tech6.webp",
  ];

  return (
    <section className="w-full flex max-w-desktop mx-auto flex-col items-center gap-6 pb-section-spacing relative sm:px-side-space">
      {/* Gradient Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#FAFAFA] via-[#8A8A8A] to-[#FAFAFA]"></div>

      <div className="w-full max-w-desktop mx-auto flex flex-col items-center gap-[1.875rem]">
        {/* Title */}
        <h2 className="text-text-gray font-semibold font-poppins text-center">
          Our <span className="text-primary-blue">Technology</span>
        </h2>

        {/* Technology Logos - Continuous Linear Scroll */}
        <div className="w-full overflow-hidden relative">
          <Marquee
            speed={90}
            gradient={false}
            pauseOnHover={false}
            className="flex items-center"
          >
            {/* Duplicate logos to create seamless loop */}
            {[...technologyLogos, ...technologyLogos].map((logo, index) => {
              const originalIndex = index % technologyLogos.length;
              return (
                <div
                  key={`logo-${index}`}
                  className="shrink-0 flex items-center mx-[2.1875rem]"
                >
                  <Image
                    src={logo}
                    alt={`Technology ${originalIndex + 1}`}
                    width={200}
                    height={42}
                    className="w-auto h-[2.609375rem] object-contain"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default OurTechnologySection;
