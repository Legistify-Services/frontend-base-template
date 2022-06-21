import React from "react";
import { Pie } from "react-chartjs-2";

const CustomPieChart = ({ data }) => {
  // ** Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    // animation: { duration: 500 },
    animation: {
      resize: {
        duration: 500,
      },
    },
    layout: {
      padding: {
        left: 4,
        right: 4,
        top: 0,
        bottom: 0,
      },
    },
    plugins: {
      legend: false,
    },
    onHover: (event, chartElement) => {
      const target = event.native ? event.native.target : event.target;
      target.style.cursor = chartElement[0] ? "pointer" : "default";
    },
  };
  return <Pie type="pie" data={data} options={options} />;
};

export default CustomPieChart;
