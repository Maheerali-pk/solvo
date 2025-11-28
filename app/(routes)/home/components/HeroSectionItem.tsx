import Image from "next/image";
import { IHeroSectionItem } from "@/app/helpers/data";
import { allIcons } from "@/app/helpers/icons";
import Slider from "@/app/components/Slider";

interface HeroSectionItemProps {
  data: IHeroSectionItem;
  currentIndex: number;
  totalItems: number;
  onPrevious: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}

const HeroSectionItem: React.FC<HeroSectionItemProps> = ({
  data,
  currentIndex,
  totalItems,
  onPrevious,
  onNext,
  onDotClick,
}) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="grid grid-cols-[1fr_1fr] sm:grid-cols-1 items-stretch gap-11 w-full">
        {/* Left Content */}
        <div className="flex flex-col gap-[3.375rem] sm:gap-6 flex-1">
          {/* Badge and Title */}
          <div className="flex flex-col gap-4">
            {/* Badge */}
            <div className="flex flex-row items-center justify-center gap-2 bg-badge-bg px-[0.875rem] w-fit py-1 rounded-full">
              <Image
                src={data.badgeIcon}
                alt={data.badgeText}
                width={18}
                height={18}
              />
              <span className="text-sm leading-[1.714em] text-badge-text font-normal font-poppins text-center">
                {data.badgeText}
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-[3rem] leading-[1.104em] text-footer-heading font-semibold"
              style={{ fontFamily: "Obviously, sans-serif" }}
            >
              {data.title.split("-")[0]}
              {"-"}
              <span className="text-primary-blue">
                {data.title.split("-")[1]}
              </span>
            </h1>
          </div>

          <div className="hidden sm:flex flex-col gap-2">
            <div className="relative flex-1 rounded-[1.25rem] border border-primary-blue overflow-hidden hidden sm:block  p-[0.625rem]">
              <div className="relative w-full h-full aspect-[4/3] max-w-[250px] mx-auto">
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  className="object-contain rounded-[1.25rem]"
                  loading="lazy"
                />
              </div>
            </div>
            <Slider
              currentIndex={currentIndex}
              totalItems={totalItems}
              onPrevious={onPrevious}
              onNext={onNext}
              onDotClick={onDotClick}
              mode="mobile"
            ></Slider>
          </div>

          {/* Features List */}
          <div className="flex flex-col gap-6">
            {/* First Row of Features */}
            <div className="grid grid-cols-2 gap-6 sm:gap-3">
              {data.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center gap-[0.625rem] flex-1"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    {allIcons.checkCircle(24, 24)}
                  </div>
                  <span className="text-base leading-[2.25em] text-footer-text font-semibold font-poppins whitespace-nowrap">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Second Row of Features */}
          </div>

          {/* Buttons */}
          <div className="flex flex-row items-center gap-[1.375rem] sm:gap-4 sm:w-full">
            {/* Place Your Order Button */}
            <a
              href={data.placeOrderLink}
              className="flex flex-row items-center justify-center gap-2 bg-primary-blue rounded-xl px-4 py-4 w-fit h-10 hover:opacity-90 sm:w-full transition-opacity"
            >
              <span className="text-sm leading-[1.714em] text-white font-normal font-poppins">
                Place Your Order
              </span>
              <div className="w-6 h-6 text-white">
                {allIcons.chevronRight(24, 24)}
              </div>
            </a>

            {/* Our Services Button */}
            <a
              href={data.ourServicesLink}
              className="flex flex-row items-center justify-center gap-2 bg-white border border-primary-blue rounded-xl px-4 py-4 w-[10.75rem] sm:w-full h-10 hover:opacity-90 transition-opacity"
            >
              <span className="text-sm leading-[1.714em] text-primary-blue font-normal font-poppins">
                Our Services
              </span>
              <div className="w-6 h-6 text-primary-blue">
                {allIcons.chevronRight(24, 24)}
              </div>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex-1 rounded-[1.25rem] border border-primary-blue overflow-hidden sm:hidden  p-[0.625rem]">
          <div className="relative w-full h-full aspect-[4/3]">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-contain rounded-[1.25rem]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionItem;
