import { Button, CircularProgress } from "@material-ui/core";
import React from "react";

import { useStyle } from "./CustomButton.style.js";

export default function CustomButtonComponent(props) {
  const classes = useStyle();
  const { children, textColor, backgroundColor, loading, ...rest } = props;
  return (
    <Button
      className={`${classes.root} ${classes[textColor]} ${classes[backgroundColor]}`}
      {...rest}
    >
      {loading ? <CircularProgress color="secondary" size={25} /> : children}
    </Button>
  );
}
