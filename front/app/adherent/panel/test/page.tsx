import { ContentLayout } from "@/components/admin-panel/content-layout";
import CollectMap from "@/components/collecte/Map";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { adherent_panel_menuListValue } from "@/type/Panel";
import { Link } from "lucide-react";

export default function test(){
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
        
                    <CollectMap/>
        
                </CardContent>
            </Card>
        </ContentLayout>
    )
}