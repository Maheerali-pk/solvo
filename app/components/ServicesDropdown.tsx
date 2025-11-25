"use client";

import Link from "next/link";

interface ServiceItem {
  name: string;
  link: string;
  icon: React.ReactNode;
}

interface ServicesDropdownProps {
  isVisible: boolean;
}

const ServicesDropdown: React.FC<ServicesDropdownProps> = ({ isVisible }) => {
  const services: ServiceItem[] = [
    {
      name: "Computational Fluid Dynamics (CFD)",
      link: "/services/cfd",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18C5.58 18 2 14.42 2 10Z"
            stroke="#F98502"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 10L10 6L14 10L10 14L6 10Z"
            stroke="#F98502"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "2D/3D Modeling & Rendering (CAD)",
      link: "/services/cad",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="3"
            width="14"
            height="14"
            rx="2"
            stroke="#F98502"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M3 7H17M7 3V17"
            stroke="#F98502"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      name: "Finite Element Analysis (FEA)",
      link: "/services/fea",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2L2 7L10 12L18 7L10 2Z"
            stroke="#F98502"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 13L10 18L18 13M10 12V18"
            stroke="#F98502"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
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
            {service.icon}
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
