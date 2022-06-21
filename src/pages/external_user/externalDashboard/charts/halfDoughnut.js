import React from "react";
import "./index.scss";
import { Card, CardBody } from "reactstrap";
import CustomHalfDoughnut from "../../../components/chartComponents/Charts/CustomHalfDoughnut";
import CustomCardHead from "../../../components/chartComponents/CustomCardHead";
import { customColor } from "../../../components/chartComponents/customColor";
import classnames from "classnames";

const HalfDoughnut = () => {
  const chartData = [
    {
      _id: "requested",
      count: 10,
    },
    {
      _id: "internalReview",
      count: 1,
    },
  ];

  // ** Chart data
  const data = {
    labels: chartData.map((item) => item._id),
    datasets: [
      {
        data: chartData.map((item) => item.count),
        backgroundColor: customColor,
        borderWidth: 0,
        pointStyle: "rectRounded",
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
        <div style={{ height: "200px" }} className="position-relative">
          <CustomHalfDoughnut data={data} />
          <div
            className="d-flex justify-content-center flex-column position-absolute"
            style={{
              top: "70%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <p className="m-0 p-0">Total</p>
            <h1
              style={{
                fontWeight: "800",
              }}
            >
              {chartData.reduce((acc, curr) => acc + curr.count, 0)}
            </h1>
          </div>
        </div>
        <div className="d-flex justify-content-around mt-1">
          {chartData.map((item, index) => (
            <div key={index}>
              <p
                className={classnames("m-0 p-0", {
                  "text-end": index % 2 !== 0,
                })}
              >
                {item._id === "DIY" ? "DIY Contracts" : "Normal Upload"}
              </p>
              <p
                className={classnames("m-0 p-0", {
                  "text-end": index % 2 !== 0,
                })}
                style={{
                  color: customColor[index],
                  fontWeight: "800",
                  fontSize: "25px",
                }}
              >
                {item.count}
              </p>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default HalfDoughnut;
