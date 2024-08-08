"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartProps, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart/chart"
import { cn } from "@/lib/utils"

export function AreaChartStacked({ title, description, chartConfig, chartData, className, style }: ChartProps) {
  return (
    <Card className={cn("flex flex-col justify-between", className)}>
      <div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} style={style}>
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              {
                Object.keys(chartConfig).map((key) => (
                  <Area
                    key={key}
                    dataKey={key}
                    type="natural"
                    fill={chartConfig[key].color}
                    fillOpacity={0.4}
                    stroke={chartConfig[key].color}
                    stackId="a"
                    dot={{
                      fill: chartConfig[key].color,
                    }}
                    activeDot={{
                      r: 6,
                    }}
                  />
                ))
              }

            </AreaChart>
          </ChartContainer>
        </CardContent>
      </div>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
