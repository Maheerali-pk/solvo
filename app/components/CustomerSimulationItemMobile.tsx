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
  // Generate path based on index - each slide shows a full-width path that connects to adjacent slides
  // Total 12 slides (6 items × 2 phases), complete wave spans 2-3 slides
  const getPathForIndex = (idx: number): string => {
    // Each slide shows a path spanning full width (0 to 1000)
    // But the path is part of a continuous wave across all slides
    const startX = 0;
    const endX = 1000;

    // Wave pattern: peaks and valleys that connect seamlessly
    // Center Y is 150 (middle of 300px viewBox), amplitude varies for randomness
    const centerY = 150;
    const amplitude = 55; // Peak/valley distance from center
    const totalWidth = 12 * 1000; // 12000

    // Calculate Y positions based on global position across all slides
    const getY = (localX: number): number => {
      // Convert local X (0-1000) to global X position across all slides
      const globalX = idx * 1000 + localX;
      // Create a sine-like wave with some randomness
      // 4 complete waves across all 12 slides (so ~1 wave per 3 slides)
      const normalizedX = (globalX / totalWidth) * Math.PI * 8; // 4 complete waves = 8π radians
      const baseY = Math.sin(normalizedX) * amplitude;
      // Add slight randomness based on position for natural variation
      const randomOffset = Math.sin(normalizedX * 1.3) * 5;
      return centerY + baseY + randomOffset;
    };

    // Calculate derivative (slope) for smooth transitions
    const getSlope = (localX: number): number => {
      const globalX = idx * 1000 + localX;
      const normalizedX = (globalX / totalWidth) * Math.PI * 8;
      const waveSpeed = (Math.PI * 8) / totalWidth;
      const baseSlope = Math.cos(normalizedX) * amplitude * waveSpeed;
      const randomSlope = Math.cos(normalizedX * 1.3) * 5 * 1.3 * waveSpeed;
      return baseSlope + randomSlope;
    };

    const startY = getY(startX);
    const endY = getY(endX);
    const startSlope = getSlope(startX);
    const endSlope = getSlope(endX);

    // Calculate control points using slopes for smooth transitions
    // Control points should follow the curve direction to avoid sharp cuts
    const cp1Distance = 300; // Distance for first control point
    const cp2Distance = 300; // Distance for second control point

    // First control point: extends from start point in the direction of the slope
    const cp1X = startX + cp1Distance;
    const cp1Y = startY + startSlope * cp1Distance;

    // Second control point: extends from end point backwards in the direction of the slope
    const cp2X = endX - cp2Distance;
    const cp2Y = endY - endSlope * cp2Distance;

    return `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;
  };

  return (
    <div className="relative flex flex-col gap-[0.625rem] w-full overflow-hidden">
      {/* Dashed Curved Path */}
      <svg
        className="absolute top-1/2 left-0 right-0 w-full h-[300px] -translate-y-1/2 pointer-events-none z-0"
        viewBox="0 0 1000 300"
        preserveAspectRatio="none"
      >
        <path
          d={getPathForIndex(index)}
          stroke="#000000"
          strokeWidth="2"
          fill="none"
          strokeDasharray="16 16"
          strokeLinecap="round"
        />
      </svg>

      {/* Main Card */}
      <div className="w-full bg-transparent rounded-[0px_0px_1.875rem_1.875rem] overflow-hidden">
        {/* Content */}
        <div className="flex flex-col sm:gap-3 gap-6 sm:px-side-space px-4 py-6">
          {/* Badge and Title */}

          {/* Phase */}
          <div className="flex flex-col gap-6 relative z-10">
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
