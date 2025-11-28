import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import TopSection from "./components/TopSection";
import OurMission from "./components/OurMission";
import Analytics from "./components/Analytics";
import IndustriesWeServe from "@/app/components/IndustriesWeServe";
import ClientReviewsSection from "@/app/components/ClientReviewsSection";
import OurCoreValueSection from "./components/CoreValuesSection";
import VisionSection from "./components/VisionSection";
import OurTechnologySection from "@/app/components/OurTechnologySection";
import GetInTouch from "@/app/components/GetInTouch";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing">
      <Header activeRoute="about" />

      <TopSection></TopSection>
      <OurMission></OurMission>

      <Analytics></Analytics>
      <IndustriesWeServe></IndustriesWeServe>
      <ClientReviewsSection></ClientReviewsSection>
      <OurCoreValueSection></OurCoreValueSection>
      <VisionSection></VisionSection>
      <OurTechnologySection></OurTechnologySection>
      <GetInTouch></GetInTouch>
      <Footer />
    </div>
  );
};

export default About;
