import React, { Fragment } from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import CustomCardHead from "../../../components/chartComponents/CustomCardHead";
import "./index.scss";
import { customColor } from "../../../components/chartComponents/customColor";
import GraphInfo from "../../../components/chartComponents/GraphInfo";
import CustomPieChart from "../../../components/chartComponents/Charts/CustomPieChart";

const PieChart = () => {
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

  const data = {
    labels: chartData.map((item) => item._id),
    datasets: [
      {
        borderWidth: 0,
        data: chartData.map((item) => item.count),
        offset: 12,
        backgroundColor: customColor,
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
        <Fragment>
          <Row className="d-flex justify-content-evenly align-items-center ">
            <Col sm="5">
              <GraphInfo info={chartData} unit="Contracts" />
            </Col>
            <Col sm="7" style={{ height: "240px", width: "240px" }}>
              <CustomPieChart data={data} />
            </Col>
          </Row>
        </Fragment>
      </CardBody>
    </Card>
  );
};

export default PieChart;
