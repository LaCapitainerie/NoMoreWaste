import Link from "next/link";

import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { adherent_panel_menuListValue } from "../../layout";
import { Card, CardContent } from "@/components/ui/card";
import { AreaChartStacked } from "@/components/ui/chart/area-chart-stacked";
import { ChartConfig } from "@/components/ui/chart/chart";
import { BarChartLabel } from "@/components/ui/chart/bar-chart-label";
import { RadarChartGridFilled } from "@/components/ui/chart/radar-chart-gridfilled";
import { Services } from "@/type/Services";

export default function DashboardPage() {

  const AreaChartStackedData = [
    { month: "January", "En Stock": 186, "Envoyés": 80 },
    { month: "February", "En Stock": 305, "Envoyés": 200 },
    { month: "March", "En Stock": 237, "Envoyés": 120 },
    { month: "April", "En Stock": 73, "Envoyés": 190 },
    { month: "May", "En Stock": 209, "Envoyés": 130 },
    { month: "June", "En Stock": 214, "Envoyés": 140 },
  ]
  
  const AreaChartStackedConfig = {
    "En Stock": {
      label: "En Stock",
      color: "hsl(var(--chart-1))",
    },
    "Envoyés": {
      label: "Envoyés",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig

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

  const RadarChartGridFilledData: {month: Services, desktop: number}[] = [
    { month: "Conseils anti-gaspi", desktop: 186 },
    { month: "Cours de cuisine", desktop: 285 },
    { month: "Gardiennage", desktop: 237 },
    { month: "Partage de véhicules", desktop: 203 },
    { month: "Services de réparation", desktop: 209 },
    { month: "Services entre particuliers", desktop: 264 },
  ]
  const RadarChartGridFilledConfig = {
    desktop: {
      label: "Services",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig


  return (
    <ContentLayout title="Dashboard" menuListValue={adherent_panel_menuListValue}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/adherent/panel">Panel</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Stock</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <Card className="rounded-lg border-none mt-6">
        <CardContent className="p-6 min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">

          <div className={"grid w-full auto-rows-[22rem] grid-cols-3 gap-4"}>

            <BarChartLabel
              title={"Adherent"}
              description={"Évolution du nombre d'adhérents."}
              chartConfig={BarChartLabelConfig}
              chartData={BarChartLabelData}
              className="col-span-3 lg:col-span-1"
            />

            <AreaChartStacked
              title={"Stock"}
              description={"Stock de produits par entrepôt."}
              chartConfig={AreaChartStackedConfig}
              chartData={AreaChartStackedData}
              className="col-span-3 lg:col-span-2"
              style={{ aspectRatio: "128 / 33" }}
            />

            <RadarChartGridFilled
              title={"Services"}
              description={"Répartition des services par domaine."}
              chartConfig={RadarChartGridFilledConfig}
              chartData={RadarChartGridFilledData}
              className="col-span-3 lg:col-span-2"
              style={{ aspectRatio: "20 / 9" }}
            />

            <AreaChartStacked
              title={"Stock"}
              description={"Stock de produits par entrepôt."}
              chartConfig={AreaChartStackedConfig}
              chartData={AreaChartStackedData}
              className="col-span-3 lg:col-span-1"
              style={{ aspectRatio: "32 / 9" }}
            />

          </div>

        </CardContent>
      </Card>

    </ContentLayout>
  );
}
