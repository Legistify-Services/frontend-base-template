import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  Button,
  Col,
  Row,
  Form,
  Input,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Label,
  FormFeedback,
} from "reactstrap";
import {
  // fetchMisLogsList,
  // fetchTemplateList,
  toggleMisSectionCanvas,
} from "./store";
import classnames from "classnames";
import * as yup from "yup";

// Styles
import { selectThemeColors } from "@utils";

// ** Reactstrap Imports
import "@styles/react/libs/react-select/_react-select.scss";
import "@styles/react/pages/page-form-validation.scss";
// import CustomField from "./CustomField";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import CustomOfCanvasFooter from "../../components/offCanvas/customOfCanvasFooter";
import CustomOfCanvasHeader from "../../components/offCanvas/customOfCanvasHeader";
// import createMisTemplate from "@src/api/createMisTemplate";
// import generateMisReport from "@src/api/generateMisReport";
// import { handleDownload } from "@src/utility/handleDownload";
// import updateMisTemplate from "@src/api/updateMisTemplate";

const MisNewSectionCanvas = ({ templateOptionList }) => {
  const ReportSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    contractTemplateID: yup.object().required(),
    selectedFields: yup.array().required(),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(ReportSchema),
  });
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.misReducer.newMisSection);
  const currentTemplate = useSelector(
    (state) => state.misReducer.currentTemplate
  );

  const onSubmit = (data) => {
    //   const formData = {
    //     ...data,
    //     contractTemplateID: data.contractTemplateID.value,
    //   };
    //   console.log(formData);
    //   postData(formData);
    // };
    // const handleGenerateReport = (data) => {
    //   const formData = {
    //     ...data,
    //     contractTemplateID: data.contractTemplateID.value,
    //   };
    //   generateReport(formData);
  };

  const generateReport = async (formData) => {
    // const response = await generateMisReport(formData);
    // console.log("report", response);
    // if (response?.status) {
    //   handleDownload(response?.data[0]?.document_url);
    //   toast.success("template Created Successfully");
    //   dispatch(toggleMisSectionCanvas());
    //   // dispatch(fetchMisLogsList());
    //   dispatch(fetchTemplateList());
    // } else {
    //   toast.error("Something went wrong");
    // }
  };

  const postData = async (formData) => {
    // const response = await createMisTemplate(formData);
    // if (response?.status) {
    //   toast.success("template Created Successfully");
    //   dispatch(fetchTemplateList());
    //   dispatch(toggleMisSectionCanvas());
    // } else {
    //   toast.error("Something went wrong");
    // }
  };
  const [fieldsList, setFieldsList] = React.useState(null);

  const handleTemplateChange = (value) => {
    const temp = templateOptionList
      ?.find((template) => template._id === value.value)
      ?.contractKeys?.filter((item) => item.type !== "file");
    setFieldsList(
      temp.map((key) => {
        return { label: key.label, value: key._id };
      })
    );
    setValue(
      "selectedFields",
      temp.map((key) => key._id)
    );
  };

  const updateTemplate = (data) => {
    const formData = {
      templateId: currentTemplate._id,
      data: {
        ...data,
        contractTemplateID: data.contractTemplateID.value,
      },
    };
    updateData(formData);
  };

  const updateData = async (formData) => {
    // const response = await updateMisTemplate(formData);
    // if (response?.status) {
    //   toast.success("template Updated Successfully");
    //   dispatch(fetchTemplateList());
    //   dispatch(toggleMisSectionCanvas());
    // } else {
    //   toast.error("Something went wrong");
    // }
  };

  const additionalFieldsList = [
    { label: "Priority", value: "priority" },
    { label: "Contract Stage", value: "contractStage" },
    { label: "Requestor Name", value: "ownerId" },
    { label: "Expiry Date", value: "expiryDate" },
  ];

  // React.useEffect(() => {
  //   let defaultValue = {};
  //   defaultValue.title = currentTemplate?.title || "";
  //   defaultValue.description = currentTemplate?.description || "";
  //   defaultValue.contractTemplateID =
  //     (currentTemplate?.contractTemplateID && {
  //       label: templateOptionList?.find(
  //         (template) => template._id === currentTemplate?.contractTemplateID
  //       )?.name,
  //       value: currentTemplate?.contractTemplateID,
  //     }) ||
  //     "";
  //   defaultValue.selectedFields = currentTemplate?.selectedFields || [];
  //   if (currentTemplate) {
  //     const temp = templateOptionList
  //       ?.find(
  //         (template) => template._id === currentTemplate?.contractTemplateID
  //       )
  //       ?.contractKeys?.filter((item) => item.type !== "file");
  //     setFieldsList(
  //       temp?.map((key) => {
  //         return { label: key.label, value: key._id };
  //       })
  //     );
  //   } else {
  //     setFieldsList([]);
  //   }
  //   reset(defaultValue);
  // }, [visible]);

  return (
    <Offcanvas
      style={{
        width: "600px",
      }}
      direction={"end"}
      isOpen={visible}
      toggle={() => dispatch(toggleMisSectionCanvas())}
    >
      <CustomOfCanvasHeader headerTitle="Create MIS Report Template" />

      <OffcanvasBody className="d-flex flex-column justify-content-between align-items-space px-2">
        <div>
          {/* {!currentTemplate && (
            <p className="text-center">
              Create a Custom Report for any Contract
            </p>
          )} */}
          {/* <Form>
            <Row>
              <Col xs={12} className="mb-1">
                <Label className="form-label" for={"title"}>
                  Title for the Report
                </Label>
                <Controller
                  id="title"
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      invalid={errors["title"] && true}
                      placeholder="Title for the Report"
                    />
                  )}
                />
                {errors["title"] && (
                  <FormFeedback className="d-block">
                    This field is required!
                  </FormFeedback>
                )}
              </Col>
              <Col xs={12} className="mb-1">
                <Label className="form-label" for={"description"}>
                  Description for the Report
                </Label>
                <Controller
                  id="description"
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      invalid={errors["description"] && true}
                      type="text"
                      placeholder="Description for the Report"
                    />
                  )}
                />
                {errors["description"] && (
                  <FormFeedback className="d-block">
                    This field is required!
                  </FormFeedback>
                )}
              </Col>
              <Col md="12" className="mb-1">
                <Label className="form-label" for={"title"}>
                  Select Contract
                </Label>
                <Controller
                  id="contractTemplateID"
                  name="contractTemplateID"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      theme={selectThemeColors}
                      className={classnames("react-select", {
                        "is-invalid": errors["contractTemplateID"] && true,
                      })}
                      classNamePrefix="select"
                      placeholder="Select a Contract"
                      options={templateOptionList.map((item) => {
                        return { value: item._id, label: item.name };
                      })}
                      onChange={(value) => {
                        handleTemplateChange(value);
                        field.onChange(value);
                      }}
                    />
                  )}
                />
                {errors["contractTemplateID"] && (
                  <FormFeedback className="d-block">
                    This field is required!
                  </FormFeedback>
                )}
              </Col>
              <hr />
              <Col xs={12} className="mb-1">
                <p className="text-center">
                  Select the Contract Fields you need in this Custom Report
                </p>
                {errors["selectedFields"] && (
                  <FormFeedback className="d-block">
                    This field is required!
                  </FormFeedback>
                )}
                <Controller
                  id="selectedFields"
                  name="selectedFields"
                  control={control}
                  defaultValue={fieldsList?.map((item) => item.value)}
                  render={({ field }) => (
                    <CustomField
                      {...field}
                      value={
                        field.value || fieldsList?.map((item) => item.value)
                      }
                      options={fieldsList}
                    />
                  )}
                />
              </Col>
              {fieldsList?.length > 0 && (
                <Col xs={12} className="mb-1">
                  <p className="text-center">
                    Select the Contract Additional Fields you need in this
                    Custom Report
                  </p>
                  {errors["additionalFields"] && (
                    <FormFeedback className="d-block">
                      This field is required!
                    </FormFeedback>
                  )}
                  <Controller
                    id="additionalFields"
                    name="additionalFields"
                    control={control}
                    defaultValue={additionalFieldsList?.map(
                      (item) => item.value
                    )}
                    render={({ field }) => (
                      <CustomField
                        {...field}
                        value={
                          field.value ||
                          additionalFieldsList?.map((item) => item.value)
                        }
                        options={additionalFieldsList}
                      />
                    )}
                  />
                </Col>
              )}
            </Row>
          </Form> */}
        </div>
        {/* {currentTemplate ? (
          <div className="d-flex justify-content-center align-items-center">
            <Button
              onClick={handleSubmit(updateTemplate)}
              color="light_blue"
              className="filter_btns"
            >
              <span className="align-middle ms-25">Update Template</span>
            </Button>
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            <Button
              onClick={handleSubmit(onSubmit)}
              color="light_blue"
              className="filter_btns"
            >
              <span className="align-middle ms-25">Save Template</span>
            </Button>
            <Button
              onClick={handleSubmit(handleGenerateReport)}
              outline
              color="light_blue"
              className="filter_btns mx-1"
            >
              Generate Report
            </Button>
          </div>
        )} */}
      </OffcanvasBody>
      <CustomOfCanvasFooter
        submitButtonName="Submit"
        resetButtonName="Reset"
        handleToSubmit={() => console.log("handleToSubmit")}
        handleToReset={() => console.log("handleToReset")}
      />
    </Offcanvas>
  );
};

export default MisNewSectionCanvas;
