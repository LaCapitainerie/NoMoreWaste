import PanelLayout from "@/components/admin-panel/admin-panel-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Panel | Admin",
    description: "Panel Admin",
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