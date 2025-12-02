import { IFullProject } from "../../projects.data";

export const project9: IFullProject = {
  title:
    "FEA Analysis of a Beam Bracket for Structural Integrity Using Ansys 2024 R2",
  description:
    "A detailed FEA analysis of a beam bracket to assess its structural integrity, deformation behavior, and load-carrying capacity under realistic boundary conditions using Ansys 2024 R2.",
  image: "/images/projects/item9/main-image.webp",
  link: "/projects/fea-beam-bracket-structural-integrity",
  summary: [
    {
      title: "Project Summary",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base  text-footer-text font-normal font-poppins">
              This project involved conducting a detailed Finite Element
              Analysis (FEA) on a beam bracket to assess its structural
              integrity, deformation behavior, and load-carrying capacity under
              realistic boundary conditions. The simulation was performed using
              Ansys 2024 R2, focusing on quantifying total deformation,
              visualizing stress distribution, and evaluating potential areas of
              mechanical weakness in the bracket's geometry.
            </p>
            <p className="text-base  text-footer-text font-normal font-poppins">
              Beam brackets are critical mechanical components widely used in
              structural frames, machinery bases, and mechanical linkages.
              Ensuring that such brackets maintain stiffness and strength under
              load is essential for product safety and performance. This
              analysis provided actionable insights for design validation and
              geometry optimization.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item9/main-image.webp"
              alt="Beam Bracket Analysis"
              className="rounded-[1.25rem] w-[29.5625rem] h-[23.25rem] sm:w-full sm:h-auto object-contain"
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
          <h3 className="text-[1.375rem]  text-footer-heading font-semibold font-poppins">
            Primary goals:
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="text-base  text-footer-text font-normal font-poppins">
              To evaluate total deformation under applied static loading.
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              To ensure the bracket does not experience excessive displacement
              or structural failure.
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              To identify zones of maximum strain concentration for redesign
              considerations.
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              To verify the bracket meets industrial safety margins under the
              defined loads.
            </li>
          </ul>
          <h3 className="text-[1.375rem]  text-footer-heading font-semibold font-poppins">
            Simulation setup:
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="text-base  text-footer-text font-normal font-poppins">
              Software: Ansys 2024 R2
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Solver type: Static Structural
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Mesh type: Tetrahedral elements with refined mesh around critical
              features
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Loading conditions: Vertical downward force applied on top face
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Constraints: Fully fixed support at base mounting holes
            </li>
            <li className="text-base  text-footer-text font-normal font-poppins">
              Material model: Linear isotropic (mild steel, E = 210 GPa)
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Key Results",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-[1.375rem]  text-footer-heading font-semibold font-poppins">
              Total Deformation
            </h3>
            <p className="text-base  text-footer-text font-normal font-poppins">
              The analysis indicated a maximum deformation of 0.3474 mm and a
              minimum deformation of 0.000 mm at the fixed boundary. The
              deformation was primarily concentrated around the top central
              opening and adjacent fillet regions, which are subjected to higher
              bending moments and redirection of stress flow. This magnitude of
              displacement falls well within acceptable engineering limits for
              static loading applications, thereby confirming the bracket's
              structural and functional stability under the applied load
              conditions.
            </p>
            <h3 className="text-[1.375rem]  text-footer-heading font-semibold font-poppins">
              Stress and Displacement Trends
            </h3>
            <p className="text-base  text-footer-text font-normal font-poppins">
              The results demonstrated a smooth and continuous stress gradient,
              with no signs of stress singularities or severe concentration
              points. The component exhibited minimal twisting or out-of-plane
              warping, which validates a symmetrical load distribution and
              strong geometric stiffness throughout the structure. Furthermore,
              the stress and strain data (not shown here) remained within the
              yield limits of mild steel, ensuring safe and reliable performance
              under the specified design loads.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item9/content-image1.webp"
              alt="Deformation Results"
              className="rounded-[1.25rem] w-[29.5625rem] h-[23.25rem] sm:w-full sm:h-auto object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Conclusion",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base  text-footer-text font-normal font-poppins">
            This FEA-based structural analysis of a beam bracket validates that
            the design can withstand typical static loading without undergoing
            excessive deformation. With a maximum displacement of 0.347 mm, the
            bracket demonstrates excellent stiffness and load resistance. These
            findings confirm the bracket's suitability for use in structural and
            mechanical systems where dimensional stability is critical.
          </p>
          <p className="text-base  text-footer-text font-normal font-poppins">
            The simulation also provides a foundation for further optimization,
            including potential weight reduction or material substitution,
            especially in mass-produced or lightweight engineering applications.
          </p>
        </div>
      ),
    },
  ],
};
