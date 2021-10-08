"use strict";

// The base url for the site.
const siteUrl = `https://example.com`;

// The site name used in the window title.
const siteName = `Gatsby Starter`;

// The site slogan used in the homepage window title after the site name.
const siteSlogan = ``;

// The description that appears on search engine results.
const siteDescription = `
  A GatsbyJS starter website
`;

// The name used when you bookmark the site on a phone.
// Override this if the site name is too long for that.
const siteShortName = siteName;

// The color used for the address bar on mobile browsers.
const themeColor = `#ffffff`;

// The site's Google Analytics tracking ID.
const googleAnalyticsID = "UA-XXXXXXXXX-X";

module.exports = {
  siteMetadata: {
    title: siteName,
    slogan: siteSlogan,
    description: siteDescription,
    author: {
      name: "Brad Treloar",
      url: "https://bradtreloar.dev",
      email: "brad.treloar@pm.me"
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteName,
        short_name: siteShortName,
        start_url: `/`,
        background_color: themeColor,
        theme_color: themeColor,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [googleAnalyticsID]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "src/assets"
      }
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl
      }
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
    "gatsby-plugin-typescript-checker",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        precision: 6
      }
    }
  ]
};
