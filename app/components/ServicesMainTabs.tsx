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
    <section className="w-full flex flex-col items-center gap-6 py-[3.125rem] relative">
      <div className="w-full max-w-desktop mx-auto flex flex-col gap-6 items-center">
        {/* Badge */}
        <GreenBadge icon="/images/zap-icon.svg" text="Our Services" />

        {/* Title */}
        <h2 className="text-[1.875rem] mb-7 w-[60%] leading-[1.2em] text-text-gray font-semibold font-poppins text-center">
          Run entire engineering{" "}
          <span className="text-primary-blue">AI & Simulation workflows</span>{" "}
          in your browser
        </h2>

        {/* Services Grid */}
        <div className="w-full flex flex-row gap-32 items-stretch">
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
                className={`flex-1 flex flex-col items-center gap-[2.625rem] bg-white cursor-pointer transition-opacity ${
                  !isSelected ? "hover:opacity-80" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`w-full h-[13.75rem] relative transition-opacity ${imageOpacity}`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={classNames("object-contain", {
                      grayscale: !isSelected,
                    })}
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col items-center gap-[0.375rem] w-full">
                  {/* Title with border */}
                  <div className="w-full flex flex-row justify-center items-center gap-4 py-4 border-b border-[rgba(138,138,138,0.6)]">
                    <h3
                      className={classNames(
                        `text-2xl leading-[1.5em] font-semibold font-poppins text-center ${titleColor} transition-colors`,
                        { "text-disable": !isSelected }
                      )}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="w-full flex flex-row justify-center items-center gap-[0.625rem] py-4">
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
