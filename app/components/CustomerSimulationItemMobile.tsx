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
      {/* Main Card */}
      <div className="w-full bg-transparent rounded-[0px_0px_1.875rem_1.875rem] overflow-hidden">
        {/* Content */}
        <div className="flex flex-col sm:gap-3 gap-6 sm:px-side-space px-4 py-6">
          {/* Badge and Title */}

          {/* Phase */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              {/* Phase Title */}
              <h3 className=" text-footer-heading font-semibold font-poppins">
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
                    <span className="text-base  text-text-gray font-normal font-poppins">
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
