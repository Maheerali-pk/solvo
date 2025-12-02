import { allIcons } from "@/app/helpers/icons";
import Link from "next/link";

export default function TopSection() {
  return (
    <div className="w-full flex flex-col items-center gap-[1.625rem] max-w-desktop mx-auto sm:px-side-space">
      {/* Title */}
      <h1 className="text-[3rem] leading-[1.104em] text-footer-heading font-[570] font-obviously text-center">
        Join Our Team
      </h1>

      {/* Subtitle */}
      <p className="text-lg leading-[1.667em] text-footer-text font-normal font-poppins text-center max-w-[47.75rem]">
        Unleash your genius and maximize your potential
      </p>

      {/* Apply Now Button */}
      <Link href="#openings" className="btn btn-primary">
        <span className="text-sm leading-[1.714em] text-white font-normal font-poppins">
          Apply Now
        </span>
        <div className="w-5 h-5 text-white">
          {allIcons.chevronRight(20, 20)}
        </div>
      </Link>
    </div>
  );
}
