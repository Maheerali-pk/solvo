"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { allCustomerSimulationItems } from "@/app/helpers/data";
import CustomerSimulationItem from "./CustomerSimulationItem";
import CustomerSimulationItemMobile from "./CustomerSimulationItemMobile";
import Slider from "@/app/components/Slider";
import GreenBadge from "./GreenBadge";

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
      <div className="w-full max-w-desktop mx-auto flex flex-col gap-6 relative">
        {/* Desktop View */}
        <div className="flex flex-col gap-3 sm:px-side-space">
          {/* Badge */}
          <GreenBadge
            icon="/images/zap-icon.svg"
            text="Solvo’s Premium"
          ></GreenBadge>

          {/* Title */}
          <h2 className="text-[1.875rem]   text-text-gray font-semibold font-poppins">
            Our Customer{" "}
            <span className="text-primary-blue">Simulation Process</span>
          </h2>
        </div>

        <div className="block sm:hidden w-full">
          <div className="w-full relative">
            <img
              src="/images/customer-simulation/line.webp"
              alt="Background"
              className="absolute sm:hidden bottom-0 h-44 min-w-[67rem] pointer-events-none select-none"
              loading="lazy"
            />
            <img
              src={"/images/customer-simulation/cloud.webp"}
              alt="Step 1"
              className="object-contain sm:hidden ml-[2.5rem] w-96 bottom-16 absolute"
              loading="lazy"
            />
            <img
              src={"/images/customer-simulation/cloud-right.webp"}
              alt="Step 1"
              className="object-contain sm:hidden w-[18.625rem] h-[19.375rem] ml-[2.5rem] w-96 bottom-14 right-16 absolute"
              loading="lazy"
            />
            <img
              src={"/images/customer-simulation/dots.webp"}
              alt="Step 1"
              className="object-contain sm:hidden ml-[7.25rem] h-[17rem] bottom-0 absolute"
              loading="lazy"
            />
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
          <div className="w-full relative">
            <img
              src="/images/customer-simulation/circle.webp"
              alt="Background"
              className="absolute top-0 w-40 h-48 right-0 -translate-y-0"
              loading="lazy"
            />
            <img
              src="/images/customer-simulation/line-mobile.webp"
              alt="Background"
              className="absolute bottom-6 w-full left-side-space right-  right-0 z-10"
              loading="lazy"
            />
            <img
              src={"/images/customer-simulation/dots.webp"}
              alt="Step 1"
              className="object-contain h-[50%] left-1/2 -translate-x-1/2 bottom-0 absolute"
              loading="lazy"
            />
            <img
              src={"/images/customer-simulation/cloud.webp"}
              alt="Step 1"
              className="object-contain  w-80 bottom-28 left-1/2 -translate-x-1/2 absolute"
              loading="lazy"
            />
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
