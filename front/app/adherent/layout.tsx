import PanelLayout from "@/components/admin-panel/admin-panel-layout";
import { adherent_panel_menuListValue } from "@/type/Panel";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Panel | Adhérent",
    description: "Panel Adhérent",
};

export default function DemoLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <PanelLayout menuListValue={adherent_panel_menuListValue}>
            {children}
        </PanelLayout>
    );
}