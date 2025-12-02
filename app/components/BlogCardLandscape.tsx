import Image from "next/image";
import Link from "next/link";
import { IBlog, blogCategories } from "@/app/helpers/blogs.data";

interface BlogCardLandscapeProps {
  blog: IBlog;
  className?: string;
}

export default function BlogCardLandscape({
  blog,
  className = "",
}: BlogCardLandscapeProps) {
  // Get the first category name from ID or use "All Categories" as default
  const categoryLabel =
    blog.categories && blog.categories.length > 0
      ? blogCategories.find((cat) => cat.id === blog.categories[0])?.name ||
        "All Categories"
      : "All Categories";

  return (
    <Link
      href={blog.link}
      className={`w-full sm:grid-cols-1 grid grid-cols-[1.6fr_1fr] gap-3 p-3 bg-white border border-footer-border rounded-[1.25rem] w-full hover:shadow-lg transition-shadow sm:flex-col ${className}`}
    >
      {/* Image - Left Side */}
      <div className="relative w-full h-full  rounded-[1.25rem] overflow-hidden bg-[#D7D7D7] shrink-0 sm:w-full sm:min-h-[17rem]">
        <img
          src={blog.image}
          alt={blog.title}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Content - Right Side */}
      <div className="flex flex-col gap-3 flex-1">
        {/* Category Badge */}
        <div className="w-fit">
          <div className="px-4 border border-footer-border rounded-2xl">
            <span className="text-sm  text-primary-blue font-normal font-poppins">
              {categoryLabel}
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="text-base text-footer-heading font-medium font-poppins">
          {blog.title}
        </div>

        {/* Description and Read More */}
        <div className="flex flex-col justify-end flex-1 gap-3">
          <div className="flex flex-col items-start ap-2">
            <p className="text-sm  text-footer-text font-normal font-poppins flex-1">
              {blog.description.slice(0, 80)}...
            </p>
            <span className="text-sm  text-primary-blue font-normal font-poppins whitespace-nowrap">
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
              <span className="text-sm  text-footer-border font-normal font-poppins whitespace-pre-line">
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
