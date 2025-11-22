"use client";

import { useState } from "react";
import { allProducts } from "../helpers/data";
import ProductDetailCard from "./ProductDetailCard";
import Slider from "./Slider";
import GreenBadge from "./GreenBadge";

export default function ProductDetailsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(allProducts.length - 1, prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full flex flex-col items-center gap-6 py-[3.125rem] relative">
      <div className="w-full max-w-desktop mx-auto flex flex-col gap-6 items-center">
        {/* Badge */}

        <GreenBadge icon="/images/zap-icon.svg" text="Case Studies" />

        {/* Title */}
        <h2 className="text-[1.875rem] leading-[1.2em] text-text-gray font-semibold font-poppins text-center">
          Detailing of <span className="text-primary-blue">our products</span>
        </h2>

        <p className="text-footer-text max-w-md text-center">
          See how Solvo Products has helped its clients achieve their vision of
          digital innovation.
        </p>
        {/* Slider Container */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {allProducts.map((product, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
                style={{ minWidth: "100%" }}
              >
                <ProductDetailCard
                  logo={product.logo}
                  title={product.title}
                  description={product.description}
                  caseStudyLink={product.caseStudyLink}
                  image={product.image}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Slider Controls */}
        <Slider
          currentIndex={currentIndex}
          totalItems={allProducts.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onDotClick={handleDotClick}
        />
      </div>
    </section>
  );
}
