import DonutChart from "components/charts/donut-chart-comp";
import LineChartComp from "components/charts/line-chart-comp";
import { Card, CardContent, CardHeader } from "components/ui/card";
import { cn } from "lib/utils";
import React from "react";

const CountryWiseChart = ({ theme }) => {
  return (
    <Card
      className={cn(
        "w-full col-span-2 rounded-3xl border-none shadow p-4",
        theme == "dark" ? "bg-slate-950" : "bg-white"
      )}
      // style={{
      //   boxShadow:
      //     theme == "dark"
      //       ? "rgb(6 7 11 / 72%) 7px 7px 15px 0px"
      //       : "7px 8px 13px 6px rgba(112,144,176,0.18)",
      // }}
    >
      <CardHeader className="pl-0">
        <div className="flex justify-between mb-1">
          <div>
            <p
              className={cn(
                "text-lg md:text-2xl leading-none font-semibold",
                theme == "dark" ? "text-white" : "text-gray-900 "
              )}
            >
              Country Wise Deposit Chart
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <DonutChart />
      </CardContent>
    </Card>
  );
};

export default CountryWiseChart;
