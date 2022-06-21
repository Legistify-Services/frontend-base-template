import React from "react";
import { Doughnut } from "react-chartjs-2";

const CustomHalfDoughnut = ({ data }) => {
  // ** Chart Options
  const options = {
    maintainAspectRatio: false,
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    rotation: -35 * Math.PI,
    circumference: 70 * Math.PI,
    cutout: 85,
    animation: {
      resize: {
        duration: 500,
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

  return <Doughnut data={data} options={options} />;
};

export default CustomHalfDoughnut;
