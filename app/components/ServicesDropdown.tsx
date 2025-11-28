"use client";

import Link from "next/link";

interface ServiceItem {
  name: string;
  link: string;
  icon: string;
}

interface ServicesDropdownProps {
  isVisible: boolean;
}

const ServicesDropdown: React.FC<ServicesDropdownProps> = ({ isVisible }) => {
  const services: ServiceItem[] = [
    {
      name: "Computational Fluid Dynamics (CFD)",
      link: "/services/cfd",
      icon: "/images/shared/services-dropdown/img1.png",
    },
    {
      name: "2D/3D Modeling & Rendering (CAD)",
      link: "/services/cad",
      icon: "/images/shared/services-dropdown/img2.png",
    },
    {
      name: "Finite Element Analysis (FEA)",
      link: "/services/fea",
      icon: "/images/shared/services-dropdown/img3.png",
    },
  ];

  return (
    <div
      className={`absolute top-full right-0 mt-2 z-20 w-[24.375rem] bg-[#e6f1f9] border border-[rgba(189,188,199,0.2)] rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
        isVisible
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-2"
      }`}
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      {services.map((service, index) => (
        <Link
          key={index}
          href={service.link}
          className={`flex flex-row items-center gap-[0.625rem] px-5 py-5 hover:bg-[rgba(2,115,189,0.15)] transition-colors ${
            index === 0 ? "rounded-t-lg" : ""
          } ${index === services.length - 1 ? "rounded-b-lg border-b-0" : ""} ${
            index !== services.length - 1
              ? "border-b border-[rgba(189,188,199,0.2)]"
              : ""
          }`}
        >
          {/* Icon */}
          <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
            <img
              src={service.icon}
              alt={service.name}
              className="w-5 h-5 object-contain"
            ></img>
          </div>
          <span className="text-base leading-6 text-primary-blue font-normal font-poppins">
            {service.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default ServicesDropdown;
