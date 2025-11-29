"use client";

import { useState, useRef, useEffect } from "react";
import { allIcons } from "@/app/helpers/icons";
import { IFAQ } from "@/app/helpers/data";

interface FaqProps {
  faqs: IFAQ[];
  className?: string;
}

export default function Faq({ faqs, className = "" }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Update refs array when FAQs change
  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, faqs.length);
  }, [faqs.length]);

  return (
    <div className={`w-full flex flex-col gap-6 ${className}`}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="w-full bg-white rounded-[1.25rem] overflow-hidden transition-all duration-300"
          >
            {/* Question Header */}
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex  flex-row items-center justify-between gap-4 px-7 py-7 bg-white transition-colors cursor-pointer"
            >
              <h3 className="text-[1.25rem] text-footer-text font-semibold font-poppins text-left flex-1">
                {faq.question}
              </h3>
              <div
                className={`w-6 h-6 flex items-center justify-center text-primary-blue border-primary-blue border rounded-lg h-8 w-8 transition-transform duration-300 shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                {allIcons.chevronDown(16, 16)}
              </div>
            </button>

            {/* Answer Content */}
            <div
              ref={(el) => {
                if (el) {
                  contentRefs.current[index] = el;
                }
              }}
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight: isOpen
                  ? `${contentRefs.current[index]?.scrollHeight || 1000}px`
                  : "0px",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="px-[1.875rem] pb-[1.875rem]">
                <div className="pt-0">
                  <p className="text-[1.125rem] leading-[1.667em] text-footer-text font-normal font-poppins">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
