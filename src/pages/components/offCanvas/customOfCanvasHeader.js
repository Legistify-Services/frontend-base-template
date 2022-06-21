import React, { Fragment } from "react";
import { OffcanvasHeader } from "reactstrap";

const CustomOfCanvasHeader = ({ headerTitle }) => {
  return (
    <Fragment>
      <OffcanvasHeader className="mt-1 pb-0 mb-0"></OffcanvasHeader>
      <div className="h5 page_main_title text-center mx-2 mt-0 pt-0">
        {headerTitle}
      </div>
    </Fragment>
  );
};

export default CustomOfCanvasHeader;
