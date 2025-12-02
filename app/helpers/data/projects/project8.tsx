import { IFullProject } from "../../projects.data";

export const project8: IFullProject = {
  title:
    "FEA Analysis and Optimization of an Industrial Fixture Using SolidWorks Simulation",
  description:
    "A comprehensive FEA analysis of a custom-designed industrial fixture assembly to evaluate its structural performance under static loading conditions using SolidWorks Simulation.",
  image: "/images/projects/item8/main-image.webp",
  link: "/projects/fea-industrial-fixture-optimization",
  summary: [
    {
      title: "Project Summary",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              This project involved a comprehensive Finite Element Analysis
              (FEA) of a custom-designed industrial fixture assembly to evaluate
              its structural performance under static loading conditions. The
              primary goal was to assess the fixture's mechanical strength,
              displacement, strain behavior, and safety factor, and to identify
              opportunities for geometry-based optimization to ensure high
              stiffness, minimal deformation, and structural integrity under
              operational loads.
            </p>
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              The simulation was performed using SolidWorks Simulation,
              employing bonded contact conditions and global meshing across a
              multi-part assembly. The results provided critical insights into
              stress concentrations, displacement profiles, and design
              margins—crucial for ensuring reliability and durability in a
              production environment.
            </p>
          </div>
          <div className="w-[43.3125rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item8/main-image.webp"
              alt="Industrial Fixture Analysis"
              className="rounded-[1.25rem] w-[43.3125rem] h-[23.25rem] sm:w-full sm:h-auto object-contain"
            />
          </div>
        </div>
      ),
    },
  ],
  sections: [
    {
      title: "Objectives and Approach",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-[1.375rem] leading-[1.636em] text-footer-heading font-semibold font-poppins">
            Key objectives of this study included:
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Performing static structural analysis on a complex fixture
              assembly using FEA tools.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Verifying the structural capacity under real-world load conditions
              (7,664.79 N applied in the Y-direction).
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Identifying maximum stress zones and displacements to evaluate
              potential points of failure.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Assessing the Factor of Safety (FOS) across all components to
              validate the design.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Supporting fixture weight/stiffness optimization based on
              simulation insights.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Simulation Results",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-[1.375rem] leading-[1.636em] text-footer-heading font-semibold font-poppins">
            Stress Distribution (von Mises Stress)
          </h3>
          <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                The simulation revealed a maximum stress of 146.8 MPa at Node
                13,616 and a minimum stress of 2.25 kPa. The highest stress
                concentrations were observed around localized connection points
                and mounting interfaces. However, all stress values remained
                well within the yield strength of the structural steel used
                (typically above 250 MPa), confirming the component's structural
                reliability under applied loads.
              </p>
            </div>
            <div className="w-[34.25rem] shrink-0 sm:w-full">
              <img
                src="/images/projects/item8/content-image1.webp"
                alt="Stress Distribution"
                className="rounded-[1.25rem] w-[34.25rem] h-[18.375rem] sm:w-full sm:h-auto object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Displacement",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              The analysis showed a maximum displacement of 0.00708 mm at Node
              18,700 and a minimum displacement of 0.00423 mm. The displacement
              contour confirmed minimal deflection, demonstrating sufficient
              stiffness in the fixture, making it ideal for holding or
              supporting applications where rigidity is crucial.
            </p>
          </div>
          <div className="w-[34.25rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item8/content-image2.webp"
              alt="Displacement Analysis"
              className="rounded-[1.25rem] w-[34.25rem] h-[18.375rem] sm:w-full sm:h-auto object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Strain",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            The maximum equivalent strain recorded was 4.072e-4, with strain
            distribution remaining uniform throughout the structure. All values
            stayed within the elastic region, validating both the material
            selection and the structural design integrity of the fixture.
          </p>
        </div>
      ),
    },
    {
      title: "Factor of Safety (FOS)",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            The minimum factor of safety was 4.43 at the location of maximum
            stress, while the maximum FOS reached 100 in low-stress regions. A
            minimum safety factor above 4 indicates a highly conservative and
            robust design, suitable for production environments and high-load
            handling applications.
          </p>
        </div>
      ),
    },
    {
      title: "Conclusion and Optimization Insight",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            The FEA results confirmed that the industrial fixture design is
            structurally sound, exhibiting low deformation, acceptable stress
            levels, and a high safety margin. The minimal displacement observed
            under an applied force of nearly 7.7 kN demonstrates that the
            fixture is well-suited for both heavy-duty and precision
            manufacturing applications. Given the very high safety factor, there
            is significant potential for geometry optimization to further
            enhance performance and efficiency. Possible improvements include
            reducing material volume in low-stress regions to decrease overall
            weight, modifying fillet radii or hole placements to eliminate
            localized stress concentrations, and streamlining the fixture
            geometry to improve manufacturability and cost efficiency without
            compromising structural integrity. Overall, this analysis highlights
            an effective design-to-validation workflow in which CAE tools such
            as FEA are utilized early in the development phase to ensure optimal
            performance, structural reliability, and reduced prototyping costs.
          </p>
        </div>
      ),
    },
  ],
};
