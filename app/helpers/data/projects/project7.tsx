import { IFullProject } from "../../projects.data";

export const project7: IFullProject = {
  title:
    "CFD-Based Drag Optimization of Mercedes W11 Formula One Wing Using Ansys Fluent",
  description:
    "A detailed CFD analysis of the Mercedes-AMG W11 Formula One front wing, focusing on optimizing aerodynamic performance by minimizing drag while maintaining controlled downforce characteristics.",
  image: "/images/projects/item7/main-image.webp",
  link: "/projects/cfd-mercedes-w11-wing-optimization",
  summary: [
    {
      title: "Project Summary",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base  text-footer-text font-normal font-poppins">
              This project presents a detailed Computational Fluid Dynamics
              (CFD) analysis of the Mercedes-AMG W11 Formula One front wing,
              with a focus on optimizing aerodynamic performance by minimizing
              drag while maintaining controlled downforce characteristics. The
              study was conducted using Ansys Fluent 2024 R2, and included
              advanced flow visualization tools such as velocity contours and
              streamlines to analyze flow separation, vortex generation, and
              wake development.
            </p>
            <p className="text-base  text-footer-text font-normal font-poppins">
              The front wing of a Formula One car plays a critical role in
              determining the aerodynamic efficiency of the entire vehicle.
              Small modifications to the wing geometry can significantly impact
              drag, downforce, tire wake control, and cornering performance.
              This CFD study simulated airflow across a multi-element front wing
              configuration inspired by the W11 Mercedes F1 car, known for its
              record-breaking efficiency and performance during the 2020 season.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item7/main-image.webp"
              alt="Mercedes W11 Wing Analysis"
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
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base  text-footer-text font-normal font-poppins">
              Main objectives:
            </p>
            <ul className="flex flex-col gap-4">
              <li className="text-base  text-footer-text font-normal font-poppins">
                To simulate external airflow over a realistic multi-element
                Formula One front wing.
              </li>
              <li className="text-base  text-footer-text font-normal font-poppins">
                To reduce aerodynamic drag while retaining favorable
                lift/downforce profiles.
              </li>
              <li className="text-base  text-footer-text font-normal font-poppins">
                To visualize vortex shedding, flow acceleration, and wake
                structure behind the wing.
              </li>
              <li className="text-base  text-footer-text font-normal font-poppins">
                To identify and eliminate regions of flow separation and
                recirculation that lead to drag penalties.
              </li>
            </ul>
          </div>
          <div className="w-[42.375rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item7/content-image1.webp"
              alt="Wing Simulation Setup"
              className="rounded-[1.25rem] w-[42.375rem] h-[23.25rem] sm:w-full sm:h-auto object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Approach:",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base  text-footer-text font-normal font-poppins">
            The wing model was recreated with complex curvature, flaps, and
            endplates to accurately represent the real W11 geometry. CFD
            simulations were conducted under steady-state conditions using Ansys
            Fluent, with the SST k-omega turbulence model employed to
            effectively capture near-wall and separated flow regions. Streamline
            and velocity contour plots were analyzed to study the aerodynamic
            flow behavior and validate the effectiveness of the design
            modifications.
          </p>
        </div>
      ),
    },
    {
      title: "Results and Observations",
      description: (
        <div className="flex flex-col gap-4">
          <h3 className="text-[1.375rem]  text-footer-heading font-semibold font-poppins">
            Velocity and Wake Formation
          </h3>
          <p className="text-base  text-footer-text font-normal font-poppins">
            As shown in the velocity contour plots, the airflow accelerates
            significantly over the upper surfaces of the wing elements while
            remaining attached along the lower surface. Flow visualization
            reveals a clean wake profile, indicating minimal flow separation and
            well-controlled aerodynamic loading. The peak local velocity reached
            approximately 46 m/s, demonstrating successful acceleration across
            the high-camber flap elements. Additionally, the upper flap
            generated a distinct low-pressure region responsible for downforce
            generation, while simultaneously minimizing the strength of trailing
            vortices.
          </p>
          <h3 className="text-[1.375rem]  text-footer-heading font-semibold font-poppins">
            Streamline Analysis
          </h3>
          <p className="text-base  text-footer-text font-normal font-poppins">
            The streamline plots highlight critical aspects of the wing's
            aerodynamic performance. The streamlines bend smoothly over the
            upper surfaces with very limited trailing turbulence, confirming
            stable airflow behavior. A mild vortex formation is observed near
            the junction of the flaps, but without major separation, indicating
            efficient flow redirection. Furthermore, the endplate interaction
            with the main flow effectively minimizes tire wake influence,
            thereby maintaining aerodynamic stability and reducing cross-flow
            interference.
          </p>
          <h3 className="text-[1.375rem]  text-footer-heading font-semibold font-poppins">
            Drag Optimization Impact
          </h3>
          <p className="text-base  text-footer-text font-normal font-poppins">
            Design refinements led to a noticeable reduction in pressure drag
            across the frontal section of the wing. This optimization also
            resulted in reduced wake turbulence downstream, causing less
            aerodynamic disturbance for the rear aero components. As a result,
            the refined design enhances both straight-line speed and corner
            entry consistency, which are essential performance factors in
            competitive motorsports.
          </p>
        </div>
      ),
    },
    {
      title: "Conclusion",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base  text-footer-text font-normal font-poppins">
            This CFD-based drag optimization of the Mercedes W11 Formula One
            front wing demonstrates how precise aerodynamic design and
            simulation can dramatically improve performance. By leveraging Ansys
            Fluent for airflow simulation, this study successfully reduced drag
            while maintaining critical downforce levels and minimizing wake
            turbulence.
          </p>
          <p className="text-base  text-footer-text font-normal font-poppins">
            Such simulation-based workflows are essential in high-performance
            motorsport engineering, where every millisecond counts. The results
            underscore the power of Computational Fluid Dynamics in optimizing
            complex aerodynamic systems for both professional racing and
            automotive R&D applications.
          </p>
        </div>
      ),
    },
  ],
};
