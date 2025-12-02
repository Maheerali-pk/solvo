import Image from "next/image";
import { ICustomerSimulationItem } from "../helpers/data";
import { allIcons } from "../helpers/icons";
import GreenBadge from "./GreenBadge";

interface CustomerSimulationItemProps {
  data: ICustomerSimulationItem;
}

const CustomerSimulationItem: React.FC<CustomerSimulationItemProps> = ({
  data,
}) => {
  return (
    <div className="relative flex flex-col gap-[0.625rem] w-full">
      {/* Main Card */}
      <div className="w-full bg-transparent rounded-[0px_0px_1.875rem_1.875rem] overflow-hidden">
        {/* Content */}
        <div className="flex flex-col gap-6 ">
          {/* Badge and Title */}

          {/* Phases */}
          <div className="relative flex flex-row items-stretch gap-[14.875rem]">
            {/* Dashed Curved Path */}
            <svg
              className="absolute top-1/2 left-0 right-0 w-full h-[300px] -translate-y-1/2 pointer-events-none z-0"
              viewBox="0 0 1000 300"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 150 C 83.33 80, 166.67 75, 250 150 C 333.33 225, 416.67 230, 500 150 C 583.33 70, 666.67 85, 750 150 C 833.33 215, 916.67 220, 1000 150"
                stroke="#000000"
                strokeWidth="2"
                fill="none"
                strokeDasharray="16 16"
                strokeLinecap="round"
              />
            </svg>
            {/* Left Phase */}
            <div className="flex flex-col gap-9 flex-1 relative z-10">
              <div className="flex flex-col gap-3 justify-start">
                {/* Phase Title */}
                <h3 className="text-xl  text-footer-heading font-semibold font-poppins ">
                  {data.leftPhase.phaseTitle}
                </h3>

                {/* Sub Items */}
                <div className="flex flex-row items-center gap-6 justify-between w-full">
                  {data.leftPhase.subItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center gap-[0.625rem] "
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        {allIcons.checkCircle(24, 24)}
                      </div>
                      <span className="text-base  text-text-gray font-normal font-poppins">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Image */}
              <div className="relative w-full h-[15.875rem]">
                <img
                  src={data.leftPhase.stepImage}
                  alt={`Step ${data.leftPhase.stepNumber}`}
                  className="object-contain h-full w-auto"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Phase */}
            <div className="flex flex-col gap-9 flex-1 relative z-10">
              <div className="flex flex-col gap-3">
                {/* Phase Title */}
                <h3 className="text-xl  text-footer-heading font-semibold font-poppins ">
                  {data.rightPhase.phaseTitle}
                </h3>

                {/* Sub Items */}
                <div className="flex flex-row items-center gap-6 w-full justify-between">
                  {data.rightPhase.subItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center gap-[0.625rem] "
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        {allIcons.checkCircle(24, 24)}
                      </div>
                      <span className="text-base  text-text-gray font-normal font-poppins">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Image */}
              <div className="relative w-full h-[16.401875rem]">
                <Image
                  src={data.rightPhase.stepImage}
                  alt={`Step ${data.rightPhase.stepNumber}`}
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSimulationItem;
