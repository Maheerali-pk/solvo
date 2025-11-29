import Image from "next/image";
import Link from "next/link";
import { IBlog } from "@/app/helpers/blogs.data";

interface BlogCardLandscapeProps {
  blog: IBlog;
  className?: string;
}

export default function BlogCardLandscape({
  blog,
  className = "",
}: BlogCardLandscapeProps) {
  // Get the first category or use "All Categories" as default
  const categoryLabel = blog.categories && blog.categories.length > 0
    ? blog.categories[0]
    : "All Categories";

  return (
    <Link
      href={blog.link}
      className={`flex flex-row gap-3 p-3 bg-white border border-footer-border rounded-[1.25rem] w-full hover:shadow-lg transition-shadow sm:flex-col ${className}`}
    >
      {/* Image - Left Side */}
      <div className="relative w-[22.0625rem] h-full min-h-[18.34375rem] rounded-[1.25rem] overflow-hidden bg-[#D7D7D7] shrink-0 sm:w-full sm:min-h-[17rem]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Content - Right Side */}
      <div className="flex flex-col gap-3 flex-1">
        {/* Category Badge */}
        <div className="w-fit">
          <div className="px-4 py-2 border border-footer-border rounded-2xl">
            <span className="text-sm leading-[1.714em] text-primary-blue font-normal font-poppins">
              {categoryLabel}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base leading-[1.5em] text-footer-heading font-medium font-poppins">
          {blog.title}
        </h3>

        {/* Description and Read More */}
        <div className="flex flex-col justify-end flex-1 gap-3">
          <div className="flex flex-row items-end gap-2">
            <p className="text-sm leading-[1.714em] text-footer-text font-normal font-poppins flex-1">
              {blog.description}
            </p>
            <span className="text-sm leading-[1.714em] text-primary-blue font-normal font-poppins whitespace-nowrap">
              Read more
            </span>
          </div>

          {/* Author Section */}
          <div className="flex flex-row items-center gap-[0.625rem]">
            {/* Avatar */}
            <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
              <Image
                src={blog.author.avatar}
                alt={blog.author.name}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>

            {/* Author Name and Date */}
            <div className="flex flex-col">
              <span className="text-sm leading-[1.286em] text-footer-border font-normal font-poppins whitespace-pre-line">
                {blog.author.name}
                {"\n"}
                {blog.date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

