"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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
    <section className="w-full flex max-w-desktop mx-auto flex-col items-center gap-6 pb-section-spacing relative">
      {/* Gradient Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#FAFAFA] via-[#8A8A8A] to-[#FAFAFA]"></div>

      <div className="w-full max-w-desktop mx-auto flex flex-col items-center gap-[1.875rem]">
        {/* Title */}
        <h2 className="text-text-gray font-semibold font-poppins text-center">
          Our <span className="text-primary-blue">Technology</span>
        </h2>

        {/* Technology Logos - Swiper Autoplay */}
        <div className="w-full overflow-hidden relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={64}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            allowTouchMove={false}
            className="w-full"
          >
            {technologyLogos.map((logo, index) => (
              <SwiperSlide
                key={index}
                className="!w-auto"
                style={{
                  width: getLogoWidth(index),
                }}
              >
                <div className="relative flex-shrink-0 h-[2.609375rem] w-full">
                  <Image
                    src={logo}
                    alt={`Technology ${index + 1}`}
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurTechnologySection;
