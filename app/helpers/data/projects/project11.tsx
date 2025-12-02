import { IFullProject } from "../../projects.data";

export const project11: IFullProject = {
  title:
    "HVAC Simulation – Increasing Natural Flow in Warehouse Using Ansys CFD",
  description:
    "A comprehensive HVAC simulation of a warehouse using Computational Fluid Dynamics (CFD) in Ansys to improve natural ventilation efficiency and optimize airflow patterns.",
  image: "/images/projects/item11/main-image.webp",
  link: "/projects/hvac-warehouse-natural-flow-simulation",
  summary: [
    {
      title: "Project Summary",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              This project focused on performing a comprehensive HVAC (Heating,
              Ventilation, and Air Conditioning) simulation of a warehouse using
              Computational Fluid Dynamics (CFD) in Ansys. The primary objective
              was to improve natural ventilation efficiency and optimize airflow
              patterns within the warehouse to enhance occupant comfort, ensure
              air quality, and reduce dependence on forced mechanical
              ventilation systems.
            </p>
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Warehouses are typically large enclosed spaces with limited
              airflow control, making natural ventilation critical for
              maintaining a safe and comfortable environment. By evaluating air
              velocity, pressure distribution, and turbulence behavior
              throughout the duct system, the study aimed to identify regions of
              stagnation or poor flow and implement design modifications for
              enhanced airflow performance.
            </p>
          </div>
          <div className="w-[40.25rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item11/main-image.webp"
              alt="HVAC Warehouse Simulation"
              className="rounded-[1.25rem] w-[40.25rem] h-[23.25rem] sm:w-full sm:h-auto object-contain"
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
            Primary goals:
          </h3>
          <h3 className="text-[1.375rem] leading-[1.636em] text-footer-heading font-semibold font-poppins">
            The key objectives of this project were:
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              To simulate the air velocity distribution throughout the duct
              network and main warehouse volume.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              To identify zones of low airflow or high turbulence intensity.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              To evaluate pressure drop across diffusers and ducts.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              To reduce turbulence in connector ducts through geometric
              improvements.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              To provide data-driven design recommendations that increase
              natural airflow with minimal energy input.
            </li>
          </ul>
          <h3 className="text-[1.375rem] leading-[1.636em] text-footer-heading font-semibold font-poppins">
            Simulation tools and methodology:
          </h3>
          <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
            <div className="flex-1 flex flex-col gap-4">
              <ul className="flex flex-col gap-4">
                <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                  Software Used: Ansys Fluent (2024 R2)
                </li>
                <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                  Simulation Type: Steady-state turbulent flow (RANS modeling)
                </li>
                <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                  Turbulence Model: k-ε standard model
                </li>
                <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                  Geometry: Multi-duct system with diffusers and small
                  connecting ducts
                </li>
                <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                  Boundary Conditions: Air inlet through natural vents; outlet
                  at ceiling ducts
                </li>
                <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                  Mesh: Hex-dominant mesh with refinement near connectors and
                  diffusers
                </li>
              </ul>
            </div>
            <div className="w-[34.875rem] shrink-0 sm:w-full">
              <img
                src="/images/projects/item11/content-image1.webp"
                alt="Simulation Setup"
                className="rounded-[1.25rem] w-[34.875rem] h-[17.4375rem] sm:w-full sm:h-auto object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Results and Interpretation",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-[1.375rem] leading-[1.636em] text-footer-heading font-semibold font-poppins">
            Velocity Profile
          </h3>
          <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                The airflow analysis revealed a maximum velocity of 6.8 m/s,
                observed near the diffuser outlets, while the minimum velocity
                occurred near the duct junctions and far-field regions within
                the warehouse. The velocity cut plots demonstrated strong
                airflow patterns near the ceiling-level diffusers, ensuring
                effective air delivery to the upper zones. However, stagnation
                zones were identified near the lower rear end of the warehouse,
                indicating areas where airflow distribution could be improved
                for more uniform ventilation.
              </p>
            </div>
            <div className="w-[26.9375rem] shrink-0 sm:w-full">
              <img
                src="/images/projects/item11/content-image2.webp"
                alt="Velocity Profile"
                className="rounded-[1.25rem] w-[26.9375rem] h-[24.4375rem] sm:w-full sm:h-auto object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Surface Pressure Distribution",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              The pressure contour plots indicated a moderate pressure drop from
              the inlet to the diffuser outlets. This result confirms that the
              duct system design effectively pulls air through the network with
              minimal resistance and efficient flow continuity. The overall
              pressure behavior suggests that the airflow is being managed well
              across the system, with no significant losses that could
              compromise ventilation efficiency.
            </p>
          </div>
          <div className="w-[36.75rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item11/content-image3.webp"
              alt="Pressure Distribution"
              className="rounded-[1.25rem] w-[36.75rem] h-[19.3125rem] sm:w-full sm:h-auto object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Turbulence Analysis",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            Localized turbulence zones were detected within small connector
            ducts positioned between the main duct and the diffusers. These
            regions, highlighted by red and yellow contours in the simulation,
            represented areas of increased chaotic flow. The turbulence was
            primarily caused by reduced cross-sectional areas and sharp bends
            within these connector ducts, which disrupted the otherwise smooth
            airflow pattern.
          </p>
        </div>
      ),
    },
    {
      title: "Improvement Recommendations",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            To enhance the overall airflow efficiency, several improvements are
            recommended. The small rigid connector ducts should be replaced with
            flexible ducting featuring larger hydraulic diameters to minimize
            turbulence intensity. Additionally, optimizing the diffuser
            orientation and outlet shape can improve the evenness of airflow
            distribution throughout the warehouse. Lastly, increasing the number
            of air inlets at strategic points will promote better
            cross-ventilation, particularly in areas prone to stagnation,
            ensuring a more balanced and efficient air circulation system.
          </p>
        </div>
      ),
    },
    {
      title: "Conclusion",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            The CFD simulation clearly demonstrated that natural ventilation in
            warehouse environments can be significantly enhanced by modifying
            the duct geometry, diffuser placement, and airflow paths. Through
            this simulation, we provided a clear roadmap for reducing
            turbulence, maximizing natural flow, and enhancing indoor air
            distribution without relying entirely on powered HVAC components.
          </p>
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            The analysis highlights how CFD modeling using Ansys can be a
            powerful tool for validating and optimizing ventilation strategies
            in industrial settings. These improvements are crucial for
            energy-efficient design, regulatory compliance, and worker comfort.
          </p>
        </div>
      ),
    },
  ],
};
