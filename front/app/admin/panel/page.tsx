import Link from "next/link";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Bento } from "@/components/admin-panel/bento";
import { BellIcon, CalendarIcon, CircleDotDashed, GlobeIcon, User } from "lucide-react";
import { admin_panel_menuListValue } from "@/type/Panel";

const features = [
  {
    Icon: User,
    name: "Adherents",
    description: "Gérer les adhérents de l'association.",
    href: "/admin/panel/adherent",
    cta: "En savoir plus",
    background: <img src="/admin_panel_adherent.png" className="absolute opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: CircleDotDashed,
    name: "Incidents",
    description: "Gérer les incidents depuis un tableau de bord.",
    href: "/admin/panel/incident",
    cta: "En savoir plus",
    background: <img src="/admin_panel_incident.png" className="absolute -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];


export default async function DashboardPage() {

  return (
    <ContentLayout title="Dashboard" menuListValue={admin_panel_menuListValue}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="#">Panel</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className="rounded-lg border-none mt-6">
        <CardContent className="p-6 min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">

          <Bento features={features} />

        </CardContent>
      </Card>
    </ContentLayout>
  );
}

