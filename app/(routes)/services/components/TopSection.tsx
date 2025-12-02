import Image from "next/image";
import { allIcons } from "@/app/helpers/icons";
import Link from "next/link";
import PageHeading from "@/app/components/PageHeading";

const services = [
  {
    id: "fea",
    title: "Finite Element Analysis\n(FEA)",
    description:
      "Optimize designs and ensure structural integrity with precise and efficient simulation techniques.",
    image: "/images/services/top-section/fea-image.webp",
    imagePosition: "left" as const,
    link: "/services/fea-analysis",
  },
  {
    id: "cfd",
    title: "Computational Fluid \nDynamics (CFD)",
    description:
      "Analyze fluid dynamics and thermal processes to enhance performance and energy efficiency.",
    image: "/images/services/top-section/cfd-image.webp",
    imagePosition: "right" as const,
    link: "/services/cfd-analysis",
  },
  {
    id: "cad",
    title: "2D/3D Computer Aided \nDesign (CAD)",
    description:
      "Transform concepts into accurate CAD model with seamless integration and practical solutions.",
    image: "/images/services/top-section/cad-image.webp",
    imagePosition: "left" as const,
    link: "/services/cad-analysis",
  },
];

const TopSection = () => {
  return (
    <div className="w-full bg-white rounded-t-[3.75rem]">
      <div className="w-full max-w-desktop mx-auto flex flex-col gap-section-spacing sm:px-side-space sm:gap-6 ">
        <PageHeading
          title={
            <>
              Our <span className="text-primary-blue">Services</span>
            </>
          }
          className="w-3/4 sm:w-full"
          description={
            <>
              From design to simulation, our services help you build smarter,
              faster and better.
              <br />
              Explore engineering solutions to boost your product performance.
            </>
          }
        />
        <div className="flex flex-col gap-10 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full  items-center justify-center grid grid-cols-2 gap-10 sm:flex-col sm:gap-6 sm:grid sm:grid-cols-2 sm:h-full"
            >
              {service.imagePosition === "left" && (
                <div className="relative w-[29.5625rem] h-[18.25rem] sm:h-full shrink-0 sm:w-full  ">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain border border-primary-blue rounded-[1.25rem]"
                  />
                </div>
              )}

              <div className="flex flex-col justify-center gap-[1.375rem] flex-1 sm:w-full">
                <div className="flex flex-col gap-4">
                  <h2 className="text-footer-text font-semibold font-poppins text-left whitespace-pre-line">
                    {service.title}
                  </h2>
                  <span
                    className="text-base  sm:max-w-full text-footer-text"
                    style={{ fontSize: "1rem" }}
                  >
                    {service.description}
                  </span>
                </div>
                <Link
                  href={service.link}
                  className="w-[10.75rem] h-10 bg-primary-blue rounded-xl flex flex-row items-center justify-center gap-2 px-4 py-4 sm:w-full"
                >
                  <span className="text-base text-white font-normal font-poppins text-center">
                    Read More
                  </span>
                  <div className="w-5 h-5 text-white">
                    {allIcons.chevronRight(20, 20)}
                  </div>
                </Link>
              </div>

              {service.imagePosition === "right" && (
                <div className="relative w-[29.5625rem] h-[18.25rem] shrink-0 sm:w-full sm:h-full ">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain border border-primary-blue rounded-[1.25rem]"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSection;
