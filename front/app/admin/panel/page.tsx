import Link from "next/link";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ResponseCustom } from "@/type/Adherent";
import { DataTable } from "@/components/table/data-table";
import { Card, CardContent } from "@/components/ui/card";
import { admin_panel_menuListValue } from "./layout";
import { ChartConfig } from "@/components/ui/chart/chart";
import { BarChartMixed } from "@/components/ui/chart/bar-chart-mixed";
import { BarChartMultiple } from "@/components/ui/chart/bar-chart-multiple";
import { RadarChartGridFilled } from "@/components/ui/chart/radar-chart-gridfilled";
import { Incidents } from "@/type/Incidents";
import { BentoDemo } from "@/components/admin-panel/bento";


export default async function DashboardPage() {

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

          <BentoDemo />

        </CardContent>
      </Card>
    </ContentLayout>
  );
}

