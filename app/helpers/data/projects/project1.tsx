import { IFullProject } from "../../projects.data";

export const project1: IFullProject = {
  title: "1U CubeSat Thermal-Mechanical (Coupled) Stress Analysis",
  description:
    "A detailed coupled thermal and mechanical stress analysis of a standard 1U CubeSat intended for low Earth orbit operations.",
  image: "/images/projects/item1/main-image.webp",
  link: "/projects/1u-cubesat-thermal-mechanical-analysis",
  summary: [
    {
      title: "Project Summary",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              This project focused on performing a detailed coupled thermal and
              mechanical stress analysis of a standard 1U CubeSat intended for
              low Earth orbit operations. The objective was to study how
              combined temperature variations and mechanical loads would
              influence the overall structural integrity of the satellite during
              its mission lifecycle. These conditions included the high
              mechanical stresses generated during the launch phase and the
              large temperature fluctuations experienced in space as the CubeSat
              transitions between sunlight and shadowed regions of orbit.
            </p>
            <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              The analysis was designed to represent realistic mission
              conditions. This involved applying both transient thermal cycles
              and mechanical load cases simultaneously to evaluate the
              satellite's ability to withstand operational extremes. Advanced
              finite element analysis (FEA) techniques were utilized to
              establish an accurate multiphysics simulation environment capable
              of capturing temperature-dependent material behavior and stress
              response. The coupled simulation helped predict how thermal
              expansion, contraction, and structural deflection interact when
              exposed to space conditions.
            </p>
          </div>
          <div className="w-[29.5625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item1/main-image.webp"
              alt="CubeSat Analysis"
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
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            The core goal of this study was to ensure that the CubeSat's
            structural design could sustain combined loading without failure,
            deformation, or functional compromise. Specific objectives included:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Determining how temperature gradients influence the distribution
              of stress and strain within the satellite's structural frame.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Simulating the dynamic acceleration and vibration effects
              experienced during rocket launch.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Identifying stress concentrations, potential failure zones, and
              the influence of material choices under combined
              thermal-mechanical loading.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Providing recommendations for improving the CubeSat's mechanical
              stability and thermal resilience through minor geometric or
              material adjustments.
            </li>
          </ul>
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            A high-fidelity finite element model of the CubeSat's structure was
            developed for the analysis. The model included all key subsystems
            such as outer panels, internal frames, fasteners, and PCB mounting
            surfaces. Special attention was given to mesh refinement in areas
            near screw holes, joints, and electronic housing interfaces where
            local stress peaks were anticipated. The thermal environment was
            modeled using a transient heat transfer analysis, followed by a
            fully coupled thermal-structural simulation to assess the mechanical
            response induced by temperature variations.
          </p>
        </div>
      ),
    },
    {
      title: "Simulation Conditions and Assumptions",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            The coupled analysis accounted for the extreme environmental and
            operational loads typical of CubeSat missions. The following
            conditions and parameters were considered:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Thermal cycling between –40°C and +85°C to represent orbital
              exposure to sunlight and Earth shadow.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Heat flux boundary conditions corresponding to solar radiation and
              radiation to deep space.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Structural loads corresponding to launch acceleration up to 20 g,
              applied in multiple directions to simulate dynamic excitation.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Material properties based on aerospace-grade aluminum alloy
              7075-T6 for the main frame and thermally stable polymer composites
              for electronic component housings.
            </li>
            <li className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
              Fixed boundary constraints were applied at the deployer interface
              points, while time-dependent conditions captured temperature and
              stress variation during a complete orbit cycle.
            </li>
          </ul>
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            All analyses were performed using advanced solver algorithms to
            ensure convergence under nonlinear temperature-dependent material
            properties. The coupling between the thermal and mechanical solvers
            allowed accurate prediction of the interaction effects, including
            differential expansion, thermal stress accumulation, and fatigue
            potential under repeated thermal cycles.
          </p>
        </div>
      ),
    },
    {
      title: "Results and Findings",
      description: (
        <div className="flex flex-col gap-4">
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            The coupled thermal-mechanical analysis provided key insights into
            the CubeSat's performance under realistic conditions. The results
            showed that the structural configuration remained within acceptable
            stress limits under all simulated scenarios, but several notable
            findings emerged.
          </p>
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            Localized thermal gradients caused small but measurable deformations
            around the mounting brackets and hinge connections, suggesting the
            potential for minor misalignments in the deployment mechanism. The
            highest stress concentrations appeared near internal joint
            intersections and cutout edges of the panels. Under combined thermal
            and mechanical loading, the peak Von Mises stress increased by
            approximately 15–18 percent compared to mechanical-only simulations.
            This demonstrated the critical influence of thermal effects on the
            overall stress field.
          </p>
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            Based on the results, minor geometric improvements were recommended,
            including the addition of fillets at sharp intersections and
            optimization of panel thickness to enhance stiffness while
            maintaining mass constraints. The modified design achieved better
            thermal stress distribution, improved load transfer efficiency, and
            reduced the risk of fatigue or deformation during launch and orbital
            operation.
          </p>
          <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            The study successfully demonstrated that coupled multiphysics
            simulation is essential for ensuring the durability and reliability
            of CubeSat structures. The findings contributed to a more robust
            satellite design capable of withstanding the harsh mechanical and
            thermal conditions encountered in space missions.
          </p>
        </div>
      ),
    },
  ],
};
