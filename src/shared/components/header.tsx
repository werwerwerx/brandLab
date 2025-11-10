import { SidebarTrigger } from "./ui-kit/sidebar";
import { Separator } from "./ui-kit/separator";
import { BreadcrumbDemo } from "./app-breadcrumb";

export const Header = () => (
  <header className="sticky top-0 left-0 right-0 flex flex-row box-content py-3 bg-background z-50 px-2 items-center gap-2 border-b border-border">
    <div className="flex flex-row gap-2 items-center flex-1">
      <SidebarTrigger />
      <Separator orientation="vertical" className="h-5!" />
      <BreadcrumbDemo />
    </div>

    
  </header>
);
