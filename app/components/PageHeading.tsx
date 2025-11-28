import { FunctionComponent } from "react";
import classNames from "classnames";

interface PageHeadingProps {
  title: React.ReactNode;
  description: React.ReactNode;
  className?: string;
}

const PageHeading: FunctionComponent<PageHeadingProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div
      className={classNames(
        "flex flex-col items-center gap-6 mx-auto",
        className
      )}
    >
      <h1 className="text-footer-heading font-semibold font-obviously text-center">
        {title}
      </h1>
      <h3 className="text-footer-text font-normal font-poppins text-center">
        {description}
      </h3>
    </div>
  );
};

export default PageHeading;
