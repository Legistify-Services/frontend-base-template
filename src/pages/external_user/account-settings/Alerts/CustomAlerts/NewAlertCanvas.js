// module exports
import React, { useEffect } from "react";
import { Minus, Plus, X } from "react-feather";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Form,
  Label,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Input,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import Select from "react-select";
import toast from "react-hot-toast";

import "../index.scss";

const ChannelList = ["email", "sms", "whatsapp"];

// file export
// import createNewAlert from "@src/api/createNewAlert";
import {
  toggleNewAlertSectionCanvas,
  // fetchCustomAlert
} from "../store";

// ** Reactstrap Imports
import { selectThemeColors } from "@utils";
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/pages/page-form-validation.scss";
// import getTemplateList from "@src/api/getTemplateList";
// import InputNumber from "rc-input-number";
// import CustomCheckGroup from "../BasicAlerts/CustomCheckGroup";
// import updateAlert from "@src/api/updateAlert";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const NewAlertCanvas = () => {
  const dispatch = useDispatch();

  // visible state for the offcanvas
  const visible = useSelector((state) => state.alertReducer.NewAlertSection);

  const [contractFieldsList, setContractFieldsList] = React.useState([]);
  const [templateList, setTemplateList] = React.useState([]);
  const [dateField, setDateField] = React.useState(null);
  const [allFields, setAllFields] = React.useState([]);
  const [afterOrBeforeValue, setAfterOrBeforeValue] = React.useState(null);
  const [alertTimeValue, setAlertTimeValue] = React.useState(null);

  useEffect(async () => {
    // const response = await getTemplateList();
    // if (response.status) {
    //   setTemplateList(response.data.templates);
    // }
  }, []);
  let AlertsSchema;
  if (dateField === "customAlertNotOnDate") {
    AlertsSchema = yup.object().shape({
      contractTemplateId: yup.object().required(),
      alertFields: yup.array().of(yup.object().required()).required(),
      channel: yup.array().required(),
    });
  } else {
    AlertsSchema = yup.object().shape({
      contractTemplateId: yup.object().required(),
      alertFields: yup.array().of(yup.object().required()).required(),
      fields: yup
        .array()
        .of(
          yup.object().shape({
            afterOrBefore: yup.string().required("this field is required"),
            afterOrBeforeDays: yup.number().required("this field is required"),
            channel: yup.array(),
            alertTime: yup.string(),
          })
        )
        .required(),
    });
  }
  // store state for the form
  const formfield = useSelector(
    (state) => state.alertReducer.currentCustomAlert
  );
  const {
    control,
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(AlertsSchema),
  });

  // array of fields
  const { fields, append, remove } = useFieldArray({
    control,
    name: "fields",
  });

  // func for on submit
  const onSubmit = (data) => {
    // if (dateField === "customAlertNotOnDate") {
    //   let formData = {
    //     contractTemplateId: data.contractTemplateId.value,
    //     alertFields: data.alertFields.map((field) => field.value),
    //     alertSubType: dateField,
    //     channel: data.channel,
    //   };
    //   if (formfield) {
    //     formData.alertId = formfield._id;
    //   }
    //   postData(formData);
    // } else {
    //   data.fields.map((field) => {
    //     let formData = {
    //       contractTemplateId: data.contractTemplateId.value,
    //       alertFields: data.alertFields.map((singleField) => singleField.value),
    //       alertSubType: dateField,
    //       beforeOrAfter: field.afterOrBefore,
    //       beforeOrAfterDays: field.afterOrBeforeDays,
    //       channel: field.channel,
    //       alertTime: field.alertTime,
    //     };
    //     if (formfield) {
    //       formData.alertId = formfield._id;
    //     }
    //     postData(formData);
    //   });
    // }
  };

  // func for post data
  const postData = async (data) => {
    // if (formfield) {
    //   const response = await updateAlert(data);
    //   if (response?.status) {
    //     toast.success("created successfully");
    //     // dispatch(fetchCustomAlert());
    //     dispatch(toggleNewAlertSectionCanvas());
    //   } else {
    //     toast.error("Something went wrong");
    //   }
    // } else {
    //   const response = await createNewAlert(data);
    //   if (response?.status) {
    //     toast.success("created successfully");
    //     // dispatch(fetchCustomAlert());
    //     dispatch(toggleNewAlertSectionCanvas());
    //   } else {
    //     toast.error("Something went wrong");
    //   }
    // }
  };

  const handleTemplateChange = (value) => {
    const selectTemplate = templateList.find(
      (singleTemplate) => singleTemplate._id === value.value
    );
    setAllFields(selectTemplate.contractKeys);

    setContractFieldsList(selectTemplate.contractKeys);
  };

  const handleFieldsChange = (value) => {
    if (!value[0]) {
      setContractFieldsList(allFields);
      setDateField(null);
      return;
    }
    const temp = contractFieldsList.find(
      (singleField) => singleField._id === value[0].value
    );
    if (temp?.type === "dateTime") {
      setContractFieldsList(
        allFields.filter((singleField) => singleField.type === "dateTime")
      );
      setDateField("customAlertOnDate");
    } else {
      setContractFieldsList(
        allFields.filter((singleField) => singleField.type !== "dateTime")
      );
      setDateField("customAlertNotOnDate");
    }
  };

  React.useEffect(() => {
    let defaultValues = {
      contractTemplateId: formfield
        ? {
            label: formfield.contractTemplateId.name,
            value: formfield.contractTemplateId._id,
          }
        : { value: null, label: "Select..." },
      alertFields: formfield
        ? formfield.alertFields.map((field) => {
            return {
              label: formfield.contractTemplateId.contractKeys.find(
                (singleField) => singleField._id === field
              ).label,
              value: field,
            };
          })
        : [],
    };
    setContractFieldsList([]);
    if (formfield) {
      setAllFields(formfield.contractTemplateId.contractKeys);
      let temp = formfield.contractTemplateId.contractKeys.find(
        (singleField) => singleField._id === formfield.alertFields[0]
      );
      if (temp.type === "dateTime") {
        setContractFieldsList(
          allFields.filter((singleField) => singleField.type === "dateTime")
        );
        defaultValues.fields = [
          {
            afterOrBefore: formfield.beforeOrAfter.value,
            afterOrBeforeDays: formfield.beforeOrAfter.days,
            channel: formfield.channel,
          },
        ];
        setAfterOrBeforeValue(formfield.beforeOrAfter.value);
        setAlertTimeValue(formfield.alertTime);
        setDateField("customAlertOnDate");
      } else {
        setContractFieldsList(
          allFields.filter((singleField) => singleField.type !== "dateTime")
        );
        defaultValues.channel = formfield.channel;
        setAlertTimeValue(formfield.alertTime);
        setDateField("customAlertNotOnDate");
      }
    }

    reset(defaultValues);
  }, [visible]);

  return (
    <div>
      <Offcanvas
        direction={"end"}
        isOpen={visible}
        toggle={() => dispatch(toggleNewAlertSectionCanvas())}
      >
        <OffcanvasHeader
          toggle={() => dispatch(toggleNewAlertSectionCanvas())}
        ></OffcanvasHeader>
        <OffcanvasBody className="d-flex flex-column justify-content-between align-items-space px-2">
          {/* <Form>
            <p className="h3 page_main_title">
              {formfield ? "Update Alert" : "Create New Alert"}
            </p>

            <p>Select the target Contract and the target contract fields</p>
            <Row className="mt-2">
              <Col sm={12} className="mb-1">
                <Label for="title">Select Contract</Label>
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
              </Col>
              <Col sm={12} className="mb-2">
                <Label for="alertFields">Select Target Contract Fields</Label>
                <Controller
                  id={`alertFields`}
                  name={`alertFields`}
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
                        handleFieldsChange(value);
                        field.onChange(value);
                      }}
                    />
                  )}
                />
              </Col>
              <hr />
            </Row>
            {dateField === "customAlertNotOnDate" && (
              <Row>
                <Col>
                  <p className="m-0">Select alert channel</p>

                  <Controller
                    id={`channel`}
                    name={`channel`}
                    defaultValue={[]}
                    control={control}
                    render={({ field }) => (
                      <CustomCheckGroup {...field} options={ChannelList} />
                    )}
                  />
                </Col>
              </Row>
            )}
            {dateField === "customAlertOnDate" && (
              <Row className="my-2">
                {fields.map((item, index) => (
                  <Card key={index}>
                    <CardBody>
                      <Row className="justify-content-between align-items-center">
                        <Col md={12} className="mb-1">
                          <p className="m-0">When do you need the alert?</p>
                          <div className="d-flex align-items-center">
                            <div className="demo-inline-spacing mt-0">
                              <div className="form-check mt-0">
                                <Input
                                  {...register(`fields.${index}.afterOrBefore`)}
                                  type="radio"
                                  value="before"
                                  id={`before${index}`}
                                  defaultChecked={
                                    afterOrBeforeValue === "before"
                                  }
                                  onChange={(e) => {
                                    setValue(
                                      `fields.${index}.afterOrBefore`,
                                      e.target.value
                                    );
                                  }}
                                />
                                <Label for={`before${index}`}>Before</Label>
                              </div>
                              <div className="form-check mt-0">
                                <Input
                                  {...register(`fields.${index}.afterOrBefore`)}
                                  type="radio"
                                  value="after"
                                  id={`after${index}`}
                                  defaultChecked={
                                    afterOrBeforeValue === "after"
                                  }
                                  onChange={(e) => {
                                    setValue(
                                      `fields.${index}.afterOrBefore`,
                                      e.target.value
                                    );
                                  }}
                                />
                                <Label for={`after${index}`}>After</Label>
                              </div>
                            </div>
                            <div className="form-check d-flex align-items-center p-0 mt-0">
                              <Controller
                                id={`fields.${index}.afterOrBeforeDays`}
                                name={`fields.${index}.afterOrBeforeDays`}
                                control={control}
                                render={({ field }) => (
                                  <InputNumber
                                    {...field}
                                    className="me-1"
                                    id="basic-number-input"
                                    upHandler={<Plus />}
                                    min={1}
                                    downHandler={<Minus />}
                                  />
                                )}
                              />
                              <span>days</span>
                            </div>
                          </div>
                        </Col>
                        <Col md={12} className="mb-1">
                          <p className="m-0">Select alert channel</p>
                          <Controller
                            id={`fields.${index}.channel`}
                            name={`fields.${index}.channel`}
                            control={control}
                            render={({ field }) => (
                              <CustomCheckGroup
                                {...field}
                                options={ChannelList}
                              />
                            )}
                          />
                        </Col>
                        <Col md={12} className="mb-1">
                          <p>Select the time</p>
                          <div className="demo-inline-spacing mt-0">
                            <div className="form-check mt-0">
                              <Input
                                {...register(`fields.${index}.alertTime`)}
                                type="radio"
                                value="6"
                                id={`morning${index}`}
                                onChange={(e) => {
                                  setValue(
                                    `fields.${index}.alertTime`,
                                    e.target.value
                                  );
                                }}
                                defaultChecked={alertTimeValue === 6}
                              />
                              <Label for={`morning${index}`}>Morning</Label>
                            </div>
                            <div className="form-check mt-0">
                              <Input
                                {...register(`fields.${index}.alertTime`)}
                                type="radio"
                                value="18"
                                id={`evening${index}`}
                                onChange={(e) => {
                                  setValue(
                                    `fields.${index}.alertTime`,
                                    e.target.value
                                  );
                                }}
                                defaultChecked={alertTimeValue === 18}
                              />
                              <Label for={`evening${index}`}>Evening</Label>
                            </div>
                          </div>
                        </Col>

                        {!formfield && (
                          <Button
                            color="danger"
                            className="text-nowrapv delete-button"
                            size="sm"
                            onClick={() => {
                              remove(index);
                            }}
                            outline
                          >
                            <X size={14} />
                          </Button>
                        )}
                      </Row>
                    </CardBody>
                  </Card>
                ))}
                <Col
                  className="d-flex justify-content-center align-items-center"
                  md="12"
                  sm="12"
                >
                  {!formfield && (
                    <Button
                      className="btn-icon mb-2"
                      size="sm"
                      outline
                      color="info"
                      onClick={() => {
                        append({
                          afterOrBefore: "",
                          afterOrBeforeDays: 1,
                          channel: [],
                        });
                      }}
                    >
                      <Plus size={14} />
                      <span className="align-middle ms-25">Add</span>
                    </Button>
                  )}
                </Col>
              </Row>
            )}
          </Form> */}
          <div className="d-flex justify-content-center align-items-center">
            <Button
              onClick={handleSubmit(onSubmit)}
              color="light_blue"
              className="filter_btns"
            >
              <span className="align-middle ms-25">Save Alert</span>
            </Button>
            <Button
              onClick={() => dispatch(toggleNewAlertSectionCanvas())}
              outline
              color="light_blue"
              className="filter_btns mx-1"
            >
              Discard
            </Button>
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};

export default NewAlertCanvas;
