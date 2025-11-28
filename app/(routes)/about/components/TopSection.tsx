import Image from "next/image";
import { allIcons } from "@/app/helpers/icons";
import GreenBadge from "@/app/components/GreenBadge";

const TopSection = () => {
  return (
    <div className="w-full relative flex flex-col items-center gap-0 gap-section-spacing">
      <img
        className="h-auto max-w-desktop absolute top-0 -translate-y-[5.5rem]"
        src="/images/about/bg-pattern.png"
      ></img>
      {/* Section 1: What is Solvo Engineering */}
      <section className="w-full flex flex-col items-center gap-6">
        <div className="w-full max-w-desktop mx-auto flex flex-col items-center gap-6">
          <h1 className="font-obviously text-text-gray font-bold text-center">
            What is <span className="text-primary-blue">Solvo Engineering</span>
          </h1>
          <h3 className="text-text-gray font-medium font-poppins text-center max-w-[62.375rem] h-[7.25rem]">
            Solvo Engineering is CAE consultant firm specializing in FA, CFD
            simulations and CAD modeling. We pride ourselves on delivering
            exceptional lifecycle solutions customization to meet the precise
            needs of our clients.
          </h3>
          <button className="flex flex-row items-center justify-center gap-2 bg-primary-blue rounded-xl px-4 py-4 w-[10.75rem] h-12 hover:opacity-90 transition-opacity">
            <span className="text-sm leading-[1.714em] text-white font-normal font-poppins">
              Lets Connect
            </span>
            <div className="w-6 h-6 text-white">
              {allIcons.chevronRight(24, 24)}
            </div>
          </button>
        </div>
      </section>
      <section className="w-full">
        <div className="w-full max-w-desktop mx-auto">
          <div className="relative w-full h-[36.0625rem]">
            <Image
              src="/images/about/bottom-section.png"
              alt="About Section"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Building Practical Innovation */}
      <section className="w-full flex flex-col items-center justify-center gap-[3.75rem] ">
        <div className="w-full max-w-desktop mx-auto flex flex-col justify-center gap-3">
          <GreenBadge
            icon="/images/zap-icon.svg"
            text="Who we are"
          ></GreenBadge>
          <div className="grid grid-cols-2  gap-[6.25rem] h-full">
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
            <div className="relative h-full ">
              <Image
                src="/images/about/building-innovation.png"
                alt="Building Practical Innovation"
                fill
                className="object-cover border border-primary-blue rounded-2xl p-4 "
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
