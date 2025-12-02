import { allJobPositions } from "@/app/helpers/data";
import JobPositionCard from "@/app/components/JobPositionCard";

export default function OpeningsList() {
  return (
    <div className="w-full bg-white   sm:px-side-space">
      <div className="w-full max-w-desktop mx-auto flex flex-col gap-6  sm:px-0">
        {/* Title */}
        <div className="flex flex-col gap-4">
          <h2 className="text-footer-heading font-semibold font-poppins ">
            Open <span className="text-primary-blue">Positions</span>
          </h2>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-1">
          {allJobPositions.map((job) => (
            <JobPositionCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
