import Link from "next/link";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { adherent_panel_menuListValue } from "./../layout";

export default function DashboardPage() {

  const tasksPromise = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({data: [
          {
            id: 1,
            title: "Task 1",
            status: "open",
            priority: "low",
            created_at: "2021-09-01T12:00:00Z",
            updated_at: "2021-09-01T12:00:00Z",
          },
          {
            id: 2,
            title: "Task 2",
            status: "closed",
            priority: "high",
            created_at: "2021-09-01T12:00:00Z",
            updated_at: "2021-09-01T12:00:00Z",
          }
        ], pageCount: 1});
      }, 1000);
    }) as Promise<{ data: any; pageCount: number; }>;
  }

  return (
    <ContentLayout title="Dashboard" menuListValue={adherent_panel_menuListValue}>
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

    </ContentLayout>
  );
}
