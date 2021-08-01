import { CircularProgress, debounce, Grid } from "@material-ui/core";
import React from "react";
import { useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";

import { searchAdApi } from "../../Api/Ad.js";
import fa from "../../Consistent/fa.js";
import { withIsWeb } from "../../Hoc/withIsWeb.js";
import { useCustomMutation } from "../../Hooks/useCustomMutation.js";
import CrudAdComponent from "../CrudAd/CrudAdComponent.js";
import CustomButtonComponent from "../CustomButton/CustomButtonComponent.js";
import CustomTextFieldComponent from "../CustomTextField/CustomTextFieldComponent.js";
import { useDialog } from "../DialogProvider/DialogProvider.js";
import { useStyle } from "./Header.style.js";

function HeaderComponent(props) {
  const classes = useStyle();
  const [createDialog, closeDialog] = useDialog();
  const history = useHistory();
  const { state, setState, isWeb } = props;
  const queryClient = useQueryClient();

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

  const { isLoading, mutate } = useCustomMutation(searchAdApi, (newAds) => {
    queryClient.setQueriesData("getAds", newAds);
  });

  const handleOnChange = debounce((e) => {
    const value = e.target.value;
    if (value.length >= 3 || value.length === 0) {
      mutate({ value: e.target.value });
    }
  }, 700);

  return (
    <Grid
      container
      className={classes.root}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item className={classes.searchBox} xs={!isWeb && 12}>
        <CustomTextFieldComponent
          onChange={handleOnChange}
          placeholder={fa.main.search}
        />
        {isLoading && (
          <div>
            <CircularProgress size={25} />
          </div>
        )}
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
