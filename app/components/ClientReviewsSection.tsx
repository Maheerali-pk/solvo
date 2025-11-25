"use client";

import { useState } from "react";
import { allClientReviews } from "../helpers/data";
import ClientReviewItem from "./ClientReviewItem";
import Slider from "./Slider";

interface ClientReviewsSectionProps {}

const ClientReviewsSection: React.FC<ClientReviewsSectionProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(allClientReviews.length - 1, prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full overflow-hidden flex flex-col items-center gap-6 py-[3.125rem] relative bg-primary-light-blue">
      <div className="w-full max-w-desktop mx-auto flex flex-col gap-6 relative">
        <img
          src="/images/client-reviews/bg-item.png"
          alt="Client Reviews Background"
          className="absolute  -translate-y-[309px] left-0 h-[950px] w-[675px] object-contain -translate-x-2/3"
        />
        {/* Slider Container */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {allClientReviews.map((review, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
                style={{ minWidth: "100%" }}
              >
                <ClientReviewItem data={review} />
              </div>
            ))}
          </div>
        </div>

        {/* Slider Controls */}
        <Slider
          currentIndex={currentIndex}
          totalItems={allClientReviews.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onDotClick={handleDotClick}
        />
      </div>
    </section>
  );
};

export default ClientReviewsSection;
