import Link from "next/link";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Adherent, ResponseCustom } from "@/type/Adherent";
import { DataTable } from "@/components/table/data-table";
import { Card, CardContent } from "@/components/ui/card";
import { admin_panel_menuListValue } from "../layout";
import { columns } from "./adherent-columns";
import { ChartConfig } from "@/components/ui/chart/chart";
import { BarChartLabel } from "@/components/ui/chart/bar-chart-label";
import { BarChartMixed } from "@/components/ui/chart/bar-chart-mixed";

async function getData(): Promise<Adherent[]> {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      Abonnement: "Standard",
      Prénom: "Hugo",
      Nom: "Antréassion",
      Mail: "m@example.com",
    },
    {
      id: 2,
      Abonnement: "Premium",
      Prénom: "Léon",
      Nom: "Pupier",
      Mail: "t@exemple.com",
    },
    {
      id: 3,
      Abonnement: "VIP",
      Prénom: "Sarmawel",
      Nom: "Bloomfield",
      Mail: "f@exemple.com",
    },
  ] as Adherent[]
}

export default async function DashboardPage() {
  const result = await getData();

  const result2: ResponseCustom<Adherent> = await fetch("http://localhost:1000/adherents.php", {
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
            <BreadcrumbPage>Commercant</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className="rounded-lg border-none mt-6">
        <CardContent className="p-6 min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">

        <div className={"grid w-full auto-rows-[22rem] grid-cols-3 gap-4"}>

          <DataTable columns={columns} data={result2.result} route={"commercants"} className={"col-span-3 lg:col-span-2 row-span-2"}/>

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

