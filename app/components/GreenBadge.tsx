import Image from "next/image";

interface GreenBadgeProps {
  icon: string;
  text: string;
}

const GreenBadge: React.FC<GreenBadgeProps> = ({ icon, text }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-2 bg-badge-bg px-[0.875rem] w-fit py-1 rounded-full">
      <img
        className="w-4.5 h-4.5 sm:w-4 sm:h-4 object-contain"
        src={icon}
        alt={text}
      />
      <span className="text-sm leading-[1.714em] text-badge-text font-normal font-poppins text-center">
        {text}
      </span>
    </div>
  );
};

export default GreenBadge;
