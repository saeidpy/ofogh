import { Grid } from "@material-ui/core";
import React from "react";
import fa from "../../Consistent/fa.js";
import { withIsWeb } from "../../Hoc/withIsWeb.js";
import CustomButtonComponent from "../CustomButton/CustomButtonComponent.js";
import CustomTextFieldComponent from "../CustomTextField/CustomTextFieldComponent.js";
import MapComponent from "../Map/MapComponent.js";

import { useStyle } from "./CrudAd.style.js";

function CrudAdComponent(props) {
  const classes = useStyle();
  const { isWeb, setState } = props;
  return (
    <Grid container direction={!isWeb ? "column" : "row"}>
      <Grid item xs={isWeb ? 6 : 12}>
        <MapComponent />
      </Grid>
      <Grid
        item
        container
        xs={isWeb ? 6 : 12}
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item>
          <CustomTextFieldComponent />
          <CustomTextFieldComponent />
        </Grid>
        <Grid item container alignItems="center" justify="space-evenly">
          <Grid item>
            <CustomButtonComponent
              textColor="primaryColor"
              variant="contained"
              color="primary"
            >
              {fa.ad.edit}
            </CustomButtonComponent>
          </Grid>
          <Grid item>
            <CustomButtonComponent
              variant="contained"
              backgroundColor={"defaultBackgroundColor"}
            >
              {fa.ad.delete}
            </CustomButtonComponent>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default withIsWeb(CrudAdComponent);
