import Image from "next/image";

interface SocialMediaIconsProps {
  small?: boolean;
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ small }) => {
  const myClass =
    "social-media relative cursor-pointer" +
    (small ? " social-media-small" : "");
  return (
    <div className="flex flex-row items-center gap-3 ">
      <div className={myClass}>
        <Image
          src="/images/social-media/item1.webp"
          alt="Instagram"
          fill
          className="object-cover"
        />
      </div>

      <div className={myClass}>
        <Image
          src="/images/social-media/item2.webp"
          alt="LinkedIn"
          fill
          className="object-cover"
        />
      </div>
      <div className={myClass}>
        <Image
          src="/images/social-media/item3.webp"
          alt="WhatsApp"
          fill
          className="object-cover"
        />
      </div>
      <div className={myClass}>
        <Image
          src="/images/social-media/item4.webp"
          alt="LinkedIn"
          fill
          className="Messenger"
        />
      </div>
    </div>
  );
};

export default SocialMediaIcons;
