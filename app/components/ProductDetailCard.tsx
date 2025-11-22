import Image from "next/image";
import { allIcons } from "../helpers/icons";

interface ProductDetailCardProps {
  logo: string;
  title: string;
  description: string;
  caseStudyLink: string;
  image: string;
  className?: string;
}

export default function ProductDetailCard({
  logo,
  title,
  description,
  caseStudyLink,
  image,
  className = "",
}: ProductDetailCardProps) {
  return (
    <div
      className={`flex  border border-primary-blue items-center rounded-4xl overflow-hidden p-8 gap-6  ${className}`}
    >
      {/* Header Section with Logo and Title */}
      <div className="flex flex-col gap-4 p-6">
        {/* Logo */}
        <Image height={63} width={133} src={logo} alt={title} />

        {/* Title */}
        <h3 className="text-xl leading-[1.5em] text-secondary-foreground  font-semibold font-poppins">
          {title}
        </h3>

        {/* Description */}
        <p className="text-base leading-6 text-secondary-foreground font-normal font-poppins">
          {description}
        </p>

        {/* Case Study Link */}
        <a
          href={caseStudyLink}
          className="flex px-4 py-3 rounded-xl items-center bg-primary-blue gap-2 text-white font-medium font-poppins text-sm leading-[1.714em] hover:underline w-fit"
        >
          <span>View Case Study</span>
          {allIcons.chevronRight(20, 20)}
        </a>
      </div>

      {/* Image Section */}
      <img src={image} alt={title} className="w-[400px] h-auto" />
    </div>
  );
}
