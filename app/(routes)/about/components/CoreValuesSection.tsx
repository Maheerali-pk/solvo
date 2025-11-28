import { allCoreValues } from "@/app/helpers/data";
import CoreValueItem from "@/app/components/CoreValueItem";

interface OurCoreValueSectionProps {}

const OurCoreValueSection: React.FC<OurCoreValueSectionProps> = () => {
  return (
    <section className="w-full flex flex-col items-center gap-6 sm:px-side-space">
      <div className="w-full max-w-desktop relative mx-auto flex flex-col gap-6">
        <img
          src="/images/about/core-values/path.png"
          alt="Core Values Background"
          className="absolute top-0 left-0 -translate-y-1/2 sm:hidden"
        ></img>
        {/* Title */}
        <h2 className=" text-secondary-foreground font-semibold font-poppins text-center">
          Our <span className="text-primary-blue">Core Values</span>
        </h2>

        {/* Core Values Grid */}
        <div className="grid gap-6 gid grid-cols-3 sm:grid-cols-2">
          {allCoreValues.map((value, index) => (
            <CoreValueItem key={index} data={value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCoreValueSection;
