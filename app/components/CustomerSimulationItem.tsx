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
      <img
        src="/images/customer-simulation/circle.webp"
        alt="Background"
        className="absolute top-0 w-40 h-48 right-0 -translate-y-0"
        loading="lazy"
      />

      {/* Main Card */}
      <div className="w-full bg-white rounded-[0px_0px_1.875rem_1.875rem] overflow-hidden">
        {/* Content */}
        <div className="flex flex-col gap-6 ">
          {/* Badge and Title */}
          <div className="flex flex-col gap-3 w-[28.5625rem]">
            {/* Badge */}
            <GreenBadge
              icon={data.badgeIcon}
              text={data.badgeText}
            ></GreenBadge>

            {/* Title */}
            <h2 className="text-[1.875rem]   text-text-gray font-semibold font-poppins">
              {data.title}
            </h2>
          </div>

          {/* Phases */}
          <div className="flex flex-row items-stretch gap-[14.875rem]">
            {/* Left Phase */}
            <div className="flex flex-col gap-9 flex-1">
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
                  src="/images/customer-simulation/line.webp"
                  alt="Background"
                  className="absolute h-44 min-w-[67rem] top-4"
                  loading="lazy"
                />
                <img
                  src={"/images/customer-simulation/dots.webp"}
                  alt="Step 1"
                  className="object-contain ml-[7.25rem] bottom-0 absolute"
                  loading="lazy"
                />
                <img
                  src={"/images/customer-simulation/cloud.webp"}
                  alt="Step 1"
                  className="object-contain ml-[2.5rem] w-96 bottom-16 absolute"
                  loading="lazy"
                />
                <img
                  src={data.leftPhase.stepImage}
                  alt={`Step ${data.leftPhase.stepNumber}`}
                  className="object-contain h-full w-auto"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Phase */}
            <div className="flex flex-col gap-9 flex-1">
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
                <img
                  src={"/images/customer-simulation/cloud-right.webp"}
                  alt="Step 1"
                  className="object-contain w-[18.625rem] h-[19.375rem] ml-[2.5rem] w-96 bottom-14 right-16 absolute"
                  loading="lazy"
                />
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
