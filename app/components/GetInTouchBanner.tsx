import Image from "next/image";
import { allIcons } from "../helpers/icons";

export default function GetInTouchBanner() {
  return (
    <div className="relative w-80 h-full sm:hidden">
      {/* Overlay Card */}
      <div className="relative w-80 h-full border border-primary-blue rounded-[1.8125rem] flex flex-col gap-[0.625rem] overflow-hidden">
        {/* Title */}
        <div className="relative z-10 p-10.5">
          <h3 className="text-2xl leading-[1.5em] text-text-gray font-semibold font-poppins">
            Get in touch with us
          </h3>

          {/* Checkmark Items */}
          <div className="flex flex-col gap-[0.625rem]  mt-6">
            {/* First Item */}
            <div className="flex flex-row text-primary-blue items-center gap-2.5 w-full">
              <div className="text-primary-blue flex-shrink-0">
                {allIcons.checkCircle(24, 24)}
              </div>
              <span className="text-sm leading-[1.286em] text-footer-text font-medium font-poppins">
                We will respond to you within 24 hours
              </span>
            </div>

            {/* Second Item */}
            <div className="flex flex-row text-primary-blue items-center gap-2.5 w-full">
              <div className="text-primary-blue flex-shrink-0">
                {allIcons.checkCircle(24, 24)}
              </div>
              <span className="text-sm leading-[1.286em] text-footer-text font-medium font-poppins">
                You'll be talking to CAE Engineers account mangers
              </span>
            </div>
          </div>
        </div>
        <Image
          src="/images/get-in-touch-banner-image-828c0c.png"
          alt="Get in touch banner"
          width={320}
          height={300}
          className="object-contain w-full h-[320px]"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(136,216,232,0.2)] to-[rgba(2,115,189,1)] pointer-events-none"></div>
      </div>
    </div>
  );
}
