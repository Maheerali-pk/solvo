"use client";

import Link from "next/link";

interface AboutItem {
  name: string;
  link: string;
}

interface AboutDropdownProps {
  isVisible: boolean;
}

const AboutDropdown: React.FC<AboutDropdownProps> = ({ isVisible }) => {
  const aboutItems: AboutItem[] = [
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Our Methodology",
      link: "/methodology",
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
      {aboutItems.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className={`flex flex-row items-center gap-[0.625rem] px-5 py-5 hover:bg-[rgba(2,115,189,0.15)] transition-colors ${
            index === 0 ? "rounded-t-lg" : ""
          } ${
            index === aboutItems.length - 1 ? "rounded-b-lg border-b-0" : ""
          } ${
            index !== aboutItems.length - 1
              ? "border-b border-[rgba(189,188,199,0.2)]"
              : ""
          }`}
        >
          <span className="text-base text-primary-blue font-normal font-poppins">
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default AboutDropdown;
