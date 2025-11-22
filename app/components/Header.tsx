import Image from "next/image";
import { allIcons } from "../helpers/icons";

export default function Header() {
  return (
    <header className="w-full  h-[5.6875rem] bg-white py-5 shadow-[0px_6px_40px_0px_rgba(0,0,0,0.04)]">
      <div className="w-full max-w-desktop mx-auto flex items-center justify-between  gap-5">
        {/* Logo */}
        <div className="w-[8.625rem] h-[3.1875rem] relative flex-shrink-0">
          <Image
            src="/images/logo-176606.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-end gap-3 flex-1 h-6">
          <a
            href="#"
            className="text-base leading-6 text-primary-blue font-normal font-poppins"
          >
            Home
          </a>

          <div className="flex items-center justify-center gap-2.5 px-2 py-2">
            <a
              href="#"
              className="text-base leading-6 text-text-gray font-normal font-poppins"
            >
              About Us
            </a>
          </div>

          <div className="flex items-center gap-0.5 px-2 py-2">
            <a
              href="#"
              className="text-base leading-6 text-text-gray font-normal font-poppins"
            >
              Services
            </a>
            <div className="w-5 h-5 text-text-gray">
              {allIcons.chevronDown(20, 20)}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 px-2 py-2">
            <a
              href="#"
              className="text-base leading-6 text-text-gray font-normal font-poppins"
            >
              Career
            </a>
          </div>

          <div className="flex items-center justify-center gap-2.5 px-2 py-2">
            <a
              href="#"
              className="text-base leading-6 text-text-gray font-normal font-poppins"
            >
              Blogs
            </a>
          </div>
        </nav>

        {/* Contact Button */}
        <button className="w-[10.75rem] h-12 bg-primary-blue rounded-xl flex items-center justify-center gap-2 px-4 py-4 flex-shrink-0">
          <span className="text-sm leading-6 text-white font-normal font-poppins">
            Contact us
          </span>
          <div className="w-5 h-5 text-white">
            {allIcons.chevronRight(20, 20)}
          </div>
        </button>
      </div>
    </header>
  );
}
