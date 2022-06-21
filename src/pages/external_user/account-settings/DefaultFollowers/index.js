import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Label,
  Row,
} from "reactstrap";
import "./index.scss";
// ** Reactstrap Imports
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/pages/page-form-validation.scss";
import { selectThemeColors } from "@utils";

import Select from "react-select";
// import getTemplateList from "@src/api/getTemplateList";
import CustomUserList from "./CustomUserList";
// import getUserPermission from "@src/api/getUserPermission";
import _ from "lodash";
import { Save } from "react-feather";
// import updateDefaultFollower from "@src/api/updateDefaultFollower";
import toast from "react-hot-toast";
import NoDataComponent from "../../../components/noDataComponent/NoDataComponent";

const DefaultFollowers = () => {
  const [templateList, setTemplateList] = React.useState([]);
  const [currentTemplateId, setCurrentTemplateId] = React.useState(null);
  const [currentTemplateFollower, setCurrentTemplateFollower] =
    React.useState(null);

  const [userList, setUserList] = React.useState([]);

  // React.useEffect(async () => {
  //   const response = await getTemplateList();
  //   if (response?.status) {
  //     setTemplateList(response?.data?.templates);
  //   }
  // }, []);

  const handletemplateChange = (selectedOption) => {
    // console.log("selectedOption:", selectedOption);
    // const temp = templateList.find((item) => item._id === selectedOption.value);
    // setCurrentTemplateId(temp?._id);
    // setCurrentTemplateFollower(temp?.templateFollowers);
  };

  // const fetchUserList = async () => {
  //   const response = await getUserPermission();
  //   if (response.status) {
  //     setUserList(response.data.orgUsers);
  //   }
  // };
  // React.useEffect(() => {
  //   fetchUserList();
  // }, []);

  const renderNoData = () => {
    return (
      <div>
        <NoDataComponent noDataText="Select Contract Type" />
      </div>
    );
  };

  const handleChangeUser = (id) => {
    console.log("id:", id);
    if (
      _.findIndex(currentTemplateFollower, (userId) => userId === id) === -1
    ) {
      setCurrentTemplateFollower([...currentTemplateFollower, id]);
    } else {
      setCurrentTemplateFollower(
        currentTemplateFollower.filter((userId) => userId !== id)
      );
    }
  };

  const handleSaveFollowers = () => {
    // console.log("save followers");
    // const formData = {
    //   templateId: currentTemplateId,
    //   idsOfFollowers: currentTemplateFollower,
    // };
    // updateData(formData);
  };

  const updateData = async (formData) => {
    // const response = await updateDefaultFollower(formData);
    // if (response?.status) {
    //   toast.success("Saved successfully");
    //   fetchUserList();
    // } else {
    //   toast.error("Default Follower can't be Empty");
    // }
  };
  const handleDiscard = () => {
    // const temp = templateList.find((item) => item._id === currentTemplateId);
    // setCurrentTemplateFollower(temp?.templateFollowers);
  };
  return (
    <Card
      style={{
        minHeight: "500px",
      }}
    >
      <CardHeader>
        <h1 className="page_main_title">Default Followers</h1>
      </CardHeader>
      <CardBody>
        <Row>
          <Col xs="12" sm="6" lg="4" className="mb-2">
            <Label for="templateId">Select Contract Type</Label>
            <Select
              options={templateList.map((item) => ({
                value: item._id,
                label: item.name,
              }))}
              onChange={handletemplateChange}
              className="react-select"
              classNamePrefix="select"
              theme={selectThemeColors}
            />
          </Col>
          {currentTemplateFollower ? (
            <>
              <Col sm={12}>
                <Label>Select Default Followers</Label>
                <CustomUserList
                  options={userList}
                  value={currentTemplateFollower}
                  onChange={handleChangeUser}
                />
              </Col>
              <div>
                <Button
                  color="light_blue"
                  className="me-1 filter_btns"
                  onClick={handleSaveFollowers}
                >
                  <Save size={17} /> Save Followers
                </Button>
                <Button
                  onClick={handleDiscard}
                  className="filter_btns"
                  outline
                  color="light_blue"
                >
                  Discard
                </Button>
              </div>
            </>
          ) : (
            <Col xs="12">{renderNoData()}</Col>
          )}
        </Row>
      </CardBody>
    </Card>
  );
};

export default DefaultFollowers;
