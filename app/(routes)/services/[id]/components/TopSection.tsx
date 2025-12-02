import Image from "next/image";
import Link from "next/link";
import { allIcons } from "@/app/helpers/icons";
import { IServiceItem } from "@/app/helpers/data";
import PageHeading from "@/app/components/PageHeading";

interface TopSectionProps {
  serviceItem: IServiceItem;
}

export default function TopSection({ serviceItem }: TopSectionProps) {
  return (
    <section className="w-full relative flex flex-col items-center gap-section-spacing">
      {/* Gradient Background */}

      {/* Content */}

      <div className="w-full max-w-desktop mx-auto flex flex-col items-center gap-6 sm:px-side-space sm:w-full relative">
        <img
          src="/images/about/hero-dots2.webp"
          className="absolute top-0 left-0 -translate-y-[3rem] sm:h-[10rem] h-[15rem] "
          alt="Background Pattern"
        ></img>

        <PageHeading
          className="w-[80%] sm:w-full"
          title={serviceItem.title}
          description={<>{serviceItem.subtitle}</>}
        ></PageHeading>
        <Link href="/contact-us" className="btn btn-primary">
          <span className="text-sm  text-white font-normal font-poppins">
            Lets Connect
          </span>
          <div className="w-6 h-6 text-white">
            {allIcons.chevronRight(24, 24)}
          </div>
        </Link>
        <div className="relative w-full h-[20rem] rounded-[1.25rem]  border border-primary-blue rounded-[1.25rem]">
          <img
            src={serviceItem.heroImage}
            alt="Hero Image"
            className="object-contain h-auto w-atuo w-full h-full"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 w-full  ">
        <div className="w-full max-w-desktop mx-auto flex flex-col gap-4 sm:px-side-space">
          {/* Content Title */}
          <h2 className="text-[1.875rem]  text-footer-heading font-semibold font-poppins text-center">
            {serviceItem.content.title}
          </h2>

          {/* Content Description and Right Section */}
          <div className="flex flex-row items-start gap-[3.125rem] mt-4 sm:flex-col sm:gap-6">
            {/* Left: Description */}
            <div className="flex-1">
              <p className="text-base  text-footer-text font-normal font-poppins">
                {serviceItem.content.description}
                <br></br>
                <br></br>
                {serviceItem.content.description}
                <br></br>
                <br></br>
                {serviceItem.content.description}
              </p>
            </div>

            {/* Right: Image and More Services */}
            <div className="flex flex-col gap-6 w-[31.1875rem] shrink-0 sm:w-full">
              {/* Image */}
              <div className="relative w-full sm:h-auto sm:max-w-[25rem] sm:mx-auto h-[24.375rem] rounded-[1.25rem] overflow-hidden sm:h-auto sm:aspect-[499/390]">
                <Image
                  src={serviceItem.content.rightSection.image}
                  alt="Service Content"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              {/* More Services Card */}
              <div className="bg-[rgba(136,216,232,0.2)] rounded-[0.625rem] p-[1.125rem] flex flex-col gap-6">
                <h3 className="text-[1.625rem]  text-footer-heading font-semibold font-poppins">
                  Our more Engineering Services
                </h3>
                <div className="flex flex-col gap-6">
                  {serviceItem.content.rightSection.moreServices.map(
                    (service, index) => (
                      <div key={index} className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-[0.625rem]">
                          <div className="w-6 h-6 shrink-0 ">
                            <img
                              src={service.logo}
                              alt={service.title}
                              className="object-contain w-full h-full"
                            />
                          </div>
                          <Link
                            href={service.link}
                            className="text-[1.125rem]  text-primary-blue font-semibold font-poppins hover:underline"
                          >
                            {service.title}
                          </Link>
                        </div>
                        <p className="text-sm  text-footer-text font-normal font-poppins ">
                          {service.description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
