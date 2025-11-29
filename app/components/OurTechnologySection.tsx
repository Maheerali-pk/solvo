"use client";

import Image from "next/image";

const OurTechnologySection = () => {
  const technologyLogos = [
    "/images/technology-images/tech1.png",
    "/images/technology-images/tech2.png",
    "/images/technology-images/tech3.png",
    "/images/technology-images/tech4.png",
    "/images/technology-images/tech5.png",
    "/images/technology-images/tech6.png",
  ];

  // Logo widths for each index
  const getLogoWidth = (index: number) => {
    switch (index) {
      case 0:
        return "6.263125rem";
      case 1:
        return "7.6425rem";
      case 2:
        return "10.1775rem";
      case 3:
        return "11.93rem";
      case 4:
        return "8.611875rem";
      default:
        return "12.48875rem";
    }
  };

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
          <div className="flex items-center gap-16 animate-scroll-infinite-smooth">
            {/* First set */}
            {technologyLogos.map((logo, index) => (
              <div
                key={`set1-${index}`}
                className="shrink-0 h-[2.609375rem] flex items-center"
                style={{ width: getLogoWidth(index) }}
              >
                <Image
                  src={logo}
                  alt={`Technology ${index + 1}`}
                  width={200}
                  height={42}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {technologyLogos.map((logo, index) => (
              <div
                key={`set2-${index}`}
                className="shrink-0 h-[2.609375rem] flex items-center"
                style={{ width: getLogoWidth(index) }}
              >
                <Image
                  src={logo}
                  alt={`Technology ${index + 1}`}
                  width={200}
                  height={42}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTechnologySection;
