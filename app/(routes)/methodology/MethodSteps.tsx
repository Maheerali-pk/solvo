"use client";
import { FunctionComponent, useRef, useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";

interface IMethodStep {
  title: string;
  description: string;
  height: number;
  image: string;
}

const methodSteps: IMethodStep[] = [
  {
    title: "Requirement Gathering",
    description:
      "We begin by understanding your project in depth objectives, technical challenges and desired outcomes.This step ensures we capture every detail to build the right solution for you.",
    height: 276,
    image: "/images/method-steps/img1.png",
  },
  {
    title: "Proposal & Negotiation",
    description:
      "We prepare a comprehensive proposal that includes, Objectives Pricing Deadlines and Deliverables. We're open to discussions and negotiations to ensure the proposal perfectly aligns with your requirements and budget.",
    height: 396,
    image: "/images/method-steps/img2.png",
  },
  {
    title: "Dedicated Team Allocation",
    description:
      "Once the proposal is approved, we assign the best fit design engineers and simulation experts to your project (Based on project). Each project gets a dedicated team with the right expertise to ensure efficient execution and timely delivery.",
    height: 300,
    image: "/images/method-steps/img3.png",
  },
  {
    title: "Project Kick Off",
    description:
      "With the team in place, we begin the project using leading software such as ANSYS, COMSOL, Abaqus and SolidWorks. Our engineers set up simulations and CAD models with a strong focus on high quality and project objectives.",
    height: 396,
    image: "/images/method-steps/img4.png",
  },
  {
    title: "Seamless Communication",
    description:
      "We keep communication transparent and efficient. You can choose your preferred platform Slack, Upwork messages or Microsoft Teams to stay updated. We respond to every query within 1 hour, ensuring smooth collaboration throughout the project.",
    height: 300,
    image: "/images/method-steps/img5.png",
  },
  {
    title: "Quality Assurance & Control",
    description:
      "Before sharing the deliverables, we run a thorough internal quality check to: · Verify accuracy and reliability of simulations / CAD · Ensure all client requirements and objectives are met · Minimize revisions and save time This guarantees that you receive high-quality and ready to use outputs.",
    height: 516,
    image: "/images/method-steps/img6.png",
  },
  {
    title: "Secure Payment & Project Closure",
    description:
      "Payment is released only after the work is approved. If deliverables don't meet your expectations, you may cancel the contract and the payment will be refunded to your payment method. We don't request early payments, all transactions are processed after delivery via Upwork's secure Escrow system for safety of both parties. If you're unfamiliar with escrow system, we can provide a detailed video recording or a screen sharing walkthrough in meeting. Our dedicated team remains available for follow up support or clarifications even after the project is closed.",
    height: 480,
    image: "/images/method-steps/img7.png",
  },
  {
    title: "Delivery of Results",
    description:
      "We deliver all the final outputs, which include: · Source files (CAD, simulation setups, scripts) · Post-processing results (contours, animations, images - and detailed reports) · Any additional data as requested All deliverables are provided in a structured and organized manner for your convenience.",
    height: 530,
    image: "/images/method-steps/img8.png",
  },
];

interface MethodStepsProps {}
const toRem = (px: number) => {
  return `${px / 16}rem`;
};

interface ContainerMeasurements {
  top: number;
  height: number;
}

const MethodSteps: FunctionComponent<MethodStepsProps> = () => {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [measurements, setMeasurements] = useState<ContainerMeasurements[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if desktop on mount
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth > 768);
    }

    const updateMeasurements = () => {
      // Only update on mobile
      if (typeof window !== "undefined" && window.innerWidth > 767) {
        setIsDesktop(true);
        return;
      }

      setIsDesktop(false);

      const newMeasurements: ContainerMeasurements[] =
        containerRefs.current.map((ref) => {
          if (!ref) return { top: 0, height: 0 };
          const rect = ref.getBoundingClientRect();
          const parentRect = ref.parentElement?.getBoundingClientRect();
          return {
            top: rect.top - (parentRect?.top || 0),
            height: rect.height,
          };
        });

      // Only update if we have valid measurements
      if (newMeasurements.every((m) => m.height > 0)) {
        setMeasurements(newMeasurements);
      }
    };

    // Initial measurement with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(updateMeasurements, 100);
    updateMeasurements();

    const resizeObserver = new ResizeObserver(updateMeasurements);
    containerRefs.current.forEach((ref) => {
      if (ref) resizeObserver.observe(ref);
    });

    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateMeasurements);
      window.addEventListener("scroll", updateMeasurements);
    }

    return () => {
      clearTimeout(timeoutId);
      resizeObserver.disconnect();
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateMeasurements);
        window.removeEventListener("scroll", updateMeasurements);
      }
    };
  }, []);

  // Convert rem to px (assuming 1rem = 16px)
  const remToPx = (rem: number) => rem * 16;
  const circleRadiusPx = remToPx(0.7); // 0.875rem = 14px (reduced from 1.25rem)
  const circleCenterXPx = remToPx(2); // 1.25rem = 20px (same distance from left)
  const circleTopOffsetPx = remToPx(1.5 + 0.7); // 1.5rem = 24px (fixed distance from top)

  return (
    <div
      className="w-full flex flex-col relative"
      style={{
        boxShadow: "0px 18px 28px 0px #0000000F",
      }}
    >
      {/* SVG Lines and Circles Container - Mobile Only */}
      {measurements.length > 0 && (
        <svg
          className="hidden sm:block absolute z-10 pointer-events-none"
          style={{
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {/* Lines connecting circles */}
          {measurements.map((measurement, index) => {
            if (index >= methodSteps.length - 1) return null;

            const currentTop = measurement.top;
            const currentCircleCenterY = currentTop + circleTopOffsetPx;

            const nextMeasurement = measurements[index + 1];
            if (!nextMeasurement || nextMeasurement.height === 0) return null;

            const nextTop = nextMeasurement.top;
            const nextCircleCenterY = nextTop + circleTopOffsetPx;

            return (
              <line
                key={`line-${index}`}
                x1={circleCenterXPx}
                y1={currentCircleCenterY}
                x2={circleCenterXPx}
                y2={nextCircleCenterY}
                stroke="black"
                strokeWidth="2"
                strokeDasharray={index % 2 === 1 ? "4 4" : "0"}
                vectorEffect="non-scaling-stroke"
              />
            );
          })}

          {/* Circles */}
          {measurements.map((measurement, index) => {
            if (measurement.height === 0) return null;

            const circleCenterY = measurement.top + circleTopOffsetPx;
            const circleFill = index % 2 === 0 ? "#0273BD" : "#000000";

            return (
              <g key={`circle-${index}`}>
                <circle
                  cx={circleCenterXPx}
                  cy={circleCenterY}
                  r={circleRadiusPx}
                  fill={circleFill}
                />
                <text
                  x={circleCenterXPx}
                  y={circleCenterY}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="white"
                  fontSize="12"
                  fontWeight="600"
                  fontFamily="Poppins, sans-serif"
                >
                  {index + 1}
                </text>
              </g>
            );
          })}
        </svg>
      )}
      <div className="h-full w-full max-w-desktop mx-auto absolute  left-1/2 -translate-x-1/2 sm:hidden">
        <img
          src="/images/method-steps/path.png"
          alt="Method Steps Background"
          style={{
            height: `${2909 / 16}rem`,
            left: `${172 / 16}rem`,
          }}
          className="h-full absolute w-auto top-16 sm:bh-auto"
        />
      </div>

      {methodSteps.map((step, index) => (
        <div
          key={index}
          ref={(el) => {
            containerRefs.current[index] = el;
          }}
          className={classNames("w-full relative", {
            "bg-primary-blue/10": index % 2 === 0,
          })}
        >
          <div
            className={`grid grid-cols-2 sm:ml-16  sm:grid-cols-1 sm:px-side-space sm:py-6 sm:gap-2 mx-auto max-w-desktop items-center`}
          >
            <div
              className={classNames(
                `relative w-full   flex items-center sm:items-start !sm:h-auto`,
                {
                  "justify-end pr-30 sm:justify-start sm:pr-0": index % 2 === 1,
                  "justify-start pl-10 sm:justify-start sm:pl-0":
                    index % 2 === 0,
                }
              )}
              style={
                isDesktop
                  ? {
                      height: `${toRem(step.height)}`,
                    }
                  : {}
              }
            >
              <div className="w-20 h-20 sm:h-12 sm:w-12 relative flex items-center">
                <Image src={step.image} alt={step.title} fill loading="lazy" />
              </div>
            </div>
            <div className="flex flex-col gap-6 sm:gap-1 ">
              <h2 className="text-footer-heading font-semibold font-poppins">
                {step.title}
              </h2>
              <p className="text-base  text-footer-text font-normal font-poppins whitespace-pre-line">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MethodSteps;
