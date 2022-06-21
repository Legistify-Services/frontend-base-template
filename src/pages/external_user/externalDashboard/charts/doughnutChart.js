import React from "react";
import "./index.scss";
import { Card, CardBody, Row, Col } from "reactstrap";
import CustomCardHead from "../../../components/chartComponents/CustomCardHead";
import { customColor } from "../../../components/chartComponents/customColor";
import CustomDoughnut from "../../../components/chartComponents/Charts/CustomDoughnut";
import GraphInfo from "../../../components/chartComponents/GraphInfo";

const DoughnutChart = () => {
  const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

  const data = {
    labels: labels.map((item) => item),
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: customColor,
        borderWidth: 1,
      },
    ],
  };

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
        <Row className="d-flex justify-content-evenly align-items-center ">
          <Col sm="5">
            <GraphInfo info={chartData} unit="" />
          </Col>
          <Col sm="7" style={{ height: "250px", width: "250px" }}>
            <CustomDoughnut data={data} />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default DoughnutChart;
