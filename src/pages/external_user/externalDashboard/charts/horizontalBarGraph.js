import React from "react";
import "./index.scss";
import { Card, CardBody } from "reactstrap";
import CustomCardHead from "../../../components/chartComponents/CustomCardHead";
import CustomHorizontalGraph from "../../../components/chartComponents/Charts/CustomHorizontalGraph";

const HorizontalBarGraph = ({ warning, gridLineColor, labelColor, info, indexAxis }) => {
  // ** Chart Data
  const data = {
    labels: ["MON", "TUE", "WED ", "THU", "FRI"],
    datasets: [
      {
        maxBarThickness: 15,
        label: "Market Data",
        backgroundColor: warning,
        borderColor: "transparent",
        data: [710, 350, 580, 460, 120],
      },
      {
        maxBarThickness: 15,
        backgroundColor: info,
        label: "Personal Data",
        borderColor: "transparent",
        data: [430, 590, 510, 240, 360],
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
        <CustomHorizontalGraph
          data={data}
          indexAxis={indexAxis}
          gridLineColor={gridLineColor}
          labelColor={labelColor}
        />
      </CardBody>
    </Card>
  );
};

export default HorizontalBarGraph;
