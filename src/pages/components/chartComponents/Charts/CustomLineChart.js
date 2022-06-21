import React from "react";
import { Line } from "react-chartjs-2";

const CustomLineChart = ({
  data,
  labelColor,
  gridLineColor,
  lineChartPrimary,
}) => {
  // ** Chart Options
  const options = {
    responsive: true,
    backgroundColor: false,
    maintainAspectRatio: false,
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    scales: {
      x: {
        ticks: { color: labelColor, precision: 0 },
        grid: {
          borderColor: gridLineColor,
          color: "#ffffff00",
        },
      },
      y: {
        scaleLabel: { display: true },
        ticks: {
          color: labelColor,
          precision: 0,
        },
        grid: {
          borderColor: gridLineColor,
          color: gridLineColor,
        },
      },
    },
    plugins: {
      legend: {
        align: "start",
        position: "top",
        labels: {
          boxWidth: 10,
          marginBottom: 25,
          color: labelColor,
          usePointStyle: true,
        },
      },
    },
    onHover: (event, chartElement) => {
      const target = event.native ? event.native.target : event.target;
      target.style.cursor = chartElement[0] ? "pointer" : "default";
    },
  };

  //** To add spacing between legends and chart
  const plugins = [
    {
      beforeInit(chart) {
        chart.legend.afterFit = () => {
          this.height += 20;
        };
      },
    },
  ];

  return <Line data={data} options={options} height={350} plugins={plugins} />;
};

export default CustomLineChart;
