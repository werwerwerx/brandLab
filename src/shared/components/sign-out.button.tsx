"use client"
import { createClient } from "../supabase/client"
import { SidebarMenuButton } from "./ui-kit/sidebar"
import { LogOut } from "lucide-react"
import { useTransition } from "react"
import { useRouter } from "next/navigation"

export const SignOutButton = () => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const supabase = createClient()

  const handleSignOut = async () => {
    startTransition(async () => {
      await supabase.auth.signOut()
      router.refresh()
      setTimeout(() => {
        router.push("/")
      }, 100)
    })
  }

  return (
    <SidebarMenuButton 
      asChild 
      className="text-destructive" 
      onClick={handleSignOut}
      disabled={isPending}
    >
      <div className="flex items-center gap-2">
        {isPending ? (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <LogOut className="w-4 h-4" />
        )}
        <span>{isPending ? "Выход..." : "Выйти"}</span>
      </div>
    </SidebarMenuButton>
  )
}