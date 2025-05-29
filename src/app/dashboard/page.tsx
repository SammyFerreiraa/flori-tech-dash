import { AppSidebar } from "@/components/app-sidebar"
import { BarChartLabel } from "@/components/charts/BarChartLabel"
import { LineChartDots } from "@/components/charts/LineChartDots"
import { PieChartComponent } from "@/components/charts/PieChart"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col p-8">
          <div className="@container/main flex flex-1 flex-col gap-2">
          <h2 className="text-3xl font-bold">Dashboard</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LineChartDots/>
            <PieChartComponent/>
            <BarChartLabel />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
