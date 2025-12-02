"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { allFullProjects } from "@/app/helpers/projects.data";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import TopSection from "./components/TopSection";
import ContentSection from "./components/ContentSection";
import ProjectListSection from "@/app/components/ProjectListSection";
import OurTechnologySection from "@/app/components/OurTechnologySection";
import GetInTouch from "@/app/components/GetInTouch";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const { id } = useParams();
  const project = allFullProjects.find((p) => p.link.split("/").pop() === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing">
      <Header activeRoute="projects" />
      <TopSection project={project} />
      <ContentSection project={project} />
      <ProjectListSection></ProjectListSection>
      <OurTechnologySection></OurTechnologySection>
      <GetInTouch></GetInTouch>
      <Footer />
    </div>
  );
};

export default ProjectPage;
