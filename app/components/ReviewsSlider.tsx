"use client";

import Image from "next/image";
import { allIcons } from "../helpers/icons";

interface ReviewsSliderProps {
  thumbnails: string[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onThumbnailClick?: (index: number) => void;
  className?: string;
  disabled?: boolean;
}

export default function ReviewsSlider({
  thumbnails,
  currentIndex,
  onPrevious,
  onNext,
  onThumbnailClick,
  className = "",
  disabled = false,
}: ReviewsSliderProps) {
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === thumbnails.length - 1;

  const handlePrevious = () => {
    if (!isFirstSlide && !disabled) {
      onPrevious();
    }
  };

  const handleNext = () => {
    if (!isLastSlide && !disabled) {
      onNext();
    }
  };

  const handleThumbnailClick = (index: number) => {
    if (onThumbnailClick && !disabled) {
      onThumbnailClick(index);
    }
  };

  // Calculate thumbnail sizes - decreasing from first to last
  // Selected one is biggest (38px), first is bigger than last
  const getThumbnailSize = (index: number) => {
    if (index === currentIndex) {
      return 38; // Selected - biggest
    }

    // Base size decreases from first (bigger) to last (smaller)
    // First thumbnail gets 34px, last gets 22px
    const totalThumbnails = thumbnails.length;
    const positionRatio = index / (totalThumbnails - 1 || 1);

    // Interpolate between 34px (first) and 22px (last)
    const baseSize = 34 - positionRatio * (34 - 22);

    // Round to nearest even number for clean sizing
    return Math.round(baseSize / 2) * 2;
  };

  return (
    <div
      className={`flex flex-row items-center justify-between w-full sm:px-side-space gap-4 ${className}`}
    >
      {/* Previous Arrow */}
      <button
        type="button"
        onClick={handlePrevious}
        disabled={isFirstSlide || disabled}
        className={`flex items-center justify-center w-[2.375rem] h-[2.375rem]  rounded-full border transition-all ${
          isFirstSlide || disabled
            ? "border-footer-border text-footer-border cursor-not-allowed opacity-50 bg-white"
            : "border-footer-border hover:border-primary-blue cursor-pointer bg-transparent text-primary-blue"
        }`}
        style={{
          pointerEvents: isFirstSlide || disabled ? "none" : "auto",
          touchAction: "manipulation",
        }}
        aria-label="Previous slide"
      >
        <div className="w-6 h-6 pointer-events-none">
          {allIcons.arrowLeft(24, 24)}
        </div>
      </button>

      {/* Thumbnails */}
      <div className="flex flex-row items-center justify-center gap-4">
        {thumbnails.map((thumbnail, index) => {
          const size = getThumbnailSize(index);
          const isSelected = index === currentIndex;
          const sizeRem = `${size / 16}rem`;

          return (
            <button
              key={index}
              type="button"
              onClick={() => handleThumbnailClick(index)}
              disabled={disabled}
              className={`relative  overflow-hidden transition-all rounded-full ${
                isSelected ? "ring-2 ring-primary-blue" : "hover:opacity-80"
              } ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
              style={{
                width: sizeRem,
                height: sizeRem,
              }}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={isSelected ? "true" : "false"}
            >
              <Image
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes={`${size}px`}
              />
            </button>
          );
        })}
      </div>

      {/* Next Arrow */}
      <button
        type="button"
        onClick={handleNext}
        disabled={isLastSlide || disabled}
        className={`flex items-center justify-center w-[2.375rem] h-[2.375rem] rounded-full border transition-all ${
          isLastSlide || disabled
            ? "border-footer-border text-footer-border cursor-not-allowed opacity-50 bg-white"
            : "border-footer-border  text-primary-blue hover:opacity-90 cursor-pointer"
        }`}
        aria-label="Next slide"
        style={{
          pointerEvents: isLastSlide || disabled ? "none" : "auto",
          touchAction: "manipulation",
        }}
      >
        <div className="w-6 h-6 pointer-events-none">
          {allIcons.arrowRight(24, 24)}
        </div>
      </button>
    </div>
  );
}
