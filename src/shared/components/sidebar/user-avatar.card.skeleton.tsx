import { SidebarMenuButton, useSidebar } from "@/shared/components/ui-kit/sidebar";
import { Skeleton } from "@/shared/components/ui-kit/skeleton";
export function SkeletonUser() {
  return (
    <SidebarMenuButton>
      <Skeleton className="h-8 w-8 rounded-full" />
        <div className="flex flex-col w-full gap-2 flex-1">
          <Skeleton className="h-4 w-[70%]" />
          <Skeleton className="h-3 w-full" />
        </div>
    </SidebarMenuButton>
  );
}
