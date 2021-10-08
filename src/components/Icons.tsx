import React from "react";

export interface IconProps {
  size?: number;
}

export const CloseIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height={size || 24}
    width={size || 24}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
      d={`
        M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 
        12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z`}
    />
  </svg>
);

export const NavIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height={size || 24}
    width={size || 24}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ size }) => (
  <svg
    viewBox="0 0 512 512"
    fill="currentColor"
    height={size || 24}
    width={size || 24}
  >
    <path
      d={`
        M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3
        6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 
        177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6
        389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464
        0-11.2-7.7-20.9-18.6-23.4z`}
    />
  </svg>
);
