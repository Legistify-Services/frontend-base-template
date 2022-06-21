import React from "react";
import { Bar } from "react-chartjs-2";

const CustomBarGraph = ({ data, gridLineColor, labelColor }) => {
  // ** Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    animation: { duration: 500 },
    scales: {
      x: {
        grid: {
          color: "#ffffff00",
          borderColor: gridLineColor,
        },
        ticks: { color: labelColor, precision: 0 },
      },
      y: {
        grid: {
          color: gridLineColor,
          borderColor: gridLineColor,
        },
        ticks: {
          color: labelColor,
          precision: 0,
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
    onHover: (event, chartElement) => {
      const target = event.native ? event.native.target : event.target;
      target.style.cursor = chartElement[0] ? "pointer" : "default";
    },
  };

  return <Bar data={data} options={options} height={300} />;
};

export default CustomBarGraph;
