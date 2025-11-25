import Image from "next/image";
import { allIndustries } from "../helpers/data";

const IndustriesWeServe = () => {
  return (
    <section className="w-full flex flex-col items-center gap-6 py-[3.125rem]">
      <div className="w-full max-w-desktop mx-auto flex flex-col gap-6">
        {/* Title */}
        <h2 className="text-3xl leading-[1.2em] text-footer-heading font-semibold font-poppins text-center">
          Industries <span className="text-primary-blue">We Serve</span>
        </h2>

        {/* Industries Grid */}
        {/* First Row */}
        <div className="grid grid-cols-4 gap-6">
          {allIndustries.map((industry, index) => (
            <div
              key={index}
              className="grid grid-rows-2 justify-center items-center gap-[1.125rem] h-64 w-64 bg-white rounded-[1.25rem] shadow-[0px_0px_31.1px_0px_rgba(0,0,0,0.14)] flex-1"
            >
              <div className="flex h-full w-full items-end justify-center">
                <div className="w-[2.75rem] h-[2.75rem] relative flex items-end justify-center ">
                  <Image
                    src={industry.icon}
                    alt={industry.name}
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <span className="text-xl leading-[1.5em] text-footer-heading font-semibold font-poppins text-center flex items-start h-full px-10 ">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
