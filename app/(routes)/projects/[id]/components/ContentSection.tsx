import { IFullProject } from "@/app/helpers/projects.data";

interface ContentSectionProps {
  project: IFullProject;
}

export default function ContentSection({ project }: ContentSectionProps) {
  return (
    <div className="flex flex-col gap-6 w-full max-w-desktop mx-auto sm:px-side-space">
      {/* Summary Sections */}
      {project.summary.map((section, index) => (
        <div key={`summary-${index}`} className="flex flex-col gap-6">
          <h2 className="text-[1.875rem] leading-[1.2em] text-footer-heading font-semibold font-poppins">
            {section.title}
          </h2>
          <div className="flex flex-col gap-4 text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            {section.description}
          </div>
        </div>
      ))}

      {/* Content Sections */}
      {project.sections.map((section, index) => (
        <div key={`section-${index}`} className="flex flex-col gap-[1.125rem]">
          <h2 className="text-[1.375rem] leading-[1.636em] text-footer-heading font-semibold font-poppins">
            {section.title}
          </h2>
          <div className="flex flex-col gap-4 text-base leading-[1.5em] text-footer-text font-normal font-poppins">
            {section.description}
          </div>
        </div>
      ))}
    </div>
  );
}
