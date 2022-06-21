import React from "react";
import "./index.scss";
import { Card, CardBody } from "reactstrap";
import CustomBarGraph from "../../../components/chartComponents/Charts/CustomBarGraph";
import CustomCardHead from "../../../components/chartComponents/CustomCardHead";

const BarGraphChart = ({ success, gridLineColor, labelColor }) => {
  const label = ["0-1 Month", "1-3 Months", "3-6 Months", "More Than 6 Months"];

  const chartData = [
    {
      _id: "requested",
      count: 10,
    },
    {
      _id: "internalReview",
      count: 1,
    },
    {
      _id: "executed",
      count: 1,
    },
  ];

  // ** Chart data
  const data = {
    // labels: chartData.map((item) => item._id),
    labels: label,
    datasets: [
      {
        backgroundColor: success,
        borderColor: "transparent",
        borderRadius: { topRight: 3, topLeft: 3 },
        data: chartData.map((item) => item.count),
        // data: label.map((item) => _.find(chartData, { _id: item })?.count || 0),
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

export default BarGraphChart;
