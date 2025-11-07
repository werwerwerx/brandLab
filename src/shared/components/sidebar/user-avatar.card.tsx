import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui-kit/avatar";
import { SidebarMenuButton } from "@/shared/components/ui-kit/sidebar";
import { createClient } from "@/shared/supabase/server";
import { Card, CardHeader } from "../ui-kit/card";
import { LogIn, User } from "lucide-react";
import { Separator } from "../ui-kit/separator";
import Link from "next/link";
export const UserAvatarCard = async () => {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  if (!user)
    return (
      <>
        <SidebarMenuButton asChild>
          <Link href={"/auth/login"}>
            <LogIn />
            Войти
          </Link>
        </SidebarMenuButton>
        <SidebarMenuButton asChild>
          <Link href={"/auth/signup"}>
            <User />
            Зарегистрироваться
          </Link>
        </SidebarMenuButton>
      </>
    );

  const { data: userData, error } = await supabase.auth.getUser();

  if (error) {
    console.error("Error getting user:", error);
    return null;
  }

  const currentUser = userData.user;

  return (
    <SidebarMenuButton
      size="lg"
      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
    >
      <Avatar className="h-8 w-8 rounded-lg">
        <AvatarImage
          src={currentUser.user_metadata?.avatar_url}
          alt={currentUser.user_metadata?.name}
        />
        <AvatarFallback className="rounded-lg">
          {currentUser.user_metadata?.name?.charAt(0) ||
            currentUser.email?.charAt(0).toUpperCase() ||
            "U"}
        </AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">
          {currentUser.user_metadata?.name || currentUser.email}
        </span>
        <span className="truncate text-xs">{currentUser.email}</span>
      </div>
    </SidebarMenuButton>
  );
};
