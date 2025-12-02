import PageHeading from "@/app/components/PageHeading";

function TopSection() {
  return (
    <div className="w-full relative flex flex-col items-center gap-0 gap-section-spacing">
      {/* Section 1: What is Solvo Engineering */}

      <div className="w-full max-w-desktop mx-auto flex flex-col items-center gap-6 sm:px-side-space relative">
        <img
          src="/images/about/hero-dots2.webp"
          className="absolute top-0 left-0 -translate-y-[3rem] sm:h-[10rem] h-[15rem] "
          alt="Background Pattern"
        ></img>

        <PageHeading
          className="w-[calc(100%-5rem)] sm:w-full"
          title={
            <>
              Our Agile Working{" "}
              <span className="text-primary-blue">Methodology</span>
            </>
          }
          description={
            <>
              This is our step by step approach to ensure smooth collaboration,
              high quality, <br></br> deliverables and on time delivery for
              every project.
            </>
          }
        ></PageHeading>
      </div>
    </div>
  );
}

export default TopSection;
