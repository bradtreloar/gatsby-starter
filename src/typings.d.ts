interface IconProps {
  size?: number;
  className?: string;
}

interface MenuItem {
  label: string;
  url?: string;
  subMenu?: MenuItem[];
  icon?: React.ComponentType<IconProps>;
}

// type shims for CSS modules

interface CSSModule {
  [className: string]: string;
}

declare module "*.module.scss" {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module "*.module.css" {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.pdf" {
  const content: any;
  export default content;
}
