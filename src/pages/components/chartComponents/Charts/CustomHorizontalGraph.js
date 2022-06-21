import React from "react";
import { Bar } from "react-chartjs-2";

const CustomHorizontalGraph = ({
  data,
  gridLineColor,
  labelColor,
  indexAxis,
}) => {
  // ** Chart Options
  const options = {
    indexAxis: indexAxis,
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    elements: {
      bar: {
        borderRadius: {
          topRight: 15,
          bottomRight: 15,
        },
      },
    },
    layout: {
      padding: { top: -4 },
    },
    scales: {
      x: {
        min: 0,
        grid: {
          drawTicks: false,
          color: gridLineColor,
          borderColor: "transparent",
        },
        ticks: { color: labelColor },
      },
      y: {
        grid: {
          display: false,
          borderColor: gridLineColor,
        },
        ticks: { color: labelColor },
      },
    },
    plugins: {
      legend: {
        align: "end",
        position: "top",
        labels: { color: labelColor },
      },
    },
  };
  return <Bar data={data} options={options} height={400} />;
};

export default CustomHorizontalGraph;
