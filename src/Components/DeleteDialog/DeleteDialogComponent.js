import { DialogActions, Grid, Typography } from "@material-ui/core";
import React from "react";

import fa from "../../Consistent/fa.js";
import CustomButtonComponent from "../CustomButton/CustomButtonComponent.js";
import { useStyle } from "./DeleteDialog.style.js";

export default function DeleteDialogComponent(props) {
  const classes = useStyle();
  const { handleClose, handleAccept } = props;
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      className={classes.root}
    >
      <Grid item>
        <Typography>{fa.dialog.areYouSure}</Typography>
      </Grid>
      <Grid item xs={12}>
        <DialogActions>
          <CustomButtonComponent
            textColor="primaryColor"
            variant="contained"
            color="primary"
            onClick={handleAccept}
          >
            {fa.dialog.yes}
          </CustomButtonComponent>
          <CustomButtonComponent
            variant="contained"
            backgroundColor={"defaultBackgroundColor"}
            onClick={handleClose}
            autoFocus
          >
            {fa.dialog.no}
          </CustomButtonComponent>
        </DialogActions>
      </Grid>
    </Grid>
  );
}
