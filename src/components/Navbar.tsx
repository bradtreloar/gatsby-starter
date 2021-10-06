import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import classnames from "classnames";
import { MenuItem, mainMenuItems } from "../data/menus";
import logo from "../assets/logo.svg";

// Set colors here instead of in the JSX markup.
export const navbarBackground = "white";
export const isDarkNavbar = false;

interface NavbarProps {
  className?: string;
}

interface NavbarQueryProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const NavbarWrapper: React.FC<NavbarProps> = ({ className }) => {
  const data: NavbarQueryProps = useStaticQuery(graphql`
    query NavbarQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const navItems = (menuItems: MenuItem[]) => {
    return menuItems.map((menuItem, index) =>
      menuItem.subMenu === undefined ? (
        <Nav.Link key={`${index}`} href={menuItem.url}>
          {menuItem.label}
        </Nav.Link>
      ) : (
        <NavDropdown
          key={`${index}`}
          title={menuItem.label}
          id={`nav-dropdown-${index}`}
        >
          {menuItem.subMenu.map((menuItem, innerIndex) => (
            <NavDropdown.Item
              key={`${index}-${innerIndex}`}
              href={menuItem.url}
            >
              {menuItem.label}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      )
    );
  };

  return (
    <div
      className={`navbar-wrapper bg-${navbarBackground}`}
      style={{
        zIndex: 1030
      }}
    >
      <div className="container px-0 py-1">
        <Navbar
          className={classnames(
            isDarkNavbar ? "navbar-dark" : "navbar-light",
            className
          )}
          expand="lg"
        >
          <Link to="/" className="navbar-brand">
            <img src={logo} alt={data.site.siteMetadata.title} height="52" />
          </Link>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse
            id="navbar-nav"
            className="justify-content-end text-right"
          >
            <Nav>{navItems(mainMenuItems)}</Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarWrapper;
