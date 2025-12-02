"use client";

import GreenBadge from "@/app/components/GreenBadge";
import Image from "next/image";
import classNames from "classnames";

const clientLogos = [
  "/images/our-best-clients/logo1.webp",
  "/images/our-best-clients/logo2.webp",
  "/images/our-best-clients/logo3.webp",
  "/images/our-best-clients/logo4.webp",
  "/images/our-best-clients/logo5.webp",
];

export default function OurBestClients() {
  return (
    <section className="w-full flex flex-col items-center gap-6 py-section-spacing relative sm:px-side-space">
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

          {/* Client Logos - Continuous Linear Scroll */}
          <div className="w-full max-w-[68.5rem] h-12 overflow-hidden relative">
            <div className="flex items-center gap-[4.375rem] animate-scroll-infinite-smooth">
              {/* First set */}
              {clientLogos.map((logo, index) => {
                const isLogo2Or4 =
                  index === 0 || index === 1 || index === 2 || index === 3;
                return (
                  <div
                    key={`set1-${index}`}
                    className={classNames(
                      "shrink-0 flex items-center",
                      isLogo2Or4 ? "h-8" : "h-12"
                    )}
                  >
                    <Image
                      src={logo}
                      alt={`Client Logo ${index + 1}`}
                      width={340}
                      height={78}
                      className={classNames(
                        "w-auto object-contain",
                        isLogo2Or4 ? "h-8" : "h-12"
                      )}
                    />
                  </div>
                );
              })}
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((logo, index) => {
                const isLogo2Or4 = index === 1 || index === 3;
                return (
                  <div
                    key={`set2-${index}`}
                    className={classNames(
                      "shrink-0 flex items-center",
                      isLogo2Or4 ? "h-8" : "h-12"
                    )}
                  >
                    <Image
                      src={logo}
                      alt={`Client Logo ${index + 1}`}
                      width={340}
                      height={78}
                      className={classNames(
                        "w-auto object-contain",
                        isLogo2Or4 ? "h-8" : "h-12"
                      )}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
