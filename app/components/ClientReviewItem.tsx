import Image from "next/image";
import { IClientReview } from "../helpers/data";

interface ClientReviewItemProps {
  data: IClientReview;
}

const ClientReviewItem: React.FC<ClientReviewItemProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-row items-stretch gap-6 w-full">
        {/* Left Content */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Badge and Title */}
          <div className="flex flex-col gap-3">
            {/* Badge */}
            <div className="flex flex-row items-center justify-center gap-2 bg-badge-bg px-[0.875rem] w-fit py-1 rounded-full">
              <Image
                src={data.badgeIcon}
                alt={data.badgeText}
                width={18}
                height={18}
              />
              <span className="text-sm leading-[1.714em] text-badge-text font-normal font-poppins text-center">
                {data.badgeText}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[1.875rem] leading-[1.2em] text-text-gray font-semibold font-poppins">
              {data.title}
            </h2>
          </div>

          {/* Review Text */}
          <div className="flex flex-col items-end">
            <p className="text-base leading-6 text-text-gray font-normal font-poppins">
              {data.reviewText}
            </p>
          </div>

          {/* Client Info and Verify Link */}
          <div className="flex flex-row items-center justify-between">
            {/* Client Info */}
            <div className="flex flex-col">
              <h3 className="text-[1.25rem] leading-[1.636em] text-text-gray font-semibold font-poppins">
                {data.clientName}
              </h3>
              <p className="text-base leading-6 text-footer-text font-normal font-poppins">
                {data.clientRole}
              </p>
            </div>

            {/* Verify Link */}
          </div>
          <a
            href={data.verifyLink}
            className="text-base leading-6 underline text-primary-blue font-normal font-poppins hover:underline"
          >
            {data.verifyLinkText}
          </a>
        </div>

        {/* Right Image */}
        <div className="relative flex-shrink-0 w-[20rem] h-auto">
          <Image
            src={data.image}
            alt={data.clientName}
            fill
            className="object-cover rounded-3xl"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientReviewItem;
