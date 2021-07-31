import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import fa from '../../Consistent/fa.js';
import { withIsWeb } from '../../Hoc/withIsWeb.js';
import { useCustomCrud } from '../../Hooks/useCustomCrud.js';
import CustomButtonComponent from '../CustomButton/CustomButtonComponent.js';
import CustomTextFieldComponent from '../CustomTextField/CustomTextFieldComponent.js';
import DeleteDialogComponent from '../DeleteDialog/DeleteDialogComponent';
import { useDialog } from '../DialogProvider/DialogProvider.js';
import MapComponent from '../Map/MapComponent.js';
import { useStyle } from './CrudAd.style.js';

const phoneRegExp = "^(\\+98|0)?9\\d{9}$";
const schema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(phoneRegExp, fa.formValidation.phoneNumber)
    .required(fa.formValidation.phoneNumberRequire),
});

function CrudAdComponent(props) {
  const classes = useStyle();
  const { isWeb, mode, callbackCancel, componentType } = props;
  const [internalMode, setInternalMode] = useState(mode);
  const [createDialog, closeDialog] = useDialog();
  const history = useHistory();
  const id = history?.location?.pathname.split("/")[2];
  const editMode = internalMode === "update";
  const showMode = internalMode === "read";
  const createMode = internalMode === "create";

  const callbackSuccess = () => {
    if (componentType === "dialog") {
      closeDialog();
    } else {
      if (internalMode === "create" || internalMode === "delete") {
        history.push("/");
      } else if (internalMode === "update") {
        setInternalMode("read");
      }
    }
  };

  const { isLoading, data, mutate } = useCustomCrud(
    internalMode,
    callbackSuccess,
    { id }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: data,
  });

  const onSubmit = (values) => {
    if (editMode) {
      mutate({ body: values, id });
    } else {
      mutate({ body: values });
    }
  };

  const handleOnClick = (e, type) => {
    if (type === "right") {
      if (showMode) {
        e.preventDefault();
        setInternalMode("update");
      }
    } else {
      switch (internalMode) {
        case "update": {
          setInternalMode("read");
          break;
        }
        case "read": {
          if (componentType === "dialog") {
            callbackCancel();
          } else {
            createDialog({
              children: (
                <DeleteDialogComponent
                  handleAccept={() => {
                    setInternalMode("delete");
                    mutate();
                  }}
                  handleClose={closeDialog}
                />
              ),
            });
          }
          break;
        }
        default: {
          if (!isWeb) {
            history.push("/");
          } else {
            callbackCancel();
          }
          break;
        }
      }
    }
  };

  return (
    <Grid
      container
      className={`${
        componentType === "dialog" ? classes.rootDialog : classes.root
      } ${componentType === "dialog" && isWeb && classes.dialog}`}
      direction={!isWeb ? "column" : "row"}
    >
      <Grid item className={`${isWeb ? classes.itemMapWeb : classes.itemMap}`}>
        <MapComponent />
      </Grid>
      <Grid
        item
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        className={classes.item}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        spacing={1}
      >
        <Grid
          item
          container
          className={classes.itemAddress}
          direction="column"
          justifyContent="space-evenly"
        >
          <Grid item>
            <Typography component="label">{fa.ad.address}:</Typography>
            <CustomTextFieldComponent
              multiline
              rows={4}
              defaultValue={data?.address}
              disabled={showMode}
              {...register("address")}
            />
          </Grid>
          <Grid item>
            <Typography component="label">{fa.ad.phoneNumber}*:</Typography>
            <CustomTextFieldComponent
              type="number"
              disabled={showMode}
              defaultValue={data?.phoneNumber}
              {...register("phoneNumber")}
              error={errors.phoneNumber?.message}
              helperText={errors.phoneNumber?.message}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.action}
          alignItems="center"
          justify="space-evenly"
        >
          <Grid item>
            <CustomButtonComponent
              textColor="primaryColor"
              variant="contained"
              color="primary"
              customClass={classes.actionButton}
              type={"submit"}
              onClick={(e) => handleOnClick(e, "right")}
              loading={isLoading}
            >
              {createMode || editMode ? fa.ad.accept : fa.ad.edit}
            </CustomButtonComponent>
          </Grid>
          <Grid item>
            <CustomButtonComponent
              customClass={classes.actionButton}
              variant="contained"
              backgroundColor={"defaultBackgroundColor"}
              onClick={(e) => handleOnClick(e, "left")}
            >
              {createMode || editMode ? fa.ad.cancel : fa.ad.delete}
            </CustomButtonComponent>
          </Grid>
          {showMode && (
            <Grid item>
              <CustomButtonComponent
                customClass={classes.actionButton}
                variant="contained"
                backgroundColor={"defaultBackgroundColor"}
                onClick={(e) => history.push("/")}
              >
                {fa.ad.cancel}
              </CustomButtonComponent>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
export default withIsWeb(CrudAdComponent, "lg");
