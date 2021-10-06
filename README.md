# Gatsby Starter

Very basic starter kit for creating a Gatsby site without a content source.

## Configuring a new site

Open `gatsby-config.js` and edit the following variables:

- `siteUrl`: The base url for the site.
- `siteName`: The site name used in the window title.
- `siteSlogan`: The site slogan used in the homepage window title after the site name.
- `siteDescription`: The description that appears on search engine results.;
- `siteShortName`: The name used when you bookmark the site on a phone. Defaults to same value as `siteName`.
- `themeColor`: The color used for the address bar on mobile browsers.
- `googleAnalyticsID`: The site's Google Analytics tracking ID.

## Using images

This starterkit has components for both normal images and background images. 

- Normal image: maximum width is 960px, doesn't permit children.
- Background image: maximum width is 1920px, permits children.

To add an image:

1. Put the file in `assets/images` (Create the directory if it is missing).
2. Import the `Image` or `BackgroundImage` component. Pass the name of the image (the file's basename) as a prop to the component and Gatsby will generate a responsive image.
