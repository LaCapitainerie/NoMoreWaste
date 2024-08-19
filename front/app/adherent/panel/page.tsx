import Link from "next/link";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Bento } from "@/components/admin-panel/bento";
import { Store, Truck, Box } from "lucide-react";
import { adherent_panel_menuListValue } from "@/type/Panel";

const features = [
  {
    Icon: Store,
    name: "Commercants",
    description: "Gérer les commerçants depuis un tableau de bord.",
    href: "/adherent/panel/commercant",
    cta: "En savoir plus",
    background: <img src="/adherent_panel_commercant.png" className="absolute opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Truck,
    name: "Collecte",
    description: "Gérer les collectes et distributions depuis un tableau de bord.",
    href: "/adherent/panel/collecte",
    cta: "En savoir plus",
    background: <img src="/adherent_panel_collecte.png" className="absolute -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Box,
    name: "Stock",
    description: "Gérer les stocks depuis un tableau de bord.",
    href: "/adherent/panel/stock",
    cta: "En savoir plus",
    background: <img src="/adherent_panel_stock.png" className="absolute opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  // {
  //   Icon: CalendarIcon,
  //   name: "Calendar",
  //   description: "Calendrier des collectes et distributions.",
  //   href: "/adherent/panel/collecte",
  //   cta: "Learn more",
  //   background: <img className="absolute -right-20 -top-20 opacity-60" />,
  //   className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  // },
  // {
  //   Icon: BellIcon,
  //   name: "Notifications",
  //   description:
  //     "Get notified when someone shares a file or mentions you in a comment.",
  //   href: "/",
  //   cta: "Learn more",
  //   background: <img className="absolute -right-20 -top-20 opacity-60" />,
  //   className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  // },
];

export default async function DashboardPage() {

  return (
    <ContentLayout title="Dashboard" menuListValue={adherent_panel_menuListValue}>
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

