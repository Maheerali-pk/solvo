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
      <button className="btn btn-primary">
        <span className="text-sm leading-[1.714em] text-white font-normal font-poppins">
          Lets Connect
        </span>
        <div className="w-6 h-6 text-white">
          {allIcons.chevronRight(24, 24)}
        </div>
      </button>

      <section className="w-full sm:px-side-space overflow-hidden">
        <div className="w-full max-w-desktop mx-auto max-w-desktop">
          <div className="relative   sm:w-full w-[80%] mx-auto h-auto  ">
            <img
              src="/images/about/hero-cloud.png"
              className="absolute top-0 left-0 -translate-y-[0rem] h-[60%]"
              alt="Background Pattern"
            ></img>

            <img
              src="/images/about/hero-dots.png"
              className="absolute top-0 right-0 -translate-x-[0rem] h-[60%]"
              alt="Background Pattern"
            ></img>
            <div className="relative z-10">
              <img
                src="/images/about/bottom-section.png"
                alt="About Section"
                className="object-contain w-full h-full z-10 sm:object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Building Practical Innovation */}
      <section className="w-full flex flex-col items-center justify-center gap-[3.75rem] sm:px-side-space ">
        <div className="w-full max-w-desktop mx-auto flex flex-col justify-center gap-3 sm:w-full">
          <GreenBadge
            icon="/images/zap-icon.svg"
            text="Who we are"
          ></GreenBadge>
          <div className="grid grid-cols-2  sm:gap-section-spacing gap-[6.25rem] h-full sm:grid-cols-1">
            {/* Left Content */}
            <div className="flex flex-col justify-center gap-6 flex-1">
              {/* Badge and Title */}
              <div className="flex flex-col gap-3">
                {/* Badge */}

                {/* Title */}
                <h2 className="text-[1.875rem] leading-[1.2em] text-footer-heading font-semibold font-poppins">
                  Building Practical Innovation
                </h2>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-4">
                <p className="text-lg leading-[1.667em] text-footer-text font-normal font-poppins">
                  We are a small team of builders who enjoy turning ideas into
                  useful results. What began as a few curious engineers has
                  grown into a group that helps companies design launch and
                  improve products. We listen first plan clearly and focus on
                  work that is practical reliable and easy to maintain.
                </p>
                <p className="text-lg leading-[1.667em] text-footer-text font-normal font-poppins">
                  Our culture values clear communication ownership and steady
                  improvement. We treat every project as a partnership and keep
                  feedback simple and honest. This is placeholder copy sized for
                  your layout while giving a short friendly overview of our
                  approach and values.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-full w-full">
              <img
                src="/images/about/building-innovation.png"
                alt="Building Practical Innovation"
                className="object-contain border border-primary-blue rounded-2xl p-4 w-full h-auto sm:h-[20rem] "
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Bottom Image Section */}
    </div>
  );
};

export default TopSection;
