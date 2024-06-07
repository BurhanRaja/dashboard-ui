import DonutChart from "components/charts/donut-chart-comp";
import LineChartComp from "components/charts/line-chart-comp";
import { Card, CardContent, CardHeader } from "components/ui/card";
import { cn } from "lib/utils";
import React from "react";

const CountryWiseChart = ({ theme }) => {
  return (
    <Card
      className={cn(
        "w-full col-span-2 rounded-3xl border-none shadow p-4 md:p-6",
        theme == "dark" ? "bg-slate-950" : "bg-white"
      )}
      // style={{
      //   boxShadow:
      //     theme == "dark"
      //       ? "rgb(6 7 11 / 72%) 7px 7px 15px 0px"
      //       : "7px 8px 13px 6px rgba(112,144,176,0.18)",
      // }}
    >
      <CardHeader>
        <div className="flex justify-between mb-5">
          <div>
            <p
              className={cn(
                "text-2xl leading-none font-bold",
                theme == "dark" ? "text-white" : "text-gray-900 "
              )}
            >
              Country Wise Deposit Chart
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* <LineChartComp
        chartData={[
            {
                name: "Deposit",
                data: [50, 64, 48, 66, 49, 68],
            },
            {
                name: "Withdraw",
                data: [30, 40, 24, 46, 20, 46],
            },
            {
                name: "IB Withdraw",
                data: [66, 49, 68, 30, 40, 24],
            },
        ]}
        xlabels={[
            "2024-05-24",
            "2024-05-25",
            "2024-05-26",
            "2024-05-27",
            "2024-05-28",
            "2024-05-29",
        ]}
    /> */}
        <DonutChart />
      </CardContent>
    </Card>
  );
};

export default CountryWiseChart;
