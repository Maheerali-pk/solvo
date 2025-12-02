"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import OurBestClients from "@/app/(routes)/home/components/OurBestClients";
import GetInTouch from "@/app/components/GetInTouch";
import ProductDetailsSection from "@/app/components/ProductDetailsSection";
import ServicesSection from "@/app/components/ServicesSection";
import HeroSection from "@/app/(routes)/home/components/HeroSection";
import ClientReviewsSection from "@/app/components/ClientReviewsSection";
import CustomerSimulationSection from "@/app/components/CustomerSimulationSection";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing">
      <Header activeRoute="home" />

      <HeroSection></HeroSection>
      <OurBestClients />
      <ServicesSection />
      <ProductDetailsSection></ProductDetailsSection>
      <ClientReviewsSection></ClientReviewsSection>
      <CustomerSimulationSection></CustomerSimulationSection>
      <GetInTouch></GetInTouch>

      <Footer />
    </div>
  );
};

export default HomePage;
