import ThemeContext from "context/theme-context";
import React, { useContext } from "react";
// import {
//   CartesianGrid,
//   Legend,
//   Line,
//   LineChart,
//   Tooltip,
//   XAxis,
//   YAxis,
//   ResponsiveContainer,
// } from "recharts";
import Chart from "react-apexcharts";

// const lineChartOptionsOverallRevenue = ;

export default function LineChartComp({ chartData, xlabels, ylabels }) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Chart
        options={{
          xaxis: {
            categories: xlabels,
            axisBorder: {
              show: false,
            },
            labels: {
              offsetX: 4,
              offsetY: 0,
              style: {
                colors: theme == "dark" ? "white" : "var(--darkactive)",
              },
            },
            axisTicks: {
              show: false,
            },
          },
          legend: {
            labels: {
              colors: theme == "dark" ? "white" : "var(--darkactive)",
            },
          },
          chart: {
            id: "basic-bar",
            toolbar: {
              show: false,
            },
            dropShadow: {
              enabled: true,
              top: 13,
              left: 0,
              blur: 10,
              opacity: 0.1,
              color: "#4318FF",
            },
            height: "600px",
            width: "100%",
          },
          yaxis: {
            show: false,
          },
          colors: ["var(--primary)", "var(--secondary)", "var(--dark-icon)"],
          markers: {
            size: 0,
            colors: "white",
            strokeColors: "var(--light-icon)",
            strokeWidth: 3,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            showNullDataPoints: true,
          },
          tooltip: {
            theme: theme == "dark" ? "dark" : "light",
            style: {
              fontFamily: `"Poppins", sans-serif`,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            type: "line",
          },
          grid: {
            show: false,
            column: {
              // color: ["#7551FF", "#39B8FF"],
              opacity: 0.5,
            },
          },
          // color: ["#7551FF", "#39B8FF"],
        }}
        className="z-20"
        series={chartData}
        type="line"
        width="100%"
        height="100%"
      />
    </>
  );
}
