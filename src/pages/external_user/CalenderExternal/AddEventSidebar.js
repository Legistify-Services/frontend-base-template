import React, { useEffect, useState } from "react";
import {
  Button,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Col,
  Row,
  Form,
  Input,
  Label,
  FormFeedback,
} from "reactstrap";
import Save from "@src/assets/icons/Save.svg";
import toast from "react-hot-toast";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { selectThemeColors } from "@utils";
import classnames from "classnames";
import moment from "moment";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/pages/page-form-validation.scss";
import { calendarDetails, toggleCalendarCanvas } from "./store";
import { useDispatch, useSelector } from "react-redux";
// import getTemplateList from "@src/api/getTemplateList";
// import createCalendarEvent from "../../../../api/createCalendar";
// import getCalendarDetails from "../../../../api/getCalendar";

const AddEventSidebar = () => {
  const dispatch = useDispatch();

  const calendarCanvas = useSelector(
    (state) => state.calendarReducer.calendarCanvas
  );

  // states
  const [templateList, setTemplateList] = useState([]);
  const [contractFieldsList, setContractFieldsList] = useState([]);

  // useEffect(async () => {
  //   const response = await getTemplateList();
  //   if (response.status) {
  //     setTemplateList(response.data.templates);
  //   }
  // }, []);

  const handleTemplateChange = (value) => {
    const selectTemplate = templateList.find(
      (singleTemplate) => singleTemplate._id === value.value
    );
    setContractFieldsList(
      selectTemplate.contractKeys.filter((item) => item.type === "dateTime")
    );
  };

  const taskDetailSchema = yup.object().shape({
    contractTemplateId: yup
      .object()
      .nullable()
      .required("Contract is a required field"),
    contractFields: yup
      .array()
      .min(1, "Contract Fields is a required field")
      .of(yup.object().required("Contract Fields is a required field"))
      .required("Contract Fields is a required field"),
  });

  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(taskDetailSchema),
  });

  const handleReset = () => {
    reset();
    dispatch(toggleCalendarCanvas());
  };

  const onSubmit = (data) => {
    console.log("data", data);
  };

  const handleToSave = async () => {
    const values = getValues();

    const formData = {};
    formData.contractTemplateId = values.contractTemplateId.value;
    formData.fieldId = values.contractFields?.map((item) => item.value);

    const response = await createCalendarEvent(formData);
    if (response?.status) {
      const result = await getCalendarDetails();
      console.log("result", result);
      dispatch(calendarDetails(result?.data?.msg?.events));
      toast.success("Event created successfully");
      dispatch(toggleCalendarCanvas());
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <Offcanvas
      direction={"end"}
      isOpen={calendarCanvas}
      toggle={() => {
        dispatch(toggleCalendarCanvas());
      }}
      className="task_offcanvas"
    >
      <div className="p-0 m-0 text-center h5 mt-2 mx-2">
        <p className=" page_main_title ">Add a New Date</p>
        <p>Select the Target Contract and the Target Contract Fields</p>
      </div>

      <OffcanvasBody>
        {/* <Form>
          <Row className="mt-2">
            <Col sm={12} className="mb-1">
              <Label for="contractTemplateId">Select Contract</Label>
              <Controller
                id={`contractTemplateId`}
                name={`contractTemplateId`}
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    theme={selectThemeColors}
                    className="react-select"
                    classNamePrefix="select"
                    options={templateList.map((singleTemplate) => {
                      return {
                        label: singleTemplate.name,
                        value: singleTemplate._id,
                      };
                    })}
                    onChange={(value) => {
                      handleTemplateChange(value);
                      field.onChange(value);
                    }}
                    isClearable={false}
                  />
                )}
              />
              {errors && errors.contractTemplateId && (
                <FormFeedback className="d-block">
                  {errors.contractTemplateId.message}
                </FormFeedback>
              )}
            </Col>
            <Col sm={12} className="mb-2">
              <Label for="contractFields">Select Target Contract Fields</Label>
              <Controller
                id={`contractFields`}
                name={`contractFields`}
                control={control}
                render={({ field }) => (
                  <Select
                    isMulti
                    closeMenuOnSelect={false}
                    {...field}
                    theme={selectThemeColors}
                    className="react-select"
                    classNamePrefix="select"
                    options={contractFieldsList.map((singleItem) => {
                      return {
                        label: singleItem.label,
                        value: singleItem._id,
                      };
                    })}
                    isClearable={true}
                    onChange={(value) => {
                      field.onChange(value);
                    }}
                  />
                )}
              />
              {errors && errors.contractFields && (
                <FormFeedback className="d-block">
                  {errors.contractFields.message}
                </FormFeedback>
              )}
            </Col>
            <hr />
          </Row>
        </Form> */}
      </OffcanvasBody>

      <div className="text-center row m-1">
        <div className="col">
          <Button
            color={"light_blue"}
            type="submit"
            className="filter_btns me-1"
            onClick={handleSubmit(handleToSave)}
          >
            <img src={Save} alt="" className="" /> Save &nbsp;Changes
          </Button>
          <Button
            color={"light_blue"}
            outline
            className="filter_btns me-1"
            onClick={handleReset}
          >
            <span> Discard</span>
          </Button>
        </div>
      </div>
    </Offcanvas>
  );
};

export default AddEventSidebar;
