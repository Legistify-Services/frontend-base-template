import React from "react";
// import getUserPermission from "@src/api/getUserPermission";
// import updateUserPermission from "@src/api/updateUserPermission";
import { Card, CardBody, Col, Row } from "reactstrap";
import Select from "react-select";
import Avatar from "@components/avatar";
import toast from "react-hot-toast";

const UserPermission = () => {
  const [userList, setUserList] = React.useState([]);
  // const fetchUserPermission = async () => {
  //   const response = await getUserPermission("?ckEditorEnabled=true");
  //   if (response.status) {
  //     setUserList(response.data.orgUsers);
  //   }
  // };
  // React.useEffect(() => {
  //   fetchUserPermission();
  // }, []);

  const handleRoleChange = async (value, user) => {
    // if (user.userRole !== value.value) {
    //   const response = await updateUserPermission(user._id, value.value);
    //   if (response?.status) {
    //     toast.success("User permission updated successfully");
    //   } else {
    //     toast.error("Something went wrong");
    //     // fetchUserPermission();
    //   }
    // }
  };
  const typeOfPermission = ["viewer", "commentator", "writer", "admin"];

  return (
    <Row>
      {userList.map((user) => {
        return (
          <Col md="4" sm="12" key={user._id}>
            <Card>
              <CardBody>
                <Row className=" d-flex align-items-center">
                  <Col md="4" sm="4">
                    {user.profilePicUrl ? (
                      <Avatar img={user.profilePicUrl} size="xl" />
                    ) : (
                      <Avatar
                        color="light-danger"
                        content={(user.fullName || "")
                          .substring(0, 2)
                          .toUpperCase()}
                        initials
                        size="xl"
                      />
                    )}
                  </Col>
                  <Col md="8" sm="8">
                    <h4>{user.fullName}</h4>
                    <p>{user.typeOfUser}</p>
                    <Select
                      defaultValue={{
                        label: user.userRole || "viewer",
                        value: user.userRole || "viewer",
                      }}
                      onChange={(value) => handleRoleChange(value, user)}
                      options={typeOfPermission.map((item) => ({
                        label: item,
                        value: item,
                      }))}
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default UserPermission;
