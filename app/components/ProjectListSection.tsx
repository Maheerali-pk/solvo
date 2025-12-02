"use client";

import { useReducer, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import Link from "next/link";
import { allFullProjects } from "../helpers/projects.data";
import ProjectCard from "./ProjectCard";
import Slider from "./Slider";
import GreenBadge from "./GreenBadge";
import { allIcons } from "../helpers/icons";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

export default function ProjectListSection({ withoutHeading = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const router = useRouter();
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
      <div className="w-full max-w-desktop mx-auto flex flex-col gap-6 items-center">
        {/* Badge */}

        {/* Title */}
        {!withoutHeading && (
          <h2 className="text-[1.875rem] leading-[1.2em] text-text-gray font-semibold font-poppins text-center">
            Our <span className="text-primary-blue">Projects</span>
          </h2>
        )}

        {/* Description */}
        {!withoutHeading && (
          <p className="text-footer-text max-w-md text-center text-base">
            See how Solvo Products has helped its clients achieve their vision
            of digital innovation.
          </p>
        )}

        {/* Swiper Container */}
        <div className="w-full">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.5}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 24,
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
            {allFullProjects.map((project, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <ProjectCard project={project} className="w-full h-full" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Slider Controls */}

        <div className="w-full flex items-center justify-between gap-4">
          {/* View All Button */}
          <div className="sm:block hidden">
            <Slider
              currentIndex={currentIndex}
              totalItems={allFullProjects.length}
              onPrevious={handlePrevious}
              onNext={handleNext}
              mode="mobile"
            />
          </div>
          <button
            onClick={() => router.push("/projects")}
            className="btn btn-primary items-center "
          >
            <span className="text-sm leading-6 font-normal font-poppins">
              View all
            </span>
            <div className="w-5 h-5 text-white">
              {allIcons.chevronRight(20, 20)}
            </div>
          </button>

          {/* Slider with Arrows Only */}

          <div className="sm:hidden block">
            <Slider
              currentIndex={currentIndex}
              totalItems={allFullProjects.length}
              onPrevious={handlePrevious}
              onNext={handleNext}
              mode="arrows-only"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
