"use client"

import Link from "next/link";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { useLangContext } from "@/hooks/lang-provider";
import CollecteCalendar from "@/components/collecte/Calendar";

export default function DashboardPage() {
  
  const lang = useLangContext();

  return (
    <ContentLayout title="Dashboard">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/adherent/panel">Panel</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              {
                {
                  "fr-Fr": "Collectes",
                  "en-US": "Collections"
                }[lang]
              }
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className="rounded-lg border-none mt-6">
        <CardContent className="p-6 min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">

          <CollecteCalendar langue={lang} />

        </CardContent>
      </Card>
    </ContentLayout>
  );
}

