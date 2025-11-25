import { allIcons } from "@/app/helpers/icons";

interface OurMissionProps {}

const OurMission: React.FC<OurMissionProps> = () => {
  return (
    <section className="flex w-full bg-primary-blue text-white h-96 items-center justify-center">
      <div className="flex flex-col gap-6 w-[600px] items-center relative">
        <h1 className="font-bold font-secondary text-4xl text-center">
          Our mission
        </h1>
        <p className="text-lg leading-[1.667em] text-white font-normal font-poppins text-center">
          To be the leading CAE consulting firm, driving innovation and
          excellence to empower businesses, startups globally with advanced
          engineering solutions and technologies.
        </p>
      </div>
    </section>
  );
};

export default OurMission;
