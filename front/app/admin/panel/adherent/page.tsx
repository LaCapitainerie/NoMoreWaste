"use client"

import Link from "next/link";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Adherent } from "@/type/Adherent";
import { DataTable } from "@/components/table/data-table";
import { Card, CardContent } from "@/components/ui/card";
import { getColumns } from "./adherent-columns";
import { ChartConfig } from "@/components/ui/chart/chart";
import { BarChartLabel } from "@/components/ui/chart/bar-chart-label";
import { BarChartMixed } from "@/components/ui/chart/bar-chart-mixed";
import { ResponseCustom } from "@/type/Reponse";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useLangContext } from "@/hooks/lang-provider";
import { useRouter } from "next/navigation";


export default function DashboardPage() {

  const [data, setData] = useState<Adherent[]>([]);
  const { push } = useRouter();

  useState(() => {
      axios.get<ResponseCustom<Adherent[]>>(process.env.NEXT_PUBLIC_API_URL as string + 'adherents.php',
        {
          "headers": {
            "Authorization": "Bearer " + (localStorage?.getItem(process.env.NEXT_PUBLIC_TOKEN as string) || "")
          }
        }).then((res) => {
          if(res.data.success){
            setData(res.data.result);
          } else {
            push('/login');
          };
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

  const language = useLangContext();
  
  return (
    <ContentLayout title="Dashboard">
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

          <DataTable columns={getColumns(language)} data={data} route={"commercants"} className={"col-span-3 lg:col-span-2 row-span-2"} langue={language}/>

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

