"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { allIcons } from "../helpers/icons";
import classNames from "classnames";

interface SidebarProps {
  activeRoute?:
    | "home"
    | "about"
    | "services"
    | "projects"
    | "career"
    | "blogs"
    | "contact";
  onClose?: () => void;
}

const servicesItems = [
  {
    name: "Computational Fluid Dynamics (CFD)",
    link: "/services/cfd-analysis",
    icon: "/images/shared/services-dropdown/img1.webp",
  },
  {
    name: "2D/3D Modeling & Rendering (CAD)",
    link: "/services/cad-analysis",
    icon: "/images/shared/services-dropdown/img2.webp",
  },
  {
    name: "Finite Element Analysis (FEA)",
    link: "/services/fea-analysis",
    icon: "/images/shared/services-dropdown/img3.webp",
  },
];

export default function Sidebar({
  activeRoute = "home",
  onClose,
}: SidebarProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home", href: "/home" },
    { id: "about", label: "About Us", href: "/about" },
    { id: "services", label: "Services", href: "#", hasDropdown: true },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "career", label: "Career", href: "#" },
    { id: "blogs", label: "Blogs", href: "/blogs" },
    { id: "contact", label: "Contact Us", href: "#" },
  ];

  const isFirstItem = (index: number) => index === 0;
  const isLastItem = (index: number) => index === menuItems.length - 1;

  return (
    <aside className="w-full h-full flex flex-col bg-white shadow-[10px_0px_20px_0px_rgba(0,0,0,0.06)] ">
      {/* Header with Logo and Close Button */}
      <div className="relative flex items-center justify-between px-6 py-4 border-b border-border-select-item">
        {/* Logo */}
        <div className="w-[8rem] relative flex justify-start object-left">
          <img
            src="/images/logo-176606.webp"
            alt="Logo"
            className="object-contain"
          />
        </div>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close sidebar"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-footer-border"
          >
            <path
              d="M5 5L15 15M15 5L5 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col overflow-y-auto flex-1 bg-white">
        {menuItems.map((item, index) => {
          const isActive = activeRoute === item.id;
          const isServices = item.id === "services";
          const hasBottomBorder = !isLastItem(index) && !isServices;

          return (
            <div key={item.id}>
              {isServices ? (
                <>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={classNames(
                      "w-full flex flex-row items-center gap-[0.625rem] px-6 py-3 bg-white transition-colors h-[3.25rem]",
                      {
                        "border-b border-border-select-item":
                          !isServicesOpen && hasBottomBorder,
                      }
                    )}
                  >
                    <span
                      className={classNames(
                        "flex-1 leading-[1.5em] font-medium font-poppins text-left",
                        {
                          "text-primary-blue": isActive,
                          "text-footer-border": !isActive,
                        }
                      )}
                      style={{ fontSize: "1rem" }}
                    >
                      {item.label}
                    </span>
                    <div
                      className={classNames(
                        "w-[1.125rem] h-[1.125rem] text-footer-border transition-transform",
                        {
                          "rotate-90": isServicesOpen,
                        }
                      )}
                    >
                      {allIcons.chevronRight(18, 18)}
                    </div>
                  </button>
                  {/* Nested Services Items */}
                  {isServicesOpen && (
                    <div className="bg-white">
                      {servicesItems.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={service.link}
                          onClick={onClose}
                          className="flex flex-row items-center gap-[0.625rem] px-6 py-3 bg-white transition-colors border-b border-border-select-item last:border-b-0 h-[4.125rem]"
                        >
                          <span className="best-base  text-footer-border font-medium font-poppins">
                            {service.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                  {!isServicesOpen && hasBottomBorder && (
                    <div className="border-b border-border-select-item" />
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={classNames(
                    "w-full flex flex-row items-center gap-[0.625rem] px-6 py-3 bg-white transition-colors h-[3.25rem]",
                    {
                      "border-b border-border-select-item": hasBottomBorder,
                      "rounded-b-[0.5rem]": isLastItem(index),
                    }
                  )}
                >
                  <span
                    className={classNames(
                      "leading-[1.5em] font-medium font-poppins",
                      {
                        "text-primary-blue": isActive,
                        "text-footer-border": !isActive,
                      }
                    )}
                    style={{ fontSize: "1rem" }}
                  >
                    {item.label}
                  </span>
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
