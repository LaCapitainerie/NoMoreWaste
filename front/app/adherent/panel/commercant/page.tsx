"use client"

import Link from "next/link";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Adherent } from "@/type/Adherent";
import { DataTable } from "@/components/table/data-table";
import { Card, CardContent } from "@/components/ui/card";
import { columns } from "./commercant-columns";
import { Commercant } from "@/type/Commercant";
import { ResponseCustom } from "@/type/Reponse";
import { adherentPanelMenuListValue } from "@/type/Panel";
import { lang } from "@/lib/utils";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import axios from "axios";

export default function DashboardPage() {

  const [data, setData] = useState<Commercant[]>([]);

  useState(() => {
      axios.get<ResponseCustom<Commercant[]>>('http://localhost:1000/commercants.php').then((res) => {
        setData(res.data.result);
      });
  });

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
            <BreadcrumbPage>
              {
                {
                  "fr-Fr": "Commerçants",
                  "en-US": "Merchants"
                }[language]
              }
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className="rounded-lg border-none mt-6">
        <CardContent className="p-6 min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
            <DataTable columns={columns} data={data} route={"commercants"} langue={language} />
        </CardContent>
      </Card>
    </ContentLayout>
  );
}

