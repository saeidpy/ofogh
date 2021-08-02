import { yupResolver } from "@hookform/resolvers/yup";
import { Grid } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { signupApi } from "../../Api/Login.js";
import { USER_AUTH } from "../../Consistent/consistent.js";

import fa from "../../Consistent/fa.js";
import { useCustomMutation } from "../../Hooks/useCustomMutation.js";
import { setLocalStorage } from "../../Utils/utils.js";
import CustomButtonComponent from "../CustomButton/CustomButtonComponent.js";
import CustomTextFieldComponent from "../CustomTextField/CustomTextFieldComponent.js";
import { useStyle } from "./SignUp.style.js";

const schema = Yup.object().shape({
  name: Yup.string().required(fa.formValidation.name),
  email: Yup.string()
    .email(fa.formValidation.emailValid)
    .required(fa.formValidation.email),
  password: Yup.string()
    .min(6, fa.formValidation.passwordLimit)
    .required(fa.formValidation.password),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], fa.formValidation.confirmPassword)
    .required(fa.formValidation.password),
});

export default function SignUpComponent() {
  const classes = useStyle();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();
  const saveTokenAndRedirect = (data) => {
    setLocalStorage(USER_AUTH, data);
    history.push("/");
  };

  const { isLoading, mutate } = useCustomMutation(
    signupApi,
    saveTokenAndRedirect
  );

  const onSubmit = (values) => {
    delete values.confirmPassword;
    mutate(values);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      className={classes.root}
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        className={classes.item}
        spacing={2}
      >
        <Grid item xs={12}>
          <CustomTextFieldComponent
            placeholder={fa.entry.name}
            {...register("name")}
            error={errors.name?.message}
            helperText={errors.name?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomTextFieldComponent
            placeholder={fa.entry.email}
            {...register("email")}
            error={errors.email?.message}
            helperText={errors.email?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomTextFieldComponent
            placeholder={fa.entry.password}
            type="password"
            {...register("password")}
            error={errors.password?.message}
            helperText={errors.password?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomTextFieldComponent
            placeholder={fa.entry.confirmPassword}
            type="password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
            helperText={errors.confirmPassword?.message}
          />
        </Grid>
      </Grid>
      <Grid item className={classes.item}>
        <CustomButtonComponent
          textColor="primaryColor"
          variant="contained"
          color="primary"
          type="submit"
          loading={isLoading}
        >
          {fa.entry.signUp}
        </CustomButtonComponent>
      </Grid>
    </Grid>
  );
}
