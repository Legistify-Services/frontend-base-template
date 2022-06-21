import React from "react";
import Lottie from "react-lottie";
import { Col, Row } from "reactstrap";

const NoDataComponent = ({ noDataText, height, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("@src/assets/lotify/createNewDetails.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Row xs={3} className=" mb-2 justify-content-center align-items-center">
      {noDataText && (
        <Col className="text-muted page_main_title">{noDataText}</Col>
      )}
      <Col>
        <Lottie
          options={defaultOptions}
          height={height ? height : "auto"}
          width={width ? width : "auto"}
        />
      </Col>
    </Row>
  );
};

export default NoDataComponent;
