import { IFullProject } from "@/app/helpers/projects.data";

interface TopSectionProps {
  project: IFullProject;
}

export default function TopSection({ project }: TopSectionProps) {
  return (
    <div className="flex flex-col gap-6 w-full max-w-desktop mx-auto sm:px-side-space">
      {/* Breadcrumb */}
      <h3 className="text-base text-footer-text font-normal font-poppins">
        Home/ Projects/ {project.title}
      </h3>

      {/* Title */}
      <h1 className="text-[2.25rem]  text-footer-heading font-[570] font-obviously">
        {project.title}
      </h1>

      {/* Project Image */}
    </div>
  );
}
