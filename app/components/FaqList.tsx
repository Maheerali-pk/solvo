"use client";

import { IFAQ } from "@/app/helpers/data";
import Faq from "./Faq";
import { allIcons } from "@/app/helpers/icons";

interface FaqListProps {
  faqs: IFAQ[];
  className?: string;
}

export default function FaqList({ faqs, className = "" }: FaqListProps) {
  return (
    <section
      className={`w-full bg-[rgba(136,216,232,0.2)] py-[3.125rem] sm:px-side-space sm:py-[2rem] ${className}`}
    >
      <div className="w-full max-w-desktop mx-auto sm:px-0 grid grid-cols-2 gap-14 sm:grid-cols-1 sm:gap-6">
        <div className="flex h-full flex-col justify-between">
          <h2 className="text-[1.875rem] leading-[1.2em] text-footer-heading font-semibold font-poppins">
            Frequently Asked <br></br>
            <span className="text-primary-blue">Questions (FAQs)</span>
          </h2>
          <div className="flex flex-col gap-6 bg-white rounded-[1.25rem] p-6">
            {/* Title */}

            <h3 className="text-[1.5rem] leading-[1.5em] text-footer-text font-semibold font-poppins">
              Still have a questions?
            </h3>

            {/* Description */}
            <div className="flex flex-col gap-[1.375rem]">
              <p className="text-[1.125rem] leading-[1.667em] text-footer-text font-normal font-poppins">
                At SOLVO Engineers, We Commit To Delivering Innovative, Focused
                And Personalized
              </p>
            </div>

            {/* Button */}
            <button className="btn btn-primary w-fit">
              <span className="text-sm leading-[1.714em] text-white font-normal font-poppins">
                Send email
              </span>
              <div className="w-5 h-5 text-white">
                {allIcons.chevronRight(20, 20)}
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 max-h-[29.5rem] overflow-y-auto">
          <div className="flex flex-col gap-6">
            <Faq faqs={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
