import { allCoreValues } from "@/app/helpers/data";
import CoreValueItem from "@/app/components/CoreValueItem";

interface OurCoreValueSectionProps {}

const OurCoreValueSection: React.FC<OurCoreValueSectionProps> = () => {
  return (
    <section className="w-full flex flex-col items-center gap-6 ">
      <div className="w-full max-w-desktop relative mx-auto flex flex-col gap-6">
        <img
          src="/images/about/core-values/path.png"
          alt="Core Values Background"
          className="absolute top-0 left-0 -translate-y-1/2"
        ></img>
        {/* Title */}
        <h2 className=" text-secondary-foreground font-semibold font-poppins text-center">
          Our <span className="text-primary-blue">Core Values</span>
        </h2>

        {/* Core Values Grid */}
        <div className="flex flex-col gap-6">
          {/* First Row */}
          <div className="flex flex-row items-stretch gap-6 px-3">
            {allCoreValues.slice(0, 3).map((value, index) => (
              <CoreValueItem key={index} data={value} />
            ))}
          </div>

          {/* Second Row */}
          <div className="flex flex-row items-stretch gap-6 px-3">
            {allCoreValues.slice(3, 6).map((value, index) => (
              <CoreValueItem key={index + 3} data={value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCoreValueSection;
