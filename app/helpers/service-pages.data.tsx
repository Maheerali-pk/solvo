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
        FEA Analysis<span className="text-primary-blue">Services</span>
      </>
    ),
    subtitle:
      "Get clear, accurate FEA results every time, solve complex engineering problems into confident decisions.",
    heroImage: "/images/service-pages/fea-analysis/top-section/hero-image.webp",
    content: {
      title: "FEA Services for Strong & Reliable Products",
      description: (
        <>
          Our FEA services help you design stronger and lighter products with
          confidence.We use finite element analysis to predict how parts and
          assemblies behave under real loads such as stress vibration heat
          impact and fatigue.With accurate FEA simulations we reveal weak points
          early compare design options and guide material choices so you can
          reduce prototypes and shorten development time.Our engineers set clear
          goals define loads and constraints and select the right element types
          and material models so that each FEA analysis reflects real world
          behavior.You get faster answers during concept development and deeper
          insight during detailed design which means better performance lower
          cost and fewer surprises in testing and production.
        </>
      ),
      rightSection: {
        image:
          "/images/service-pages/fea-analysis/top-section/content-image.webp",
        moreServices: [
          {
            title: "Computational Fluid Dynamics - CFD",
            description:
              "Our CFD services provide In-Design insights into fluid flow phrnomena to enchance product efficiency and reliability",
            link: "/services/cfd-analysis",
            logo: "/images/service-pages/cfd-analysis/logo.webp",
          },
          {
            title: "3D CAD Modeling",
            description:
              "Our CAD services transform concept into precise digital models. Facilitating seamless progression form design to production",
            link: "/services/cad-analysis",

            logo: "/images/service-pages/cad-analysis/logo.webp",
          },
        ],
      },
    },
    expertiseItems: [
      {
        title: "Crashworthiness Analysis",
        image: "/images/service-pages/fea-analysis/expertise-items/img1.webp",
      },
      {
        title: "Structural Design Optimization",
        image: "/images/service-pages/fea-analysis/expertise-items/img2.webp",
      },
      {
        title: "Stress Analysis",
        image: "/images/service-pages/fea-analysis/expertise-items/img3.webp",
      },
      {
        title: "Topology Optmisation",
        image: "/images/service-pages/fea-analysis/expertise-items/img4.webp",
      },
      {
        title: "Coupled Thermo-Stress Analysis",
        image: "/images/service-pages/fea-analysis/expertise-items/img5.webp",
      },
      {
        title: "Mesh Independent Study (MIT)",
        image: "/images/service-pages/fea-analysis/expertise-items/img6.webp",
      },
      {
        title: "Buckling Analysis",
        image: "/images/service-pages/fea-analysis/expertise-items/img7.webp",
      },
      {
        title: "Seismic Analysis",
        image: "/images/service-pages/fea-analysis/expertise-items/img8.webp",
      },
      {
        title: "Drop Test's",
        image: "/images/service-pages/fea-analysis/expertise-items/img9.webp",
      },
      {
        title: "Fatigue Analysis",
        image: "/images/service-pages/fea-analysis/expertise-items/img10.webp",
      },
      {
        title: "Structural Analysis",
        image: "/images/service-pages/fea-analysis/expertise-items/img11.webp",
      },
      {
        title: "Modal Analysis",
        image: "/images/service-pages/fea-analysis/expertise-items/img12.webp",
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
        CFD Analysis <span className="text-primary-blue"> Services </span>
      </>
    ),
    subtitle:
      "From airflow and cooling to mixing and pressure drop, CFD shows what's happening inside your design so you can improve it fast",
    heroImage: "/images/service-pages/cfd-analysis/top-section/hero-image.webp",
    content: {
      title: "CFD Services for Enhanced Product Performance",
      description: (
        <>
          Our CFD services help you design stronger and lighter products with
          confidence.We use finite element analysis to predict how parts and
          assemblies behave under real loads such as stress vibration heat
          impact and fatigue.With accurate FEA simulations we reveal weak points
          early compare design options and guide material choices so you can
          reduce prototypes and shorten development time.Our engineers set clear
          goals define loads and constraints and select the right element types
          and material models so that each FEA analysis reflects real world
          behavior.You get faster answers during concept development and deeper
          insight during detailed design which means better performance lower
          cost and fewer surprises in testing and production.
        </>
      ),
      rightSection: {
        image:
          "/images/service-pages/cfd-analysis/top-section/content-image.webp",
        moreServices: [
          {
            title: "Finite Element Analysis - FEA",
            description:
              "Our FEA services deliver in-design guidance on stress and deformation to improve product strength, safety and durability.",
            link: "/services/fea-analysis",

            logo: "/images/service-pages/fea-analysis/logo.webp",
          },
          {
            title: "3D CAD Modeling",
            description:
              "Our CAD services transform concept into precise digital models. Facilitating seamless progression form design to production",
            link: "/services/cad-analysis",

            logo: "/images/service-pages/cad-analysis/logo.webp",
          },
        ],
      },
    },
    expertiseItems: [
      {
        title: "Airflow Testing & Optimisation",
        image: "/images/service-pages/cfd-analysis/expertise-items/img1.webp",
      },
      {
        title: "Combustion Simulations",
        image: "/images/service-pages/cfd-analysis/expertise-items/img2.webp",
      },
      {
        title: "Multi-physics Analysis",
        image: "/images/service-pages/cfd-analysis/expertise-items/img3.webp",
      },
      {
        title: "Particle Tracking Analysis",
        image: "/images/service-pages/cfd-analysis/expertise-items/img4.webp",
      },
      {
        title: "Melting & Solidification",
        image: "/images/service-pages/cfd-analysis/expertise-items/img5.webp",
      },
      {
        title: "HVAC Solutions",
        image: "/images/service-pages/cfd-analysis/expertise-items/img6.webp",
      },
      {
        title: "Turbo Machinery Analysis",
        image: "/images/service-pages/cfd-analysis/expertise-items/img7.webp",
      },
      {
        title: "Fluid-Structure Interaction-FSI",
        image: "/images/service-pages/cfd-analysis/expertise-items/img8.webp",
      },
      {
        title: "Design Optimization",
        image: "/images/service-pages/cfd-analysis/expertise-items/img9.webp",
      },
      {
        title: "Electromagnetic Analysis",
        image: "/images/service-pages/cfd-analysis/expertise-items/img10.webp",
      },
      {
        title: "Hydrodynamic Analysis",
        image: "/images/service-pages/cfd-analysis/expertise-items/img11.webp",
      },
      {
        title: "Thermal Analysis",
        image: "/images/service-pages/cfd-analysis/expertise-items/img12.webp",
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
        CAD Analysis <span className="text-primary-blue"> Services </span>
      </>
    ),
    subtitle:
      "From sketch to 3D model, CAD helps you refine designs, spot issues early, and move faster to manufacturing",
    heroImage: "/images/service-pages/cad-analysis/top-section/hero-image.webp",
    content: {
      title: "CAD Services for Precise Digital Models",
      description: (
        <>
          Our FEA services help you design stronger and lighter products with
          confidence.We use finite element analysis to predict how parts and
          assemblies behave under real loads such as stress vibration heat
          impact and fatigue.With accurate FEA simulations we reveal weak points
          early compare design options and guide material choices so you can
          reduce prototypes and shorten development time.Our engineers set clear
          goals define loads and constraints and select the right element types
          and material models so that each FEA analysis reflects real world
          behavior.You get faster answers during concept development and deeper
          insight during detailed design which means better performance lower
          cost and fewer surprises in testing and production.
        </>
      ),
      rightSection: {
        image:
          "/images/service-pages/cad-analysis/top-section/content-image.webp",
        moreServices: [
          {
            title: "Finite Element Analysis - FEA",
            description:
              "Our FEA services deliver in-design guidance on stress and deformation to improve product strength, safety and durability.",
            link: "/services/fea-analysis",

            logo: "/images/service-pages/fea-analysis/logo.webp",
          },
          {
            title: "Computational Fluid Dynamics - CFD",
            description:
              "Our CFD services provide In-Design insights into fluid flow phrnomena to enchance product efficiency and reliability",
            link: "/services/cfd-analysis",
            logo: "/images/service-pages/cfd-analysis/logo.webp",
          },
        ],
      },
    },
    expertiseItems: [
      {
        title: "3D Modeling",
        image: "/images/service-pages/cad-analysis/expertise-items/img1.webp",
      },
      {
        title: "Assembly Modeling",
        image: "/images/service-pages/cad-analysis/expertise-items/img2.webp",
      },
      {
        title: "Sheet Metal Design",
        image: "/images/service-pages/cad-analysis/expertise-items/img3.webp",
      },
      {
        title: "Design for Manufacturing-DFM",
        image: "/images/service-pages/cad-analysis/expertise-items/img4.webp",
      },
      {
        title: "Parametric Modeling",
        image: "/images/service-pages/cad-analysis/expertise-items/img5.webp",
      },
      {
        title: "Reverse Engineering",
        image: "/images/service-pages/cad-analysis/expertise-items/img6.webp",
      },
      {
        title: "Product Visualization",
        image: "/images/service-pages/cad-analysis/expertise-items/img7.webp",
      },
      {
        title: "CAD Conversion",
        image: "/images/service-pages/cad-analysis/expertise-items/img8.webp",
      },
      {
        title: "Rapid Prototyping",
        image: "/images/service-pages/cad-analysis/expertise-items/img9.webp",
      },
      {
        title: "Geometric Dimensioning & Tolerancing",
        image: "/images/service-pages/cad-analysis/expertise-items/img10.webp",
      },
      {
        title: "BOM - Bill of Materials",
        image: "/images/service-pages/cad-analysis/expertise-items/img11.webp",
      },
      {
        title: "Motion Analysis",
        image: "/images/service-pages/cad-analysis/expertise-items/img12.webp",
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
