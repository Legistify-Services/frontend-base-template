import React from "react";
import Lottie from "react-lottie";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardBody, CardHeader } from "reactstrap";
import {
  // fetchCustomAlert,
  setCurrentCustomAlert,
  toggleNewAlertSectionCanvas,
} from "../store";
import CustomAlertTable from "./CustomAlertTable/CustomAlertTable";
import "../index.scss";
import NewAlertCanvas from "./NewAlertCanvas";

const CustomAlerts = () => {
  const dispatch = useDispatch();
  // default for lottie
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: require("@src/assets/lotify/createNewDetails.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("@src/assets/lotify/animation.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // React.useEffect(() => {
  //   dispatch(fetchCustomAlert());
  // }, []);

  const customAlertList = useSelector(
    (state) => state.alertReducer.customAlert
  );
  const handleCreateNewAlert = () => {
    // dispatch(setCurrentCustomAlert(null));
    dispatch(toggleNewAlertSectionCanvas());
  };
  return (
    <Card className="default_card_height">
      <CardHeader className="d-flex">
        <div>
          <p className="h3 page_main_title">Custom Alerts</p>
          <p className="font-size-sm text-muted">
            Setup Custom Alerts for dedicated Contracts and Fields
          </p>
          <Button
            color="light_blue"
            onClick={handleCreateNewAlert}
            className="create_alert_btn filter_btns"
          >
            Create New Alerts
          </Button>
        </div>
        <div>
          <Lottie options={defaultOptions} height={90} width={90} />
        </div>
      </CardHeader>
      <hr className="m-0 p-0" />
      <CardBody className="basic-alert-body">
        <CustomAlertTable />
      </CardBody>
      <NewAlertCanvas />
    </Card>
  );
};

export default CustomAlerts;
