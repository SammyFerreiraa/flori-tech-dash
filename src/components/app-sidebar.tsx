"use client"

import * as React from "react"
import {
  ArrowRight,
  ArrowUpCircleIcon,
  BarChartIcon,
  CameraIcon,
  CheckCheckIcon,
  CheckCircle,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  TreePine,
  UserIcon,
  UsersIcon,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"

const data = {
  user: {
    name: "Sammy Ferreira",
    email: "samyfe2021@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: CheckCircle,
    },
    {
      title: "Visualizar meus dados",
      url: "#",
      icon: ListIcon,
    },
    {
      title: "Ajuda",
      url: "#",
      icon: HelpCircleIcon,
    },
    {
      title: "Editar meu perfil",
      url: "#",
      icon: UserIcon,
    },
    {
      title: "Sair",
      url: "/",
      icon: ArrowRight,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <TreePine className="h-5 w-5" />
                <span className="text-xl font-bold tracking-widest">Flori Tech</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
