import Link from "next/link";
import { IJobPosition } from "../helpers/data";
import { allIcons } from "../helpers/icons";

interface JobPositionCardProps {
  job: IJobPosition;
  className?: string;
}

export default function JobPositionCard({
  job,
  className = "",
}: JobPositionCardProps) {
  return (
    <div
      className={`flex flex-col gap-5 p-6 bg-[rgba(2,115,189,0.08)] rounded-[1.25rem] w-full ${className}`}
    >
      {/* Title */}
      <h3 className="text-[1.5rem]  text-footer-heading font-semibold font-poppins">
        {job.title}
      </h3>

      {/* Badges */}
      <div className="flex flex-row gap-[0.625rem] items-center flex-wrap">
        {/* Full-Time Badge */}
        <div className="px-4 py-0 bg-primary-blue rounded-[1000px]">
          <span className="text-sm  text-white font-normal font-poppins">
            {job.employmentType}
          </span>
        </div>

        {/* Work Type Badge */}
        <div className="px-4 py-0 border border-primary-blue rounded-[1000px]">
          <span className="text-sm  text-primary-blue font-normal font-poppins">
            {job.workType}
          </span>
        </div>

        {/* Location Badge */}
        <div className="px-4 py-0 border border-primary-blue rounded-[1000px]">
          <span className="text-sm  text-primary-blue font-normal font-poppins">
            {job.location}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm  text-footer-text font-normal font-poppins">
        {job.introduction}
      </p>

      {/* View Details Button */}
      <Link href={job.link} className="btn btn-primary flex w-fit">
        <span className="text-sm  text-white font-normal font-poppins">
          View Details
        </span>
        <div className="w-5 h-5 text-white">
          {allIcons.chevronRight(20, 20)}
        </div>
      </Link>
    </div>
  );
}
