import { Grid } from "@material-ui/core";
import React from "react";
import fa from "../../Consistent/fa.js";
import { withIsWeb } from "../../Hoc/withIsWeb.js";
import AdCardComponent from "../AdCard/AdCardComponent.js";
import CustomButtonComponent from "../CustomButton/CustomButtonComponent.js";
import HeaderComponent from "../Header/HeaderComponent.js";

import { useStyle } from "./Main.style.js";

function MainComponent(props) {
  const classes = useStyle();
  const { state, setState, isWeb } = props;
  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item className={classes.header}>
        <HeaderComponent />
      </Grid>
      <Grid item className={classes.main}>
        {Array(10)
          .fill(0)
          .map((item) => (
            <AdCardComponent />
          ))}
      </Grid>
      {!isWeb && (
        <Grid item className={classes.footer}>
          <CustomButtonComponent
            textColor="primaryColor"
            variant="contained"
            color="primary"
          >
            {fa.main.sendAds}
          </CustomButtonComponent>
        </Grid>
      )}
    </Grid>
  );
}

export default withIsWeb(MainComponent);
