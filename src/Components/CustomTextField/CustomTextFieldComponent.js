import { TextField } from "@material-ui/core";
import React from "react";

import { useStyle } from "./CustomTextField.style.js";

const CustomTextFieldComponent = React.forwardRef((props, ref) => {
  const { error } = props;
  const classes = useStyle();
  return (
    <TextField
      ref={ref}
      className={`${classes.root} ${error && classes.error}`}
      variant="filled"
      {...props}
    />
  );
});

export default CustomTextFieldComponent;
