import Image from "next/image";
import { allIcons } from "../helpers/icons";

export default function Footer() {
  return (
    <footer className="w-full bg-white bg-gradient-to-b from-[rgba(136,216,232,0.4)] via-[rgba(136,216,232,0.1)] to-transparent py-[3.125rem] px-[10.75rem] flex flex-col gap-6">
      <div className="w-full max-w-desktop mx-auto flex flex-col gap-6">
        {/* Main Content */}
        <div className="flex flex-row gap-[3.75rem] w-full">
          {/* Left Section - Logo and Description */}
          <div className="flex flex-col gap-[1.1875rem] flex-1">
            <div className="flex flex-col gap-5">
              <div className="w-[9.6875rem] h-[3.5625rem] relative">
                <Image
                  src="/images/logo-176606.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-base leading-6 text-footer-text font-normal font-poppins w-[30rem]">
                Solvo Engineers is an expert engineering consultation firm
                specializing in Finite Element Analysis (FEA), Computational
                Fluid Dynamics (CFD) and Computer-Aided Design (CAD) medelling
                services. With a focus on delivering precise and efficient
                solution, our team of professional licensed engineers providing
                accurate effective solution. We are dedicated to offering
                advanced simulation driven insights that enable clients to
                promote innovation, reducing prototyping cost, design
                optimization, and simplify the process of developing new
                products.
              </p>
            </div>
          </div>

          {/* Right Section - Links and Contact */}
          <div className="flex flex-col items-end gap-[1.5625rem] h-[19.8125rem]">
            <div className="flex flex-row gap-11">
              {/* Quick Links */}
              <div className="flex flex-col gap-5">
                <h3 className="text-base leading-6 text-footer-heading font-semibold font-poppins">
                  About Us
                </h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="text-base leading-6 text-footer-text font-normal font-poppins"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="text-base leading-6 text-footer-text font-normal font-poppins"
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="text-base leading-6 text-footer-text font-normal font-poppins"
                  >
                    Blogs
                  </a>
                  <a
                    href="#"
                    className="text-base leading-6 text-footer-text font-normal font-poppins"
                  >
                    Careers
                  </a>
                  <a
                    href="#"
                    className="text-base leading-6 text-footer-text font-normal font-poppins"
                  >
                    Contact Us
                  </a>
                  <a
                    href="#"
                    className="text-base leading-6 text-footer-text font-normal font-poppins"
                  >
                    FAQs
                  </a>
                </div>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-5 flex-1">
                <h3 className="text-base leading-6 text-footer-heading font-semibold font-poppins">
                  Company
                </h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="text-base leading-6 text-footer-text font-normal font-poppins"
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className="text-base leading-6 text-footer-text font-normal font-poppins"
                  >
                    Careers
                  </a>
                  <a
                    href="#"
                    className="text-base leading-6 text-footer-text font-normal font-poppins"
                  >
                    Partners
                  </a>
                  <a
                    href="#"
                    className="text-base leading-6 text-footer-text font-normal font-poppins"
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* Contact Us */}
              <div className="flex flex-col gap-5">
                <h3 className="text-base leading-6 text-footer-heading font-semibold font-poppins">
                  Contact Us
                </h3>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row items-center gap-2.5 w-full">
                    <div className="w-5 h-5 text-primary-blue flex-shrink-0">
                      {allIcons.phone(20, 20)}
                    </div>
                    <a
                      href="#"
                      className="text-base leading-6 text-footer-text font-normal font-poppins"
                    >
                      +92 312 6099600
                    </a>
                  </div>
                  <div className="flex flex-row items-center gap-2.5">
                    <div className="w-5 h-5 text-primary-blue flex-shrink-0">
                      {allIcons.mail(20, 20)}
                    </div>
                    <a
                      href="#"
                      className="text-base leading-6 text-footer-text font-normal font-poppins"
                    >
                      contact@solvoengineers.com
                    </a>
                  </div>
                  <div className="flex flex-row items-center gap-2.5 w-full">
                    <div className="w-5 h-5 text-primary-blue flex-shrink-0">
                      {allIcons.location(20, 20)}
                    </div>
                    <a
                      href="#"
                      className="text-base leading-6 text-footer-text font-normal font-poppins"
                    >
                      Block C2 Johar Town, Lahore
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-row items-center justify-end gap-3 w-full">
              <Image
                src="/images/social-icons.svg"
                alt="Social Media Icons"
                width={529}
                height={44}
                className="h-11"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-row justify-between items-stretch gap-6 pt-6 border-t border-footer-border">
          <a
            href="#"
            className="text-base leading-6 text-footer-dark font-normal font-poppins"
          >
            Privacy Policy
          </a>
          <div className="flex flex-row  items-center gap-1 ">
            <span className="text-base leading-6 text-footer-dark font-normal font-poppins">
              All right reserved
            </span>
            <Image
              src="/images/copyright.png"
              alt="Copyright"
              width={20}
              height={20}
            ></Image>
            <span className="text-base leading-6 text-footer-dark font-normal font-poppins">
              Solvo Engineering 2025
            </span>
          </div>
          <div className="flex flex-row items-center gap-1">
            <a
              href="#"
              className="text-base leading-6 text-footer-dark font-normal font-poppins"
            >
              Terms of service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
