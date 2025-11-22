"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IHomePageServiceItem } from "../helpers/data";

import { allIcons } from "../helpers/icons";

interface ServicesContentProps {
  services: IHomePageServiceItem[];
  selectedServiceIndex?: number;
  onServiceChange?: (index: number) => void;
}

export default function ServicesContent({
  services,
  selectedServiceIndex = 0,
  onServiceChange,
}: ServicesContentProps) {
  const [internalSelectedSubItemIndex, setInternalSelectedSubItemIndex] =
    useState(0);

  const currentService = services[selectedServiceIndex];
  const subItems = currentService?.subItems || [];
  const currentSubItem =
    subItems[internalSelectedSubItemIndex] || subItems[0] || null;

  // Reset subItem index when service changes
  useEffect(() => {
    setInternalSelectedSubItemIndex(0);
  }, [selectedServiceIndex]);

  const handleSubItemClick = (index: number) => {
    setInternalSelectedSubItemIndex(index);
  };

  if (!currentService || subItems.length === 0) {
    return null;
  }

  return (
    <div className="w-full grid grid-cols-[220px_auto] items-center gap-[2.1875rem]">
      {/* Content Area - Left */}
      <div className="flex flex-col gap-4 w-[220px]">
        {subItems.map((subItem, index) => {
          const isSelected = index === internalSelectedSubItemIndex;

          return (
            <button
              key={index}
              onClick={() => handleSubItemClick(index)}
              className={`flex flex-row items-center  w-full cursor-pointer gap-[0.625rem] px-3 py-2 rounded-[0.625rem] border border-[#BDBCC7] transition-all ${
                isSelected
                  ? "bg-primary-blue text-white"
                  : "bg-white text-footer-border hover:bg-gray-50"
              }`}
            >
              {/* Icon */}
              {subItem.tabIcon && !isSelected && (
                <img
                  src={subItem.tabIcon}
                  alt={subItem.tabText}
                  className=" object-cover"
                />
              )}
              {subItem.tabIconSelected && isSelected && (
                <img
                  src={subItem.tabIconSelected}
                  alt={subItem.tabText}
                  className="object-cover"
                />
              )}

              {/* Tab Text */}
              <span className="text-sm leading-[2.25em] font-semibold font-poppins text-center w-full">
                {subItem.tabText}
              </span>
            </button>
          );
        })}
      </div>
      <div className="flex-1 flex flex-col border border-[#BDBCC7] rounded-xl p-8 gap-[1.125rem] h-full">
        <div className="flex flex-row items-center gap-[1.125rem]">
          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-between gap-4">
            {/* Title */}
            <h3 className="text-[1.625rem] leading-[1.3846153846153846em] text-footer-heading font-semibold font-poppins">
              {currentSubItem?.contentTitle || currentService.title}
            </h3>

            {/* Description */}
            <p className="text-base leading-6 text-footer-text font-normal font-poppins">
              {currentSubItem?.contentDescription || currentService.description}
            </p>

            {/* Button */}
            {currentSubItem?.contentLink && (
              <a
                href={currentSubItem.contentLink}
                className="flex items-center justify-center gap-2 bg-primary-blue rounded-xl px-4 py-4 w-fit hover:opacity-90 transition-opacity"
              >
                <span className="text-sm leading-[1.714em] text-white font-normal font-poppins">
                  Our More Services
                </span>
                <div className="w-5 h-5 text-white">
                  {allIcons.chevronRight(20, 20)}
                </div>
              </a>
            )}
          </div>

          {/* Image */}
          {currentSubItem?.contentImage && (
            <div className=" relative flex-shrink-0">
              <img
                src={currentSubItem.contentImage}
                alt={currentSubItem.contentTitle}
                className="object-cover rounded-xl"
              />
            </div>
          )}
        </div>
      </div>

      {/* Tabs - Right */}
    </div>
  );
}
