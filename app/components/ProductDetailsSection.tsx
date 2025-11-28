"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { allProducts } from "../helpers/data";
import ProductDetailCard from "./ProductDetailCard";
import Slider from "./Slider";
import GreenBadge from "./GreenBadge";

export default function ProductDetailsSection() {
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
    <section className="w-full flex flex-col items-center gap-6  relative ">
      <div className="w-full max-w-desktop mx-auto flex flex-col gap-6 items-center sm:px-side-space">
        {/* Badge */}

        <GreenBadge icon="/images/zap-icon.svg" text="Case Studies" />

        {/* Title */}
        <h2 className="text-[1.875rem] leading-[1.2em] text-text-gray font-semibold font-poppins text-center">
          Detailing of <span className="text-primary-blue">our products</span>
        </h2>

        <p className="text-footer-text max-w-md text-center text-base ">
          See how Solvo Products has helped its clients achieve their vision of
          digital innovation.
        </p>
        {/* Swiper Container */}
        <div className="w-full">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.5}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
            }}
            onSwiper={setSwiperInstance}
            onSlideChange={handleSlideChange}
            className="w-full [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:!items-stretch"
            allowTouchMove={true}
            touchEventsTarget="container"
            speed={500}
            grabCursor={true}
            resistance={true}
            resistanceRatio={0.85}
            autoHeight={false}
          >
            {allProducts.map((product, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <ProductDetailCard
                  index={index}
                  logo={product.logo}
                  title={product.title}
                  description={product.description}
                  caseStudyLink={product.caseStudyLink}
                  image={product.image}
                  className="w-full h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Slider Controls */}
        <div className="sm:hidden w-full">
          <Slider
            currentIndex={currentIndex}
            totalItems={allProducts.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onDotClick={handleDotClick}
          />
        </div>

        <div className="hidden sm:flex">
          <Slider
            currentIndex={currentIndex}
            totalItems={allProducts.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onDotClick={handleDotClick}
            mode="mobile"
          />
        </div>
      </div>
    </section>
  );
}
