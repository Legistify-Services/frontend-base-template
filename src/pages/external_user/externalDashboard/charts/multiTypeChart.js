import React from "react";
import "./index.scss";
import { Card, CardBody } from "reactstrap";
import CustomBarGraph from "../../../components/chartComponents/Charts/CustomBarGraph";
import CustomCardHead from "../../../components/chartComponents/CustomCardHead";

const MultiTypeChart = ({ success, gridLineColor, labelColor }) => {
  const label = ["0-1 Month", "1-3 Months", "3-6 Months", "More Than 6 Months"];

  const chartData = [
    {
      _id: "requested",
      count: 10,
    },
    {
      _id: "internalReview",
      count: 15,
    },
    {
      _id: "executed",
      count: 25,
    },
  ];

  // ** Chart data
  const data = {
    labels: chartData.map((item) => item._id),
    // labels: label,
    datasets: [
      {
        type: "line",
        label: "Dataset 2",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: chartData.map((item) => item.count),
      },
      {
        type: "bar",
        label: "Dataset 2",
        backgroundColor: "rgb(75, 192, 192)",
        data: chartData.map((item) => item.count),
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  };
  return (
    <Card className="dashboard_chart_content">
      <CustomCardHead
        title="Dummy Graph Title"
        tooltiptext="Dummy Graph Title"
        // onDownloadClick={async () =>
        //   await DownloadChart("?chartType=contractStage")
        // }
      />
      <CardBody className="chart_card_body">
        <CustomBarGraph
          data={data}
          gridLineColor={gridLineColor}
          labelColor={labelColor}
        />
      </CardBody>
    </Card>
  );
};

export default MultiTypeChart;
