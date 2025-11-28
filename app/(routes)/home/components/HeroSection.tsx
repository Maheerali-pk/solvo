"use client";

import { useState, useRef } from "react";
import { allHeroSectionItems } from "@/app/helpers/data";
import HeroSectionItem from "./HeroSectionItem";
import Slider from "@/app/components/Slider";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isHorizontalSwipe, setIsHorizontalSwipe] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(allHeroSectionItems.length - 1, prev + 1)
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch/Mouse handlers for swiping
  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setTranslateX(0);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setTranslateX(diff);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50; // Minimum swipe distance in pixels
    const swipePercentage =
      (translateX / (sliderRef.current?.offsetWidth || 1)) * 100;

    if (Math.abs(translateX) > threshold) {
      if (translateX > 0 && currentIndex > 0) {
        // Swipe right - go to previous
        handlePrevious();
      } else if (
        translateX < 0 &&
        currentIndex < allHeroSectionItems.length - 1
      ) {
        // Swipe left - go to next
        handleNext();
      }
    }

    setTranslateX(0);
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    // Prevent vertical scrolling when swiping horizontally
    if (
      Math.abs(e.touches[0].clientX - startX) >
      Math.abs(e.touches[0].clientY - (e.touches[0].pageY - window.scrollY))
    ) {
      e.preventDefault();
    }
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Mouse events (for desktop drag support)
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleEnd();
    }
  };

  // Calculate transform with drag offset
  const getTransform = () => {
    const baseTransform = -currentIndex * 100;
    const dragOffset = isDragging
      ? (translateX / (sliderRef.current?.offsetWidth || 1)) * 100
      : 0;
    return baseTransform + dragOffset;
  };

  return (
    <section className="w-full flex flex-col items-center gap-6 relative sm:px-side-space">
      <div className="w-full max-w-desktop mx-auto flex flex-col gap-6">
        {/* Slider Container */}
        <div
          ref={sliderRef}
          className="w-full overflow-hidden touch-pan-y sm:touch-pan-x"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(${getTransform()}%)`,
              transitionDuration: isDragging ? "0ms" : "500ms",
            }}
          >
            {allHeroSectionItems.map((item, index) => (
              <div
                key={index}
                className="w-full shrink-0 select-none"
                style={{ minWidth: "100%" }}
              >
                <HeroSectionItem
                  data={item}
                  currentIndex={index}
                  totalItems={allHeroSectionItems.length}
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                  onDotClick={handleDotClick}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Slider Controls */}
        <div className="sm:hidden">
          <Slider
            currentIndex={currentIndex}
            totalItems={allHeroSectionItems.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onDotClick={handleDotClick}
            mode="mobile"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
