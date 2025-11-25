import { useState } from "react";
import OurServicesSection from "./ServicesMainTabs";
import ServicesContent from "./ServicesMainTabContent";
import { allHomePageServiceItems } from "../helpers/data";

interface ServicesSectionProps {}

const ServicesSection: React.FC<ServicesSectionProps> = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleServiceClick = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <div className="flex flex-col max-w-desktop mx-auto">
      <OurServicesSection
        selectedIndex={selectedIndex}
        onServiceClick={handleServiceClick}
      ></OurServicesSection>
      <ServicesContent
        services={allHomePageServiceItems}
        selectedServiceIndex={selectedIndex}
        onServiceChange={handleServiceClick}
      ></ServicesContent>
    </div>
  );
};

export default ServicesSection;
