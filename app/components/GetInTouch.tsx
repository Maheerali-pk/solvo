import GetInTouchBanner from "./GetInTouchBanner";
import GetInTouchForm from "./GetInTouchForm";
import GreenBadge from "./GreenBadge";

interface GetInTouchProps {}

const GetInTouch: React.FC<GetInTouchProps> = () => {
  return (
    <section className="w-full flex flex-col max-w-desktop mx-auto  gap-6 sm:px-side-space relative">
      <GreenBadge icon="/images/zap-icon.svg" text="Solvo’s Premium" />
      <div className="grid grid-cols-[auto_min-content] sm:grid-cols-1 gap-6">
        <GetInTouchForm />
        <GetInTouchBanner />
      </div>
    </section>
  );
};

export default GetInTouch;
