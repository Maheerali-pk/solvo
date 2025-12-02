import Header from "@/app/components/Header";
import TopSection from "./components/TopSection";
import BlogListSection from "./components/BlogListSection";
import { LatestNewsSection } from "./components/LatestNewsSection";
import Footer from "@/app/components/Footer";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing overflow-visible">
      <Header activeRoute="blogs" />

      <TopSection></TopSection>
      <LatestNewsSection></LatestNewsSection>

      <BlogListSection></BlogListSection>
      <Footer />
    </div>
  );
};

export default About;
