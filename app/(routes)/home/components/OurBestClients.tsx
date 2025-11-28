"use client";

import GreenBadge from "@/app/components/GreenBadge";
import Image from "next/image";

const clientLogos = [
  "/images/our-best-clients/logo1.png",
  "/images/our-best-clients/logo2.png",
  "/images/our-best-clients/logo3.png",
  "/images/our-best-clients/logo4.png",
  "/images/our-best-clients/logo5.png",
];

export default function OurBestClients() {
  return (
    <section className="w-full flex flex-col items-center gap-6 py-section-spacing relative">
      {/* Gradient Border Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#fafafa] via-[#8a8a8a] to-[#fafafa]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#fafafa] via-[#8a8a8a] to-[#fafafa]"></div>

      <div className="w-full max-w-desktop mx-auto flex flex-col items-center gap-6">
        {/* Badge */}
        <GreenBadge icon="/images/zap-icon.svg" text="Our Best Clients" />

        {/* Content */}
        <div className="flex flex-col items-center gap-[1.875rem] w-full">
          {/* Description */}
          <h2 className="text-[1.875rem] leading-[1.2em] text-text-gray font-semibold font-poppins text-center">
            Trusted by{" "}
            <span className="text-primary-blue">
              3,000+ globally companies.
            </span>
          </h2>

          {/* Client Logos - Infinite Scroll */}
          <div className="w-full max-w-[68.5rem] h-12 overflow-hidden relative">
            <div className="flex animate-scroll-infinite items-center gap-[4.375rem]">
              {/* First set of logos */}
              <div className="flex-shrink-0 flex items-center gap-[4.375rem]">
                {clientLogos.map((logo, index) => (
                  <div
                    key={`set1-${index}`}
                    className="flex-shrink-0 h-12 flex items-center"
                  >
                    <Image
                      src={logo}
                      alt={`Client Logo ${index + 1}`}
                      width={340}
                      height={78}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0 flex items-center gap-[4.375rem]">
                {clientLogos.map((logo, index) => (
                  <div
                    key={`set2-${index}`}
                    className="flex-shrink-0 h-12 flex items-center"
                  >
                    <Image
                      src={logo}
                      alt={`Client Logo ${index + 1}`}
                      width={340}
                      height={78}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
              {/* Third set for smoother transition */}
              <div className="flex-shrink-0 flex items-center gap-[4.375rem]">
                {clientLogos.map((logo, index) => (
                  <div
                    key={`set3-${index}`}
                    className="flex-shrink-0 h-12 flex items-center"
                  >
                    <Image
                      src={logo}
                      alt={`Client Logo ${index + 1}`}
                      width={340}
                      height={78}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
