import { Grid, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import fa from '../../Consistent/fa.js';

import { useStyle } from './CrudAdLoading.style.js';

export default function CrudAdLoadingComponent(props) {
  const classes = useStyle();
  const { componentType, isWeb } = props;
  return (
    <Grid
      container
      className={`${
        componentType === "dialog" ? classes.rootDialog : classes.root
      } ${componentType === "dialog" && isWeb && classes.dialog}`}
      direction={!isWeb ? "column" : "row"}
    >
      <Grid item className={`${isWeb ? classes.itemMapWeb : classes.itemMap}`}>
        <Skeleton className={classes.skeleton} variant="rect" height={"100%"} width={"100%"} />
      </Grid>
      <Grid
        item
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        className={classes.item}
        component="form"
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
            <Skeleton className={classes.skeleton} variant="rect" height={150} width={"100%"} />
          </Grid>
          <Grid item>
          <Typography component="label">{fa.ad.phoneNumber}:</Typography>
            <Skeleton className={classes.skeleton} variant="rect" height={50} width={"100%"} />
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
            <Skeleton className={classes.skeleton} variant="rect" height={50} width={100} />
          </Grid>

          <Grid item>
            <Skeleton className={classes.skeleton} variant="rect" height={50} width={100} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
