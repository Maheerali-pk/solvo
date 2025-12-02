"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import TopSection from "./TopSection";
import MethodSteps from "./MethodSteps";
import OurTechnologySection from "@/app/components/OurTechnologySection";
import ProjectGridList from "@/app/components/ProjectGridList";
import GetInTouch from "@/app/components/GetInTouch";

export default function MethodologyPage() {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing">
      <Header activeRoute="about" />
      <TopSection />
      <MethodSteps />
      <OurTechnologySection></OurTechnologySection>
      <ProjectGridList></ProjectGridList>
      <GetInTouch></GetInTouch>
      <Footer />
    </div>
  );
}
