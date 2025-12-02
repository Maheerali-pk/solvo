import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import TopSection from "./components/TopSection";
import OpeningsList from "./components/OpeningsList";
import WhyWorkWithUs from "./components/WhyWorkWithUs";

export default function CareersPage() {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing">
      <Header activeRoute="career" />
      <TopSection />
      <OpeningsList />
      <WhyWorkWithUs />
      <Footer />
    </div>
  );
}

