"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { allJobPositions } from "@/app/helpers/jobs.data";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import TopSection from "./components/TopSection";
import JobDetails from "./components/JobDetails";
import JobApplyForm from "./components/JobApplyForm";

const JobPage = () => {
  const { id } = useParams();
  const job = allJobPositions.find((j) => j.link.split("/").pop() === id);

  if (!job) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing">
      <Header activeRoute="career" />
      <TopSection />
      <JobDetails job={job} />
      <JobApplyForm />
      <Footer />
    </div>
  );
};

export default JobPage;
