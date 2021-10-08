import { PhoneIcon } from "../components/Icons";

const mainMenuItems: MenuItem[] = [
  {
    label: "About Us",
    url: "/about"
  }
];

const contactMenuItems: MenuItem[] = [
  {
    label: "0412 345 678",
    url: "tel:+61412345678",
    icon: PhoneIcon
  }
];

export { mainMenuItems, contactMenuItems };
