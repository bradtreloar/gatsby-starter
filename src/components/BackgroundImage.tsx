import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FluidObject } from "gatsby-image";
import BackgroundImage from "gatsby-background-image";

interface ImageProps {
  name: string;
  className?: string;
}

interface ImageFileProps {
  name: string;
  childImageSharp: {
    fluid: FluidObject;
  };
}

interface ImageQueryProps {
  allFile: {
    files: ImageFileProps[];
  };
}

const Image: React.FC<ImageProps> = ({ name, className }) => {
  const data: ImageQueryProps = useStaticQuery(graphql`
    query BackgroundImageQuery {
      allFile(filter: { relativePath: { regex: "/^images/.+$/" } }) {
        files: nodes {
          name
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const imageFile = data.allFile.files
    .filter(file => file.name === name)
    .shift();
  const imageData = imageFile && imageFile.childImageSharp.fluid;

  if (imageData) {
    return <BackgroundImage className={className} fluid={imageData} />;
  } else {
    return null;
  }
};

export default Image;
