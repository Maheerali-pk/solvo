"use client";

import { useState } from "react";
import { allCustomerSimulationItems } from "@/app/helpers/data";
import CustomerSimulationItem from "./CustomerSimulationItem";
import Slider from "@/app/components/Slider";

interface CustomerSimulationSectionProps {}

const CustomerSimulationSection: React.FC<
  CustomerSimulationSectionProps
> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(allCustomerSimulationItems.length - 1, prev + 1)
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full flex flex-col items-center gap-6 py-[3.125rem] relative">
      <div className="w-full max-w-desktop mx-auto flex flex-col gap-6">
        {/* Slider Container */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {allCustomerSimulationItems.map((item, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
                style={{ minWidth: "100%" }}
              >
                <CustomerSimulationItem data={item} />
              </div>
            ))}
          </div>
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
    </section>
  );
};

export default CustomerSimulationSection;
