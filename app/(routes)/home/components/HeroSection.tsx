"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { allHeroSectionItems } from "@/app/helpers/data";
import HeroSectionItem from "./HeroSectionItem";
import Slider from "@/app/components/Slider";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handlePrevious = () => {
    swiperInstance?.slidePrev();
  };

  const handleNext = () => {
    swiperInstance?.slideNext();
  };

  const handleDotClick = (index: number) => {
    swiperInstance?.slideTo(index);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <section className="w-full flex flex-col items-center gap-6 relative sm:px-side-space">
      <div className="w-full max-w-desktop mx-auto flex flex-col gap-6">
        {/* Swiper Container */}
        <div className="w-full">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={setSwiperInstance}
            onSlideChange={handleSlideChange}
            className="w-full"
            allowTouchMove={true}
            touchEventsTarget="container"
            speed={500}
            grabCursor={true}
            resistance={true}
            resistanceRatio={0.85}
          >
            {allHeroSectionItems.map((item, index) => (
              <SwiperSlide key={index}>
                <HeroSectionItem
                  data={item}
                  currentIndex={index}
                  totalItems={allHeroSectionItems.length}
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                  onDotClick={handleDotClick}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Slider Controls */}

        <div className="hidden sm:block">
          <Slider
            currentIndex={currentIndex}
            totalItems={allHeroSectionItems.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onDotClick={handleDotClick}
            mode="mobile"
          ></Slider>
        </div>
        <div className="sm:hidden">
          <Slider
            currentIndex={currentIndex}
            totalItems={allHeroSectionItems.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onDotClick={handleDotClick}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
