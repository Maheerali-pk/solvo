import { allIcons } from "@/app/helpers/icons";

interface VisionSectionProps {}

const VisionSection: React.FC<VisionSectionProps> = () => {
  return (
    <section className="flex relative overflow-visible  w-full bg-primary-blue text-white sm:h-72 h-96 items-center justify-center sm:px-side-space">
      <img
        src="/images/about/spiral-lines-right.png"
        alt="Client Reviews Background"
        className="absolute right-0   -top-[47rem] h-[69rem] sm:hidden z-10"
      />

      <img
        src="/images/about/spiral-lines-left.png"
        alt="Client Reviews Background"
        className="absolute left-0 -top-[47rem] h-[69rem] sm:hidden"
      />
      <div className="flex flex-col gap-6 w-[600px] items-center relative">
        <h2 className="font-bold font-secondary text-center font-obviously">
          Vision
        </h2>
        <h3 className=" text-white font-normal font-poppins text-center ">
          We are committed to offer top-notch CAE engineering services while
          fostering a culture of innovation, collaboration. Our succes measured
          by our client’s progress and our employee’s well-being.{" "}
        </h3>
      </div>
    </section>
  );
};

export default VisionSection;
