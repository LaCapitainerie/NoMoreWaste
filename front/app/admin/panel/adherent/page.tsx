"use client"

import Link from "next/link";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Adherent } from "@/type/Adherent";
import { DataTable } from "@/components/table/data-table";
import { Card, CardContent } from "@/components/ui/card";
import { columns } from "./adherent-columns";
import { ChartConfig } from "@/components/ui/chart/chart";
import { BarChartLabel } from "@/components/ui/chart/bar-chart-label";
import { BarChartMixed } from "@/components/ui/chart/bar-chart-mixed";
import { ResponseCustom } from "@/type/Reponse";
import { lang } from "@/lib/utils";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import axios from "axios";


export default function DashboardPage() {

  const [data, setData] = useState<Adherent[]>([]);

  useState(() => {
      axios.get<ResponseCustom<Adherent[]>>('http://localhost:1000/adherents.php').then((res) => {
        setData(res.data.result);
      });
  });

  const BarChartLabelData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ]

  const BarChartLabelConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig

  
  const BarChartMixedData = [
    { browser: "Standard", visitors: 275, fill: "var(--color-Standard)" },
    { browser: "Premium", visitors: 200, fill: "var(--color-Premium)" },
    { browser: "VIP", visitors: 187, fill: "var(--color-VIP)" },
  ]

  const BarChartMixedConfig = {
    visitors: {
      label: "Adherents",
    },
    Standard: {
      label: "Standard",
      color: "hsl(var(--chart-1))",
    },
    Premium: {
      label: "Premium",
      color: "hsl(var(--chart-2))",
    },
    VIP: {
      label: "VIP",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig

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
              <Link href="/admin/panel">Panel</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Commercant</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className="rounded-lg border-none mt-6">
        <CardContent className="p-6 min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">

        <div className={"grid w-full auto-rows-[22rem] grid-cols-3 gap-4"}>

          <DataTable columns={columns} data={data} route={"commercants"} className={"col-span-3 lg:col-span-2 row-span-2"} langue={language}/>

          <BarChartLabel
              title={"Adherent"}
              description={"Évolution du nombre d'adhérents."}
              chartConfig={BarChartLabelConfig}
              chartData={BarChartLabelData}
              className="col-span-3 lg:col-span-1"
            />

          <BarChartMixed
            title={"Abonnement"}
            description={"Répartition des abonnements."}
            chartConfig={BarChartMixedConfig}
            chartData={BarChartMixedData}
            className="col-span-3 lg:col-span-1"
          />

        </div>
            


        </CardContent>
      </Card>
    </ContentLayout>
  );
}

