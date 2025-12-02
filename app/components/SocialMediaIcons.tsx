import Image from "next/image";
import { allIcons } from "../helpers/icons";

interface SocialMediaIconsProps {
  small?: boolean;
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ small }) => {
  const myClass =
    "flex h-10 w-10 bg-primary-blue rounded-xl items-center justify-center cursor-pointer" +
    (small ? " social-media-small" : "");
  return (
    <div className="flex flex-row items-center gap-3 ">
      <div className={myClass}>{allIcons.socialMedia.insta(20, 20)}</div>

      <div className={myClass}>{allIcons.socialMedia.linkedin(20, 20)}</div>
      <div className={myClass}>{allIcons.socialMedia.whatsapp(20, 20)}</div>
      <div className={myClass}>{allIcons.socialMedia.messanger(20, 20)}</div>
    </div>
  );
};

export default SocialMediaIcons;
