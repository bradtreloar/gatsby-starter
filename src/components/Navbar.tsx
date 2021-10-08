import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import classnames from "classnames";
import { mainMenuItems, contactMenuItems } from "../data/menus";
import logo from "../assets/logo.svg";
import { CloseIcon, NavIcon } from "./Icons";

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

interface NavItemsOptions {
  collapseLabel?: boolean;
  asButtons?: boolean;
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

  const navItems = (menuItems: MenuItem[], options?: NavItemsOptions) => {
    return menuItems.map((menuItem, index) => {
      const Icon = menuItem.icon;
      return menuItem.subMenu === undefined ? (
        <Nav.Link
          key={`${index}`}
          href={menuItem.url}
          className={classnames(
            "px-3",
            options?.asButtons && "btn btn-primary text-white"
          )}
        >
          {Icon && (
            <Icon
              size={18}
              className={classnames(
                options?.collapseLabel ? "mr-lg-2" : "mr-2"
              )}
            />
          )}
          <span
            className={classnames(
              Icon && options?.collapseLabel && "d-none d-lg-inline"
            )}
          >
            {menuItem.label}
          </span>
        </Nav.Link>
      ) : (
        <NavDropdown
          key={`${index}`}
          title={menuItem.label}
          id={`nav-dropdown-${index}`}
        >
          {menuItem.subMenu.map((menuItem, innerIndex) => {
            const Icon = menuItem.icon;
            return (
              <NavDropdown.Item
                key={`${index}-${innerIndex}`}
                href={menuItem.url}
              >
                {Icon && (
                  <Icon
                    size={18}
                    className={classnames(
                      options?.collapseLabel ? "mr-lg-2" : "mr-2"
                    )}
                  />
                )}
                <span
                  className={classnames(
                    Icon && options?.collapseLabel && "d-none d-lg-inline"
                  )}
                >
                  {menuItem.label}
                </span>
              </NavDropdown.Item>
            );
          })}
        </NavDropdown>
      );
    });
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
          <Navbar.Collapse
            id="navbar-nav"
            className={classnames(
              "justify-content-end",
              "text-right",
              "mr-lg-3",
              `bg-${navbarBackground}`
            )}
          >
            <div className="offcanvas-header d-flex d-lg-none align-items-center justify-content-end">
              <Navbar.Toggle aria-controls="navbar-nav" className="mr-3">
                <CloseIcon size={36} />
              </Navbar.Toggle>
            </div>
            <Nav>{navItems(mainMenuItems)}</Nav>
          </Navbar.Collapse>
          <Nav className="ml-auto">
            {navItems(contactMenuItems, {
              collapseLabel: true,
              asButtons: true
            })}
          </Nav>
          <Navbar.Toggle aria-controls="navbar-nav">
            <NavIcon size={36} />
          </Navbar.Toggle>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarWrapper;
