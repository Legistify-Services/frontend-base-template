import React from "react";
import { Col, Row } from "reactstrap";
import BasicAlerts from "./BasicAlerts/BasicAlerts";
import CustomAlerts from "./CustomAlerts/CustomAlerts";

const Alerts = () => {
  return (
    <Row className="match-height">
      <Col md={5}>
        <BasicAlerts />
      </Col>
      <Col md={7}>
        <CustomAlerts />
      </Col>
    </Row>
  );
};

export default Alerts;
