import React from "react";
import { useStyle } from "./Entry.style.js";
import { Grid } from "@material-ui/core";
import fa from "../../Consistent/fa.js";
import route from "../../Consistent/route.js";
import { useHistory } from "react-router-dom";
import CustomButtonComponent from "../CustomButton/CustomButtonComponent";

export default function EntryComponent(props) {
  const classes = useStyle();
  const history = useHistory();
  const onClick = (type) => {
    history.push(type);
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item className={classes.item}>
        <CustomButtonComponent
          textColor="primaryColor"
          variant="contained"
          color="primary"
          onClick={() => onClick(route.signIn)}
        >
          {fa.entry.signIn}
        </CustomButtonComponent>
      </Grid>
      <Grid item className={classes.item}>
        <CustomButtonComponent
          variant="contained"
          backgroundColor={"defaultBackgroundColor"}
          onClick={() => onClick(route.signUp)}
        >
          {fa.entry.signUp}
        </CustomButtonComponent>
      </Grid>
    </Grid>
  );
}
