import PanelLayout from "@/components/admin-panel/admin-panel-layout";
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
        <PanelLayout>
            {children}
        </PanelLayout>
    );
}