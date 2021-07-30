import { Grid } from '@material-ui/core';
import React from 'react';

import { withIsWeb } from '../../Hoc/withIsWeb.js';
import HeaderComponent from '../Header/HeaderComponent.js';
import InfiniteListComponent from '../InfiniteList/InfiniteListComponent.js';
import { useStyle } from './Main.style.js';

function MainComponent(props) {
  const classes = useStyle();
  const { state, setState, isWeb } = props;
  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item className={classes.header}>
        <HeaderComponent />
      </Grid>
      <Grid item className={classes.main}>
        <InfiniteListComponent />
      </Grid>
    </Grid>
  );
}

export default withIsWeb(MainComponent);
