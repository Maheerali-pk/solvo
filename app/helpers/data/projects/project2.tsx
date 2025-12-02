import { IFullProject } from "../../projects.data";
export const project2: IFullProject = {
  title:
    "CFD Analysis of Flow Characteristics Around an Ahmed Body with Varying Slant Angles Using Ansys",
  description:
    "A computational fluid dynamics study examining aerodynamic behavior around an Ahmed body model with different rear slant angles using Ansys Fluent.",
  image: "/images/projects/item2/main-image.webp",
  link: "/projects/cfd-ahmed-body-varying-slant-angles",
  summary: [
    {
      title: "Project Summary",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              This project focused on conducting a computational fluid dynamics
              (CFD) study to examine the aerodynamic behavior around an Ahmed
              body model with different rear slant angles. The Ahmed body,
              widely used as a benchmark in vehicle aerodynamics research,
              provides valuable insight into flow separation, drag
              characteristics, and wake formation patterns. This study aimed to
              analyze how variations in the slant angle influence flow behavior,
              pressure distribution, and aerodynamic drag, using Ansys Fluent as
              the primary simulation tool.
            </p>
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              The analysis involved simulating external incompressible flow over
              the Ahmed body for several slant angles ranging from low to high
              values. Each configuration was studied under identical inlet
              conditions to isolate the influence of slant geometry. The
              numerical simulations included turbulence modeling to accurately
              predict recirculation zones and wake behavior behind the body. Key
              performance indicators such as drag coefficient, vortex formation,
              and surface pressure were extracted for comparison and evaluation.
            </p>
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              This type of analysis is critical in automotive aerodynamic
              design, as optimizing the rear-end geometry of a vehicle can
              significantly reduce pressure drag and improve fuel efficiency.
              The project's findings provided a comprehensive understanding of
              how rear geometry modifications can impact the overall aerodynamic
              performance of bluff bodies, particularly under turbulent flow
              regimes.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item2/main-image.webp"
              alt="Ahmed Body CFD Analysis"
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
        <div className="flex flex-row gap-4 sm:flex-col sm:gap-6">
          <div className="">
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              The main objectives of this CFD study were:
            </p>
            <ul className="flex flex-col gap-4">
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                To analyze the flow field characteristics over an Ahmed body for
                different slant angles.
              </li>
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                To evaluate how changes in the slant angle affect drag
                coefficient and wake behavior.
              </li>
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                To identify the critical slant angle at which significant flow
                separation occurs.
              </li>
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                To investigate turbulence intensity and recirculation patterns
                in the wake region.
              </li>
            </ul>
            <br />
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              The simulation approach included:
            </p>
            <br />
            <ul className="flex flex-col gap-4 relative">
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                Building a clean 3D geometry of the Ahmed body with parametric
                control over the slant angle.
              </li>
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                Creating a structured mesh with refined regions near the wall
                boundaries and wake zone.
              </li>
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                Defining steady-state incompressible flow conditions with a
                uniform velocity inlet and pressure outlet.
              </li>
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins ">
                Using the realizable k-epsilon turbulence model with enhanced
                wall treatment to resolve near-wall flow features accurately.
              </li>
              <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
                Running simulations in Ansys Fluent for multiple slant angles,
                typically ranging from 25° to 40°, and comparing results across
                each configuration.
              </li>
            </ul>
          </div>
          <div className="flex flex-row gap-11 flex-1 sm:flex-col sm:gap-6 mt-4">
            <div className="w-[41.1875rem] shrink-0 sm:w-full">
              <img
                src="/images/projects/item2/content-image1.webp"
                alt="Ahmed Body Simulation Setup"
                className="rounded-[1.25rem] w-[41.1875rem] h-[23.25rem] sm:w-full sm:h-auto object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Simulation Conditions and Assumptions",
      description: (
        <div className="flex flex-row gap-4 sm:flex-col sm:gap-6">
          <ul className="flex flex-col gap-4">
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              The fluid was considered as air at standard atmospheric pressure
              and temperature.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              The flow was modeled as steady-state, turbulent, and
              incompressible.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              No-slip boundary conditions were applied to all body surfaces.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              The Reynolds number was maintained in the range of 1–2 million,
              representative of scaled vehicle conditions.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Slant angles evaluated included 25°, 30°, 35°, and 40°, covering
              the transition region from attached to separated flow.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              The domain size and boundary conditions were set according to best
              practices to minimize blockage and recirculation effects from
              domain walls.
            </li>
          </ul>
          <div className="flex flex-row gap-11 sm:flex-col sm:gap-6 mt-4">
            <div className="w-[41.1875rem] shrink-0 sm:w-full">
              <img
                src="/images/projects/item2/content-image2.webp"
                alt="Simulation Conditions"
                className="rounded-[1.25rem] w-[41.1875rem] h-[23.25rem] sm:w-full sm:h-auto object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Results and Findings",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            The CFD analysis provided detailed insights into how aerodynamic
            behavior evolves with changing slant angles. Key findings include:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              At lower slant angles (25° and 30°), the flow remained mostly
              attached to the slanted rear surface, resulting in relatively
              lower drag and more stable wake.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              At a slant angle of 35°, partial separation occurred, increasing
              the wake width and causing a noticeable rise in pressure drag.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              At 40°, complete flow separation took place along the slant
              surface, forming a large recirculation bubble in the wake and
              significantly increasing the drag coefficient.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              The drag coefficient was observed to increase non-linearly with
              slant angle, highlighting a critical angle where flow separation
              begins to dominate the aerodynamic response.
            </li>
          </ul>
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            These findings demonstrated how rear-end design can dramatically
            affect aerodynamic performance, validating the Ahmed body as a
            valuable tool in conceptual vehicle design optimization.
          </p>
        </div>
      ),
    },
  ],
};
