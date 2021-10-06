import * as React from "react";
import classnames from "classnames";

interface PageTitleProps {
  className?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ children, className }) => (
  <div className={classnames("py-5 text-center", className)}>
    <h1>{children}</h1>
  </div>
);

export default PageTitle;
