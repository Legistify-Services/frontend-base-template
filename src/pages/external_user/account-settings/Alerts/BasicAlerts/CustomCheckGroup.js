import _ from "lodash";
import React from "react";
import { Input, Label } from "reactstrap";

const CustomCheckGroup = ({ options, value, onChange }) => {
  const [checked, setChecked] = React.useState(value);
  React.useEffect(() => {
    setChecked(value);
  }, [value]);
  const handleInputChange = (selected) => {
    if (checked?.includes(selected)) {
      onChange(checked.filter((item) => item !== selected));
      setChecked(checked.filter((item) => item !== selected));
    } else {
      onChange([...checked, selected]);
      setChecked([...checked, selected]);
    }
  };
  return (
    <div className="demo-inline-spacing">
      {options?.map((channel, index) => {
        return (
          <div key={channel} className="form-check form-check-primary mt-1">
            <Input
              type="checkbox"
              className="cursor_pointer"
              name={channel}
              onChange={(e) => {
                handleInputChange(e.target.name);
              }}
              id={`channel${index}`}
              checked={checked?.includes(channel)}
            />
            <Label className="form-check-label" for={`channel${index}`}>
              {_.startCase(channel)}
            </Label>
          </div>
        );
      })}
    </div>
  );
};

export default CustomCheckGroup;
