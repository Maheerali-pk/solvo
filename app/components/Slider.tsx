"use client";

import { allIcons } from "../helpers/icons";

interface SliderProps {
  currentIndex: number;
  totalItems: number;
  onPrevious: () => void;
  onNext: () => void;
  onDotClick?: (index: number) => void;
  className?: string;
  showDots?: boolean;
  showArrows?: boolean;
  disabled?: boolean;
}

export default function Slider({
  currentIndex,
  totalItems,
  onPrevious,
  onNext,
  onDotClick,
  className = "",
  showDots = true,
  showArrows = true,
  disabled = false,
}: SliderProps) {
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === totalItems - 1;

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

  const handleDotClick = (index: number) => {
    if (onDotClick && !disabled) {
      onDotClick(index);
    }
  };

  return (
    <div
      className={`flex items-center justify-between gap-4 ${className} w-full`}
    >
      {/* Dots/Indicators */}
      {showDots && (
        <div className="flex items-center gap-2">
          {Array.from({ length: totalItems }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleDotClick(index)}
              disabled={disabled}
              className={`transition-all ${
                index === currentIndex
                  ? "w-8 h-2 bg-primary-blue rounded-full"
                  : "w-2 h-2 bg-footer-border rounded-full hover:bg-primary-blue/50"
              } ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </div>
      )}
      {/* Previous Arrow */}
      <div className="gap-3 flex items-center">
        {showArrows && (
          <button
            type="button"
            onClick={handlePrevious}
            disabled={isFirstSlide || disabled}
            className={`flex items-center justify-center w-10 h-10 rounded-xl border transition-all ${
              isFirstSlide || disabled
                ? "border-footer-border text-footer-border cursor-not-allowed opacity-50"
                : "border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white cursor-pointer"
            }`}
            aria-label="Previous slide"
          >
            <div className="w-5 h-5">{allIcons.chevronLeft(20, 20)}</div>
          </button>
        )}

        {/* Next Arrow */}
        {showArrows && (
          <button
            type="button"
            onClick={handleNext}
            disabled={isLastSlide || disabled}
            className={`flex items-center justify-center w-10 h-10 rounded-xl border transition-all ${
              isLastSlide || disabled
                ? "border-footer-border text-footer-border cursor-not-allowed opacity-50"
                : "border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white cursor-pointer"
            }`}
            aria-label="Next slide"
          >
            <div className="w-5 h-5">{allIcons.chevronRight(20, 20)}</div>
          </button>
        )}
      </div>
    </div>
  );
}
