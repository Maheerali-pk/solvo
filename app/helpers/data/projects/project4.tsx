import { IFullProject } from "../../projects.data";

export const project4: IFullProject = {
  title: "CFD Analysis for Optimizing Drone Aerodynamics and Performance",
  description:
    "A comprehensive CFD analysis to evaluate and optimize the aerodynamic performance of a multi-rotor drone platform using Ansys Fluent.",
  image: "/images/projects/item4/main-image.webp",
  link: "/projects/cfd-drone-aerodynamics-optimization",
  summary: [
    {
      title: "Project Summary",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base  text-footer-text font-normal font-poppins">
              This project involved a comprehensive Computational Fluid Dynamics
              (CFD) analysis to evaluate and optimize the aerodynamic
              performance of a multi-rotor drone platform. The primary objective
              was to reduce drag, improve lift distribution, and enhance overall
              flight stability under various operating conditions. By simulating
              airflow over the drone structure using Ansys Fluent, the project
              aimed to identify high-drag regions, streamline body contours, and
              improve aerodynamic efficiency for longer flight times and better
              maneuverability.
            </p>
            <p className="text-base  text-footer-text font-normal font-poppins">
              With the growing demand for UAVs (unmanned aerial vehicles) across
              industries including surveillance, delivery, and environmental
              monitoring, optimizing the aerodynamic behavior of drones is
              critical. Even small improvements in aerodynamic performance can
              lead to significant gains in flight range, energy consumption, and
              thermal load distribution on onboard systems.
            </p>
          </div>
          <div className="w-[35.4375rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item4/main-image.webp"
              alt="Drone Aerodynamics Analysis"
              className="rounded-[1.25rem] w-[35.4375rem] h-[27rem] sm:w-full sm:h-auto object-contain"
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
              The main goals of this CFD simulation were:
            </p>
            <ul className="flex flex-col gap-4">
              <li className="text-base  text-footer-text font-normal font-poppins">
                To analyze airflow patterns, pressure distribution, and wake
                formation around the drone body and propellers.
              </li>
              <li className="text-base  text-footer-text font-normal font-poppins">
                To quantify aerodynamic drag and identify regions contributing
                to performance losses.
              </li>
              <li className="text-base  text-footer-text font-normal font-poppins">
                To evaluate lift generation and pressure asymmetries that affect
                stability and flight control.
              </li>
              <li className="text-base  text-footer-text font-normal font-poppins">
                To provide design recommendations for geometry optimization,
                especially around rotor arms, landing gear, and fuselage
                fairings.
              </li>
            </ul>
            <p className="text-base  text-footer-text font-normal font-poppins">
              A high-resolution 3D model of the drone was prepared, including
              propeller geometry, motor mounts, and key aerodynamic surfaces.
              The simulations were performed using Ansys Fluent with turbulence
              modeling (k-omega SST) and pressure-based solver for
              incompressible steady flow. Parametric studies were conducted with
              varying flight speeds and angles of attack to replicate hover,
              climb, and cruise modes.
            </p>
          </div>
          <div className="w-[35.4375rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item4/content-image1.webp"
              alt="Drone Simulation Setup"
              className="rounded-[1.25rem] w-[35.4375rem] h-[27rem] sm:w-full sm:h-auto object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Results and Findings",
      description: (
        <div className="flex flex-row gap-11 sm:flex-col sm:gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base  text-footer-text font-normal font-poppins">
              The CFD results provided a clear visualization of flow separation
              zones, low-pressure wake regions, and turbulent flow interactions
              around the drone's components. Major insights included:
            </p>
            <ul className="flex flex-col gap-4">
              <li className="text-base  text-footer-text font-normal font-poppins">
                High drag concentration was observed at the arm-body junctions
                and under the central fuselage due to flow stagnation.
              </li>
              <li className="text-base  text-footer-text font-normal font-poppins">
                Propeller-induced downwash significantly influenced flow
                behavior near the rear arms, indicating the need for asymmetric
                design considerations.
              </li>
              <li className="text-base  text-footer-text font-normal font-poppins">
                Streamlining the landing gear and smoothing the underbody
                reduced pressure drag by over 12%, with potential battery life
                improvements of up to 8%.
              </li>
              <li className="text-base  text-footer-text font-normal font-poppins">
                The wake profile showed enhanced symmetry after modifying the
                arm profile, leading to improved lateral stability during
                forward flight.
              </li>
            </ul>
            <p className="text-base  text-footer-text font-normal font-poppins">
              Overall, the analysis helped inform a more aerodynamically
              balanced design that minimized energy losses and improved control
              response in crosswind scenarios.
            </p>
          </div>
          <div className="w-[32.0625rem] shrink-0 sm:w-full">
            <img
              src="/images/projects/item4/content-image2.webp"
              alt="Drone Results Visualization"
              className="rounded-[1.25rem] w-[32.0625rem] h-[20.25rem] sm:w-full sm:h-auto object-contain"
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
            This CFD-based aerodynamic optimization of a drone platform using
            Ansys Fluent successfully demonstrated the value of digital
            simulation in UAV design. By combining geometry tuning with advanced
            turbulence modeling, the project achieved quantifiable improvements
            in drag reduction and aerodynamic balance.
          </p>
          <p className="text-base  text-footer-text font-normal font-poppins">
            Such analyses are essential for engineers working in aerospace, UAV
            development, advanced vehicle design, or unmanned systems, where
            performance and endurance depend heavily on flow behavior.
          </p>
        </div>
      ),
    },
  ],
};
