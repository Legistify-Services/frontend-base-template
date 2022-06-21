import React, { useState } from "react";
import { Download, HelpCircle } from "react-feather";
import { Button, CardHeader, UncontrolledTooltip } from "reactstrap";
import _ from "lodash";
import ButtonWithLoader from "../ButtonWithLoader";

const CustomCardHead = ({ title, tooltiptext, onDownloadClick }) => {
  const [isLoading, setIsLoading] = useState(false);

  const downloadWait = async () => {
    setIsLoading(true);
    // const response = await onDownloadClick();
    setIsLoading(false);
  };

  return (
    <CardHeader>
      <p className="h4 m-0 p-0">
        {title}
        <span tabIndex="-1" className="cursor_pointer ms-1">
          <HelpCircle size={15} tabIndex="-1" id={_.camelCase(title)} />
        </span>
        <UncontrolledTooltip placement="top" target={_.camelCase(title)}>
          {tooltiptext}
        </UncontrolledTooltip>
      </p>
      <p className="m-0 p-0">
        * Updated Just Now
        <ButtonWithLoader
          size="sm"
          className="ms-1"
          color="primary"
          // onClick={downloadWait}
          loader={isLoading}
          loadersize={"sm"}
        >
          <Download size={15} />
        </ButtonWithLoader>
      </p>
    </CardHeader>
  );
};

export default CustomCardHead;
