import _ from "lodash";
import React, { Fragment } from "react";
import { Circle } from "react-feather";
import { Col, Row } from "reactstrap";
import { customColor } from "./customColor";

const GraphInfo = ({ info, unit }) => {
  return (
    <Row>
      {info?.map((item, index) => (
        <Fragment key={index}>
          <Col
            style={{
              whiteSpace: "nowrap",
            }}
            className="mb-1 text-start me-1"
            sm="7"
          >
            <Circle className="me-1" size={18} color={customColor[index]} />
            {_.startCase(item?._id)}
          </Col>
          <Col
            className="mb-1 me-1 text-end"
            sm="3"
            style={{
              color: customColor[index],
              whiteSpace: "nowrap",
            }}
          >
            {item?.count} {unit}
          </Col>
        </Fragment>
      ))}
    </Row>
  );
};

export default GraphInfo;
