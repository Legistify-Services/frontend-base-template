// ** React Imports
import { Fragment, useState } from "react";

// ** Third Party Components
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Form,
  Card,
  Input,
  Label,
  Button,
  CardBody,
  CardTitle,
  CardHeader,
  FormFeedback,
} from "reactstrap";

import "./index.scss";
import { useDispatch } from "react-redux";
import Save from "@src/assets/icons/Save.svg";

const AccountTabs = ({ data }) => {
  const dispatch = useDispatch();

  // ** States
  // Get the user profile details from api
  // const [profileData, setProfileData] = useState({});
  const [avatar, setAvatar] = useState(data.avatar ? data.avatar : "");
  const [formEdit, setFormEdit] = useState(false);

  // ** Hooks
  const defaultValues = {
    lastName: "",
    firstName: data.fullName.split(" ")[0],
  };

  const ProfileDetailSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(3, "First Name must be at least 3 characters")
      .required(),
    lastName: yup
      .string()
      .min(3, "Last Name must be at least 3 characters")
      .required(),
    mobile: yup.string().min(10).max(10).required(),
    whatsAppNumber: yup.string().min(10).max(10).required(),
    email: yup.string().email().required(),
    addressLine: yup.string().required(),
    state: yup.string().required(),
    pincode: yup.string().min(6).required(),
  });

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(ProfileDetailSchema),
    defaultValues,
  });

  const onChange = (e) => {
    const reader = new FileReader(),
      files = e.target.files;
    reader.onload = function () {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(files[0]);
    setFormEdit(true);
  };

  const handleDiscardChanges = () => {
    reset(defaultValues);
  };

  const onSubmit = (data) => {
    console.log(data);
    // If the response for update api is true then,
    // dispatch that response to userProfileDetails reducer
    // And also set the response to localStorage
    // Something like this
    // dispatch(userProfileDetails(response.data.orgUser));
    // localStorage.setItem("userData", JSON.stringify(response.data.orgUser));
  };

  const handleImgReset = () => {
    setAvatar(require("@src/assets/images/avatars/avatar-blank.png").default);
  };

  return (
    <Fragment>
      <Card className="account_setting_tab">
        <CardHeader className="border-bottom">
          <CardTitle tag="h4">Profile Details</CardTitle>
        </CardHeader>
        <CardBody className="py-2 my-25">
          <div className="d-flex">
            <div className="me-25">
              <img
                className="rounded me-50"
                src={avatar}
                alt="Generic placeholder image"
                height="100"
                width="100"
              />
            </div>
            <div className="d-flex align-items-end mt-75 ms-1">
              <div>
                <Button
                  tag={Label}
                  className="me-75 filter_btns"
                  color="light_blue"
                >
                  Upload
                  <Input
                    type="file"
                    onChange={onChange}
                    hidden
                    accept="image/*"
                  />
                </Button>
                <Button
                  className="filter_btns discard_btn"
                  color="grey_new"
                  outline
                  onClick={handleImgReset}
                >
                  Discard Changes
                </Button>
                <p className="mb-0">
                  Allowed JPG, GIF or PNG. Max size of 800kB
                </p>
              </div>
            </div>
          </div>
          <Form className="mt-2 pt-50" onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col sm="4" className="mb-1">
                <Label className="form-label" for="firstName">
                  First Name
                </Label>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="firstName"
                      placeholder="First Name"
                      invalid={errors.firstName && true}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        setFormEdit(true);
                      }}
                    />
                  )}
                />
                {errors && errors.firstName && (
                  <FormFeedback>{errors.firstName.message}</FormFeedback>
                )}
              </Col>
              <Col sm="4" className="mb-1">
                <Label className="form-label" for="lastName">
                  Last Name
                </Label>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="lastName"
                      placeholder="Last Name"
                      invalid={errors.lastName && true}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        setFormEdit(true);
                      }}
                    />
                  )}
                />
                {errors.lastName && (
                  <FormFeedback>{errors.lastName.message}</FormFeedback>
                )}
              </Col>
              <Col sm="4" className="mb-1">
                <Label className="form-label" for="organization">
                  Organization
                </Label>
                <Controller
                  name="organization"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="organization"
                      placeholder=""
                      // disabled
                      // invalid={errors.organization && true}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        setFormEdit(true);
                      }}
                    />
                  )}
                />
              </Col>
              <Col sm="4" className="mb-1">
                <Label className="form-label" for="mobile">
                  Mobile Number
                </Label>
                <Controller
                  name="mobile"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="mobile"
                      // disabled
                      placeholder="Mobile Number"
                      invalid={errors.mobile && true}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        setFormEdit(true);
                      }}
                    />
                  )}
                />
                {errors.mobile && (
                  <FormFeedback>{errors.mobile.message}</FormFeedback>
                )}
              </Col>
              <Col sm="4" className="mb-1">
                <Label className="form-label" for="whatsAppNumber">
                  Whatsapp Number
                </Label>
                <Controller
                  name="whatsAppNumber"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="whatsAppNumber"
                      // disabled
                      placeholder="Whatsapp Number"
                      invalid={errors.whatsAppNumber && true}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        setFormEdit(true);
                      }}
                    />
                  )}
                />
                {errors.whatsAppNumber && (
                  <FormFeedback>{errors.whatsAppNumber.message}</FormFeedback>
                )}
              </Col>
              <Col sm="4" className="mb-1">
                <Label className="form-label" for="email">
                  Work Email
                </Label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="email"
                      // disabled
                      placeholder="Work Email"
                      invalid={errors.email && true}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        setFormEdit(true);
                      }}
                    />
                  )}
                />
                {errors.email && (
                  <FormFeedback>{errors.email.message}</FormFeedback>
                )}
              </Col>
              <Col sm="4" className="mb-1">
                <Label className="form-label" for="addressLine">
                  Street Address
                </Label>
                <Controller
                  name="addressLine"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="addressLine"
                      placeholder="Street Address"
                      invalid={errors.addressLine && true}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        setFormEdit(true);
                      }}
                    />
                  )}
                />
                {errors.addressLine && (
                  <FormFeedback>{errors.addressLine.message}</FormFeedback>
                )}
              </Col>
              <Col sm="4" className="mb-1">
                <Label className="form-label" for="state">
                  State
                </Label>
                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="state"
                      placeholder="State"
                      invalid={errors.state && true}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        setFormEdit(true);
                      }}
                    />
                  )}
                />
                {errors.state && (
                  <FormFeedback>{errors.state.message}</FormFeedback>
                )}
              </Col>
              <Col sm="4" className="mb-1">
                <Label className="form-label" for="pincode">
                  PIN Code
                </Label>
                <Controller
                  name="pincode"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="pincode"
                      placeholder="PIN Code"
                      invalid={errors.pincode && true}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        setFormEdit(true);
                      }}
                    />
                  )}
                />
                {errors.pincode && (
                  <FormFeedback>{errors.pincode.message}</FormFeedback>
                )}
              </Col>

              <Col className="mt-2" sm="12">
                <Button
                  disabled={!formEdit}
                  color={!formEdit ? "grey_new" : "success"}
                  type="submit"
                  className="me-1 filter_btns"
                >
                  <img src={Save} alt="" className="" /> &nbsp; Save
                </Button>
                <Button
                  color="grey_new"
                  className="filter_btns discard_btn"
                  outline
                  onClick={() => handleDiscardChanges()}
                >
                  Discard Changes
                </Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default AccountTabs;
