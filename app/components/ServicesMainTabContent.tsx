"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IHomePageServiceItem } from "../helpers/data";

import { allIcons } from "../helpers/icons";
import classNames from "classnames";
import Link from "next/link";

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
  console.log("currentService", currentService);
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
    <div className="w-full grid grid-cols-[13.75rem_auto] items-center gap-[2.1875rem] sm:grid-cols-1">
      {/* Content Area - Left */}
      <div className="flex flex-col gap-4 w-[13.75rem] sm:w-full sm:flex-row sm:flex-wrap">
        {subItems.map((subItem, index) => {
          const isSelected = index === internalSelectedSubItemIndex;

          return (
            <button
              key={`${selectedServiceIndex}-${index}-${subItem.tabText}`}
              onClick={() => handleSubItemClick(index)}
              className={classNames(
                `flex flex-row items-center w-full cursor-pointer gap-[0.625rem] px-3 py-2 rounded-[0.625rem] border border-[#BDBCC7] transition-all
                sm:border-t-0 sm:border-x-0  sm:text-footer-border !sm:border-b sm:rounded-none sm:px-0 sm:py-1  sm:w-fit 
                `,
                {
                  "bg-primary-blue text-white sm:text-primary-blue sm:border-b-primary-blue sm:bg-transparent":
                    isSelected,
                  "bg-white text-footer-border hover:bg-gray-50 sm:text-footer-border sm:border-b-transparent sm:hover:bg-transparent":
                    !isSelected,
                }
              )}
            >
              {/* Icon */}
              {subItem.tabIcon && !isSelected && (
                <img
                  src={subItem.tabIcon}
                  alt={subItem.tabText}
                  className="object-cotanin sm:hidden"
                  loading="lazy"
                />
              )}
              {subItem.tabIconSelected && isSelected && (
                <img
                  src={subItem.tabIconSelected}
                  alt={subItem.tabText}
                  className="object-contain sm:hidden"
                  loading="lazy"
                />
              )}

              {/* Tab Text */}
              <span className="text-base font-semibold font-poppins text-center w-full sm:font-normal">
                {subItem.tabText}
              </span>
            </button>
          );
        })}
      </div>
      <div className="flex-1 flex flex-col border border-[#BDBCC7] rounded-xl p-8 sm:p-4 gap-[1.125rem] h-full sm:min-h-[20rem]">
        <div className="flex flex-row items-center gap-[1.125rem] h-full">
          {/* Text Content */}
          <div className="flex-1 flex h-full flex-col justify-between gap-4">
            {/* Title */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[1.25rem]  text-footer-heading font-semibold font-poppins">
                {currentSubItem?.contentTitle || currentService.title}
              </h3>

              {/* Description */}
              <p className="text-base text-footer-text font-normal font-poppins">
                {currentSubItem?.contentDescription ||
                  currentService.description}
              </p>
            </div>

            {/* Button */}
            {currentSubItem?.contentLink && (
              <Link href="/services" className="btn btn-primary w-fit">
                <span className="text-base  text-white font-normal font-poppins">
                  Our More Services
                </span>
                <div className="w-5 h-5 text-white">
                  {allIcons.chevronRight(20, 20)}
                </div>
              </Link>
            )}
          </div>

          {/* Image */}
          {currentSubItem?.contentImage && (
            <div
              className={classNames("relative max-w-[40%] w-1/3", {
                "w-2/3":
                  (selectedServiceIndex === 1 &&
                    internalSelectedSubItemIndex === 3) ||
                  (selectedServiceIndex === 2 &&
                    internalSelectedSubItemIndex === 3),
              })}
            >
              <img
                src={currentSubItem.contentImage}
                alt={currentSubItem.contentTitle}
                className="object-contain rounded-xl w-full max-h-[15rem] "
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>

      {/* Tabs - Right */}
    </div>
  );
}
