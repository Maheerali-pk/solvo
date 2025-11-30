import BlogCard from "@/app/components/BlogCard";
import BlogCardLandscape from "@/app/components/BlogCardLandscape";
import { allBlogs } from "@/app/helpers/blogs.data";

export function LatestNewsSection() {
  return (
    <section className="max-w-desktop mx-auto sm:px-side-space w-full flex flex-col gap-6">
      <h2 className="text-footer-heading font-semibold font-poppins sm:text-center">
        <span className="text-primary-blue">Solvo Engineers </span>Latest news
        and updates
      </h2>
      <div className="grid sm:grid-cols-1 grid-cols-[28rem_auto] gap-6">
        <BlogCard blog={allBlogs[0]} big={true}></BlogCard>
        <div className="h-full grid-rows-2 space-y-6">
          <BlogCardLandscape blog={allBlogs[2]}></BlogCardLandscape>
          <BlogCardLandscape blog={allBlogs[3]}></BlogCardLandscape>
        </div>
      </div>
    </section>
  );
}
