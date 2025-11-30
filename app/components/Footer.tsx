import Image from "next/image";
import { allIcons } from "../helpers/icons";
import { FooterWrapper } from "./Footer/FooterWrapper";
import SocialMediaIcons from "./SocialMediaIcons";

// Left Section Component
function LeftSection() {
  return (
    <div className="flex flex-col gap-[1.1875rem] sm:gap-side-space flex-1 w-full">
      <div className="flex flex-col gap-5 w-full">
        <div className="w-[9.6875rem] h-[3.5625rem] sm:w-[6.5rem] sm:h-[2.5rem] relative">
          <Image
            src="/images/logo-176606.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-base leading-6 text-footer-text font-normal font-poppins w-[30rem] sm:w-full">
          Solvo Engineers is an expert engineering consultation firm
          specializing in Finite Element Analysis (FEA), Computational Fluid
          Dynamics (CFD) and Computer-Aided Design (CAD) medelling services.
          With a focus on delivering precise and efficient solution, our team of
          professional licensed engineers providing accurate effective solution.
          We are dedicated to offering advanced simulation driven insights that
          enable clients to promote innovation, reducing prototyping cost,
          design optimization, and simplify the process of developing new
          products.
        </p>
      </div>
    </div>
  );
}

// Right Section Component
function RightSection() {
  return (
    <div className="flex flex-col items-end  gap-[1.5625rem] sm:items-start">
      <div className="flex flex-row gap-11 sm:gap-4 sm:w-full sm:justify-between ">
        {/* Quick Links */}
        <div className="flex flex-col gap-5 ">
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
        <div className="flex flex-col gap-5 ">
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
                <img
                  className="w-5 h-5 object-contain"
                  src="/images/shared/footer/icon1.png"
                ></img>
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
                <img
                  className="w-5 h-5 object-contain"
                  src="/images/shared/footer/icon2.png"
                ></img>
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
                <img
                  className="w-5 h-5 object-contain"
                  src="/images/shared/footer/icon3.png"
                ></img>
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

      <div className="w-full flex justify-end">
        <SocialMediaIcons />
      </div>
    </div>
  );
}

// Bottom Section Component
function BottomSection() {
  return (
    <div className="flex flex-row justify-between items-stretch gap-6 pt-6 border-t border-footer-border">
      <a
        href="#"
        className="text-base leading-6 text-footer-dark font-normal font-poppins"
      >
        Privacy Policy
      </a>
      <div className="flex flex-row items-center gap-1 justify-center sm:flex-wrap">
        <span className="text-base leading-6 text-footer-dark font-normal font-poppins">
          All right reserved
        </span>
        <img
          src="/images/copyright.png"
          alt="Copyright"
          className="w-5 h-5 object-contain"
        ></img>
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
  );
}

// Main Footer Component
export default function Footer() {
  return (
    <footer className="w-full bg-white bg-gradient-to-b from-[rgba(136,216,232,0.4)] via-[rgba(136,216,232,0.1)] to-transparent py-[3.125rem] px-[10.75rem] sm:px-side-space flex flex-col gap-6">
      <div className="w-full max-w-desktop mx-auto flex flex-col gap-6 ">
        {/* Main Content */}
        <div className="flex flex-row sm:flex-col gap-[3.75rem] sm:gap-section-spacing w-full ">
          <LeftSection />
          <RightSection />
        </div>

        <BottomSection />
      </div>
    </footer>
  );
}
