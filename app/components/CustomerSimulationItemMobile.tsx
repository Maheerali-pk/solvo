import Image from "next/image";
import { ICustomerSimulationPhase } from "../helpers/data";
import { allIcons } from "../helpers/icons";
import GreenBadge from "./GreenBadge";

interface CustomerSimulationItemMobileProps {
  badgeText: string;
  badgeIcon: string;
  title: string;
  phase: ICustomerSimulationPhase;
  index: number;
}

const CustomerSimulationItemMobile: React.FC<
  CustomerSimulationItemMobileProps
> = ({ badgeText, badgeIcon, title, phase, index }) => {
  return (
    <div className="relative flex flex-col gap-[0.625rem] w-full overflow-hidden">
      <img
        src="/images/customer-simulation/circle.png"
        alt="Background"
        className="absolute top-0 w-40 h-48 right-0 -translate-y-0"
        loading="lazy"
      />
      <img
        src="/images/customer-simulation/line-mobile.png"
        alt="Background"
        className="absolute bottom-6 w-full left-side-space right-  right-0 z-10"
        loading="lazy"
      />
      <img
        src={"/images/customer-simulation/dots.png"}
        alt="Step 1"
        className="object-contain h-[50%] left-1/2 -translate-x-1/2 bottom-0 absolute"
        loading="lazy"
      />
      <img
        src={"/images/customer-simulation/cloud.png"}
        alt="Step 1"
        className="object-contain  w-80 bottom-28 left-1/2 -translate-x-1/2 absolute"
        loading="lazy"
      />
      {/* Main Card */}
      <div className="w-full bg-white rounded-[0px_0px_1.875rem_1.875rem] overflow-hidden">
        {/* Content */}
        <div className="flex flex-col sm:gap-3 gap-6 px-4 py-6">
          {/* Badge and Title */}
          <div className="flex flex-col gap-3 w-full">
            {/* Badge */}

            <GreenBadge icon={badgeIcon} text={badgeText}></GreenBadge>
            {/* Title */}
            <h2 className="leading-[1.2em] text-text-gray font-semibold font-poppins">
              {title.split(" ").slice(0, 2).join(" ")}{" "}
              <span className="text-primary-blue">
                {title.split(" ").slice(2).join(" ")}
              </span>
            </h2>
          </div>

          {/* Phase */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              {/* Phase Title */}
              <h3 className="leading-[1.8em] text-footer-heading font-semibold font-poppins">
                {phase.phaseTitle}
              </h3>

              {/* Sub Items */}
              <div className="flex gap-6">
                {phase.subItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center gap-[0.625rem]"
                  >
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      {allIcons.checkCircle(16, 16)}
                    </div>
                    <span className="text-base leading-[1.5em] text-text-gray font-normal font-poppins">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step Image - Centered */}
            <div className="relative w-full flex items-center justify-center">
              <div className="relative w-full max-w-[15rem] aspect-square">
                <Image
                  src={phase.stepImage}
                  alt={`Step ${phase.stepNumber}`}
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

export default CustomerSimulationItemMobile;
