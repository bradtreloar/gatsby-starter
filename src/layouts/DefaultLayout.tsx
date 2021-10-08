import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Root from "../components/Root";
import Navbar from "../components/Navbar";

interface DefaultLayoutProps {
  pageTitle: string;
  className?: string;
  isFront?: boolean;
  isContact?: boolean;
}

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      slogan: string;
      description: string;
      keywords: string;
    };
  };
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  className,
  isFront,
  isContact,
  pageTitle
}) => (
  <StaticQuery
    query={graphql`
      query OverrideDefaultLayoutQuery {
        site {
          siteMetadata {
            title
            description
            slogan
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => {
      const siteTitle = data.site.siteMetadata.title;
      const siteSlogan = data.site.siteMetadata.slogan;
      return (
        <Root className={className}>
          <Helmet
            title={
              isFront
                ? siteSlogan
                  ? `${siteTitle} | ${siteSlogan}`
                  : siteTitle
                : `${pageTitle} | ${siteTitle}`
            }
          >
            {isContact && (
              <script
                src="https://www.google.com/recaptcha/api.js"
                async
                defer
              ></script>
            )}
          </Helmet>
          <div className="page d-flex flex-column bg-light">
            <Navbar />
            <main className="main flex-grow-1">
              <div className="content">{children}</div>
            </main>
            <div className="footer mt-5 bg-white">
              <div className="container py-3">{/* Put some menus here. */}</div>
            </div>
            <div className="boilerplate bg-white">
              <div className="container text-center">
                <div className="py-3">
                  <p className="m-0">
                    © {new Date().getFullYear()} {data.site.siteMetadata.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Root>
      );
    }}
  />
);

export default DefaultLayout;
