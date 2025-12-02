import { IFullProject } from "../../projects.data";

export const project6: IFullProject = {
  title: "CFD Analysis of Duct to Optimise Cooling using Ansys",
  description:
    "A detailed CFD analysis of a custom duct geometry to evaluate and optimize its cooling performance using Ansys Fluent 2024 R2.",
  image: "/images/projects/item6/main-image.webp",
  link: "/projects/cfd-duct-cooling-optimization",
  summary: [
    {
      title: "Project Summary",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              This project focused on performing a detailed Computational Fluid
              Dynamics (CFD) analysis of a custom duct geometry to evaluate and
              optimize its cooling performance. The analysis was conducted using
              Ansys Fluent 2024 R2, simulating airflow behavior through a curved
              duct with internal components designed to enhance heat transfer
              and airflow distribution.
            </p>
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              The main objective was to identify high-velocity zones, pressure
              drop regions, and flow separation areas to propose design
              improvements that would lead to more uniform cooling, reduced
              recirculation, and better aerodynamic efficiency. This type of CFD
              study is crucial in applications such as HVAC systems, electronics
              cooling, battery thermal management, and industrial ventilation
              systems where optimized duct flow directly impacts system
              performance and reliability.
            </p>
          </div>
          <div className="w-[41.4375rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item6/main-image.webp"
              alt="Duct Cooling Analysis"
              className="rounded-[1.25rem] w-[41.4375rem] h-[23.25rem] sm:w-full sm:h-auto object-contain"
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
              The key goals of this CFD project were:
            </p>
            <ul className="flex flex-col gap-4">
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                To simulate internal flow behavior through a complex duct
                geometry.
              </li>
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                To analyze velocity streamlines, static pressure, and flow
                recirculation zones.
              </li>
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                To identify areas of flow separation and pressure losses that
                impact cooling efficiency.
              </li>
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                To support design modifications that enhance cooling uniformity
                and airflow stability.
              </li>
            </ul>
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              The study used a steady-state, incompressible flow model with a
              turbulence solver (SST k-omega) to resolve near-wall effects. The
              model included features such as turning vanes, flow splitters, and
              an impeller-like component that significantly affected flow
              direction and speed. The domain was meshed using a fine resolution
              grid to capture detailed flow features, especially in curved and
              confined regions.
            </p>
          </div>
          <div className="w-[41.4375rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item6/content-image1.webp"
              alt="Duct Simulation Setup"
              className="rounded-[1.25rem] w-[41.4375rem] h-[23.25rem] sm:w-full sm:h-auto object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Results and Observations",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-[1.375rem] leading-[1.636em] text-footer-heading font-semibold font-poppins">
            Velocity Streamlines
          </h3>
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            As shown in the velocity plot, the airflow undergoes significant
            curvature through the duct, with velocities increasing near the
            impeller region. The flow accelerates around the bend and aligns
            vertically in the outlet section. Streamlines indicate effective
            flow guidance after the fan blades, with minimal swirl at the
            outlet, suggesting well-balanced flow redirection. Maximum flow
            velocity reached approximately 433 m/s, with localized acceleration
            observed at narrow cross-sections and vane exits.
          </p>
        </div>
      ),
    },
    {
      title: "Pressure Contours",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            The pressure distribution plot reveals a high-pressure zone at the
            duct's inlet and near the rotor base, gradually decreasing along the
            duct's length. The pressure drop is evident across the impeller
            region, where the conversion of pressure energy to kinetic energy
            drives flow acceleration. The highest static pressure recorded was
            around 1.2 × 10⁵ Pa, with notable pressure gradients occurring at
            the transition between the horizontal and vertical duct segments.
          </p>
        </div>
      ),
    },
  ],
};
