"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { allIcons } from "../helpers/icons";
import ServicesDropdown from "./ServicesDropdown";
import AboutDropdown from "./AboutDropdown";
import Sidebar from "./Sidebar";
import classNames from "classnames";
import Link from "next/link";

interface HeaderProps {
  activeRoute?: "home" | "about" | "services" | "projects" | "career" | "blogs";
}
export default function Header({ activeRoute = "home" }: HeaderProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    if (isServicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesOpen]);

  // Close about dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        aboutRef.current &&
        !aboutRef.current.contains(event.target as Node)
      ) {
        setIsAboutOpen(false);
      }
    };

    if (isAboutOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAboutOpen]);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when sidebar is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="w-full z-20  sm:h-auto  h-[5.6875rem] bg-white py-5 shadow-[0px_6px_40px_0px_rgba(0,0,0,0.04)]">
      <div className="w-full sm:w-auto sm:px-side-space  max-w-desktop mx-auto flex items-center justify-between  gap-5">
        {/* Logo */}
        <div className="w-[8.625rem] h-[3.1875rem] relative flex-shrink-0">
          <Image
            src="/images/logo-176606.webp"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Navigation */}

        <nav className="flex sm:hidden items-center justify-end gap-3 flex-1 h-6">
          <Link
            href="/home"
            className={classNames("text-base font-normal font-poppins", {
              "text-primary-blue": activeRoute === "home",
              "text-text-gray": activeRoute !== "home",
            })}
          >
            Home
          </Link>

          <div
            ref={aboutRef}
            className="relative flex items-center gap-0.5 px-2 py-2"
          >
            <button
              onClick={toggleAbout}
              className={classNames(
                "flex items-center gap-0.5 text-base font-normal font-poppins cursor-pointer",
                {
                  "text-primary-blue": activeRoute === "about",
                  "text-text-gray": activeRoute !== "about",
                }
              )}
            >
              About Us
            </button>
            <div className="w-5 h-5 text-text-gray">
              {allIcons.chevronDown(20, 20)}
            </div>
            <AboutDropdown isVisible={isAboutOpen} />
          </div>

          <div
            ref={servicesRef}
            className="relative flex items-center gap-0.5 px-2 py-2"
          >
            <button
              onClick={toggleServices}
              className={classNames(
                "flex items-center gap-0.5 text-base font-normal font-poppins cursor-pointer",
                {
                  "text-primary-blue": activeRoute === "services",
                  "text-text-gray": activeRoute !== "services",
                }
              )}
            >
              Services
            </button>
            <div className="w-5 h-5 text-text-gray">
              {allIcons.chevronDown(20, 20)}
            </div>
            <ServicesDropdown isVisible={isServicesOpen} />
          </div>
          <div className="flex items-center justify-center gap-2.5 px-2 py-2">
            <Link
              href="/projects"
              className={classNames("text-base font-normal font-poppins", {
                "text-primary-blue": activeRoute === "projects",
                "text-text-gray": activeRoute !== "projects",
              })}
            >
              Projects
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2.5 px-2 py-2">
            <a
              href="/careers"
              className={classNames("text-base font-normal font-poppins", {
                "text-primary-blue": activeRoute === "career",
                "text-text-gray": activeRoute !== "career",
              })}
            >
              Career
            </a>
          </div>

          <div className="flex items-center justify-center gap-2.5 px-2 py-2">
            <Link
              href="/blogs"
              className={classNames("text-base font-normal font-poppins", {
                "text-primary-blue": activeRoute === "blogs",
                "text-text-gray": activeRoute !== "blogs",
              })}
            >
              Blogs
            </Link>
          </div>
        </nav>

        {/* Contact Button */}
        <button className="btn btn-primary sm:!hidden">
          <span className="text-sm font-normal font-poppins">Contact us</span>
          <div className="w-5 h-5 text-white">
            {allIcons.chevronRight(20, 20)}
          </div>
        </button>
        <button
          onClick={toggleSidebar}
          className="hidden sm:flex items-center justify-center bg-primary-blue h-10 w-10 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full  p-0 border-0 "
          aria-label="Toggle menu"
        >
          {allIcons.menu}
        </button>
      </div>

      {/* Sidebar Overlay and Sidebar */}
      <>
        {/* Overlay */}
        <div
          className={classNames(
            "fixed inset-0 bg-black/50 z-40 sm:block hidden transition-opacity duration-300",
            {
              "opacity-100 pointer-events-auto": isSidebarOpen,
              "opacity-0 pointer-events-none": !isSidebarOpen,
            }
          )}
          onClick={closeSidebar}
        />
        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={classNames(
            "fixed top-0 left-0 h-full w-[22.5rem] z-50 sm:block hidden transition-transform duration-300 ease-in-out",
            {
              "translate-x-0": isSidebarOpen,
              "-translate-x-full": !isSidebarOpen,
            }
          )}
        >
          <Sidebar activeRoute={activeRoute} onClose={closeSidebar} />
        </div>
      </>
    </header>
  );
}
