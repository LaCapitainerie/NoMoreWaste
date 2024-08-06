import PanelLayout from "@/components/admin-panel/admin-panel-layout";
import type { Metadata } from "next";
import { adherent_panel_menuListValue } from "../layout";

export const metadata: Metadata = {
  title: "Panel | Adhérent",
  description: "Panel Adhérent",
};

export default function DemoLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <PanelLayout menuListValue={adherent_panel_menuListValue}>{children}</PanelLayout>;
}
