"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import OurBestClients from "./components/OurBestClients";
import GetInTouchBanner from "@/app/components/GetInTouchBanner";
import GetInTouchForm from "@/app/components/GetInTouchForm";
import GetInTouch from "@/app/components/GetInTouch";
import { useState } from "react";
import Slider from "@/app/components/Slider";
import ProductDetailCard from "@/app/components/ProductDetailCard";
import { allProducts } from "@/app/helpers/data";
import ProductDetailsSection from "@/app/components/ProductDetailsSection";
import OurServicesSection from "@/app/components/ServicesMainTabs";
import ServicesSection from "@/app/components/ServicesSection";
import HeroSection from "./components/HeroSection";
import ClientReviewsSection from "@/app/components/ClientReviewsSection";
import CustomerSimulationSection from "@/app/components/CustomerSimulationSection";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  const totalSlides = 3;
  return (
    <div className="flex flex-col w-full h-full bg-white gap-section-spacing">
      <Header />

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
