import { IFullProject } from "../../projects.data";

export const project5: IFullProject = {
  title: "CFD Analysis of an RC Aircraft Wing Optimization",
  description:
    "A comprehensive CFD analysis to investigate and optimize the aerodynamic performance of two custom-designed RC aircraft wings using Ansys Fluent.",
  image: "/images/projects/item4/main-image.webp",
  link: "/projects/cfd-rc-aircraft-wing-optimization",
  summary: [
    {
      title: "Project Summary",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              This project involved a comprehensive Computational Fluid Dynamics
              (CFD) analysis to investigate and optimize the aerodynamic
              performance of two custom-designed RC aircraft wings. The aim was
              to evaluate lift and drag characteristics using Ansys Fluent, and
              to determine which wing configuration — a single wing or a
              multi-winglet design — provided better aerodynamic efficiency for
              RC flight applications.
            </p>
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Understanding airflow behavior around aircraft wings is critical
              in designing high-performance aerial platforms. With the growing
              usage of RC (radio-controlled) aircraft in training, recreational
              flying, and UAV applications, optimizing wing design can
              significantly enhance flight stability, endurance, and lift
              generation. This project compared two wing geometries under
              identical simulation conditions to extract valuable insights for
              design improvement.
            </p>
          </div>
          <div className="w-[34.9375rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item4/main-image.webp"
              alt="RC Aircraft Wing Analysis"
              className="rounded-[1.25rem] w-[34.9375rem] h-[17.375rem] sm:w-full sm:h-auto object-contain"
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
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              The key objectives of this project were:
            </p>
            <ul className="flex flex-col gap-4">
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                To evaluate aerodynamic coefficients (lift and drag) of two wing
                designs using CFD analysis in Ansys.
              </li>
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                To determine the impact of multi-winglet configurations on flow
                separation, turbulent intensity, and lift enhancement.
              </li>
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                To visualize the flow field using contours of Mach number,
                static pressure, and dynamic pressure.
              </li>
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                To improve flight performance and lift-to-drag ratio by
                modifying winglet geometry and orientation.
              </li>
            </ul>
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Two wings were designed and simulated:
            </p>
            <ul className="flex flex-col gap-4">
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                Wing 1 – A baseline straight wing with no winglets, modeled at a
                13.3° angle of attack.
              </li>
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                Wing 2 – An optimized wing with multi-winglet design featuring
                three blades positioned at 90°, 0°, and –90°, also analyzed at
                13.3° angle of attack.
              </li>
            </ul>
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              CAD modeling was performed in SolidWorks, and simulations were
              carried out using Ansys Fluent 21 with a pressure-based solver,
              SST k-omega turbulence model, and steady-state assumptions. The
              airflow was treated as incompressible with ideal gas properties.
            </p>
          </div>
          <div className="w-[34.9375rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item4/content-image1.webp"
              alt="Wing Design Comparison"
              className="rounded-[1.25rem] w-[34.9375rem] h-[15.375rem] sm:w-full sm:h-auto object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Simulation Conditions and Assumptions",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <ul className="flex flex-col gap-4">
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                Flow type: Steady, incompressible, turbulent
              </li>
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                Solver: Ansys Fluent (pressure-based)
              </li>
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                Turbulence model: SST k-omega
              </li>
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                Velocity formulation: Absolute
              </li>
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                Material: Air (ideal gas)
              </li>
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                Boundary Conditions: Far-field pressure boundaries with
                initialization from inlet. Turbulence intensity of 5%, viscosity
                ratio of 10
              </li>
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                Meshing: Structured mesh with refinement at wing surfaces and
                wake region
              </li>
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                Lift and drag calculated using standard force vector settings in
                Fluent
              </li>
            </ul>
          </div>
          <div className="w-[36.375rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item4/content-image2.webp"
              alt="Simulation Setup"
              className="rounded-[1.25rem] w-[36.375rem] h-[21.375rem] sm:w-full sm:h-auto object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Results and Findings",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-[1.25rem] leading-[1.8em] text-footer-heading font-semibold font-poppins">
            Aerodynamic Coefficients:
          </h3>
          <h4 className="text-[1.25rem] leading-[1.8em] text-footer-heading font-semibold font-poppins">
            Lift Coefficient (Cl):
          </h4>
          <ul className="flex flex-col gap-4">
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Wing 1 showed a moderate lift coefficient with gradual convergence
              after 30 iterations.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Wing 2 demonstrated a significantly higher lift due to enhanced
              surface interaction from the multi-winglet geometry.
            </li>
          </ul>
          <h4 className="text-[1.25rem] leading-[1.8em] text-footer-heading font-semibold font-poppins">
            Drag Coefficient (Cd):
          </h4>
          <ul className="flex flex-col gap-4">
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Wing 1 had lower initial drag but plateaued quickly.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Wing 2 showed slightly higher drag initially, which later
              stabilized, but the overall lift-to-drag ratio was superior in
              Wing 2.
            </li>
          </ul>
          <h3 className="text-[1.25rem] leading-[1.8em] text-footer-heading font-semibold font-poppins">
            Flow Visualization:
          </h3>
          <h4 className="text-[1.25rem] leading-[1.8em] text-footer-heading font-semibold font-poppins">
            Pressure Coefficient (Cp):
          </h4>
          <ul className="flex flex-col gap-4">
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Wing 2 had a higher pressure difference between the upper and
              lower surfaces, contributing to increased lift.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Sharp pressure gradients near winglet edges confirmed effective
              airflow redirection.
            </li>
          </ul>
          <h4 className="text-[1.25rem] leading-[1.8em] text-footer-heading font-semibold font-poppins">
            Mach Number:
          </h4>
          <ul className="flex flex-col gap-4">
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Both wings operated in subsonic flow regimes.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Wing 2 experienced slightly higher localized flow acceleration due
              to its complex geometry.
            </li>
          </ul>
          <h4 className="text-[1.25rem] leading-[1.8em] text-footer-heading font-semibold font-poppins">
            Turbulent Intensity and Dynamic Pressure:
          </h4>
          <ul className="flex flex-col gap-4">
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Wing 2 had increased turbulent intensity at winglet junctions,
              indicating more energetic boundary layer interaction.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Despite added complexity, the wake profile was narrower,
              suggesting better downstream pressure recovery.
            </li>
          </ul>
          <h4 className="text-[1.25rem] leading-[1.8em] text-footer-heading font-semibold font-poppins">
            Comparative Insight:
          </h4>
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            The multi-winglet wing design (Wing 2) offered improved aerodynamic
            performance, particularly in lift generation, while maintaining
            acceptable drag. The structural complexity introduced by additional
            winglets resulted in enhanced flow reattachment, delayed separation,
            and better pressure recovery, making it more suitable for efficient
            RC aircraft flight.
          </p>
        </div>
      ),
    },
    {
      title: "Conclusion",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            This CFD simulation project using Ansys Fluent successfully
            demonstrated the aerodynamic advantage of a multi-winglet design
            over a standard single wing for RC aircraft applications. By
            comparing lift, drag, and flow behavior through high-fidelity
            simulations, this study validated how geometry optimization directly
            impacts flight performance.
          </p>
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            This analysis not only enhances understanding of aerodynamic
            principles at smaller scales but also reinforces the value of
            CFD-based design workflows in educational and experimental aerospace
            engineering.
          </p>
        </div>
      ),
    },
  ],
};
