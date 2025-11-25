interface AnalyticsItem {
  value: string;
  description: string;
}
const analyticsItems: AnalyticsItem[] = [
  {
    value: "10",
    description: "Years of Experience",
  },
  {
    value: "35",
    description: "Countries Served",
  },

  {
    value: "210",
    description: "Expert Freelancers",
  },

  {
    value: "900+",
    description: "Projects Completed",
  },
];
interface AnalyticsProps {}

const Analytics: React.FC<AnalyticsProps> = () => {
  return (
    <section className="flex py-16 mx-auto max-w-desktop w-full justify-around  relative">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#fafafa] via-[#8a8a8a] to-[#fafafa]"></div>
      {analyticsItems.map((item, index) => (
        <div key={index} className="flex flex-col gap-5 items-center">
          <h1 className="text-5xl font-bold text-primary-blue font-secondary">
            {item.value}
          </h1>
          <span className="text-footer-text font-normal font-poppins">
            {item.description}
          </span>
        </div>
      ))}
    </section>
  );
};

export default Analytics;
