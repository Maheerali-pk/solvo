import React from "react";

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
interface IMoreServicesItem {
  title: string;
  description: string;
  link: string;
  logo: string;
}
interface IServiceExpertiseItem {
  title: string;
  image: string;
}

export interface IFAQ {
  question: string;
  answer: string;
}

export interface IServiceItem {
  id: "fea-analysis" | "cfd-analysis" | "cad-analysis";
  title: React.ReactNode;
  subtitle: string;
  heroImage: string;
  content: {
    title: string;
    description: React.ReactNode;
    rightSection: {
      image: string;
      moreServices: IMoreServicesItem[];
    };
  };
  expertiseItems: IServiceExpertiseItem[];
  faqs: IFAQ[];
}

export const allServiceItems: IServiceItem[] = [
  {
    id: "fea-analysis",
    title: (
      <>
        FEA Analysis <span className="text-primary-blue">Services</span>
      </>
    ),
    subtitle:
      "Get clear, accurate FEA results every time, solve complex engineering problems into confident decisions.",
    heroImage: "/images/service-pages/fea-analysis/top-section/hero-image.png",
    content: {
      title: "FEA Services for Strong & Reliable Products",
      description: (
        <>
          Our FEA services help you design stronger and lighter products with
          confidence. We use finite element analysis to predict how parts and
          assemblies behave under real loads such as stress vibration heat
          impact and fatigue. With accurate FEA simulations we reveal weak
          points early compare design options and guide material choices so you
          can reduce prototypes and shorten development time. Our engineers set
          clear goals define loads and constraints and select the right element
          types and material models so that each FEA analysis reflects real
          world behavior. You get faster answers during concept development and
          deeper insight during detailed design which means better performance
          lower cost and fewer surprises in testing and production.
        </>
      ),
      rightSection: {
        image:
          "/images/service-pages/fea-analysis/top-section/content-image.png",
        moreServices: [
          {
            title: "Computational Fluid Dynamics - CFD",
            description:
              "Our CFD services provide In-Design insights into fluid flow phrnomena to enchance product efficiency and reliability",
            link: "/services/cfd-analysis",
            logo: "/images/service-pages/cfd-analysis/logo.png",
          },
          {
            title: "3D CAD Modeling",
            description:
              "Our CAD services transform concept into precise digital models. Facilitating seamless progression form design to production",
            link: "/services/cad-analysis",

            logo: "/images/service-pages/cad-analysis/logo.png",
          },
        ],
      },
    },
    expertiseItems: [
      {
        title: "Crashworthiness Analysis",
        image: "/images/service-pages/fea-analysis/expertise-items/img1.png",
      },
      {
        title: "Structural Design Optimization",
        image: "/images/service-pages/fea-analysis/expertise-items/img2.png",
      },
      {
        title: "Stress Analysis",
        image: "/images/service-pages/fea-analysis/expertise-items/img3.png",
      },
      {
        title: "Topology Optmisation",
        image: "/images/service-pages/fea-analysis/expertise-items/img4.png",
      },
      {
        title: "Coupled Thermo-Stress Analysis",
        image: "/images/service-pages/fea-analysis/expertise-items/img5.png",
      },
      {
        title: "Mesh Independent Study (MIT)",
        image: "/images/service-pages/fea-analysis/expertise-items/img6.png",
      },
      {
        title: "Buckling Analysis",
        image: "/images/service-pages/fea-analysis/expertise-items/img7.png",
      },
      {
        title: "Seismic Analysis",
        image: "/images/service-pages/fea-analysis/expertise-items/img8.png",
      },
      {
        title: "Drop Test's",
        image: "/images/service-pages/fea-analysis/expertise-items/img9.png",
      },
      {
        title: "Fatigue Analysis",
        image: "/images/service-pages/fea-analysis/expertise-items/img10.png",
      },
      {
        title: "Structural Analysis",
        image: "/images/service-pages/fea-analysis/expertise-items/img11.png",
      },
      {
        title: "Modal Analysis",
        image: "/images/service-pages/fea-analysis/expertise-items/img12.png",
      },
    ],
    faqs: [
      {
        question: "What is FEA and how does it work?",
        answer:
          "FEA or finite element analysis uses models to simulate how parts handle stress, heat, and motion. FEA simulations predict failure, stiffness, and safety before prototyping, saving time, cost, and risk.",
      },
      {
        question: "Why choose finite element analysis for product design?",
        answer:
          "Finite element analysis reveals weak points early, reduces material waste, and speeds iterations. Our FEA analysis guides decisions, improving performance, reliability, and compliance while cutting prototypes, rework, and risk.",
      },
      {
        question: "What problems can FEA simulations find early?",
        answer:
          "FEA simulations uncover stress concentrations, buckling, fatigue life issues, vibration problems, thermal hot spots, contact pressure, and deflection. Finding these early avoids redesigns and delays while improving performance and durability.",
      },
      {
        question: "How accurate are your FEA analysis results?",
        answer:
          "Accuracy comes from correct material data, boundary conditions, and mesh quality. We validate models, run sensitivity checks, and compare with test data so FEA results align closely with real behavior.",
      },
      {
        question: "Which materials and loads can you simulate?",
        answer:
          "We run FEA analysis for metals, plastics, rubbers, and composites under static, dynamic, thermal, drop, impact, and fluid loads. Nonlinear contacts and deformations are handled where physics demands it.",
      },
      {
        question: "What deliverables come with your FEA service?",
        answer:
          "You receive a clear report, result plots, design recommendations, and the simulation files. We also provide updated CAD suggestions and review sessions so your team can apply the findings confidently.",
      },
      {
        question: "Do you validate FEA simulations with testing data?",
        answer:
          "Yes. When possible we compare FEA simulations with lab tests, strain measurements, or field data. This feedback loop builds confidence, improves models, and ensures reliable decisions for design and certification.",
      },
      {
        question: "Can you optimize designs using FEA analysis?",
        answer:
          "Absolutely. We use FEA analysis to iterate thickness, ribs, fillets, and materials, and to explore topology options. The goal is lighter, stronger, more manufacturable products that still meet safety targets.",
      },
      {
        question: "Will FEA improve safety and reduce warranty risks?",
        answer:
          "By revealing failure modes and fatigue issues before production, FEA and finite element analysis guide safer designs. Better margins reduce returns, downtime, and warranty exposure while protecting your brand.",
      },
    ],
  },
  {
    id: "cfd-analysis",
    title: (
      <>
        CFD Analysis <span className="text-primary-blue">Services</span>
      </>
    ),
    subtitle:
      "From airflow and cooling to mixing and pressure drop, CFD shows what's happening inside your design so you can improve it fast",
    heroImage: "/images/service-pages/cfd-analysis/top-section/hero-image.png",
    content: {
      title: "CFD Services for Enhanced Product Performance",
      description: (
        <>
          Our CFD services help you design stronger and lighter products with
          confidence. We use finite element analysis to predict how parts and
          assemblies behave under real loads such as stress vibration heat
          impact and fatigue. With accurate FEA simulations we reveal weak
          points early compare design options and guide material choices so you
          can reduce prototypes and shorten development time. Our engineers set
          clear goals define loads and constraints and select the right element
          types and material models so that each FEA analysis reflects real
          world behavior. You get faster answers during concept development and
          deeper insight during detailed design which means better performance
          lower cost and fewer surprises in testing and production.
        </>
      ),
      rightSection: {
        image:
          "/images/service-pages/cfd-analysis/top-section/content-image.png",
        moreServices: [
          {
            title: "Finite Element Analysis - FEA",
            description:
              "Our FEA services deliver in-design guidance on stress and deformation to improve product strength, safety and durability.",
            link: "/services/fea-analysis",

            logo: "/images/service-pages/fea-analysis/logo.png",
          },
          {
            title: "3D CAD Modeling",
            description:
              "Our CAD services transform concept into precise digital models. Facilitating seamless progression form design to production",
            link: "/services/cad-analysis",

            logo: "/images/service-pages/cad-analysis/logo.png",
          },
        ],
      },
    },
    expertiseItems: [
      {
        title: "Airflow Testing & Optimisation",
        image: "/images/service-pages/cfd-analysis/expertise-items/img1.png",
      },
      {
        title: "Combustion Simulations",
        image: "/images/service-pages/cfd-analysis/expertise-items/img2.png",
      },
      {
        title: "Multi-physics Analysis",
        image: "/images/service-pages/cfd-analysis/expertise-items/img3.png",
      },
      {
        title: "Particle Tracking Analysis",
        image: "/images/service-pages/cfd-analysis/expertise-items/img4.png",
      },
      {
        title: "Melting & Solidification",
        image: "/images/service-pages/cfd-analysis/expertise-items/img5.png",
      },
      {
        title: "HVAC Solutions",
        image: "/images/service-pages/cfd-analysis/expertise-items/img6.png",
      },
      {
        title: "Turbo Machinery Analysis",
        image: "/images/service-pages/cfd-analysis/expertise-items/img7.png",
      },
      {
        title: "Fluid-Structure Interaction-FSI",
        image: "/images/service-pages/cfd-analysis/expertise-items/img8.png",
      },
      {
        title: "Design Optimization",
        image: "/images/service-pages/cfd-analysis/expertise-items/img9.png",
      },
      {
        title: "Electromagnetic Analysis",
        image: "/images/service-pages/cfd-analysis/expertise-items/img10.png",
      },
      {
        title: "Hydrodynamic Analysis",
        image: "/images/service-pages/cfd-analysis/expertise-items/img11.png",
      },
      {
        title: "Thermal Analysis",
        image: "/images/service-pages/cfd-analysis/expertise-items/img12.png",
      },
    ],
    faqs: [
      {
        question: "What is CFD and how does it work?",
        answer:
          "CFD or computational fluid dynamics uses models to simulate airflow, heat, and turbulence. CFD analysis predicts pressure, velocity, temperature, and forces before prototyping, reducing cost, time, and risk.",
      },
      {
        question: "Why choose computational fluid dynamics for design?",
        answer:
          "Computational fluid dynamics reveals flow separation, recirculation, and hot spots early. CFD simulations guide shapes, vents, and cooling choices, improving performance, energy efficiency, reliability, and compliance while shortening iterations.",
      },
      {
        question: "What problems can CFD simulations identify early?",
        answer:
          "CFD analysis uncovers excessive pressure drop, vortices, cavitation, erosion risk, mixing issues, insufficient cooling, and noise sources. Finding them early prevents redesigns, improves durability, and increases safety margins.",
      },
      {
        question: "How accurate are your CFD analysis results?",
        answer:
          "Accuracy depends on boundary conditions, mesh quality, turbulence models, and material data. We validate with experiments when possible, perform sensitivity checks, and document assumptions so predictions align with real behavior.",
      },
      {
        question: "Which physics and materials can you simulate?",
        answer:
          "We run CFD simulations for air, water, oils, gases, steam, and multiphase mixtures. Models include heat transfer, conjugate cooling, compressible flows, rotating machinery, reacting flows, and species transport.",
      },
      {
        question: "What deliverables come with your CFD service?",
        answer:
          "You receive a clear report, visuals, and design recommendations. Deliverables include contour plots, streamlines, key metrics, and the simulation files, plus a review meeting to discuss results and next steps.",
      },
      {
        question: "How long does a typical CFD project take?",
        answer:
          "Many CFD projects finish within days to a few weeks depending on geometry cleanup, physics complexity, and computing needs. We set milestones and communicate progress clearly at each stage.",
      },
      {
        question: "Which file formats do you accept and deliver?",
        answer:
          "We accept native files plus STEP IGES Parasolid and deliver drawings in PDF and DWG. Clear naming, versions, and assemblies ensure smooth collaboration with your team and vendors.",
      },
      {
        question: "Do you validate CFD simulations with testing?",
        answer:
          "Yes. When possible we compare CFD results with lab measurements or field data like temperatures, flow rates, and pressures. This feedback improves models and builds confidence for certification decisions.",
      },
      {
        question: "Can you optimize designs using CFD analysis?",
        answer:
          "Absolutely. We use CFD to iterate shapes, ducts, inlets, and vents, balancing pressure drop, mixing, and cooling. The outcome is lighter, quieter, more efficient products with fewer parts.",
      },
    ],
  },
  {
    id: "cad-analysis",
    title: (
      <>
        CAD Analysis <span className="text-primary-blue">Services</span>
      </>
    ),
    subtitle:
      "From sketch to 3D model, CAD helps you refine designs, spot issues early, and move faster to manufacturing",
    heroImage: "/images/service-pages/cad-analysis/top-section/hero-image.png",
    content: {
      title: "CAD Services for Precise Digital Models",
      description: (
        <>
          Our FEA services help you design stronger and lighter products with
          confidence. We use finite element analysis to predict how parts and
          assemblies behave under real loads such as stress vibration heat
          impact and fatigue. With accurate FEA simulations we reveal weak
          points early compare design options and guide material choices so you
          can reduce prototypes and shorten development time. Our engineers set
          clear goals define loads and constraints and select the right element
          types and material models so that each FEA analysis reflects real
          world behavior. You get faster answers during concept development and
          deeper insight during detailed design which means better performance
          lower cost and fewer surprises in testing and production.
        </>
      ),
      rightSection: {
        image:
          "/images/service-pages/cad-analysis/top-section/content-image.png",
        moreServices: [
          {
            title: "Finite Element Analysis - FEA",
            description:
              "Our FEA services deliver in-design guidance on stress and deformation to improve product strength, safety and durability.",
            link: "/services/fea-analysis",

            logo: "/images/service-pages/fea-analysis/logo.png",
          },
          {
            title: "Computational Fluid Dynamics - CFD",
            description:
              "Our CFD services provide In-Design insights into fluid flow phrnomena to enchance product efficiency and reliability",
            link: "/services/cfd-analysis",
            logo: "/images/service-pages/cfd-analysis/logo.png",
          },
        ],
      },
    },
    expertiseItems: [
      {
        title: "3D Modeling",
        image: "/images/service-pages/cad-analysis/expertise-items/img1.png",
      },
      {
        title: "Assembly Modeling",
        image: "/images/service-pages/cad-analysis/expertise-items/img2.png",
      },
      {
        title: "Sheet Metal Design",
        image: "/images/service-pages/cad-analysis/expertise-items/img3.png",
      },
      {
        title: "Design for Manufacturing-DFM",
        image: "/images/service-pages/cad-analysis/expertise-items/img4.png",
      },
      {
        title: "Parametric Modeling",
        image: "/images/service-pages/cad-analysis/expertise-items/img5.png",
      },
      {
        title: "Reverse Engineering",
        image: "/images/service-pages/cad-analysis/expertise-items/img6.png",
      },
      {
        title: "Product Visualization",
        image: "/images/service-pages/cad-analysis/expertise-items/img7.png",
      },
      {
        title: "CAD Conversion",
        image: "/images/service-pages/cad-analysis/expertise-items/img8.png",
      },
      {
        title: "Rapid Prototyping",
        image: "/images/service-pages/cad-analysis/expertise-items/img9.png",
      },
      {
        title: "Geometric Dimensioning & Tolerancing",
        image: "/images/service-pages/cad-analysis/expertise-items/img10.png",
      },
      {
        title: "BOM - Bill of Materials",
        image: "/images/service-pages/cad-analysis/expertise-items/img11.png",
      },
      {
        title: "Motion Analysis",
        image: "/images/service-pages/cad-analysis/expertise-items/img12.png",
      },
    ],
    faqs: [
      {
        question: "What is CAD and how does it work?",
        answer:
          "CAD or computer aided design uses 3D models to plan shape fit and function. Our CAD modeling shows assemblies early, reduces mistakes, and speeds prototypes, tooling, and manufacturing handoff.",
      },
      {
        question: "Why use 3D CAD for product design projects?",
        answer:
          "3D CAD lets us explore alternatives quickly, test clearances, and check assembly steps. Designs improve earlier, change costs drop, and you get reliable data for simulation, drawings, machining or molding.",
      },
      {
        question: "What CAD services do you provide for clients?",
        answer:
          "We provide 3D CAD modeling, detailed drafting, assemblies, surface modeling, sheet metal, mechanisms, BOMs, exploded views, renderings, and manufacturing packs. We also prepare DFM reviews and handoff packages for suppliers.",
      },
      {
        question: "How accurate are your CAD models and drawings?",
        answer:
          "Accuracy comes from good constraints, references, and careful checks. We use model validation, interference detection, and controlled revisions so CAD models and drawings match real parts and assembly intent.",
      },
      {
        question: "Can you create manufacturing drawings and tolerances?",
        answer:
          "Yes. We create dimensioned manufacturing drawings with GD&T where required. Tolerances, notes, materials, and finishes are specified, aligned with your supplier capabilities for CNC machining, sheet metal, or molding.",
      },
      {
        question: "Do you reverse engineer parts from physical samples?",
        answer:
          "Yes. We reverse engineer parts using calipers, scans, to recreate accurate CAD geometry. Critical datums and tolerances are captured, and we produce manufacturable drawings and STEP files for production.",
      },
      {
        question:
          "Can you optimize designs for weight cost and manufacturability?",
        answer:
          "Yes. We optimize wall thickness, ribs, draft, and fillets, balancing strength, weight, cost, and manufacturability. DFM and DFA checks reduce machining time, mold complexity, and assembly steps without sacrificing performance.",
      },
      {
        question: "How long does a typical CAD project take?",
        answer:
          "Most CAD projects complete within days to a few weeks depending on part complexity, revision rounds, and supplier needs. We set clear milestones and communicate progress with checkpoints and reviews.",
      },
      {
        question: "How do you handle CAD models for FEA?",
        answer:
          "Send native CAD or STEP files. We clean geometry, defeature where needed, and ensure contacts and loads reflect reality. Good CAD preparation improves mesh quality and speeds accurate simulation results.",
      },
    ],
  },
];

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
    title: "Our Customer Simulation Process",
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

export interface IProject {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const allProjects: IProject[] = [
  {
    title: "CFD Analysis of CD Nozzle (Convergent-Divergent)",
    description:
      "Supersonic flow simulation through a CD nozzle capturing Mach variations and shock transitions for propulsion system...",
    image: "/images/shared/projects/img1.png",
    link: "/projects/cfd-cd-nozzle",
  },
  {
    title: "FEA Analysis and Optimization of Industrial Fixture",
    description:
      "Structural FEA of a precision fixture under clamping loads with optimization for stiffness, deformation...",
    image: "/images/shared/projects/img2.png",
    link: "/projects/fea-industrial-fixture",
  },
  {
    title: "FEA Analysis of Beam Bracket for Structural Integrity",
    description:
      "Simulation of a beam bracket to ensure durability and strength under static loading, evaluating stress distribution...",
    image: "/images/shared/projects/img3.png",
    link: "/projects/fea-beam-bracket",
  },
  {
    title:
      "CFD Analysis of Flow Characteristics Around an Ahmed Body with Varying Slant Angles Using Ansys",
    description:
      "External aerodynamic simulation of an Ahmed body to study drag sensitivity across...",
    image: "/images/shared/projects/img5.png",
    link: "/projects/cfd-ahmed-body",
  },
  {
    title: "Drag Reduction CFD Study of W11 F1 Rear Wing",
    description:
      "A focused aerodynamic study of the Mercedes W11 rear wing assembly to reduce drag and vortex shedding at...",
    image: "/images/shared/projects/img6.png",
    link: "/projects/cfd-f1-rear-wing",
  },
];
