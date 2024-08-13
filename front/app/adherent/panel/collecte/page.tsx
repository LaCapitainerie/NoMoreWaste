"use client"

import Link from "next/link";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import CollecteCalendar from "@/components/collecte/Calendar";
import { adherentPanelMenuListValue } from "@/type/Panel";
import { lang } from "@/lib/utils";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Group } from "@/lib/menu-list";

export default function DashboardPage() {

  const [language, setLanguage] = useState<lang>(
    (typeof window !== "undefined" && localStorage.getItem("lang")) as lang || "fr-Fr"
  );

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
              <Link href="/adherent/panel">Panel</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Collect{language=="fr-Fr"?"e":""}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>


      <Card className="rounded-lg border-none mt-6">
        <CardContent className="p-6 min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">

          <CollecteCalendar langue={language}/>

        </CardContent>
      </Card>
    </ContentLayout>
  );
}


