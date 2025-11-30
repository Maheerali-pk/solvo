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
              Our <span className="text-primary-blue">Blogs</span>
            </>
          }
          description={
            <>
              Explore information and engaging blogs articles in a wide range of
              topics, written by <br></br> experts and curated for your reading
              pleasure.
            </>
          }
        ></PageHeading>
      </div>
    </div>
  );
};

export default TopSection;
