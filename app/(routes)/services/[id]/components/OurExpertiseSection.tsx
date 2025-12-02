"use client";

import Image from "next/image";
import { IServiceItem } from "@/app/helpers/data";

interface OurExpertiseSectionProps {
  serviceItem: IServiceItem;
}

export default function OurExpertiseSection({
  serviceItem,
}: OurExpertiseSectionProps) {
  // Determine expertise title based on service ID
  const getExpertiseTitle = () => {
    switch (serviceItem.id) {
      case "fea-analysis":
        return "Our Expertise is Finite Element Analysis (FEA)";
      case "cfd-analysis":
        return "Our Expertise is Computational Fluid Dynamics (CFD)";
      case "cad-analysis":
        return "Our Expertise is 3D CAD Modeling (CAD)";
      default:
        return "Our Expertise";
    }
  };

  // Determine expertise description based on service ID
  const getExpertiseDescription = () => {
    switch (serviceItem.id) {
      case "fea-analysis":
        return "We've completed hundreds of FEA projects across industries. Below are some of the main types of analysis we deliver.";
      case "cfd-analysis":
        return "We run CFD on a wide range of systems and conditions. Below are some of the main types of analysis we provide";
      case "cad-analysis":
        return "We support a wide range of CAD needs, from concept modeling to production-ready drawings. Below are some of our key services";
      default:
        return "";
    }
  };

  return (
    <section className="w-full  bg-[#88D8E833]  sm:px-side-space py-section-spacing">
      <div className="w-full max-w-desktop mx-auto flex flex-col gap-6">
        {/* Title and Description */}
        <div className="flex flex-col items-center gap-4 ">
          <h2 className="text-[1.875rem]  text-footer-heading font-semibold font-poppins text-center w-full">
            {getExpertiseTitle()}
          </h2>
          <p className="text-base  text-footer-text font-normal font-poppins text-center w-full">
            {getExpertiseDescription()}
          </p>
        </div>

        {/* Expertise Items Grid */}
        <div className="flex flex-col gap-6">
          {/* Group items into rows of 4 */}
          {Array.from({
            length: Math.ceil(serviceItem.expertiseItems.length / 4),
          }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-4 gap-6 sm:grid-cols-2 sm:gap-4"
            >
              {serviceItem.expertiseItems
                .slice(rowIndex * 4, rowIndex * 4 + 4)
                .map((item, itemIndex) => (
                  <div
                    key={rowIndex * 4 + itemIndex}
                    className="flex flex-col items-center justify-center gap-[1.125rem] p-8 bg-white rounded-[1.25rem] shadow-[0px_0px_31.1px_0px_rgba(0,0,0,0.08)] sm:p-4"
                  >
                    <div className="relative w-[2.75rem] h-[2.75rem] shrink-0 sm:w-[3rem] sm:h-[3rem]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-base  text-footer-text font-semibold font-poppins text-center">
                      {item.title}
                    </h3>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
