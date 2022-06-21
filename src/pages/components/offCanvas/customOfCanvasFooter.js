import { Button } from "reactstrap";
import React, { Fragment } from "react";

const CustomOfCanvasFooter = (props) => {
  const { handleToSubmit, handleToReset, submitButtonName, resetButtonName } =
    props;
  return (
    <div className="text-center row m-1 ">
      <div className="col">
        <Button
          color="light_blue"
          onClick={handleToSubmit}
          className="filter_btns me-1"
        >
          {submitButtonName}
        </Button>
        <Button
          outline
          color="light_blue"
          className="filter_btns"
          onClick={handleToReset}
        >
          {resetButtonName}
        </Button>
      </div>
    </div>
  );
};

export default CustomOfCanvasFooter;
