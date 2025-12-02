import SocialMediaIcons from "@/app/components/SocialMediaIcons";
import { IJobPosition } from "@/app/helpers/data";

interface JobDetailsProps {
  job: IJobPosition;
}

export default function JobDetails({ job }: JobDetailsProps) {
  return (
    <div className="w-full bg-white sm:px-side-space">
      <div className="w-full max-w-desktop mx-auto flex flex-col gap-6  sm:px-0">
        {/* Job Title */}
        <h2 className="text-[1.875rem]  text-footer-heading font-semibold font-poppins">
          {job.title}
        </h2>

        {/* Badges Section */}
        <div className="flex flex-col gap-3">
          {/* First Row of Badges */}
          <div className="flex w-full justify-between  ">
            <div className="flex flex-row gap-[0.625rem] items-center flex-wrap">
              {/* Full-Time Badge */}
              <div className="px-4 py-0 h-8  flex items-center justify-center bg-primary-blue rounded-[1000px]">
                <span className="text-sm leading- text-white font-normal font-poppins">
                  {job.employmentType}
                </span>
              </div>

              {/* Work Type Badge */}
              <div className="px-4 py-0 h-8  flex items-center justify-center border border-primary-blue rounded-[1000px]">
                <span className="text-sm leading- text-primary-blue font-normal font-poppins">
                  {job.workType}
                </span>
              </div>

              {/* Location Badge */}
              <div className="px-4 py-0 h-8  flex items-center justify-center border border-primary-blue rounded-[1000px]">
                <span className="text-sm leading- text-primary-blue font-normal font-poppins">
                  {job.location}
                </span>
              </div>

              {/* Req ID Badge */}
              <div className="px-4 py-0 h-8  flex items-center justify-center border border-primary-blue rounded-[1000px]">
                <span className="text-sm leading- text-primary-blue font-normal font-poppins">
                  Req ID: {job.reqId}
                </span>
              </div>
            </div>
            <div className="sm:hidden block">
              <SocialMediaIcons small></SocialMediaIcons>
            </div>
          </div>

          {/* Team Badge */}
          <div className="flex flex-row gap-[0.625rem] items-center">
            <div className=" py-0  rounded-[1000px]">
              <span className="text-sm  text-primary-blue font-normal font-poppins">
                Team: [{job.team}]
              </span>
            </div>
          </div>
        </div>

        {/* Job Content */}
        <div className="flex flex-col gap-6">
          {/* Introduction */}
          <p className="text-base  text-footer-text font-normal font-poppins whitespace-pre-line">
            {job.introduction}
          </p>

          {/* Key Responsibilities */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base  text-footer-heading font-semibold font-poppins">
              Key Responsibilities
            </h3>
            <ul className="flex flex-col gap-2">
              {job.keyResponsibilities.map((responsibility, index) => (
                <li
                  key={index}
                  className="text-base  text-footer-text font-normal font-poppins"
                >
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>

          {/* Qualifications */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base  text-footer-heading font-semibold font-poppins">
              Qualifications
            </h3>
            <ul className="flex flex-col gap-2">
              {job.qualifications.map((qualification, index) => (
                <li
                  key={index}
                  className="text-base  text-footer-text font-normal font-poppins"
                >
                  {qualification}
                </li>
              ))}
            </ul>
          </div>

          {/* Why Join Us */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base  text-footer-heading font-semibold font-poppins">
              Why Join Us?
            </h3>
            <ul className="flex flex-col gap-2">
              {job.whyJoinUs.map((benefit, index) => (
                <li
                  key={index}
                  className="text-base  text-footer-text font-normal font-poppins"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Ready to Apply */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base  text-footer-heading font-semibold font-poppins">
              Ready to Apply?
            </h3>
            <p className="text-base  text-footer-text font-normal font-poppins whitespace-pre-line">
              {job.readyToApply}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
