import Image from "next/image";
import Link from "next/link";
import { IBlog } from "@/app/helpers/blogs.data";

interface BlogCardProps {
  blog: IBlog;
  className?: string;
}

export default function BlogCard({ blog, className = "" }: BlogCardProps) {
  return (
    <Link
      href={blog.link}
      className={`flex flex-col gap-3 p-3 bg-white border border-footer-border rounded-[1.25rem] w-full hover:shadow-lg transition-shadow ${className}`}
    >
      {/* Image */}
      <div className="relative w-full h-[17rem] rounded-[1.25rem] overflow-hidden bg-[#D7D7D7]">
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
        {/* Title */}
        <h3 className="text-base leading-[1.5em] text-footer-text font-medium font-poppins">
          {blog.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-[1.714em] text-footer-text font-normal font-poppins">
          {blog.description}
        </p>

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
    </Link>
  );
}
