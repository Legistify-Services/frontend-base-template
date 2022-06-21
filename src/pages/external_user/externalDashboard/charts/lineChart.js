import React from "react";
import moment from "moment";
import "./index.scss";
import { Card, CardBody } from "reactstrap";
import CustomLineChart from "../../../components/chartComponents/Charts/CustomLineChart";
import CustomCardHead from "../../../components/chartComponents/CustomCardHead";

const LineChart = ({ labelColor, gridLineColor, lineChartPrimary }) => {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const chartData = [
    {
      _id: {
        date: 2022,
        month: 6,
      },
      count: 14,
    },
  ];

  // ** Chart Data
  const data = {
    labels: month.map((item) => `${item}, ${moment().format("YYYY")}`),
    datasets: [
      {
        data: month.map((item, index) => {
          if (index < moment().format("M")) {
            return (
              chartData.find((i) => i?._id?.month === index + 1)?.count || 0
            );
          }
        }),
        // data: chartData.map((item) => item.count),
        fill: false,
        tension: 0.5,
        pointRadius: 5,
        label: "Contracts",
        pointHoverRadius: 5,
        pointStyle: "circle",
        pointHoverBorderWidth: 5,
        borderColor: lineChartPrimary,
        pointBorderColor: "transparent",
        backgroundColor: lineChartPrimary,
        pointHoverBackgroundColor: lineChartPrimary,
      },
    ],
  };
  return (
    <Card  className="dashboard_chart_content">
      <CustomCardHead
        title="Dummy Graph Title"
        tooltiptext="Dummy Graph Title"
        // Download Chart Data
        // onDownloadClick={async () =>
        //   await DownloadChart("?chartType=contractStage")
        // }
      />
      <CardBody className="chart_card_body">
        <CustomLineChart
          data={data}
          gridLineColor={gridLineColor}
          labelColor={labelColor}
          lineChartPrimary={lineChartPrimary}
        />
      </CardBody>
    </Card>
  );
};

export default LineChart;
