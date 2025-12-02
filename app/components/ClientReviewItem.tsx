import Image from "next/image";
import { IClientReview } from "../helpers/data";
import GreenBadge from "./GreenBadge";
import Link from "next/link";

interface ClientReviewItemProps {
  data: IClientReview;
}

const ClientReviewItem: React.FC<ClientReviewItemProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-6 w-full sm:px-side-space h-[15rem] sm:h-auto">
      <div className="flex flex-row items-stretch gap-6 w-full">
        {/* Left Content */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Badge and Title */}

          {/* Review Text */}
          <div className="flex flex-col items-end">
            <p className="text-base text-text-gray font-normal font-poppins">
              {data.reviewText}
            </p>
          </div>

          {/* Client Info and Verify Link */}
          <div className="flex flex-row items-center justify-between">
            {/* Client Info */}
            <div className="flex flex-col">
              <h3 className="text-[1.25rem]  text-text-gray font-semibold font-poppins">
                {data.clientName}
              </h3>
              <p className="text-base text-footer-text font-normal font-poppins">
                {data.clientRole}
              </p>
            </div>

            {/* Verify Link */}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative sm:hidden flex-shrink-0 h-[15rem] w-[15rem]">
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
