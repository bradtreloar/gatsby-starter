import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

interface SVGImageProps {
  name?: string;
  className?: string;
}

interface SVGImageFileProps {
  name: string;
  publicURL: string;
}

interface ImageQueryProps {
  allFile: {
    files: SVGImageFileProps[];
  };
}

const SVGImage: React.FC<SVGImageProps> = ({ name, className }) => {
  const data: ImageQueryProps = useStaticQuery(graphql`
    query SVGImageQuery {
      allFile(filter: { relativePath: { regex: "/^svg_images/.+$/" } }) {
        files: nodes {
          name
          publicURL
        }
      }
    }
  `);

  const imageFile = data.allFile.files.filter(file => file.name === name)[0];
  const imageURL = imageFile.publicURL;

  return <img className={className} src={imageURL} />;
};

export default SVGImage;
