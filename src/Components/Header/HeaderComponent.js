import React from "react";
import { useStyle } from "./Header.style.js";
import { Grid } from "@material-ui/core";
import CustomButtonComponent from "../CustomButton/CustomButtonComponent.js";
import fa from "../../Consistent/fa.js";
import CustomTextFieldComponent from "../CustomTextField/CustomTextFieldComponent.js";
import { withIsWeb } from "../../Hoc/withIsWeb.js";
import { useDialog } from "../DialogProvider/DialogProvider.js";
import CrudAdComponent from "../CrudAd/CrudAdComponent.js";
import { useHistory } from "react-router-dom";

function HeaderComponent(props) {
  const classes = useStyle();
  const [createDialog, closeDialog] = useDialog();
  const history = useHistory();
  const { state, setState, isWeb } = props;

  const handleClick = () => {
    if (isWeb) {
      createDialog({
        children: (
          <CrudAdComponent
            callbackCancel={closeDialog}
            mode="create"
            componentType="dialog"
          />
        ),
      });
    } else {
      history.push("/ad/create");
    }
  };
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
          onClick={handleClick}
        >
          {fa.main.sendAds}
        </CustomButtonComponent>
      </Grid>
    </Grid>
  );
}
export default withIsWeb(HeaderComponent);
