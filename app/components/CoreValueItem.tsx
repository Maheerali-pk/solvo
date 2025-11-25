import Image from "next/image";
import { ICoreValue } from "../helpers/data";

interface CoreValueItemProps {
  data: ICoreValue;
}

const CoreValueItem: React.FC<CoreValueItemProps> = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-[1.125rem] p-8 bg-white rounded-[1.25rem] shadow-[0px_0px_31.1px_0px_rgba(0,0,0,0.14)] flex-1 h-[18.0625rem]">
      {/* Icon */}
      <div className="w-11 h-11 relative flex-shrink-0">
        <Image
          src={data.icon}
          alt={data.title}
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[0.625rem] w-full">
        {/* Title */}
        <h3 className="text-xl leading-[1.8em] text-footer-heading font-semibold font-poppins text-center">
          {data.title}
        </h3>

        {/* Description */}
        <p className="text-base leading-[1.5em] text-footer-text font-normal font-poppins text-center">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default CoreValueItem;
