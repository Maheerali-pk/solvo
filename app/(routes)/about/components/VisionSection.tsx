import { allIcons } from "@/app/helpers/icons";

interface VisionSectionProps {}

const VisionSection: React.FC<VisionSectionProps> = () => {
  return (
    <section className="flex w-full bg-primary-blue text-white h-96 items-center justify-center">
      <div className="flex flex-col gap-6 w-[600px] items-center relative">
        <h1 className="font-bold font-secondary text-4xl text-center">
          Vision
        </h1>
        <p className="text-lg leading-[1.667em] text-white font-normal font-poppins text-center">
          We are committed to offer top-notch CAE engineering services while
          fostering a culture of innovation, collaboration. Our succes measured
          by our client’s progress and our employee’s well-being.{" "}
        </p>
      </div>
    </section>
  );
};

export default VisionSection;
