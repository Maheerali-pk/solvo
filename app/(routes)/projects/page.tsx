import Footer from "@/app/components/Footer";
import GetInTouch from "@/app/components/GetInTouch";
import Header from "@/app/components/Header";
import OurTechnologySection from "@/app/components/OurTechnologySection";
import ProjectGridList from "@/app/components/ProjectGridList";
import TopSection from "./components/TopSection";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing overflow-visible">
      <Header activeRoute="projects" />
      <TopSection></TopSection>
      <ProjectGridList></ProjectGridList>
      <OurTechnologySection></OurTechnologySection>
      <GetInTouch></GetInTouch>
      <Footer></Footer>
    </div>
  );
};

export default About;
