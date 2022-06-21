import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

import Lottie from "react-lottie";
// import { fetchBasicAlert } from "../store";
import { useDispatch, useSelector } from "react-redux";
import SingleBasicAlert from "./SingleBasicAlert";
import "../index.scss";

const BasicAlerts = () => {
  const dispatch = useDispatch();
  const basicAlertList = useSelector((state) => state.alertReducer.basicAlert);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("@src/assets/lotify/alert.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // React.useEffect(() => {
  //   dispatch(fetchBasicAlert());
  // }, []);

  return (
    <Card className="default_card_height">
      <CardHeader className="d-flex">
        <div>
          <p className="h3 page_main_title">Basic Alerts</p>
          <p className="font-size-sm text-muted">
            Set up all the Basic Alerts for all contracts
          </p>
        </div>
        <div>
          <Lottie options={defaultOptions} height={90} width={90} />
        </div>
      </CardHeader>
      <hr className="m-0 p-0" />
      <CardBody className="basic-alert-body">
        {basicAlertList.map((item) => (
          <SingleBasicAlert key={item._id} item={item} />
        ))}
      </CardBody>
    </Card>
  );
};

export default BasicAlerts;
