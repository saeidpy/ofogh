import { TextField } from "@material-ui/core";
import React from "react";

import { useStyle } from "./CustomTextField.style.js";

export default function CustomTextFieldComponent(props) {
  const { error } = props;
  const classes = useStyle();
  return (
    <TextField
      className={`${classes.root} ${error && classes.error}`}
      variant="filled"
      {...props}
    />
  );
}
