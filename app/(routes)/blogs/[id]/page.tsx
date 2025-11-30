"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { allBlogs } from "@/app/helpers/blogs.data";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import TopSection from "./components/TopSection";
import ContentSection from "./components/ContentSeciton";
import BlogListSection from "../components/BlogListSection";

interface BlogPageProps {
  params: {
    id: string;
  };
}

const BlogPage = ({ params }: BlogPageProps) => {
  const { id } = useParams();
  const blog = allBlogs.find((b) => b.link.split("/").pop() === id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing">
      <Header activeRoute="blogs" />
      <TopSection blog={blog} />
      <ContentSection blog={blog} />
      <BlogListSection></BlogListSection>
      <Footer />
    </div>
  );
};

export default BlogPage;
