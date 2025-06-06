'use client'

import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "./ui/button"

export function SiteHeader() {
  const location = usePathname()
  const title = location.split("/").pop()
  const router = useRouter()

  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear rounded-t-lg">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium capitalize">{title}</h1>
        <Button className="ml-auto" variant={"ghost"} onClick={() => router.push("/")}>Sair</Button>
      </div>
    </header>
  )
}

