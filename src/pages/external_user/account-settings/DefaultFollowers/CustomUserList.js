import _ from "lodash";
import React from "react";
import { Col, Input, Row } from "reactstrap";
import Avatar from "@components/avatar";
import "./index.scss";

const CustomUserList = ({ options, value, onChange }) => {
  return (
    <Row className="userList">
      {options.map((user) => {
        const follow = _.findIndex(value, (id) => id === user._id) > -1;
        return (
          <Col sm="4" key={user._id} onClick={() => onChange(user._id)}>
            <div
              className={
                follow
                  ? "card followers_card followers_card_outline"
                  : "followers_card card"
              }
            >
              <div className="row">
                <span className="col-md-2 follower_image">
                  {user.profilePicUrl ? (
                    <Avatar img={user.profilePicUrl} />
                  ) : (
                    <Avatar
                      color="light-danger"
                      content={(user.fullName || "")
                        .substring(0, 2)
                        .toUpperCase()}
                      initials
                    />
                  )}
                </span>
                <span className="col-md-8 follower_content ">
                  <label
                    className=" form-check-label follower_name"
                    htmlFor={user._id}
                  >
                    {_.startCase(user.fullName)}
                  </label>
                  <br />
                  <p className="follower_info">
                    {_.startCase(user.typeOfUser)}
                  </p>
                </span>
                <span className="col text-end tick_btn form-check ">
                  <Input type="checkbox" checked={follow} />
                </span>
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default CustomUserList;
