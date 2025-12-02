"use client";

import GreenBadge from "@/app/components/GreenBadge";
import Image from "next/image";
import classNames from "classnames";
import Marquee from "react-fast-marquee";

const clientLogos = [
  "/images/our-best-clients/logo1.webp",
  "/images/our-best-clients/logo2.webp",
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
          <h2 className="text-[1.875rem]  text-text-gray font-semibold font-poppins text-center">
            Trusted by{" "}
            <span className="text-primary-blue">
              3,000+ globally companies.
            </span>
          </h2>

          {/* Client Logos - Continuous Linear Scroll */}
          <div className="w-full max-w-[68.5rem] h-12 overflow-hidden relative">
            <Marquee
              speed={90}
              gradient={false}
              pauseOnHover={false}
              className="flex items-center"
            >
              {/* Duplicate logos to create seamless loop */}
              {[...clientLogos, ...clientLogos].map((logo, index) => {
                const originalIndex = index % clientLogos.length;
                const isLogo2Or4 =
                  originalIndex === 0 ||
                  originalIndex === 1 ||
                  originalIndex === 2;
                return (
                  <div
                    key={`logo-${index}`}
                    className={classNames(
                      "shrink-0 flex items-center mx-[2.1875rem]",
                      isLogo2Or4 ? "h-8" : "h-12"
                    )}
                  >
                    <Image
                      src={logo}
                      alt={`Client Logo ${originalIndex + 1}`}
                      width={340}
                      height={78}
                      className={classNames("w-auto object-contain h-8 ", {
                        "!h-7.5": logo === clientLogos[1],

                        "!h-10": logo === clientLogos[0],
                        "!h-9": logo === clientLogos[2],
                        "!h-12": logo === clientLogos[3],
                      })}
                    />
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
