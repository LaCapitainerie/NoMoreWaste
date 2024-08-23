"use client"

import Link from "next/link";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Bento } from "@/components/admin-panel/bento";
import { BellIcon, CalendarIcon, CircleDotDashed, GlobeIcon, User } from "lucide-react";
import { lang } from "@/lib/utils";
import { useState } from "react";

export default function DashboardPage() {

  const [language, setLanguage] = useState<lang>(
    (typeof window !== "undefined" && localStorage.getItem("lang")) as lang || "fr-Fr"
  );

  const features = [
    {
      Icon: User,
      name: {
        "fr-Fr": "Adhérents",
        "en-US": "Members"
      }[language],
      description: {
        "fr-Fr": "Gérer les adhérents depuis un tableau de bord.",
        "en-US": "Manage members from a dashboard."
      }[language],
      href: "/admin/panel/adherent",
      cta: {
        "fr-Fr": "En savoir plus",
        "en-US": "Learn more"
      }[language],
      background: <img src="/admin_panel_adherent.png" className="absolute opacity-60" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: CircleDotDashed,
      name: {
        "fr-Fr": "Incidents",
        "en-US": "Incidents"
      }[language],
      description: {
        "fr-Fr": "Gérer les incidents depuis un tableau de bord.",
        "en-US": "Manage incidents from a dashboard."
      }[language],
      href: "/admin/panel/incident",
      cta: {
        "fr-Fr": "En savoir plus",
        "en-US": "Learn more"
      }[language],
      background: <img src="/admin_panel_incident.png" className="absolute -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: GlobeIcon,
      name: {
        "fr-Fr": "Langues",
        "en-US": "Languages"
      }[language],
      description: {
        "fr-Fr": "Gérer les langues depuis un tableau de bord.",
        "en-US": "Manage languages from a dashboard."
      }[language],
      href: "/",
      cta: {
        "fr-Fr": "En savoir plus",
        "en-US": "Learn more"
      }[language],
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      name: {
        "fr-Fr": "Calendrier",
        "en-US": "Calendar"
      }[language],
      description: {
        "fr-Fr": "Gérer les calendriers depuis un tableau de bord.",
        "en-US": "Manage calendars from a dashboard."
      }[language],
      href: "/",
      cta: {
        "fr-Fr": "En savoir plus",
        "en-US": "Learn more"
      }[language],
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: BellIcon,
      name: {
        "fr-Fr": "Notifications",
        "en-US": "Notifications"
      }[language],
      description:  {
        "fr-Fr": "Gérer les notifications depuis un tableau de bord.",
        "en-US": "Manage notifications from a dashboard."
      }[language],
      href: "/",
      cta: {
        "fr-Fr": "En savoir plus",
        "en-US": "Learn more"
      }[language],
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];

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

          <Bento features={features} />

        </CardContent>
      </Card>
    </ContentLayout>
  );
}

