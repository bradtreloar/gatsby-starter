import { PhoneIcon } from "../components/Icons";

const mainMenuItems: MenuItem[] = [
  {
    label: "About Us",
    url: "/about"
  }
];

const contactMenuItems: MenuItem[] = [
  {
    label: "Contact Us",
    url: "/contact",
    icon: PhoneIcon
  }
];

export { mainMenuItems, contactMenuItems };
