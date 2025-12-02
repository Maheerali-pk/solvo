import { IFullProject } from "../../projects.data";

export const project10: IFullProject = {
  title: "FEA Analysis of Nylon Injection Moulding Part",
  description:
    "A structural performance evaluation of a nylon-based injection-moulded bracket using Finite Element Analysis (FEA) to validate mechanical strength and reliability under expected load conditions.",
  image: "/images/projects/item10/main-image.webp",
  link: "/projects/fea-nylon-injection-moulding-part",
  summary: [
    {
      title: "Project Summary",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              This project focused on the structural performance evaluation of a
              nylon-based injection-moulded bracket using Finite Element
              Analysis (FEA). The component was designed for use in an
              industrial setting, where it would experience moderate to high
              mechanical loads during service. The goal of the analysis was to
              validate the part's mechanical strength, deformation behavior, and
              overall reliability under expected load conditions, while
              accounting for the material properties of nylon, a commonly used
              engineering thermoplastic.
            </p>
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              This simulation was performed using ANSYS 2024 R2 and incorporated
              accurate material modeling and load application to replicate
              real-world performance. The client required confidence in the
              design prior to tooling and production, especially considering the
              cost-intensive nature of injection mould manufacturing.
            </p>
          </div>
          <div className="w-[29.875rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item10/main-image.webp"
              alt="Nylon Injection Moulding Part"
              className="rounded-[1.25rem] w-[29.875rem] h-[20.9375rem] sm:w-full sm:h-auto object-contain"
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
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            The primary objectives of this FEA project were:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              To assess total deformation under static structural loading.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              To identify critical stress regions based on von Mises criteria.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              To evaluate shear strain and understand material behavior at
              connection points.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              To optimize geometry for durability while ensuring
              manufacturability.
            </li>
          </ul>
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            A 3D CAD model of the bracket was imported and prepared for meshing.
            Due to the complex geometry and filleted features, mesh refinement
            was applied to high-stress regions, especially around the
            load-bearing supports and the mounting hole. Nylon's nonlinear
            elastic-plastic behavior was approximated using available material
            data, and appropriate boundary conditions were applied to simulate
            realistic fixture points and external loading.
          </p>
        </div>
      ),
    },
    {
      title: "Simulation Setup and Conditions",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              The simulation was performed using Nylon 66 (glass-filled) as the
              material, with its corresponding Young's modulus, Poisson's ratio,
              and yield strength accurately defined to reflect realistic
              behavior under load. Fixed supports were applied at the bolt holes
              to simulate actual mounting conditions, while a downward force was
              applied on the upper face to represent the service load. The model
              was meshed using tetrahedral elements, with finer refinement
              around fillets and holes to capture stress concentrations more
              precisely. The Static Structural solver in ANSYS Mechanical was
              employed for the analysis. The key outputs analyzed included total
              deformation, von Mises stress, and shear strain, providing a
              comprehensive understanding of the part's structural response.
            </p>
          </div>
          <div className="w-[29.875rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item10/content-image1.webp"
              alt="Simulation Setup"
              className="rounded-[1.25rem] w-[29.875rem] h-[17.8125rem] sm:w-full sm:h-auto object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Results and Findings",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            The simulation results showed a maximum total deformation of 0.3474
            mm, occurring near the central hole region. This deformation was
            well within acceptable limits, aligning with the inherent
            flexibility of Nylon 66. The equivalent (von Mises) stress reached a
            peak value of 18.18 MPa, which is below the material's yield
            strength, confirming the structural safety and integrity of the
            design under service conditions. Localized shear strain was detected
            around the mounting base, but all values remained under threshold
            limits, indicating no risk of material failure. Overall, the
            analysis validated the part's ability to perform safely under load,
            while minor design optimizations—such as enhancing local fillets and
            adding reinforcing ribs in the loading direction—were recommended to
            further improve stiffness and long-term durability.
          </p>
        </div>
      ),
    },
  ],
};
