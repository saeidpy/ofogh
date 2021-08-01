import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import fa from "../../Consistent/fa.js";
import { useCustomCrud } from "../../Hooks/useCustomCrud.js";
import CustomButtonComponent from "../CustomButton/CustomButtonComponent.js";
import CustomTextFieldComponent from "../CustomTextField/CustomTextFieldComponent.js";
import DeleteDialogComponent from "../DeleteDialog/DeleteDialogComponent.js";
import { useDialog } from "../DialogProvider/DialogProvider.js";
import { useStyle } from "./CrudForm.style.js";

const phoneRegExp = "^(\\+98|0)?9\\d{9}$";
const schema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(phoneRegExp, fa.formValidation.phoneNumber)
    .required(fa.formValidation.phoneNumberRequire),
});

export default function CrudFormComponent(props) {
  const classes = useStyle();
  const { mode, componentType, data, id, callbackCancel, position } = props;
  const [internalMode, setInternalMode] = useState(mode);
  const history = useHistory();
  const editMode = mode === "update";
  const createMode = mode === "create";
  const [createDialog, closeDialog] = useDialog();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const callbackSuccess = () => {
    if (createMode) {
      if (componentType === "dialog") {
        callbackCancel();
      } else {
        history.push("/");
      }
    }
    if (internalMode === "delete") {
      closeDialog();
      history.push("/");
    }
  };

  const { isLoading, mutate } = useCustomCrud(internalMode, callbackSuccess);

  const onSubmit = (values) => {
    if (editMode) {
      mutate({ body: { ...values, position }, id });
    } else {
      mutate({ body: { ...values, position } });
    }
  };

  const handleOnClick = () => {
    if (editMode) {
      setInternalMode("delete");
      createDialog({
        children: (
          <DeleteDialogComponent
            handleAccept={() => {
              mutate({ id });
            }}
            handleClose={() => {
              setInternalMode(mode);
              closeDialog();
            }}
          />
        ),
      });
    } else {
      if (componentType === "dialog") {
        callbackCancel();
      } else {
        history.push("/");
      }
    }
  };

  return (
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
          <Controller
            render={({ field }) => (
              <CustomTextFieldComponent multiline rows={4} {...field} />
            )}
            name="address"
            control={control}
            defaultValue={data?.address}
          />
        </Grid>
        <Grid item>
          <Typography component="label">{fa.ad.phoneNumber}*:</Typography>
          <Controller
            render={({ field }) => (
              <CustomTextFieldComponent
                type="number"
                error={errors.phoneNumber?.message}
                helperText={errors.phoneNumber?.message}
                defaultValue={data?.phoneNumber}
                {...field}
              />
            )}
            name="phoneNumber"
            control={control}
            defaultValue={data?.phoneNumber}
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
            loading={isLoading}
          >
            {createMode ? fa.ad.accept : fa.ad.edit}
          </CustomButtonComponent>
        </Grid>
        <Grid item>
          <CustomButtonComponent
            customClass={classes.actionButton}
            variant="contained"
            backgroundColor={"defaultBackgroundColor"}
            onClick={handleOnClick}
          >
            {createMode ? fa.ad.cancel : fa.ad.delete}
          </CustomButtonComponent>
        </Grid>
        {editMode && (
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
  );
}
