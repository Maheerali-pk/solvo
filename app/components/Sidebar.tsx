"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { allIcons } from "../helpers/icons";
import classNames from "classnames";

interface SidebarProps {
  activeRoute?: "home" | "about" | "services" | "career" | "blogs" | "contact";
  onClose?: () => void;
}

const servicesItems = [
  {
    name: "Computational Fluid Dynamics (CFD)",
    link: "/services/cfd",
    icon: "/images/shared/services-dropdown/img1.png",
  },
  {
    name: "2D/3D Modeling & Rendering (CAD)",
    link: "/services/cad",
    icon: "/images/shared/services-dropdown/img2.png",
  },
  {
    name: "Finite Element Analysis (FEA)",
    link: "/services/fea",
    icon: "/images/shared/services-dropdown/img3.png",
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
    { id: "career", label: "Career", href: "#" },
    { id: "blogs", label: "Blogs", href: "#" },
    { id: "contact", label: "Contact Us", href: "#" },
  ];

  const isFirstItem = (index: number) => index === 0;
  const isLastItem = (index: number) => index === menuItems.length - 1;

  return (
    <aside className="w-full h-full flex flex-col bg-white shadow-[10px_0px_20px_0px_rgba(0,0,0,0.06)] ">
      {/* Close Button */}
      {/* <div className="flex items-center justify-end p-4 border-b border-border-select-item">
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close sidebar"
        >
          <div className="w-5 h-5 text-footer-border">
            {allIcons.chevronLeft(20, 20)}
          </div>
        </button>
      </div> */}

      <div className="flex flex-col overflow-y-auto flex-1 bg-primary-light-blue ">
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
                      "w-full flex flex-row items-center gap-[0.625rem] px-6 py-3 bg-primary-light-blue transition-colors",
                      {
                        "border-b border-border-select-item":
                          !isServicesOpen && hasBottomBorder,
                      }
                    )}
                  >
                    <span
                      className={classNames(
                        "flex-1 leading-[2em] font-semibold font-poppins text-left",
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
                    <div className="bg-white border-b border-border-select-item">
                      {servicesItems.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={service.link}
                          onClick={onClose}
                          className="flex flex-row items-center gap-[0.625rem] px-6 py-3 pl-12 hover:bg-[rgba(2,115,189,0.15)] transition-colors border-b border-border-select-item last:border-b-0"
                        >
                          <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                            <Image
                              src={service.icon}
                              alt={service.name}
                              width={20}
                              height={20}
                              className="w-5 h-5 object-contain"
                            />
                          </div>
                          <span
                            className="leading-[2em] text-primary-blue font-normal font-poppins"
                            style={{ fontSize: "1rem" }}
                          >
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
                    "w-full flex flex-row items-center gap-[0.625rem] px-6 py-3 bg-primary-light-blue transition-colors",
                    {
                      "border-b border-border-select-item": hasBottomBorder,
                    }
                  )}
                >
                  <span
                    className={classNames(
                      "leading-[2em] font-semibold font-poppins",
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
