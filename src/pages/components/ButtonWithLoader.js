import _ from "lodash";
import React from "react";
import { Button, Spinner } from "reactstrap";

const ButtonWithLoader = (props) => {
  const { loader, loadersize } = props;
  return (
    <Button
      {..._.omit(props, ["loader", "loadersize"])}
      disabled={loader || props.disabled}
    >
      {loader ? <Spinner size={loadersize || 12} /> : props.children}
    </Button>
  );
};

export default ButtonWithLoader;
