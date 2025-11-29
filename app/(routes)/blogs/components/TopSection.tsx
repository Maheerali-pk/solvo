import Image from "next/image";
import { allIcons } from "@/app/helpers/icons";
import GreenBadge from "@/app/components/GreenBadge";
import PageHeading from "@/app/components/PageHeading";

const TopSection = () => {
  return (
    <div className="w-full relative flex flex-col items-center gap-0 gap-section-spacing">
      {/* Section 1: What is Solvo Engineering */}

      <div className="w-full max-w-desktop mx-auto flex flex-col items-center gap-6 sm:px-side-space relative">
        <img
          src="/images/about/hero-dots2.png"
          className="absolute top-0 left-0 -translate-y-[3rem] sm:h-[10rem] h-[15rem] "
          alt="Background Pattern"
        ></img>

        <PageHeading
          className="w-[calc(100%-5rem)] sm:w-full"
          title={
            <>
              What is{" "}
              <span className="text-primary-blue">Solvo Engineering</span>
            </>
          }
          description={
            <>
              Solvo Engineering is CAE consultant firm specializing in FA, CFD
              simulations and CAD modeling. We pride ourselves on delivering
              exceptional lifecycle solutions customization to meet the precise
              needs of our clients.
            </>
          }
        ></PageHeading>
      </div>
    </div>
  );
};

export default TopSection;
