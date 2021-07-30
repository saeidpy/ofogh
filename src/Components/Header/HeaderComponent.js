import React from "react";
import { useStyle } from "./Header.style.js";
import { Grid } from "@material-ui/core";
import CustomButtonComponent from "../CustomButton/CustomButtonComponent.js";
import fa from "../../Consistent/fa.js";
import CustomTextFieldComponent from "../CustomTextField/CustomTextFieldComponent.js";
import { withIsWeb } from "../../Hoc/withIsWeb.js";

function HeaderComponent(props) {
  const classes = useStyle();
  const { state, setState, isWeb } = props;
  return (
    <Grid
      container
      className={classes.root}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={!isWeb && 12}>
        <CustomTextFieldComponent placeholder={fa.main.search} />
      </Grid>
      <Grid item className={`${!isWeb && classes.mobileAddAd}`}>
        <CustomButtonComponent
          textColor="primaryColor"
          variant="contained"
          color="primary"
        >
          {fa.main.sendAds}
        </CustomButtonComponent>
      </Grid>
    </Grid>
  );
}
export default withIsWeb(HeaderComponent);
