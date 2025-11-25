import Image from "next/image";

const OurTechnologySection = () => {
  const technologyLogos = [
    "/images/technology-images/tech1.png",
    "/images/technology-images/tech2.png",
    "/images/technology-images/tech3.png",
    "/images/technology-images/tech4.png",
    "/images/technology-images/tech5.png",
    "/images/technology-images/tech6.png",
  ];

  return (
    <section className="w-full flex max-w-desktop mx-auto flex-col items-center gap-6 py-[3.125rem] relative">
      {/* Gradient Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#FAFAFA] via-[#8A8A8A] to-[#FAFAFA]"></div>

      <div className="w-full max-w-desktop mx-auto flex flex-col items-center gap-[1.875rem]">
        {/* Title */}
        <h2 className="text-[1.875rem] leading-[1.2em] text-text-gray font-semibold font-poppins text-center">
          Our Technology
        </h2>

        {/* Technology Logos */}
        <div className="w-full flex flex-row items-center  gap-16 overflow-hidden ">
          {technologyLogos.map((logo, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 h-[2.609375rem]"
              style={{
                width:
                  index === 0
                    ? "6.263125rem"
                    : index === 1
                    ? "7.6425rem"
                    : index === 2
                    ? "10.1775rem"
                    : index === 3
                    ? "11.93rem"
                    : index === 4
                    ? "8.611875rem"
                    : "12.48875rem",
              }}
            >
              <Image
                src={logo}
                alt={`Technology ${index + 1}`}
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTechnologySection;
