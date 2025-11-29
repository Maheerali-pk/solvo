"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { allServiceItems } from "@/app/helpers/data";
import TopSection from "./components/TopSection";
import OurExpertiseSection from "./components/OurExpertiseSection";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import ProjectListSection from "@/app/components/ProjectListSection";
import OurTechnologySection from "@/app/components/OurTechnologySection";
import GetInTouch from "@/app/components/GetInTouch";
import FaqList from "@/app/components/FaqList";

interface ServicePageProps {
  params: {
    id: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const { id } = useParams();

  const serviceItem = allServiceItems.find((item) => item.id === id);
  console.log(id, serviceItem);

  if (!serviceItem) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing">
      <Header activeRoute="services" />
      <TopSection serviceItem={serviceItem} />
      <OurExpertiseSection serviceItem={serviceItem} />
      <ProjectListSection></ProjectListSection>
      <FaqList faqs={serviceItem.faqs} />
      <OurTechnologySection></OurTechnologySection>
      <GetInTouch></GetInTouch>
      <Footer />
    </div>
  );
}
