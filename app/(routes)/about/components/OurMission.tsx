import { allIcons } from "@/app/helpers/icons";

interface OurMissionProps {}

const OurMission: React.FC<OurMissionProps> = () => {
  return (
    <section className="relative flex w-full bg-primary-blue text-white h-96 items-center justify-center sm:px-side-space">
      <div className="flex flex-col gap-6 w-[600px] items-center relative">
        <h2 className="font-bold font-obviously font-secondary text-center">
          Our mission
        </h2>
        <h3 className="text-white !font-normal  text-center">
          To be the leading CAE consulting firm, driving innovation and
          excellence to empower businesses, startups globally with advanced
          engineering solutions and technologies.
        </h3>
      </div>
    </section>
  );
};

export default OurMission;
