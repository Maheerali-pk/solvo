import CoreValueItem from "@/app/components/CoreValueItem";
import { allCoreValues } from "@/app/helpers/data";
import Image from "next/image";

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex flex-col items-center gap-[1.125rem] p-8 bg-white rounded-[1.25rem] shadow-[0px_0px_31.1px_0px_rgba(0,0,0,0.2)]">
      {/* Icon */}
      <div className="w-11 h-11 relative">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[0.625rem] w-full">
        {/* Title */}
        <h3 className="text-xl  text-footer-heading font-semibold font-poppins text-center">
          {title}
        </h3>

        {/* Description */}
        <p className="text-base  text-footer-text font-normal font-poppins text-center">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function WhyWorkWithUs() {
  const benefits = [
    {
      icon: "/images/careers/innovation-icon.png",
      title: "Innovation",
      description:
        "Work in an environment that fastest creativity and innovation",
    },
    {
      icon: "/images/careers/integrity-icon.png",
      title: "Integrity",
      description: "Clear career progression paths and leaning opportunity",
    },
    {
      icon: "/images/careers/collaboration-icon.png",
      title: "Collabration",
      description:
        "Choose from remote, hybrid, or office-based working options",
    },
  ];

  return (
    <div className="w-full  sm:px-side-space">
      <div className="w-full max-w-desktop mx-auto flex flex-col gap-6 relative pt-5">
        <img
          src="/images/about/core-values/path.webp"
          alt="Core Values Background"
          className="absolute top-5 left-0 -translate-y-1/2 sm:hidden"
        ></img>
        <div className="flex flex-col gap-4">
          <h2 className="text-[1.875rem]  text-footer-heading font-semibold font-poppins text-center">
            Why Work With Us?
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 gid grid-cols-3 sm:grid-cols-2">
          {allCoreValues.slice(0, 3).map((value, index) => (
            <CoreValueItem key={index} data={value} />
          ))}
        </div>
      </div>
    </div>
  );
}
