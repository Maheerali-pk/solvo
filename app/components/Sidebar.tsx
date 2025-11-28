"use client";

import { useState } from "react";
import Link from "next/link";
import { allIcons } from "../helpers/icons";
import classNames from "classnames";

interface SidebarProps {
  activeRoute?: "home" | "about" | "services" | "career" | "blogs" | "contact";
}

export default function Sidebar({ activeRoute = "home" }: SidebarProps) {
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
    <aside className="w-[14.5rem] flex flex-col bg-white rounded-lg shadow-[10px_0px_20px_0px_rgba(0,0,0,0.06)]">
      <div className="flex flex-col overflow-y-auto">
        {menuItems.map((item, index) => {
          const isActive = activeRoute === item.id;
          const isServices = item.id === "services";
          const hasBottomBorder = !isLastItem(index);

          return (
            <div key={item.id}>
              {isServices ? (
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={classNames(
                    "w-full flex flex-row items-center gap-[0.625rem] px-6 py-3 bg-primary-light-blue transition-colors",
                    {
                      "rounded-t-lg": isFirstItem(index),
                      "rounded-b-lg": isLastItem(index),
                      "border-b border-border-select-item": hasBottomBorder,
                    }
                  )}
                >
                  <span
                    className={classNames(
                      "flex-1 text-xs leading-[2em] font-semibold font-poppins text-left",
                      {
                        "text-primary-blue": isActive,
                        "text-footer-border": !isActive,
                      }
                    )}
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
              ) : (
                <Link
                  href={item.href}
                  className={classNames(
                    "w-full flex flex-row items-center gap-[0.625rem] px-6 py-3 bg-primary-light-blue transition-colors",
                    {
                      "rounded-t-lg": isFirstItem(index),
                      "rounded-b-lg": isLastItem(index),
                      "border-b border-border-select-item": hasBottomBorder,
                    }
                  )}
                >
                  <span
                    className={classNames(
                      "text-xs leading-[2em] font-semibold font-poppins",
                      {
                        "text-primary-blue": isActive,
                        "text-footer-border": !isActive,
                      }
                    )}
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
