import Footer from "@/app/components/Footer";
import GetInTouch from "@/app/components/GetInTouch";
import Header from "@/app/components/Header";
import OurTechnologySection from "@/app/components/OurTechnologySection";
import TopSection from "./components/TopSection";
import ClientFocusSolutions from "./components/ClientFocusSolutions";
import WelcomeToSolvoEnngineers from "./components/WelcomeToSolvoEnngineers";
import ProductDetailsSection from "@/app/components/ProductDetailsSection";
import ProjectListSection from "@/app/components/ProjectListSection";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing">
      <Header activeRoute="services" />
      <TopSection></TopSection>
      <ClientFocusSolutions></ClientFocusSolutions>

      <OurTechnologySection></OurTechnologySection>
      <WelcomeToSolvoEnngineers></WelcomeToSolvoEnngineers>
      <ProductDetailsSection></ProductDetailsSection>
      <ProjectListSection></ProjectListSection>
      <GetInTouch></GetInTouch>
      <Footer />
    </div>
  );
};

export default About;
