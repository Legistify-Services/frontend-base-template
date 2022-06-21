import React from "react";
import "../index.scss";
import _ from "lodash";
import { Card, CardBody, CardHeader, Input, Label } from "reactstrap";
import InputNumber from "rc-input-number";
import { Plus, Minus } from "react-feather";
import CustomCheckGroup from "./CustomCheckGroup";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
// import { fetchBasicAlert } from "../store";
// import updateAlert from "@src/api/updateAlert";
import Select from "react-select";
import "@src/@core/scss/react/libs/input-number/input-number.scss";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/pages/page-form-validation.scss";
import { selectThemeColors } from "@utils";

const ChannelList = ["email", "sms", "whatsapp"];

const weekday = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const SingleBasicAlert = ({ item }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState(item.isEnabled);

  const handleCheckChange = (list) => {
    const formData = {
      alertId: item._id,
      channel: list,
    };
    updateData(formData);
  };
  const handleSwitchChange = (e) => {
    setChecked(e.target.checked);
    const formData = {
      alertId: item._id,
      isEnabled: e.target.checked ? "true" : "false",
    };
    updateData(formData);
  };
  // const handleAfterBeforeChange = (e) => {
  //   const formData = {
  //     alertId: item._id,
  //     beforeOrAfter: e.target.id,
  //   };
  //   updateData(formData);
  // };
  const handleAgeingChange = (value) => {
    const formData = {
      alertId: item._id,
      stageAgeingDays: value,
    };
    updateData(formData);
  };
  // const handleFrequencyChange = (value) => {
  //   const formData = {
  //     alertId: item._id,
  //     frequencyDays: value,
  //   };
  //   updateData(formData);
  // };
  const handleAfterBeforeValueChange = (value) => {
    const formData = {
      alertId: item._id,
      beforeOrAfterDays: value,
    };
    updateData(formData);
  };

  const handleFrequencyDayChange = (value) => {
    const formData = {
      alertId: item._id,
      frequencyDays: value?.map((item) => item.value),
    };
    updateData(formData);
  };

  const updateData = async (formData) => {
    // const response = await updateAlert(formData);
    // if (!response?.status) {
    //   toast.error("Error in updating alert");
    //   dispatch(fetchBasicAlert());
    // }
  };
  return (
    <Card className="card-inside-card">
      <CardHeader className="p-1">
        <h6>
          Alert{" "}
          {!(
            item.alertSubType.includes("after") ||
            item.alertSubType.includes("before")
          ) && "on"}{" "}
          {_.startCase(item.alertSubType)}
        </h6>
        <div className="form-check form-switch">
          <Input
            type="switch"
            onChange={handleSwitchChange}
            checked={checked}
          />
        </div>
      </CardHeader>
      {checked && (
        <>
          <hr className="m-0 p-0" />
          <CardBody>
            {item.stageAgeingDays && (
              <div className="mb-2">
                <p className="m-0">Set Target duration for each contract</p>
                <div className="d-flex align-items-center">
                  <p className="m-0 me-1">Send Alert After</p>
                  <InputNumber
                    onChange={handleAgeingChange}
                    className="me-1"
                    id="basic-number-input"
                    defaultValue={item?.stageAgeingDays}
                    min={0}
                    upHandler={<Plus />}
                    downHandler={<Minus />}
                  />
                  <span>Days spent in the same stage</span>
                </div>
              </div>
            )}
            {item?.frequencyDays?.length > 0 && (
              <div className="mb-2">
                <p className="m-0 mb-1">Set frequency for this alert</p>
                <div className="d-flex align-items-center">
                  <p className="m-0 me-1">Repeat on </p>
                  <Select
                    closeMenuOnSelect={false}
                    className="react-select col-md-7"
                    classNamePrefix="select"
                    theme={selectThemeColors}
                    isMulti
                    options={weekday.map((day) => ({
                      label: _.startCase(day),
                      value: day,
                    }))}
                    defaultValue={item.frequencyDays.map((day) => ({
                      label: _.startCase(day),
                      value: day,
                    }))}
                    isClearable={false}
                    onChange={handleFrequencyDayChange}
                  />
                </div>
              </div>
            )}

            {/* {item.frequencyDays && (
              <div className="mb-2">
                <p className="m-0">Set frequency for this alert</p>
                <div className="d-flex align-items-center">
                  <p className="m-0 me-1">Repeat for </p>
                  <InputNumber
                    className="me-1"
                    min={1}
                    id="basic-number-input"
                    defaultValue={item?.frequencyDays}
                    onChange={handleFrequencyChange}
                    upHandler={<Plus />}
                    downHandler={<Minus />}
                  />
                  <span>Days</span>
                </div>
              </div>
            )} */}
            {item.beforeOrAfter && (
              <div className="mb-2">
                <p className="m-0">When do you need the alert?</p>
                <div className="d-flex align-items-center">
                  <span className="me-1">
                    {item.alertSubType.includes("after") ? "After" : "Before"}
                  </span>
                  <InputNumber
                    className="me-1"
                    id="basic-number-input"
                    onChange={handleAfterBeforeValueChange}
                    defaultValue={item?.beforeOrAfter?.days}
                    upHandler={<Plus />}
                    min={1}
                    downHandler={<Minus />}
                  />
                  <span>days</span>
                </div>
              </div>
            )}
            <div className="mb-2">
              <p className="m-0">Select alert channel</p>
              <CustomCheckGroup
                options={ChannelList}
                value={item.channel}
                onChange={handleCheckChange}
              />
            </div>
          </CardBody>
        </>
      )}
    </Card>
  );
};

export default SingleBasicAlert;
