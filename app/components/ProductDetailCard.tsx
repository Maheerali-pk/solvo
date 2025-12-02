import Image from "next/image";
import { allIcons } from "../helpers/icons";
import classNames from "classnames";

interface ProductDetailCardProps {
  logo: string;
  title: string;
  description: string;
  caseStudyLink: string;
  image: string;
  className?: string;
  index: number;
}

export default function ProductDetailCard({
  logo,
  title,
  description,
  caseStudyLink,
  image,
  className = "",
  index,
}: ProductDetailCardProps) {
  return (
    <div
      className={`flex border border-primary-blue items-stretch rounded-4xl overflow-hidden p-8 gap-6 sm:gap-3 min-h-full ${className} sm:p-3 sm:flex-col `}
    >
      {/* Header Section with Logo and Title */}
      <div className="flex flex-col sm:justify-start justify-between h-full gap-4 p-6 sm:p-2">
        {/* Logo */}

        <div className="flex flex-col gap-4 sm:gap-2">
          <img
            height={63}
            width={133}
            src={logo}
            alt={title}
            loading="lazy"
            className={classNames(
              "h-[1.5rem] w-auto object-left object-contain",
              { "h-[2rem]": index === 1 }
            )}
          />

          {/* Title */}
          <h3 className="text-xl  text-secondary-foreground  font-semibold font-poppins">
            {title}
          </h3>

          {/* Description */}
          <p className="text-base text-secondary-foreground font-normal font-poppins">
            {description}
          </p>
        </div>

        {/* Case Study Link */}
        <a href={caseStudyLink} className="btn btn-primary w-fit">
          <span className="text-base">View Case Study</span>
          {allIcons.chevronRight(20, 20)}
        </a>
      </div>

      {/* Image Section */}
      <div className="relative min-w-[25rem] w-full h-full sm:min-w-0 sm:h-auto sm:max-w-[25rem] mx-auto ">
        <img
          src={image}
          alt={title}
          className="object-contain w-full h-full sm:h-auto"
          loading="lazy"
        />
      </div>
    </div>
  );
}
