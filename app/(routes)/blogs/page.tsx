import Header from "@/app/components/Header";
import TopSection from "./components/TopSection";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing overflow-visible">
      <Header activeRoute="about" />

      <TopSection></TopSection>
    </div>
  );
};

export default About;
