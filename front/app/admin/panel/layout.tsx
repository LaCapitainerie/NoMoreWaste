import PanelLayout from "@/components/admin-panel/admin-panel-layout";
import { Group } from "@/lib/menu-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panel | Admin",
  description: "Panel Admin",
};

export const admin_panel_menuListValue = [] as Group[];

export default function DemoLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <PanelLayout menuListValue={admin_panel_menuListValue}>{children}</PanelLayout>;
}
