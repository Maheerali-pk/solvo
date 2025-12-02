import { IBlog } from "@/app/helpers/blogs.data";
import BlogCard from "@/app/components/BlogCard";
import { allBlogs } from "@/app/helpers/blogs.data";
import SocialMediaIcons from "@/app/components/SocialMediaIcons";

interface ContentSectionProps {
  blog: IBlog;
}

export default function ContentSection({ blog }: ContentSectionProps) {
  // Get related blogs (exclude current blog)
  const relatedBlogs = allBlogs.filter((b) => b.id !== blog.id).slice(0, 4);

  return (
    <>
      {/* Introduction Section - Two Column Layout */}
      <div className="flex flex-row gap-[8.75rem] sm:flex-col sm:gap-[1.375rem] sm:px-side-space max-w-desktop mx-auto">
        {/* Introduction Content */}
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="text-[1.875rem]  text-footer-heading font-semibold font-poppins">
            Introduction
          </h2>
          <div className="flex flex-col gap-4 text-base  text-footer-text font-normal font-poppins">
            {blog.introduction}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col items-end gap-6 w-[29.4375rem] sm:w-full">
          {/* Email Input */}
          <div className="flex flex-row  gap-5 pb-1 border-b border-footer-border w-full">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 text-base  text-footer-text font-normal font-poppins outline-none bg-transparent placeholder:text-footer-text"
            />
            <button className="btn-primary btn">
              <span className="text-sm  text-white font-normal font-poppins">
                Submit
              </span>
            </button>
          </div>

          {/* Social Media Icons */}
          <SocialMediaIcons />
        </div>
      </div>

      {/* Blog Sections */}
      <div className="flex flex-row gap-[8.75rem] sm:flex-col sm:gap-[1.375rem] sm:px-side-space max-w-desktop mx-auto">
        <div className="flex flex-col gap-[1.375rem] flex-1">
          {blog.sections.map((section, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h2 className="text-[1.875rem]  text-footer-heading font-semibold font-poppins">
                {section.title}
              </h2>
              <div className="flex flex-col gap-4 text-base  text-footer-text font-normal font-poppins">
                {section.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
