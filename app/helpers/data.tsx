export interface ProductDetail {
  logo: string;
  title: string;
  description: string;
  caseStudyLink: string;
  image: string;
}

export interface IHeroSectionItem {
  badgeText: string;
  badgeIcon: string;
  title: string;
  features: string[];
  placeOrderLink: string;
  ourServicesLink: string;
  image: string;
}

export const allProducts: ProductDetail[] = [
  {
    logo: "/images/products/suds-enviro-logo.png",
    title:
      "Design Optimizing and CFD Analysis for Radial Vortex Flow Controls Device (VFC)",
    description:
      "SuDS Enviro Ltd engaged us to design and simulate a set of Radial Vortex Flow Control (VFC) devices that control stormwater flows using a purely hydraulic mechanism—without moving parts, power, or complex control systems. These devices needed to manage both low and high flow conditions, enabling unrestricted flow at low volumes and inducing vortex-driven throttling during peak flows.",
    caseStudyLink: "/case-study/vfc-device",
    image: "/images/products/vfc-device-image.png",
  },
  {
    logo: "/images/products/bony-polymers-logo.png",
    title:
      "FEA Analysis to Enhancing Stiffness and Fatigue Life of Rubber-to-Metal Bonded Parts",
    description:
      "Bony Polymers, a trusted manufacturer of precision rubber-to-metal bonded parts in India, approached us to improve the performance of a critical side bumper assembly. The goal was to increase the component's static stiffness to 0.7 kN/mm for a displacement range of 5–10 mm, while also ensuring that the part could reliably withstand at least 600,000 load cycles.",
    caseStudyLink: "/case-study/rubber-metal-bonded-parts",
    image: "/images/products/rubber-metal-parts-image.png",
  },
  {
    logo: "/images/products/commercial-dehydrators-logo.png",
    title:
      "CFD Analysis and Airflow Optimization for Industrial Dehydrator System",
    description:
      "Commercial Dehydrators America approached us to investigate a critical airflow issue within their industrial dehydrator system. The dehydrator, consisting of 50 stacked drying trays, was experiencing non-uniform airflow at a design speed of 1 meter per second. Despite a seemingly adequate system layout, the airflow was disturbed, non-laminar, and inconsistent",
    caseStudyLink: "/case-study/industrial-dehydrator",
    image: "/images/products/dehydrator-system-image.png",
  },
];

import { allIcons } from "./icons";

export interface IHomePageServiceSubItem {
  tabText: string;
  tabIcon: string;
  tabIconSelected: string;
  contentTitle: string;
  contentDescription: string;
  contetImageCustomClass?: string;
  contentImage: string;
  contentLink: string;
}
export interface IHomePageServiceItem {
  title: string;
  description: string;
  image: string;
  subItems: IHomePageServiceSubItem[];
}

export const allHomePageServiceItems: IHomePageServiceItem[] = [
  {
    title: "Computational Fluid Dynamics (CFD)",
    description: "Agentic AI assistant guide you through model setup",
    image: "/images/services/turbo-machinery.png",
    subItems: [
      {
        tabText: "Airflow Analysis",
        tabIcon: "/images/services/subitems/item1/tabs/normal/img1.png",
        tabIconSelected:
          "/images/services/subitems/item1/tabs/selected/img1.png",
        contentTitle:
          "Computational Airflow Analysis for Optimized Design Efficiency",
        contentDescription:
          "Our airflow analysis service helps you understand and improve how air moves through your products or systems. Using advanced CFD simulations, we detect flow inefficiencies, reduce drag and enhance cooling performance to achieve better energy efficiency and product reliability",
        contentImage: "/images/services/subitems/item1/content/img1.png",
        contentLink: "/services/airflow-analysis",
      },
      {
        tabText: "Design optimisation",
        tabIcon: "/images/services/subitems/item1/tabs/normal/img2.png",
        tabIconSelected:
          "/images/services/subitems/item1/tabs/selected/img2.png",
        contentTitle: "Design Optimization for Enhanced Performance",
        contentDescription:
          "Our design optimization service leverages advanced computational methods to refine your product designs. We analyze multiple design parameters, identify optimal configurations, and help you achieve superior performance while reducing material costs and manufacturing complexity.",
        contentImage: "/images/services/subitems/item1/content/img2.png",
        contentLink: "/services/design-optimization",
      },
      {
        tabText: "FSI",
        tabIcon: "/images/services/subitems/item1/tabs/normal/img3.png",
        tabIconSelected:
          "/images/services/subitems/item1/tabs/selected/img3.png",
        contentTitle: "Fluid-Structure Interaction (FSI) Analysis",
        contentDescription:
          "Our FSI analysis service provides comprehensive insights into the interaction between fluid flows and structural components. We help you understand how fluid forces affect structural behavior, predict deformation, and optimize designs for both fluid performance and structural integrity.",
        contentImage: "/images/services/subitems/item1/content/img3.png",
        contentLink: "/services/fsi",
      },
      {
        tabText: "Heat Transfer",
        tabIcon: "/images/services/subitems/item1/tabs/normal/img4.png",

        tabIconSelected:
          "/images/services/subitems/item1/tabs/selected/img4.png",
        contentTitle: "Heat Transfer Analysis and Thermal Management",
        contentDescription:
          "Our heat transfer analysis service helps you optimize thermal performance of your products. Using advanced CFD techniques, we analyze conduction, convection, and radiation to improve cooling efficiency, prevent overheating, and ensure reliable operation under various thermal conditions.",
        contentImage: "/images/services/subitems/item1/content/img4.png",
        contentLink: "/services/heat-transfer",
      },
      {
        tabText: "Multiphase Flow",
        tabIcon: "/images/services/subitems/item1/tabs/normal/img5.png",
        tabIconSelected:
          "/images/services/subitems/item1/tabs/selected/img5.png",
        contentTitle: "Multiphase Flow Analysis and Simulation",
        contentDescription:
          "Our multiphase flow analysis service addresses complex fluid interactions involving multiple phases. We simulate gas-liquid, liquid-liquid, and solid-fluid interactions to help you understand phase separation, mixing behavior, and optimize processes in chemical, oil & gas, and manufacturing industries.",
        contentImage: "/images/services/subitems/item1/content/img5.png",
        contentLink: "/services/multiphase-flow",
      },
      {
        tabText: "Turbomachinery",
        tabIcon: "/images/services/subitems/item1/tabs/normal/img6.png",
        tabIconSelected:
          "/images/services/subitems/item1/tabs/selected/img6.png",
        contentTitle: "Turbomachinery Design and Analysis",
        contentDescription:
          "Our turbomachinery service specializes in the design and analysis of rotating machinery including pumps, compressors, turbines, and fans. We optimize blade geometry, analyze performance characteristics, and help you achieve higher efficiency and reliability in your turbomachinery applications.",
        contentImage: "/images/services/subitems/item1/content/img6.png",
        contentLink: "/services/turbomachinery",
      },
    ],
  },
  {
    title: "2D/3D Modeling & Rendering (CAD)",
    description: "Run physics simulation & AI prediction in the cloud",
    image: "/images/services/3d-modeling.png",
    subItems: [
      {
        tabText: "Product Design",
        tabIcon: "/images/services/subitems/item2/tabs/normal/img1.png",
        tabIconSelected:
          "/images/services/subitems/item2/tabs/selected/img1.png",
        contentTitle: "Product Design and Development Services",
        contentDescription:
          "Our product design service helps you bring innovative ideas to life through comprehensive 2D and 3D modeling. We create detailed CAD models, technical drawings, and design documentation to support your product development process from concept to manufacturing.",
        contentImage: "/images/services/subitems/item2/content/img1.png",
        contentLink: "/services/product-design",
      },
      {
        tabText: "Mechanical Design",
        tabIcon: "/images/services/subitems/item2/tabs/normal/img2.png",
        tabIconSelected:
          "/images/services/subitems/item2/tabs/selected/img2.png",
        contentTitle: "Mechanical Design and Engineering",
        contentDescription:
          "Our mechanical design service provides expert CAD modeling for mechanical components and systems. We create precise 3D models, assembly drawings, and detailed engineering documentation to ensure manufacturability and optimal performance of your mechanical designs.",
        contentImage: "/images/services/subitems/item2/content/img2.png",
        contentLink: "/services/mechanical-design",
      },
      {
        tabText: "Architectural Design",
        tabIcon: "/images/services/subitems/item2/tabs/normal/img3.png",
        tabIconSelected:
          "/images/services/subitems/item2/tabs/selected/img3.png",
        contentTitle: "Architectural Design and Building Information Modeling",
        contentDescription:
          "Our architectural design service offers comprehensive CAD solutions for building design and construction. We create detailed architectural drawings, 3D models, and BIM models to support your construction projects with accurate documentation and visualization.",
        contentImage: "/images/services/subitems/item2/content/img3.png",
        contentLink: "/services/architectural-design",
      },
      {
        tabText: "3D Visualization",
        tabIcon: "/images/services/subitems/item2/tabs/normal/img4.png",
        tabIconSelected:
          "/images/services/subitems/item2/tabs/selected/img4.png",
        contentTitle: "3D Visualization and Rendering Services",
        contentDescription:
          "Our 3D visualization service transforms your CAD models into photorealistic renderings and animations. We create high-quality visualizations for presentations, marketing materials, and design reviews to help you communicate your designs effectively.",
        contentImage: "/images/services/subitems/item2/content/img4.png",
        contentLink: "/services/3d-visualization",
      },
      {
        tabText: "Technical Drawing",
        tabIcon: "/images/services/subitems/item2/tabs/normal/img5.png",
        tabIconSelected:
          "/images/services/subitems/item2/tabs/selected/img5.png",
        contentTitle: "Technical Drawing and Drafting Services",
        contentDescription:
          "Our technical drawing service provides accurate 2D CAD drawings and documentation for manufacturing and construction. We create detailed engineering drawings, assembly drawings, and technical specifications that meet industry standards and manufacturing requirements.",
        contentImage: "/images/services/subitems/item2/content/img5.png",
        contentLink: "/services/technical-drawing",
      },
      {
        tabText: "Reverse Engineering",
        tabIcon: "/images/services/subitems/item2/tabs/normal/img6.png",
        tabIconSelected:
          "/images/services/subitems/item2/tabs/selected/img6.png",
        contentTitle: "Reverse Engineering and 3D Scanning Services",
        contentDescription:
          "Our reverse engineering service converts physical objects into accurate 3D CAD models using advanced scanning and measurement techniques. We help you recreate existing parts, improve designs, and create digital documentation for legacy components.",
        contentImage: "/images/services/subitems/item2/content/img6.png",
        contentLink: "/services/reverse-engineering",
      },
    ],
  },
  {
    title: "Finite Element Analysis (FEA)",
    description: "Combine Engineering and Physics AI for instant design.",
    image: "/images/services/structural-analysis.png",
    subItems: [
      {
        tabText: "Nonlinear Analysis",
        tabIcon: "/images/services/subitems/item3/tabs/normal/img1.png",
        tabIconSelected:
          "/images/services/subitems/item3/tabs/selected/img1.png",
        contentTitle: "Nonlinear Analysis for Complex Material Behavior",
        contentDescription:
          "We use nonlinear FEA to capture real-world responses involving plasticity, contact and large deformations. This approach improves accuracy for metal forming, rubber components, crash simulations and other complex engineering challenges.",
        contentImage: "/images/services/subitems/item3/content/img1.png",
        contentLink: "/services/nonlinear-analysis",
      },
      {
        tabText: "Dynamic Simulation",
        tabIcon: "/images/services/subitems/item3/tabs/normal/img2.png",
        tabIconSelected:
          "/images/services/subitems/item3/tabs/selected/img2.png",
        contentTitle:
          "Dynamic Simulations for Real World Structural Performance",
        contentDescription:
          "Our assembly modeling service ensures perfect part fit and function. We simulate real-life motion, alignment, and constraints to verify mechanical compatibility, optimize performance and prevent costly errors before production begins.",
        contentImage: "/images/services/subitems/item3/content/img2.png",
        contentLink: "/services/dynamic-simulation",
      },
      {
        tabText: "Fatigue & Fracture",
        tabIcon: "/images/services/subitems/item3/tabs/normal/img3.png",
        tabIconSelected:
          "/images/services/subitems/item3/tabs/selected/img3.png",
        contentTitle: "Fatigue and Fracture Analysis for Product Durability",
        contentDescription:
          "Our fatigue and fracture analysis predicts component life and failure risks under cyclic loading. Using detailed stress life and strain life methods, we help extend service life and prevent cracks in critical structures.",
        contentImage: "/images/services/subitems/item3/content/img3.png",
        contentLink: "/services/fatigue-fracture",
      },
      {
        tabText: "Composite Analysis",
        tabIcon: "/images/services/subitems/item3/tabs/normal/img4.png",
        tabIconSelected:
          "/images/services/subitems/item3/tabs/selected/img4.png",
        contentTitle: "Composite Analysis for Structural Strength",
        contentDescription:
          "Our FEA composite analysis evaluates fiber orientations, layer stacking and material behavior under load. We help optimize lightweight structures for strength, stiffness, and durability. Also for Hookean and Non-Hookean models.",
        contentImage: "/images/services/subitems/item3/content/img4.png",
        contentLink: "/services/composite-analysis",
      },
      {
        tabText: "Structural Analysis",
        tabIcon: "/images/services/subitems/item3/tabs/normal/img5.png",
        tabIconSelected:
          "/images/services/subitems/item3/tabs/selected/img5.png",
        contentTitle:
          "Structural Analysis for Strength and Stability Optimization",
        contentDescription:
          "Our FEA-based structural analysis ensures your designs meet strength, stiffness, and stability requirements. We evaluate loads, constraints, and material properties to enhance safety and performance across buildings, machinery, and mechanical components.",
        contentImage: "/images/services/subitems/item3/content/img5.png",
        contentLink: "/services/structural-analysis",
      },
      {
        tabText: "Thermal Analysis",
        tabIcon: "/images/services/subitems/item3/tabs/normal/img6.png",
        tabIconSelected:
          "/images/services/subitems/item3/tabs/selected/img6.png",
        contentTitle: "Thermal Analysis for Temperature Structural Performance",
        contentDescription:
          "We simulate heat distribution and thermal stresses using FEA to improve performance under temperature changes. Our analysis supports thermal protection design, expansion control and reliability in electronics, engines and industrial assemblies",
        contentImage: "/images/services/subitems/item3/content/img6.png",
        contentLink: "/services/thermal-analysis",
      },
    ],
  },
];

export const allHeroSectionItems: IHeroSectionItem[] = [
  {
    badgeText: "Our Most In-Demand CFD Services",
    badgeIcon: "/images/zap-icon.svg",
    title: "Computation Fluid Dynamics - CFD",
    features: [
      "Aerodynamic Analysis",
      "Airflow Optimization",
      "VOF-MultiPhase Analysis",
      "Thermal Managment",
    ],
    placeOrderLink: "/place-order",
    ourServicesLink: "/services",
    image: "/images/hero-section/item1.png",
  },
  {
    badgeText: "Our Most In-Demand CFD Services",
    badgeIcon: "/images/zap-icon.svg",
    title: "Finite Element Analysis - FEA",
    features: [
      "Fatigue & Durability Testing",
      "Fluid-Structure Interational",
      "Structural Stress Analysis",
      "VOF-Multiphase Analysis",
    ],
    placeOrderLink: "/place-order",
    ourServicesLink: "/services",
    image: "/images/hero-section/item2.png",
  },
  {
    badgeText: "Our Most In-Demand CFD Services",
    badgeIcon: "/images/zap-icon.svg",
    title: "Computation Fluid Dynamics-CAD",
    features: [
      "3D Product Design",
      "Reverse Engineering",
      "Mechanical Part Design",
      "Sheet Metal Design",
    ],
    placeOrderLink: "/place-order",
    ourServicesLink: "/services",
    image: "/images/hero-section/item3.png",
  },
];

export interface IClientReview {
  badgeText: string;
  badgeIcon: string;
  title: string;
  reviewText: string;
  clientName: string;
  clientRole: string;
  verifyLinkText: string;
  verifyLink: string;
  image: string;
}

export const allClientReviews: IClientReview[] = [
  {
    badgeText: "Solvo's Premium",
    badgeIcon: "/images/zap-icon.svg",
    title: "What Our Clients Says",
    reviewText:
      "I worked with Muhammad on a classic acoustic topic, trying to develop one project related to my bussiness. He rewied my work, that we shared, improved it, fixed bugs and errors and clearly explained his work. I apreciated the clarity of the workflow proposed and its implementation. He was available and present in spite of our time offset. Also, it was my first time",
    clientName: "Serrena Allen",
    clientRole: "Founder & Co-Founder of Airvitalize",
    verifyLinkText: "Verify our reviews",
    verifyLink: "/verify-reviews",
    image: "/images/client-reviews/review1.png",
  },
  {
    badgeText: "Solvo's Premium",
    badgeIcon: "/images/zap-icon.svg",
    title: "What Our Clients Says",
    reviewText:
      "It was an absolute pleasure to work with Muhammad! He had excellent communication throughout the process, ensuring everything was clear and addressing any questions quickly. His understanding and flexibility made working together very easy. The work was delivered earlier than expected and of high quality. Would definitely recommend.",
    clientName: "Elliot Tucker",
    clientRole: "Managing Member at Megachip Solutions LLC",
    verifyLinkText: "Verify our reviews",
    verifyLink: "/verify-reviews",
    image: "/images/client-reviews/review2.png",
  },
  {
    badgeText: "Solvo's Premium",
    badgeIcon: "/images/zap-icon.svg",
    title: "What Our Clients Says",
    reviewText:
      "Solvo Engineers did an excellent job on our CFD project for airflow optimization in a dust catcher device. They carefully analyzed the design, improved efficiency by addressing critical flow issues, and clearly explained every step of their process. Their expertise and responsiveness made collaboration very smooth and effective.",
    clientName: "Patrick M.",
    clientRole: "Co-Founder & CEO of MLT Solutions",
    verifyLinkText: "Verify our reviews",
    verifyLink: "/verify-reviews",
    image: "/images/client-reviews/review3.png",
  },
];

export interface IIndustryItem {
  name: string;
  icon: string;
}

export const allIndustries: IIndustryItem[] = [
  {
    name: "Aerospace & Defense",
    icon: "/images/about/industries/aerospace-defense.png",
  },
  {
    name: "Automotive & Transportation",
    icon: "/images/about/industries/automotive-transportation.png",
  },
  {
    name: "Energy",
    icon: "/images/about/industries/energy.png",
  },
  {
    name: "Consumer Products",
    icon: "/images/about/industries/consumer-products.png",
  },
  {
    name: "Machinery & Robotics",
    icon: "/images/about/industries/machinery-robotics.png",
  },
  {
    name: "Manufacturing",
    icon: "/images/about/industries/manufacturing.png",
  },
  {
    name: "Marine",
    icon: "/images/about/industries/marine.png",
  },
  {
    name: "Medical",
    icon: "/images/about/industries/medical.png",
  },
];

export interface ICoreValue {
  title: string;
  description: string;
  icon: string;
}

export const allCoreValues: ICoreValue[] = [
  {
    title: "Innovation",
    description: "Innovating with technology and creativity.",
    icon: "/images/about/core-values/innovation.png",
  },
  {
    title: "Integrity",
    description: "We build trust through honesty and transparency.",
    icon: "/images/about/core-values/integrity.png",
  },
  {
    title: "Collabration",
    description: "We collaborate closely to achieve shared success.",
    icon: "/images/about/core-values/collaboration.png",
  },
  {
    title: "Quality",
    description: "Precision and performance define our engineering.",
    icon: "/images/about/core-values/quality.png",
  },
  {
    title: "Client-Centricity",
    description: "We focus on client needs to provide tailored solutions.",
    icon: "/images/about/core-values/client-centricity.png",
  },
  {
    title: "Constant Growth",
    description: "We grow through learning and development.",
    icon: "/images/about/core-values/integrity.png",
  },
];

export interface ICustomerSimulationPhase {
  phaseTitle: string;
  subItems: string[];
  stepNumber: number;
  stepImage: string;
}

export interface ICustomerSimulationItem {
  badgeText: string;
  badgeIcon: string;
  title: string;
  leftPhase: ICustomerSimulationPhase;
  rightPhase: ICustomerSimulationPhase;
}

export const allCustomerSimulationItems: ICustomerSimulationItem[] = [
  {
    badgeText: "Solvo's Premium",
    badgeIcon: "/images/zap-icon.svg",
    title: "Our Customer Simulation",
    leftPhase: {
      phaseTitle: "Information Gathering & Requirement",
      subItems: ["Team Assembly", "Responsibility"],
      stepNumber: 1,
      stepImage: "/images/customer-simulation/step1.png",
    },
    rightPhase: {
      phaseTitle: "Assigning Roles & Responsibilities",
      subItems: ["Consultation", "Requirements Specification"],
      stepNumber: 3,
      stepImage: "/images/customer-simulation/step2.png",
    },
  },
  {
    badgeText: "Solvo's Premium",
    badgeIcon: "/images/zap-icon.svg",
    title: "Our Customer Simulation",
    leftPhase: {
      phaseTitle: "Project Planning & Strategy Development",
      subItems: ["Resource Allocation", "Simulation Roadmap"],
      stepNumber: 7,
      stepImage: "/images/customer-simulation/step3.png",
    },
    rightPhase: {
      phaseTitle: "Simulation Process Execution",
      subItems: ["CAD & Mesh", "Pre & Post Processing"],
      stepNumber: 8,
      stepImage: "/images/customer-simulation/step4.png",
    },
  },
  {
    badgeText: "Solvo's Premium",
    badgeIcon: "/images/zap-icon.svg",
    title: "Our Customer Simulation",
    leftPhase: {
      phaseTitle: "Quality Assurance & Validation",
      subItems: ["Verification Protocals", "Validation Testing"],
      stepNumber: 5,
      stepImage: "/images/customer-simulation/step5.png",
    },
    rightPhase: {
      phaseTitle: "Reporting & Delivery",
      subItems: ["Comprehensive Reporting", "Final Delivery"],
      stepNumber: 6,
      stepImage: "/images/customer-simulation/step6.png",
    },
  },
];
