import Link from "next/link";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { adherent_panel_menuListValue } from "../../layout";
import { Card, CardContent } from "@/components/ui/card";
import CollecteCalendar from "@/components/collecte/Calendar";

export default function DashboardPage() {

  const myEventsList = [
    {
      title: 'Meeting',
      start: new Date(2024, 7, 12, 10, 0), // Year, Month (0-indexed), Day, Hours, Minutes
      end: new Date(2024, 7, 12, 12, 0),
    },
    {
      title: 'Lunch Break',
      start: new Date(2024, 7, 12, 13, 0),
      end: new Date(2024, 7, 12, 14, 0),
    },
    // Add more events here
  ];

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
            <BreadcrumbPage>Collecte</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>


      <Card className="rounded-lg border-none mt-6">
        <CardContent className="p-6 min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">

          <CollecteCalendar events={myEventsList}/>

        </CardContent>
      </Card>
    </ContentLayout>
  );
}


