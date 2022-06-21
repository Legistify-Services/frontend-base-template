import React, { Fragment, useState } from "react";
import { FilePlus } from "react-feather";
import { useDispatch } from "react-redux";
import { Button, Col, Row, TabContent, TabPane } from "reactstrap";
import MisLogs from "./MisLogs";
// import MisNewSectionCanvas from "./MisNewSectionCanvas";
import MyTemplates from "./MyTemplates";
// import { setCurrentTemplate, toggleMisSectionCanvas } from "./store";
import Tabs from "./Tabs";
import "./index.scss";
import { toggleMisSectionCanvas } from "./store";
import MisNewSectionCanvas from "./MisNewSectionCanvas";

const Mis = () => {
  const [activeTab, setActiveTab] = useState("1");

  const dispatch = useDispatch();

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const [templateOptionList, setTemplateOptionList] = React.useState([]);
  // React.useEffect(async () => {
  //   const response = await getTemplateList();
  //   if (response?.status) {
  //     setTemplateOptionList(response.data.templates);
  //   }
  // }, []);

  return (
    <Fragment>
      <Row>
        <Col xs={12}>
          <div className="d-flex justify-content-between  ">
            <Tabs
              className="mb-2"
              activeTab={activeTab}
              toggleTab={toggleTab}
            />
            {activeTab === "1" && (
              <Button
                className="filter_btns"
                color="light_blue"
                onClick={() => {
                  //   dispatch(setCurrentTemplate(null));
                  dispatch(toggleMisSectionCanvas());
                }}
              >
                <FilePlus size={18} /> &nbsp; Create a Template
              </Button>
            )}
          </div>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <MyTemplates templateOptionList={templateOptionList} />
            </TabPane>
            <TabPane tabId="2">
              <MisLogs templateOptionList={templateOptionList} />
            </TabPane>
          </TabContent>
        </Col>
      </Row>
      <MisNewSectionCanvas templateOptionList={templateOptionList} />
    </Fragment>
  );
};

export default Mis;
