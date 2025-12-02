import Image from "next/image";
import { IBlog } from "@/app/helpers/blogs.data";

interface TopSectionProps {
  blog: IBlog;
}

export default function TopSection({ blog }: TopSectionProps) {
  return (
    <div className="flex flex-col gap-[1.625rem] w-full max-w-desktop mx-auto sm:px-side-space">
      <div className="flex-row items-start gap-6 sm:flex-col grid grid-cols-[1.2fr_1fr] sm:grid-cols-1">
        {/* Title and Author Section */}
        <div className="flex flex-col gap-4 flex-1">
          {/* Breadcrumb */}
          <h3 className="text-base  text-footer-text font-normal font-poppins">
            Home/ Blogs/ Blog Name
          </h3>

          {/* Title */}
          <h2 className="  text-footer-heading font-[570] font-obviously">
            {blog.title}
          </h2>

          {/* Author Info */}
          <div className="flex flex-row items-center gap-[0.625rem]">
            <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 bg-[#D9D9D9]">
              <Image
                src={blog.author.avatar}
                alt={blog.author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm  text-footer-text font-normal font-poppins whitespace-pre-line">
              {blog.author.name}
              {"\n"}
              {blog.date}
            </span>
          </div>
        </div>

        {/* Blog Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto rounded-[1.25rem]"
        ></img>
      </div>
    </div>
  );
}
