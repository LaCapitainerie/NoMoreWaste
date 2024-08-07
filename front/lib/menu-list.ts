import {
  Bell,
  Box,
  Home,
  Map,
  PocketKnife,
  Search,
  Store,
  Truck,
  User,
  UserCheck,
  Users
} from "lucide-react";

const NametoIcon = {
  "Home": Home,
  "Store": Store,
  "Truck": Truck,
  "Box": Box,
  "Map": Map,
  "Users": Users,
  "Tools": PocketKnife,
  "Search": Search,
  "Bell": Bell,
  "User": User,
}

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: keyof typeof NametoIcon;
  submenus: Submenu[];
};

export type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string, menuListValue: Group[]) {

  

  return menuListValue.map(({ groupLabel, menus }) => ({
    groupLabel,
    menus: menus.map(({ href, label, icon, submenus }) => ({
      href,
      label,
      icon: NametoIcon[icon],
      active: pathname.includes(href),
      submenus: submenus.map(({ href, label }) => ({
        href,
        label,
        active: pathname === href
      }))
    }))
  }));
};
