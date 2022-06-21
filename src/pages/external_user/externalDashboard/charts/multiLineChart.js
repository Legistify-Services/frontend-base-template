import React from "react";
import "./index.scss";
import { Card, CardBody } from "reactstrap";
import CustomCardHead from "../../../components/chartComponents/CustomCardHead";
import CustomMultiLineChart from "../../../components/chartComponents/Charts/CustomMultiLineChart";

const MultiLineChart = ({
  labelColor,
  gridLineColor,
  warningColorShade,
  lineChartDanger,
  lineChartPrimary,
}) => {
  // ** Chart Data
  const data = {
    labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
    datasets: [
      {
        data: [
          80, 150, 180, 270, 210, 160, 160, 202, 265, 210, 270, 255, 290, 360,
          375,
        ],
        fill: false,
        tension: 0.5,
        pointRadius: 1,
        label: "Europe",
        pointHoverRadius: 5,
        pointStyle: "circle",
        pointHoverBorderWidth: 5,
        borderColor: lineChartDanger,
        pointBorderColor: "transparent",
        backgroundColor: lineChartDanger,
        pointHoverBackgroundColor: lineChartDanger,
      },
      {
        data: [
          80, 125, 105, 130, 215, 195, 140, 160, 230, 300, 220, 170, 210, 200,
          280,
        ],
        fill: false,
        tension: 0.5,
        label: "Asia",
        pointRadius: 1,
        pointHoverRadius: 5,
        pointStyle: "circle",
        pointHoverBorderWidth: 5,
        borderColor: lineChartPrimary,
        pointBorderColor: "transparent",
        backgroundColor: lineChartPrimary,
        pointHoverBackgroundColor: lineChartPrimary,
      },
      {
        data: [
          80, 99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90, 140, 130, 180,
        ],
        fill: false,
        tension: 0.5,
        pointRadius: 1,
        label: "Africa",
        pointHoverRadius: 5,
        pointStyle: "circle",
        pointHoverBorderWidth: 5,
        borderColor: warningColorShade,
        backgroundColor: warningColorShade,
        pointBorderColor: warningColorShade,
        pointHoverBackgroundColor: warningColorShade,
      },
    ],
  };

  return (
    <Card className="dashboard_chart_content">
      <CustomCardHead
        title="Dummy Graph Title"
        tooltiptext="Dummy Graph Title"
        // Download Chart Data
        // onDownloadClick={async () =>
        //   await DownloadChart("?chartType=contractStage")
        // }
      />
      <CardBody className="chart_card_body">
        <CustomMultiLineChart
          data={data}
          labelColor={labelColor}
          gridLineColor={gridLineColor}
        />
      </CardBody>
    </Card>
  );
};

export default MultiLineChart;
