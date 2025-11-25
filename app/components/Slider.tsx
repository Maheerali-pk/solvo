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
  mode?: "default" | "figma";
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
  mode = "default",
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

  // Figma mode layout
  if (mode === "figma") {
    return (
      <div className={`flex flex-col items-center gap-3 ${className} w-full`}>
        {/* Arrows on top right */}
        {showArrows && (
          <div className="flex items-center justify-end gap-3 w-full">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={isFirstSlide || disabled}
              className={`flex items-center justify-center h-[2.9375rem] px-4 rounded-xl border transition-all ${
                isFirstSlide || disabled
                  ? "border-primary-blue text-primary-blue cursor-not-allowed opacity-50"
                  : "border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white cursor-pointer"
              }`}
              aria-label="Previous slide"
            >
              <div className="w-5 h-5">{allIcons.chevronLeft(20, 20)}</div>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={isLastSlide || disabled}
              className={`flex items-center justify-center h-[2.9375rem] px-4 rounded-xl border transition-all ${
                isLastSlide || disabled
                  ? "border-primary-blue text-primary-blue cursor-not-allowed opacity-50"
                  : "border-primary-blue bg-primary-blue text-white hover:opacity-90 cursor-pointer"
              }`}
              aria-label="Next slide"
            >
              <div className="w-5 h-5">{allIcons.chevronRight(20, 20)}</div>
            </button>
          </div>
        )}

        {/* Dots/Indicators at bottom */}
        {showDots && (
          <div className="flex items-stretch gap-11 w-full">
            {Array.from({ length: totalItems }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleDotClick(index)}
                disabled={disabled}
                className={`flex-1 h-1 rounded-[1.25rem] transition-all ${
                  index === currentIndex
                    ? "bg-primary-blue"
                    : "bg-[rgba(136,216,232,0.4)]"
                } ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Default mode layout
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
            <div className="w-5 h-5">{allIcons.arrowLeft(20, 20)}</div>
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
            <div className="w-5 h-5">{allIcons.arrowRight(20, 20)}</div>
          </button>
        )}
      </div>
    </div>
  );
}
