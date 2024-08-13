import { Navbar } from "@/components/admin-panel/navbar";
import { Group } from "@/lib/menu-list";
import { lang } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
  setLanguage: Dispatch<SetStateAction<lang>>;
}

export function ContentLayout({ title, children, setLanguage }: ContentLayoutProps) {

  return (
    <div>
      <Navbar title={title} setLanguage={setLanguage}/>
      <div className="container pt-8 pb-8 px-4 sm:px-8">{children}</div>
    </div>
  );
}
