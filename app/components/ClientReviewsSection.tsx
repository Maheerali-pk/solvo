"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { allClientReviews } from "../helpers/data";
import ClientReviewItem from "./ClientReviewItem";
import Slider from "./Slider";
import ReviewsSlider from "./ReviewsSlider";

interface ClientReviewsSectionProps {}

const ClientReviewsSection: React.FC<ClientReviewsSectionProps> = () => {
  const [desktopCurrentIndex, setDesktopCurrentIndex] = useState(0);
  const [desktopSwiperInstance, setDesktopSwiperInstance] =
    useState<SwiperType | null>(null);
  const [mobileCurrentIndex, setMobileCurrentIndex] = useState(0);
  const [mobileSwiperInstance, setMobileSwiperInstance] =
    useState<SwiperType | null>(null);

  const handleDesktopPrevious = () => {
    desktopSwiperInstance?.slidePrev();
  };

  const handleDesktopNext = () => {
    desktopSwiperInstance?.slideNext();
  };

  const handleDesktopDotClick = (index: number) => {
    desktopSwiperInstance?.slideTo(index);
  };

  const handleDesktopSlideChange = (swiper: SwiperType) => {
    setDesktopCurrentIndex(swiper.activeIndex);
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
    <>
      <section className="w-full hidden sm:flex overflow-hidden flex-col items-center gap-6 py-[3.125rem] relative bg-primary-light-blue">
        <div className="w-full max-w-desktop mx-auto flex flex-col gap-6 relative">
          {/* <img
            src="/images/client-reviews/bg-item.webp"
            alt="Client Reviews Background"
            className="absolute  -translate-y-[309px] left-0 h-[950px] w-[675px] object-contain -translate-x-2/3"
          /> */}
          {/* Swiper Container */}

          <div className="w-full">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              onSwiper={setDesktopSwiperInstance}
              onSlideChange={handleDesktopSlideChange}
              className="w-full"
              allowTouchMove={true}
              touchEventsTarget="container"
              speed={500}
              grabCursor={true}
              resistance={true}
              resistanceRatio={0.85}
            >
              {allClientReviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <ClientReviewItem data={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Slider Controls */}
          <a
            href="/verify-reviews"
            className="text-base underline text-primary-blue font-normal font-poppins hover:underline sm:px-side-space hidden sm:block "
          >
            Verify our reviews
          </a>
          <ReviewsSlider
            thumbnails={allClientReviews.map((review) => review.image)}
            currentIndex={desktopCurrentIndex}
            onPrevious={handleDesktopPrevious}
            onNext={handleDesktopNext}
            onThumbnailClick={handleDesktopDotClick}
          />
        </div>
      </section>
      <section className="w-full sm:hidden overflow-hidden flex flex-col items-center gap-6 py-[3.125rem] relative bg-primary-light-blue">
        <div className="w-full max-w-desktop mx-auto flex flex-col gap-6 relative">
          <img
            src="/images/client-reviews/bg-item.webp"
            alt="Client Reviews Background"
            className="absolute  -translate-y-[309px] left-0 h-[950px] w-[675px] object-contain -translate-x-2/3"
          />
          {/* Swiper Container */}
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
              {allClientReviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <ClientReviewItem data={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Slider Controls */}
          <div className="sm:hidden w-full">
            <Slider
              currentIndex={mobileCurrentIndex}
              totalItems={allClientReviews.length}
              onPrevious={handleMobilePrevious}
              onNext={handleMobileNext}
              onDotClick={handleMobileDotClick}
            />
          </div>

          <div className="hidden sm:flex w-full">
            <Slider
              currentIndex={mobileCurrentIndex}
              totalItems={allClientReviews.length}
              onPrevious={handleMobilePrevious}
              onNext={handleMobileNext}
              onDotClick={handleMobileDotClick}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientReviewsSection;
