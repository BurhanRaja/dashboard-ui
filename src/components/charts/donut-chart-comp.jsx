import ThemeContext from "context/theme-context";
import React, { useContext } from "react";
import ReactApexChart from "react-apexcharts";

const DonutChart = () => {
  const { theme } = useContext(ThemeContext);

  const donutChartOptionsCharts1 = {
    series: [50, 15, 10],
    labels: ["India", "United States", "Unites Arab Emirates"],
    colors: [
      "var(--primary)",
      "var(--secondary)",
      "var(--danger)",
      "var(--info)",
      "var(--success)",
      "var(--warning)",
      "var(--dark-icon)",
      "var(--light-icon)",
    ],
    chart: {
      width: "100%",
      height: "800px",
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      colors: theme == "dark" ? ["#000"] : ["#fff"],
    },
    hover: { mode: null },
    plotOptions: {
      donut: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },

    tooltip: {
      enabled: true,
      theme: theme == "dark" ? "dark" : "light",
    },
  };

  const donutChartDataCharts1 = [50, 15, 10];

  return (
    <>
      <ReactApexChart
        options={donutChartOptionsCharts1}
        series={donutChartDataCharts1}
        type="donut"
        width="100%"
        height="415px"
      />
    </>
  );
};

export default DonutChart;
