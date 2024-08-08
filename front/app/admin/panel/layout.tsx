import PanelLayout from "@/components/admin-panel/admin-panel-layout";
import { Group } from "@/lib/menu-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Panel | Admin",
    description: "Panel Admin",
};

export const admin_panel_menuListValue = [
    {
        groupLabel: "Panel Admin",
        menus: [
            {
                href: "/admin/panel",
                label: "Dashboard",
                active: false,
                icon: "layout-panel-left",
                submenus: [
                    {
                        href: "/admin/panel/adherent",
                        label: "Gestion des adherents",
                        active: false
                    },
                    {
                        href: "/admin/panel/ticket",
                        label: "Gestion des incidents",
                        active: false
                    },
                ]
            }
        ]
    },
] as Group[];

export default function DemoLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <PanelLayout menuListValue={admin_panel_menuListValue}>
            {children}
        </PanelLayout>
    );
}