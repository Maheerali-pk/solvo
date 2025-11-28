"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { allIcons } from "../helpers/icons";
import ServicesDropdown from "./ServicesDropdown";
import classNames from "classnames";
import Link from "next/link";

interface HeaderProps {
  activeRoute?: "home" | "about" | "services" | "career" | "blogs";
}
export default function Header({ activeRoute = "home" }: HeaderProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
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

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header className="w-full z-20  sm:h-auto  h-[5.6875rem] bg-white py-5 shadow-[0px_6px_40px_0px_rgba(0,0,0,0.04)]">
      <div className="w-full sm:w-auto sm:px-side-space  max-w-desktop mx-auto flex items-center justify-between  gap-5">
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

        <nav className="flex sm:hidden items-center justify-end gap-3 flex-1 h-6">
          <Link
            href="/home"
            className={classNames(
              "text-base leading-6 font-normal font-poppins",
              {
                "text-primary-blue": activeRoute === "home",
                "text-text-gray": activeRoute !== "home",
              }
            )}
          >
            Home
          </Link>

          <div className="flex items-center justify-center gap-2.5 px-2 py-2">
            <Link
              href="/about"
              className={classNames(
                "text-base leading-6 font-normal font-poppins",
                {
                  "text-primary-blue": activeRoute === "about",
                  "text-text-gray": activeRoute !== "about",
                }
              )}
            >
              About Us
            </Link>
          </div>

          <div
            ref={servicesRef}
            className="relative flex items-center gap-0.5 px-2 py-2"
          >
            <button
              onClick={toggleServices}
              className={classNames(
                "flex items-center gap-0.5 text-base leading-6 font-normal font-poppins cursor-pointer",
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
            <a
              href="#"
              className={classNames(
                "text-base leading-6 font-normal font-poppins",
                {
                  "text-primary-blue": activeRoute === "career",
                  "text-text-gray": activeRoute !== "career",
                }
              )}
            >
              Career
            </a>
          </div>

          <div className="flex items-center justify-center gap-2.5 px-2 py-2">
            <a
              href="#"
              className={classNames(
                "text-base leading-6 font-normal font-poppins",
                {
                  "text-primary-blue": activeRoute === "blogs",
                  "text-text-gray": activeRoute !== "blogs",
                }
              )}
            >
              Blogs
            </a>
          </div>
        </nav>

        {/* Contact Button */}
        <button className=" h-10 bg-primary-blue rounded-xl flex items-center justify-center gap-2 px-6  py-4 flex-shrink-0 cursor-pointer sm:hidden">
          <span className="text-sm leading-6 text-white font-normal font-poppins">
            Contact us
          </span>
          <div className="w-5 h-5 text-white">
            {allIcons.chevronRight(20, 20)}
          </div>
        </button>
        <img
          src="/images/shared/header/menu.png"
          className="cursor-pointer hover:scale-110 transition-all duration-300 hidden sm:block w-10 h-10"
          alt="Menu"
        />
      </div>
    </header>
  );
}
