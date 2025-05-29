"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "Junho", descarte: 186 },
  { month: "Julho", descarte: 305 },
  { month: "Agosto", descarte: 237 },
  { month: "Setembro", descarte: 73 },
  { month: "Outubro", descarte: 209 },
  { month: "Novembro", descarte: 250 },
  { month: "Dezembro", descarte: 300 },
  { month: "Janeiro", descarte: 250 },
  { month: "Fevereiro", descarte: 180 },
  { month: "Março", descarte: 214 },
]

const chartConfig = {
  descarte: {
    label: "Descarte",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function BarChartLabel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Peso Descartado Mensal</CardTitle>
        <CardDescription>Junho - Março - 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="descarte" fill="var(--color-descarte)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
