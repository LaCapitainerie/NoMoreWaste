import Link from "next/link";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ResponseCustom } from "@/type/Adherent";
import { DataTable } from "@/components/table/data-table";
import { Card, CardContent } from "@/components/ui/card";
import { admin_panel_menuListValue } from "../layout";
import { columns } from "./tickets-columns";
import { ChartConfig } from "@/components/ui/chart/chart";
import { BarChartMixed } from "@/components/ui/chart/bar-chart-mixed";
import { BarChartMultiple } from "@/components/ui/chart/bar-chart-multiple";
import { RadarChartGridFilled } from "@/components/ui/chart/radar-chart-gridfilled";
import { Incidents } from "@/type/Incidents";


export default async function DashboardPage() {

  const result2: ResponseCustom<Incidents> = await fetch("http://localhost:1000/incidents.php", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Something went wrong");
    }
  }).then((data) => {
    return data;
  }).catch((error) => {
    console.error("Error:", error);
  });

  const BarChartMultipleData = [
    { month: "January", ended: 186, en_cours: 94, open: 80 },
    { month: "February", ended: 305, en_cours: 265, open: 200 },
    { month: "March", ended: 237, en_cours: 179, open: 120 },
    { month: "April", ended: 73, en_cours: 124, open: 190 },
    { month: "May", ended: 209, en_cours: 167, open: 130 },
    { month: "June", ended: 214, en_cours: 156, open: 140 },
  ]
  const BarChartMultipleConfig = {
    open: {
      label: "Ouvert",
      color: "hsl(var(--chart-2))",
    },
    en_cours: {
      label: "En cours",
      color: "hsl(var(--chart-3))",
    },
    ended: {
      label: "Clos",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig

  
  const BarChartMixedData = [
    { browser: "Basse", visitors: 275, fill: "var(--color-Basse)" },
    { browser: "Moyenne", visitors: 200, fill: "var(--color-Moyenne)" },
    { browser: "Haute", visitors: 187, fill: "var(--color-Haute)" },
  ]

  const BarChartMixedConfig = {
    visitors: {
      label: "Priorité",
    },
    Basse: {
      label: "Basse",
      color: "hsl(var(--chart-1))",
    },
    Moyenne: {
      label: "Moyenne",
      color: "hsl(var(--chart-2))",
    },
    Haute: {
      label: "Haute",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig

  const RadarChartGridFilledData: {month: Incidents["tag"], desktop: number}[] = [
    { month: "Connexion", desktop: 186 },
    { month: "Livraison", desktop: 285 },
    { month: "Paiement", desktop: 237 },
    { month: "Autre", desktop: 203 },
  ]
  
  const RadarChartGridFilledConfig = {
    desktop: {
      label: "Tag",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig

  return (
    <ContentLayout title="Dashboard" menuListValue={admin_panel_menuListValue}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/adherent/panel">Panel</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Incidents</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className="rounded-lg border-none mt-6">
        <CardContent className="p-6 min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">

        <div className={"grid w-full auto-rows-[22rem] grid-cols-3 gap-4"}>

          {/* <Card className={"col-span-3 lg:col-span-2"}>
            <CardContent>
              <DataTable columns={columns} data={result2.result} route={"commercants"} />
            </CardContent>
          </Card> */}

          <DataTable columns={columns} data={result2.result} route={"commercants"} className={"col-span-3 lg:col-span-2"} rowPerPageDefault={3}/>

          <BarChartMultiple
              title={"Incident"}
              description={"Évolution du nombre d'incidents."}
              chartConfig={BarChartMultipleConfig}
              chartData={BarChartMultipleData}
              className="col-span-3 lg:col-span-1"
            />

          <RadarChartGridFilled
              title={"Tag"}
              description={"Répartition des tags des incidents."}
              chartConfig={RadarChartGridFilledConfig}
              chartData={RadarChartGridFilledData}
              className="col-span-3 lg:col-span-2"
              style={{ aspectRatio: "20 / 9" }}
            />

          

          <BarChartMixed
            title={"Priorité"}
            description={"Répartition des priorités des incidents."}
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

