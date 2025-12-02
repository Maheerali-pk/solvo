import { IFullProject } from "../../projects.data";

export const project3: IFullProject = {
  title:
    "CFD Analysis of Compressible Flow in a Converging-Diverging Nozzle Using Ansys Fluent",
  description:
    "A detailed CFD analysis of compressible airflow through a two-dimensional converging-diverging nozzle using Ansys Fluent to investigate subsonic to supersonic flow acceleration.",
  image: "/images/projects/item3/main-image.webp",
  link: "/projects/cfd-compressible-flow-cd-nozzle",
  summary: [
    {
      title: "Project Summary",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base  text-footer-text font-normal font-poppins">
              This project presents a detailed Computational Fluid Dynamics
              (CFD) analysis of compressible airflow through a two-dimensional
              converging-diverging (CD) nozzle using Ansys Fluent. The primary
              aim was to investigate how subsonic flow accelerates to supersonic
              speeds, observe changes in static pressure and Mach number along
              the nozzle, and evaluate the flow regime under choked and expanded
              conditions.
            </p>
            <p className="text-base  text-footer-text font-normal font-poppins">
              CD nozzles are crucial components in propulsion systems,
              especially in aerospace and defense industries, where the
              conversion of thermal energy into directed kinetic energy is
              essential for producing thrust. This CFD simulation helped in
              visualizing how flow behaves under high pressure ratios, enabling
              better understanding and design of nozzle-based exhaust and
              propulsion systems.
            </p>
          </div>
          <div className="w-[33.75rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item3/main-image.webp"
              alt="CD Nozzle CFD Analysis"
              className="rounded-[1.25rem] w-[33.75rem] h-[23.25rem] sm:w-full sm:h-auto object-contain"
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
            <p className="text-base  text-footer-text font-normal font-poppins">
              The key objectives of this project were:
            </p>
            <ul className="flex flex-col gap-4">
              <li className="text-base  text-footer-text font-normal font-poppins">
                To perform a steady-state CFD simulation of compressible flow in
                a CD nozzle using a 2D axisymmetric model.
              </li>
              <li className="text-base  text-footer-text font-normal font-poppins">
                To analyze the Mach number distribution through the nozzle,
                focusing on the transition from subsonic to supersonic flow.
              </li>
              <li className="text-base  text-footer-text font-normal font-poppins">
                To study the static pressure drop and pressure wave propagation
                along the nozzle geometry.
              </li>
              <li className="text-base  text-footer-text font-normal font-poppins">
                To assess nozzle performance under typical pressure ratios
                observed in aerospace applications.
              </li>
            </ul>
            <p className="text-base  text-footer-text font-normal font-poppins">
              The approach involved creating a high-quality 2D structured mesh
              of the nozzle geometry with mesh refinement near the throat and
              outlet regions to accurately capture pressure gradients and shock
              formations. The simulation was set up using Ansys Fluent, with
              appropriate boundary conditions applied for compressible flow
              modeling.
            </p>
          </div>
          <div className="w-[35.125rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item3/content-image1.webp"
              alt="Nozzle Simulation Setup"
              className="rounded-[1.25rem] w-[35.125rem] h-[19.75rem] sm:w-full sm:h-auto object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Simulation Setup and Conditions",
      description: (
        <div className="flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            <li className="text-base  text-footer-text font-normal font-poppins">
              Solver: Density-based solver for compressible, steady-state flow
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Working Fluid: Air, modeled as an ideal gas
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Inlet Boundary: Total pressure inlet with elevated pressure to
              simulate choking and expansion
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Outlet Boundary: Static pressure set to atmospheric conditions
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Turbulence Model: SST k-omega, selected for its balance of
              accuracy in boundary layer and shock resolution
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Wall Conditions: Adiabatic and no-slip
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Geometry: 2D axisymmetric CD nozzle with converging throat and
              smooth diverging outlet
            </li>
          </ul>
          <p className="text-base  text-footer-text font-normal font-poppins">
            The pressure ratio across the nozzle was chosen such that choked
            flow was achieved at the throat, followed by supersonic expansion in
            the divergent section.
          </p>
        </div>
      ),
    },
    {
      title: "Results and Findings",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base  text-footer-text font-normal font-poppins">
            Two main result variables were examined — Mach number distribution
            and static pressure distribution.
          </p>
        </div>
      ),
    },
    {
      title: "Mach Number Distribution:",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base  text-footer-text font-normal font-poppins">
            The Mach number contour clearly shows the acceleration of flow from
            subsonic (blue) in the converging section to Mach 1 at the throat,
            and further increase to Mach 1.55 (red) in the divergent section.
            The continuous color transition confirms a smooth acceleration and
            validates the presence of supersonic flow, typical in well-designed
            CD nozzles under the given boundary conditions. The results match
            closely with isentropic flow theory, indicating the absence of shock
            waves in the current condition.
          </p>
        </div>
      ),
    },
    {
      title: "Static Pressure Distribution:",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base  text-footer-text font-normal font-poppins">
            The static pressure contour reveals a strong pressure drop along the
            nozzle. The pressure is highest at the inlet (red) and reduces
            progressively towards the outlet (cyan), which corresponds to the
            expansion of the flow as it accelerates. The color gradient suggests
            efficient energy conversion from pressure to kinetic energy. No
            adverse pressure gradients or backflow were observed, confirming the
            nozzle operates in a well-expanded regime under these conditions.
          </p>
        </div>
      ),
    },
    {
      title: "Conclusion",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base  text-footer-text font-normal font-poppins">
            This CFD study successfully demonstrated the application of Ansys
            Fluent for simulating compressible flow through a
            converging-diverging nozzle. The simulation results provided
            valuable insights into how pressure and velocity vary throughout the
            nozzle, helping identify conditions for optimal expansion and thrust
            generation.
          </p>
          <p className="text-base  text-footer-text font-normal font-poppins">
            The project confirms that Computational Fluid Dynamics is an
            essential tool for analyzing high-speed internal flows in propulsion
            systems. Engineers can rely on such simulations to validate nozzle
            designs, optimize performance, and minimize costly physical testing
            in early-stage development.
          </p>
        </div>
      ),
    },
  ],
};
