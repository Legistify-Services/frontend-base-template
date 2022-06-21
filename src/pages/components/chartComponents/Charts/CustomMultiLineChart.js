import React from "react";
import { Line } from "react-chartjs-2";

const CustomMultiLineChart = ({ labelColor, gridLineColor, data }) => {
  // ** Chart Options
  const options = {
    responsive: true,
    backgroundColor: false,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: labelColor },
        grid: {
          borderColor: gridLineColor,
          color: gridLineColor,
        },
      },
      y: {
        min: 0,
        max: 400,
        scaleLabel: { display: true },
        ticks: {
          stepSize: 100,
          color: labelColor,
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
  };

  //** To add spacing between legends and chart
  const plugins = [
    {
      beforeInit(chart) {
        chart.legend.afterFit = function () {
          this.height += 20;
        };
      },
    },
  ];

  return <Line data={data} options={options} height={450} plugins={plugins} />;
};

export default CustomMultiLineChart;
