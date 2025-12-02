import Image from "next/image";
import { allIcons } from "@/app/helpers/icons";
import Link from "next/link";

const bulletPoints = [
  "Innovative Designs That Solve Real-World Challenges.",
  "Expert Support At Every Step Of The Project.",
  "On-Time Delivery With Uncompromised Quality.",
];

const ClientFocusSolutions = () => {
  return (
    <div className="w-full max-w-desktop mx-auto sm:px-side-space">
      <div className="w-full grid grid-cols-[1.3fr_1fr] sm:grid-cols-1 sm:gap-4 items-center gap-[2.75rem] sm:flex-col sm:gap-6">
        {/* Left Content */}
        <div className="flex flex-col gap-[1.875rem] flex-1">
          {/* Title */}
          <h2 className=" font-semibold font-poppins text-footer-text">
            Client-Focused Solutions
          </h2>

          {/* Content Section */}
          <div className="flex flex-col gap-6">
            {/* Subtitle */}
            <h3 className="text-[1.5rem]  font-semibold font-poppins text-[#363636]">
              Your Vision, Our Expertise
            </h3>

            {/* Description and Bullet Points */}
            <div className="flex flex-col gap-3">
              <span
                className="text-base  text-[#4A4A4A] font-normal font-poppins"
                style={{ fontSize: "1rem" }}
              >
                At Solvo Engineers, We prioritize your unique needs, delivering
                tailor-made solutions that align with your goals, from concepts
                to completion, our client-focused approch ensure:
              </span>

              {/* Bullet Points List */}
              <div className="flex flex-row gap-[1.375rem]">
                <ul className="flex flex-col gap-[0.875rem] pt-[0.625rem]">
                  {bulletPoints.map((point, index) => (
                    <li
                      key={index}
                      className="text-base  text-[#4A4A4A] font-normal font-poppins whitespace-pre-line"
                      style={{ fontSize: "1rem" }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Question Text */}
            <span
              className="text-base  text-primary-blue font-normal font-poppins"
              style={{ fontSize: "1rem" }}
            >
              Ready To Take Your Projects To The Next Level?
            </span>

            {/* Buttons */}
            <div className="flex flex-row gap-4 sm:flex-col sm:w-full">
              <Link href="/about" className="btn btn-primary">
                <span className="text-base  text-white font-normal font-poppins text-center">
                  Learn More
                </span>
                <div className="w-5 h-5 text-white">
                  {allIcons.chevronRight(20, 20)}
                </div>
              </Link>
              <Link href="/projects" className="btn btn-secondary">
                <span className="text-base  text-primary-blue font-normal font-poppins text-center">
                  Our Projects
                </span>
                <div className="w-6 h-6 text-primary-blue">
                  {allIcons.chevronRight(24, 24)}
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative  shrink-0 sm:w-full sm:h-auto sm:aspect-[526/390] sm:hidden">
          <img
            src="/images/services/client-focus-solutions-image.webp"
            alt="Client-Focused Solutions"
            className=" w-[32.875rem] h-[24.375rem]rounded-[1.25rem] "
          />
        </div>
      </div>
    </div>
  );
};

export default ClientFocusSolutions;
