import Image from "next/image";

interface SocialMediaIconsProps {}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = () => {
  return (
    <div className="flex flex-row items-center gap-3 ">
      <div className="social-media relative">
        <Image
          src="/images/social-media/item1.png"
          alt="Instagram"
          fill
          className="object-cover"
        />
      </div>

      <div className="social-media relative">
        <Image
          src="/images/social-media/item2.png"
          alt="LinkedIn"
          fill
          className="object-cover"
        />
      </div>
      <div className="social-media relative">
        <Image
          src="/images/social-media/item3.png"
          alt="WhatsApp"
          fill
          className="object-cover"
        />
      </div>
      <div className="social-media relative">
        <Image
          src="/images/social-media/item4.png"
          alt="LinkedIn"
          fill
          className="Messenger"
        />
      </div>
    </div>
  );
};

export default SocialMediaIcons;
