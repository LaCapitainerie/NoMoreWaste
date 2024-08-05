import { Navbar } from "@/components/admin-panel/navbar";
import { Group } from "@/lib/menu-list";

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
  menuListValue: Group[];
}

export function ContentLayout({ title, children, menuListValue }: ContentLayoutProps) {
  return (
    <div>
      <Navbar title={title} menuListValue={menuListValue}/>
      <div className="container pt-8 pb-8 px-4 sm:px-8">{children}</div>
    </div>
  );
}
