import Image from "next/image";
import Link from "next/link";
import { IBlog, blogCategories } from "@/app/helpers/blogs.data";
import classNames from "classnames";

interface BlogCardProps {
  blog: IBlog;
  className?: string;
  big?: boolean;
}

export default function BlogCard({
  blog,
  className = "",
  big = false,
}: BlogCardProps) {
  // Get the first category name from ID or use "All Categories" as default
  const categoryLabel =
    blog.categories && blog.categories.length > 0
      ? blogCategories.find((cat) => cat.id === blog.categories[0])?.name ||
        "All Categories"
      : "All Categories";

  return (
    <Link
      href={blog.link}
      className={`flex flex-col gap-3 p-3 bg-white border border-footer-border rounded-[1.25rem] w-full hover:shadow-lg transition-shadow ${className}`}
    >
      {/* Image */}
      <div
        className={classNames(
          "relative w-full h-[17rem] rounded-[1.25rem] overflow-hidden bg-[#D7D7D7]",
          { "h-[20rem]": big }
        )}
      >
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 w-full">
        <div className="w-fit">
          <div className="px-4 border border-footer-border rounded-2xl">
            <span className="text-sm  text-primary-blue font-normal font-poppins">
              {categoryLabel}
            </span>
          </div>
        </div>
        {/* Title */}
        <div className="!text-[1rem]  text-footer-text font-medium font-poppins">
          {blog.title}
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <p className="text-sm  text-footer-text font-normal font-poppins">
            {blog.description}
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
              className="object-cover"
              fill
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
    </Link>
  );
}
