"use client"

import Link from "next/link";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { AreaChartStacked } from "@/components/ui/chart/area-chart-stacked";
import { ChartConfig } from "@/components/ui/chart/chart";
import { BarChartLabel } from "@/components/ui/chart/bar-chart-label";
import { RadarChartGridFilled } from "@/components/ui/chart/radar-chart-gridfilled";
import { lang } from "@/lib/utils";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function DashboardPage() {
  
  const [language, setLanguage] = useState<lang>(
    (typeof window !== "undefined" && localStorage.getItem("lang")) as lang || "fr-Fr"
  );

  const AreaChartStackedData = {
    "fr-Fr": [
      { month: "Janvier", "En Stock": 186, "Envoyés": 80 },
      { month: "Fevrier", "En Stock": 305, "Envoyés": 200 },
      { month: "Mars", "En Stock": 237, "Envoyés": 120 },
      { month: "Avril", "En Stock": 73, "Envoyés": 190 },
      { month: "Mai", "En Stock": 209, "Envoyés": 130 },
      { month: "Juin", "En Stock": 214, "Envoyés": 140 },
    ],
    "en-US": [
      { month: "January", "Stock": 186, "Sent": 80 },
      { month: "February", "Stock": 305, "Sent": 200 },
      { month: "March", "Stock": 237, "Sent": 120 },
      { month: "April", "Stock": 73, "Sent": 190 },
      { month: "May", "Stock": 209, "Sent": 130 },
      { month: "June", "Stock": 214, "Sent": 140 },
    ]

  }[language]
  
  const AreaChartStackedConfig = {
    "fr-Fr": {
      "En Stock": {
        label: "En Stock",
        color: "hsl(var(--chart-1))",
      },
      "Envoyés": {
        label: "Envoyés",
        color: "hsl(var(--chart-2))",
      },
    } satisfies ChartConfig
    ,
    "en-US": {
      "Stock": {
        label: "Stock",
        color: "hsl(var(--chart-1))",
      },
      "Sent": {
        label: "Sent",
        color: "hsl(var(--chart-2))",
      },
    } satisfies ChartConfig
  }[language]

  const AreaChartStackedInfo = {
    "fr-Fr": {
      title: "Stock",
      description: "Stock de produits par entrepôt.",
    },
    "en-US": {
      title: "Stock",
      description: "Stock of products by warehouse.",
    }
  }[language]



  const BarChartLabelData = {
    "en-US": [
      { month: "January", desktop: 186 },
      { month: "February", desktop: 305 },
      { month: "March", desktop: 237 },
      { month: "April", desktop: 73 },
      { month: "May", desktop: 209 },
      { month: "June", desktop: 214 },
    ],
    "fr-Fr": [
      { month: "Janvier", desktop: 186 },
      { month: "Fevrier", desktop: 305 },
      { month: "Mars", desktop: 237 },
      { month: "Avril", desktop: 73 },
      { month: "Mai", desktop: 209 },
      { month: "Juin", desktop: 214 },
    ]
  }[language]

  const BarChartLabelConfig = {
    "en-US": {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig,
  
  "fr-Fr": {
    desktop: {
      label: "Ordinateur de bureau",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig
  }[language]

  const BarChartLabelInfo = {
    "en-US": {
      title: "Adherent",
      description: "Evolution of the number of members.",
    },
    "fr-Fr": {
      title: "Adhérent",
      description: "Evolution du nombre d'adhérents.",
    }
  }[language]



  const RadarChartGridFilledData: {month: string, desktop: number}[] = {
    "fr-Fr": [
      { month: "Conseils anti-gaspi", desktop: 186 },
      { month: "Cours de cuisine", desktop: 285 },
      { month: "Gardiennage", desktop: 237 },
      { month: "Partage de véhicules", desktop: 203 },
      { month: "Services de réparation", desktop: 209 },
      { month: "Services entre particuliers", desktop: 264 },
    ], 
    "en-US": [
      { month: "Anti-waste advice", desktop: 186 },
      { month: "Cooking classes", desktop: 285 },
      { month: "Guarding", desktop: 237 },
      { month: "Vehicle sharing", desktop: 203 },
      { month: "Repair services", desktop: 209 },
      { month: "Services between individuals", desktop: 264 },
    ]
  }[language]
  
  const RadarChartGridFilledConfig = {
    desktop: {
      label: "Services",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig

  const RadarChartGridFilledInfo = {
    "fr-Fr": {
      title: "Services",
      description: "Répartition des services par domaine.",
    },
    "en-US": {
      title: "Services",
      description: "Distribution of services by domain.",
    }
  }[language]

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
            <BreadcrumbPage>Stock</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <Card className="rounded-lg border-none mt-6">
        <CardContent className="p-6 min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">

          <div className={"grid w-full auto-rows-[22rem] grid-cols-3 gap-4"}>

            <BarChartLabel
              title={BarChartLabelInfo.title}
              description={BarChartLabelInfo.description}
              chartConfig={BarChartLabelConfig}
              chartData={BarChartLabelData}
              className="col-span-3 lg:col-span-1"
            />

            <AreaChartStacked
              title={AreaChartStackedInfo.title}
              description={AreaChartStackedInfo.description}
              chartConfig={AreaChartStackedConfig as unknown as ChartConfig}
              chartData={AreaChartStackedData}
              className="col-span-3 lg:col-span-2"
              style={{ aspectRatio: "128 / 33" }}
            />

            <RadarChartGridFilled
              title={RadarChartGridFilledInfo.title}
              description={RadarChartGridFilledInfo.description}
              chartConfig={RadarChartGridFilledConfig}
              chartData={RadarChartGridFilledData}
              className="col-span-3 lg:col-span-2"
              style={{ aspectRatio: "20 / 9" }}
            />

            <AreaChartStacked
              title={"Stock"}
              description={"Stock de produits par entrepôt."}
              chartConfig={AreaChartStackedConfig as unknown as ChartConfig}
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
