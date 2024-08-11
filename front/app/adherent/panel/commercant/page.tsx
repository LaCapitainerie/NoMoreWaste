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
import { Adherent } from "@/type/Adherent";
import { DataTable } from "@/components/table/data-table";
import { Card, CardContent } from "@/components/ui/card";
import { columns } from "./commercant-columns";
import { Commercant } from "@/type/Commercant";
import { ResponseCustom } from "@/type/Reponse";
import { adherent_panel_menuListValue } from "@/type/Panel";

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

  const result2: ResponseCustom<Commercant> = await fetch("http://localhost:1000/commercants.php", {
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
            <BreadcrumbPage>Commercant</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className="rounded-lg border-none mt-6">
        <CardContent className="p-6 min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
            <DataTable columns={columns} data={result2.result} route={"commercants"} />
        </CardContent>
      </Card>
    </ContentLayout>
  );
}

