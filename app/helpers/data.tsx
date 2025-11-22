export interface ProductDetail {
  logo: string;
  title: string;
  description: string;
  caseStudyLink: string;
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
