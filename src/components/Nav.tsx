import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";

interface NavProps {
  menuItems: NavItemProps[];
  className?: string;
  isVertical?: boolean;
}

export interface NavItemProps {
  menu: string;
  url: string;
  title: string;
  weight?: number;
}

const Nav: React.FC<NavProps> = ({ menuItems, isVertical, className }) => {
  const listItems = menuItems.map(menuItem => (
    <li className="nav-item" key={menuItem.title}>
      <Link className="nav-link" to={menuItem.url}>
        <span>{menuItem.title}</span>
      </Link>
    </li>
  ));

  return (
    <ul className={classnames(`nav`, isVertical && `flex-column`, className)}>
      {listItems}
    </ul>
  );
};

export default Nav;
