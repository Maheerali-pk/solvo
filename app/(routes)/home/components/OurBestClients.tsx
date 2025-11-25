import GreenBadge from "@/app/components/GreenBadge";
import Image from "next/image";

export default function OurBestClients() {
  return (
    <section className="w-full flex flex-col items-center gap-6 py-[3.125rem] relative">
      {/* Gradient Border Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#fafafa] via-[#8a8a8a] to-[#fafafa]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#fafafa] via-[#8a8a8a] to-[#fafafa]"></div>

      <div className="w-full max-w-desktop mx-auto flex flex-col items-center gap-6">
        {/* Badge */}
        <GreenBadge icon="/images/zap-icon.svg" text="Our Best Clients" />

        {/* Content */}
        <div className="flex flex-col items-center gap-[1.875rem] w-full">
          {/* Description */}
          <h2 className="text-[1.875rem] leading-[1.2em] text-text-gray font-semibold font-poppins text-center">
            Trusted by{" "}
            <span className="text-primary-blue">
              3,000+ globally companies.
            </span>
          </h2>

          {/* Client Logos */}
          <div className="w-full max-w-[68.5rem] h-12 flex items-center justify-center">
            <Image
              src="/images/client-logos.svg"
              alt="Client Logos"
              width={1096}
              height={48}
              className="w-full h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
