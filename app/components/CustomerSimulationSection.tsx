"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { allCustomerSimulationItems } from "@/app/helpers/data";
import CustomerSimulationItem from "./CustomerSimulationItem";
import CustomerSimulationItemMobile from "./CustomerSimulationItemMobile";
import Slider from "@/app/components/Slider";

interface CustomerSimulationSectionProps {}

const CustomerSimulationSection: React.FC<
  CustomerSimulationSectionProps
> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [mobileCurrentIndex, setMobileCurrentIndex] = useState(0);
  const [mobileSwiperInstance, setMobileSwiperInstance] =
    useState<SwiperType | null>(null);

  // Create mobile slides - one for each phase (left and right)
  const mobileSlides = allCustomerSimulationItems.flatMap((item) => [
    {
      badgeText: item.badgeText,
      badgeIcon: item.badgeIcon,
      title: item.title,
      phase: item.leftPhase,
    },
    {
      badgeText: item.badgeText,
      badgeIcon: item.badgeIcon,
      title: item.title,
      phase: item.rightPhase,
    },
  ]);

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

  const handleMobilePrevious = () => {
    mobileSwiperInstance?.slidePrev();
  };

  const handleMobileNext = () => {
    mobileSwiperInstance?.slideNext();
  };

  const handleMobileDotClick = (index: number) => {
    mobileSwiperInstance?.slideTo(index);
  };

  const handleMobileSlideChange = (swiper: SwiperType) => {
    setMobileCurrentIndex(swiper.activeIndex);
  };

  return (
    <section className="w-full flex flex-col items-center gap-6 relative">
      <div className="w-full max-w-desktop mx-auto flex flex-col gap-6">
        {/* Desktop View */}
        <div className="block sm:hidden w-full">
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
              {allCustomerSimulationItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <CustomerSimulationItem data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Slider Controls */}
          <Slider
            currentIndex={currentIndex}
            totalItems={allCustomerSimulationItems.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onDotClick={handleDotClick}
            mode="figma"
          />
        </div>

        {/* Mobile View */}
        <div className="sm:block hidden w-full">
          <div className="w-full">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              onSwiper={setMobileSwiperInstance}
              onSlideChange={handleMobileSlideChange}
              className="w-full"
              allowTouchMove={true}
              touchEventsTarget="container"
              speed={500}
              grabCursor={true}
              resistance={true}
              resistanceRatio={0.85}
            >
              {mobileSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <CustomerSimulationItemMobile
                    badgeText={slide.badgeText}
                    badgeIcon={slide.badgeIcon}
                    title={slide.title}
                    phase={slide.phase}
                    index={index}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Slider Controls */}
          <Slider
            currentIndex={mobileCurrentIndex}
            totalItems={mobileSlides.length}
            onPrevious={handleMobilePrevious}
            onNext={handleMobileNext}
            onDotClick={handleMobileDotClick}
            mode="mobile"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerSimulationSection;
