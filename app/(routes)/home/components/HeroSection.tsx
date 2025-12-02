"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { allHeroSectionItems } from "@/app/helpers/data";
import HeroSectionItem from "./HeroSectionItem";
import Slider from "@/app/components/Slider";
import GreenBadge from "@/app/components/GreenBadge";
import { allIcons } from "@/app/helpers/icons";

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

  const currentItem = allHeroSectionItems[currentIndex];

  return (
    <section className="w-full flex flex-col items-center gap-6 relative sm:px-side-space">
      <div className="w-full max-w-desktop mx-auto flex flex-col gap-6 relative">
        {/* Swiper Container */}
        <div className="w-full relative">
          {/* Green Badge - Outside Swiper but positioned absolutely to match original location */}
          <div className="absolute top-0 left-0 z-10 transition-all duration-500 ease-in-out">
            <GreenBadge
              icon={currentItem.badgeIcon || "/images/zap-icon.svg"}
              text={currentItem.badgeText}
            />
          </div>

          {/* Buttons - Outside Swiper but positioned absolutely to match original location */}
          <div className="absolute bottom-0 left-0 z-10 transition-all duration-500 ease-in-out sm:relative sm:bottom-auto sm:left-auto sm:mt-6">
            <div className="flex flex-row items-center gap-[1.375rem] sm:gap-4 sm:w-full">
              {/* Place Your Order Button */}
              <a href={currentItem.placeOrderLink} className="btn btn-primary">
                <span className="text-sm  text-white font-normal font-poppins">
                  Place Your Order
                </span>
                <div className="w-6 h-6 text-white">
                  {allIcons.chevronRight(24, 24)}
                </div>
              </a>

              {/* Our Services Button */}
              <a
                href={currentItem.ourServicesLink}
                className="btn btn-secondary"
              >
                <span className="text-sm  text-primary-blue font-normal font-poppins">
                  Our Services
                </span>
                <div className="w-6 h-6 text-primary-blue">
                  {allIcons.chevronRight(24, 24)}
                </div>
              </a>
            </div>
          </div>

          <Swiper
            spaceBetween={30}
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
