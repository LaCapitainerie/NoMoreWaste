import Link from "next/link";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { admin_panel_menuListValue } from "./layout";
import { Card, CardContent } from "@/components/ui/card";
import { DataTable } from "@/components/table/data-table";
import { columns } from "./adhrent-columns";
import { Adherent, ResponseCustom } from "@/type/Adherent";

export default async function DashboardPage() {
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
  })
  
  return (
    <ContentLayout title="Dashboard" menuListValue={admin_panel_menuListValue}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className="rounded-lg border-none mt-6">
        <CardContent className="p-6 min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
            <DataTable columns={columns} data={result2.result} route={"adherents"} />
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
