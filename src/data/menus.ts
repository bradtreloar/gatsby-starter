export interface MenuItem {
  label: string;
  url?: string;
  subMenu?: MenuItem[];
}

const mainMenuItems: MenuItem[] = [
  {
    label: "About Us",
    url: "/about"
  }
];

export { mainMenuItems };
