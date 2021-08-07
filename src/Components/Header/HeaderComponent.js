import { CircularProgress, debounce, Grid } from '@material-ui/core';
import React from 'react';
import { useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';

import { searchAdApi } from '../../Api/Ad.js';
import { GET_ADS, SIGN_OUT_SUCCESS } from '../../Consistent/consistent.js';
import fa from '../../Consistent/fa.js';
import { useUserDispatch } from '../../Context/UserContext.js';
import { withIsWeb } from '../../Hoc/withIsWeb.js';
import { useCustomMutation } from '../../Hooks/useCustomMutation.js';
import { toEnglishNum } from '../../Utils/utils.js';
import CrudAdComponent from '../CrudAd/CrudAdComponent.js';
import CustomButtonComponent from '../CustomButton/CustomButtonComponent.js';
import CustomTextFieldComponent from '../CustomTextField/CustomTextFieldComponent.js';
import { useDialog } from '../DialogProvider/DialogProvider.js';
import { useStyle } from './Header.style.js';

function HeaderComponent(props) {
  const classes = useStyle();
  const [createDialog, closeDialog] = useDialog();
  const history = useHistory();
  const { isWeb } = props;
  const queryClient = useQueryClient();
  var userDispatch = useUserDispatch();

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
    queryClient.setQueriesData(GET_ADS, newAds);
  });

  const handleOnChange = debounce((e) => {
    const value = e.target.value;
    if (value.length >= 3 || value.length === 0) {
      mutate({ value: toEnglishNum(e.target.value) });
    }
  }, 700);

  const handleClickOut = () => {
    userDispatch({ type: SIGN_OUT_SUCCESS });
    history.push("/sign-in");
  };

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
      <Grid
        item
        className={`${classes.actionBox} ${!isWeb && classes.mobileAddAd}`}
      >
        <CustomButtonComponent
          textColor="primaryColor"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          {fa.main.sendAds}
        </CustomButtonComponent>
        <CustomButtonComponent
          variant="contained"
          backgroundColor={"defaultBackgroundColor"}
          onClick={handleClickOut}
        >
          {fa.main.logOut}
        </CustomButtonComponent>
      </Grid>
    </Grid>
  );
}
export default withIsWeb(HeaderComponent);
