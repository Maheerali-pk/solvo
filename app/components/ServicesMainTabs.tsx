"use client";

import Image from "next/image";
import GreenBadge from "./GreenBadge";
import classNames from "classnames";

interface Service {
  title: string;
  description: string;
  image: string;
}

interface OurServicesSectionProps {
  selectedIndex: number;
  onServiceClick?: (index: number) => void;
}

const services: Service[] = [
  {
    title: "Computational Fluid Dynamics (CFD)",
    description: "Agentic AI assistant guide you through model setup",
    image: "/images/services/turbo-machinery.png",
  },
  {
    title: "2D/3D Modeling & Rendering (CAD)",
    description: "Run physics simulation & AI prediction in the cloud",
    image: "/images/services/3d-modeling.png",
  },
  {
    title: "Finite Element Analysis (FEA)",
    description: "Combine Engineering and Physics AI for instant design.",
    image: "/images/services/structural-analysis.png",
  },
];

export default function OurServicesSection({
  selectedIndex,
  onServiceClick,
}: OurServicesSectionProps) {
  return (
    <section className="w-full flex flex-col items-center gap-6 relative">
      <div className="w-full max-w-desktop mx-auto flex flex-col gap-6 items-center">
        {/* Badge */}
        <GreenBadge icon="/images/zap-icon.svg" text="Our Services" />

        {/* Title */}
        <h2 className="text-[1.875rem] mb-7 w-[60%] sm:w-full leading-[1.2em] text-text-gray font-semibold font-poppins text-center">
          Run entire engineering{" "}
          <span className="text-primary-blue">AI & Simulation workflows</span>{" "}
          in your browser
        </h2>

        {/* Services Grid */}
        <div className="w-full flex flex-row gap-32 sm:gap-4 items-stretch">
          {services.map((service, index) => {
            const isSelected = index === selectedIndex;
            const titleColor = isSelected
              ? "text-footer-heading"
              : "text-footer-border";
            const descriptionColor = isSelected
              ? "text-footer-text"
              : "text-footer-border";
            const imageOpacity = isSelected ? "opacity-100" : "opacity-60";

            return (
              <div
                key={index}
                onClick={() => onServiceClick?.(index)}
                className={`flex-1 flex flex-col items-center bg-white cursor-pointer transition-opacity gap-6 sm:grid sm:items-start sm:grid-rows-[1.1fr_1fr]  ${
                  !isSelected ? "hover:opacity-80" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`w-full h-[13.75rem] sm:h-auto relative transition-opacity flex sm:w-full justify-center ${imageOpacity}`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className={classNames(
                      "object-contain sm:w-[6.75rem]  h-auto",
                      {
                        grayscale: !isSelected,
                      }
                    )}
                    loading="lazy"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col items-center gap-[0.375rem] w-full">
                  {/* Title with border */}
                  <div className="w-full y flex flex-row justify-center items-center sm:py-0 gap-4 py-4 sm:border-none border-b border-[rgba(138,138,138,0.6)]">
                    <h3
                      className={classNames(
                        `text-2xl leading-[1.5em] font-semibold sm:font-obviously font-poppins text-center ${titleColor} transition-colors`,
                        { "text-disable": !isSelected }
                      )}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="w-full flex flex-row justify-center items-center gap-[0.625rem] py-4 sm:hidden">
                    <p
                      className={classNames(
                        `text-base leading-[1.5em] font-normal font-poppins text-center ${descriptionColor} transition-colors`,
                        { "text-disable": !isSelected }
                      )}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
