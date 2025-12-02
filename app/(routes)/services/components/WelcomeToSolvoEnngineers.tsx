import Image from "next/image";
import { allIcons } from "@/app/helpers/icons";
import Link from "next/link";

const WelcomeToSolvoEnngineers = () => {
  return (
    <div className="w-full max-w-desktop mx-auto px-side-space">
      <div className="w-full  items-center gap-[8rem] sm:flex-col   sm:gap-6 grid grid-cols-[auto_max-content]">
        {/* Left Content */}

        <div className="flex flex-col gap-6 flex-1">
          {/* Title */}
          <h2 className=" font-semibold font-poppins text-[#1E1E1E] whitespace-pre-line">
            Welcome To SOLVO Engineers: our Partner In Serving Best Engineering
            Solutions
          </h2>

          {/* Description Section */}
          <div className="flex flex-col gap-[1.375rem] sm:grid sm:grid-cols-2">
            <span
              className="text-base  text-[#4A4A4A] font-normal font-poppins"
              style={{ fontSize: "1.125rem" }}
            >
              At SOLVO Engineers, We Commit To Delivering Innovative, Focused
              And Personalized Engineering Services That Would Bring The Best
              Results Eliminating The Challenges Of Modern Industries. With Our
              Expertise And Advanced Technology, We Ensure To Transform Your
              Vision Into Real-Time, Functional, And High-Performance Solutions.
            </span>
            <div className="relative w-[29rem] sm:flex hidden h-full shrink-0 sm:w-full sm:h-auto  border border-primary-blue rounded-[1.25rem] bg-white p-[0.625rem]">
              <img
                src="/images/services/welcome-to-solvo-engineers-image.webp"
                alt="Welcome To SOLVO Engineers"
                className="w-full h-full object-contain "
              />
            </div>
          </div>

          {/* Button */}
          <Link
            href="#"
            className="w-[10.75rem] h-12 bg-primary-blue rounded-xl flex flex-row items-center justify-center gap-2 px-4 py-4 sm:w-full"
          >
            <span className="text-base  text-white font-normal font-poppins text-center">
              View
            </span>
            <div className="w-5 h-5 text-white">
              {allIcons.chevronRight(20, 20)}
            </div>
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative sm:hidden block w-[29rem] h-full shrink-0 sm:w-full sm:h-auto  border border-primary-blue rounded-[1.25rem] bg-white p-[0.625rem]">
          <img
            src="/images/services/welcome-to-solvo-engineers-image.webp"
            alt="Welcome To SOLVO Engineers"
            className="w-full h-full object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeToSolvoEnngineers;
