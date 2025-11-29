import Image from "next/image";
import Link from "next/link";
import { IProject } from "../helpers/data";

interface ProjectCardProps {
  project: IProject;
  className?: string;
}

export default function ProjectCard({
  project,
  className = "",
}: ProjectCardProps) {
  return (
    <Link
      href={project.link}
      className={`flex flex-col items-center gap-3 p-3 bg-white border border-footer-border rounded-[1.25rem] w-full max-w-[21.833125rem] hover:shadow-lg transition-shadow min-h-full ${className}`}
    >
      {/* Image */}
      <div className="relative w-full h-[17rem] rounded-[1.25rem] overflow-hidden bg-[#D7D7D7]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 w-full">
        {/* Title */}
        <h3 className="text-base leading-[1.5em] text-footer-heading font-medium font-poppins">
          {project.title}
        </h3>

        {/* Description and Read More */}
        <div className="flex flex-row items-end w-full">
          <p className="text-sm leading-[1.714em] text-footer-text font-normal font-poppins flex-1">
            {project.description}
          </p>
          <span className="text-sm leading-[1.714em] text-primary-blue font-normal font-poppins ml-2 whitespace-nowrap">
            Read more
          </span>
        </div>
      </div>
    </Link>
  );
}
