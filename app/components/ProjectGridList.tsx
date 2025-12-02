"use client";

import { useState, useMemo, useRef } from "react";
import { allFullProjects } from "../helpers/projects.data";
import ProjectCard from "./ProjectCard";
import NumberedPagination from "./NumberedPagination";
import ProjectListSection from "./ProjectListSection";

interface ProjectGridListProps {
  projects?: typeof allFullProjects;
  itemsPerPage?: number;
  className?: string;
}

export default function ProjectGridList({
  projects = allFullProjects,
  itemsPerPage = 9, // 3x3 grid
  className = "",
}: ProjectGridListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const topCardRef = useRef<HTMLDivElement>(null);

  // Calculate total pages
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  // Get projects for current page
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return projects.slice(startIndex, endIndex);
  }, [projects, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of grid when page changes
    topCardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div
      className={`w-full flex flex-col gap-6 max-w-desktop mx-auto ${className} sm:px-side-space`}
    >
      {/* Grid Container */}
      <div className="w-full grid  grid-cols-3 gap-6 sm:grid-cols-1 place-items-center">
        {paginatedProjects.map((project, index) => (
          <ProjectCard
            ref={
              index === 0
                ? (topCardRef as React.RefObject<HTMLDivElement>)
                : null
            }
            key={`${project.link}-${index}`}
            project={project}
            className="w-full"
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="w-full flex items-center justify-center pt-4">
          <NumberedPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}
