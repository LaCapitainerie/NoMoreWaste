"use client"
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Bento } from "@/components/admin-panel/bento";
import { Store, Truck, Box } from "lucide-react";
import { lang } from "@/lib/utils";
import { useState, useEffect } from "react";
import { toast } from "sonner";



export default function DashboardPage() {

  const [language, setLanguage] = useState<lang>(
    (typeof window !== "undefined" && localStorage.getItem("lang")) as lang || "fr-Fr"
  );

  const features = [
    {
      Icon: Store,
      name: {
        "fr-Fr": "Commercants",
        "en-US": "Merchants"
      }[language],
      description: 
      {
        "fr-Fr": "Gérer les commerçants depuis un tableau de bord.",
        "en-US": "Manage merchants from a dashboard."
      }[language],
      href: "/adherent/panel/commercant",
      cta: 
      {
        "fr-Fr": "En savoir plus",
        "en-US": "Learn more"
      }[language],
      background: <img alt="adherent_panel_commercant.png" src="/adherent_panel_commercant.png" className="absolute opacity-60" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: Truck,
      name: 
      {
        "fr-Fr": "Collecte",
        "en-US": "Collection"
      }[language],
      description: 
      {
        "fr-Fr": "Gérer les collectes depuis un tableau de bord.",
        "en-US": "Manage collections from a dashboard."
      }[language],
      href: "/adherent/panel/collecte",
      cta: 
      {
        "fr-Fr": "En savoir plus",
        "en-US": "Learn more"
      }[language],
      background: <img alt="adherent_panel_collecte.png" src="/adherent_panel_collecte.png" className="absolute -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: Box,
      name: "Stock",
      description: 
      {
        "fr-Fr": "Gérer les stocks depuis un tableau de bord.",
        "en-US": "Manage stocks from a dashboard."
      }[language],
      href: "/adherent/panel/stock",
      cta: 
      {
        "fr-Fr": "En savoir plus",
        "en-US": "Learn more"
      }[language],
      background: <img alt="adherent_panel_stock.png" src="/adherent_panel_stock.png" className="absolute opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
  ];

  useEffect(() => {

    if(typeof window !== "undefined") {
      localStorage.setItem("lang", language);
    };

  }, [language]);

  return (
    <ContentLayout title="Dashboard" setLanguage={setLanguage}>
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

          <Bento features={features}/>

        </CardContent>
      </Card>
    </ContentLayout>
  );
}

