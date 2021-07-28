import { Button } from '@material-ui/core';
import React from 'react';

import { useStyle } from './CustomButton.style.js';

export default function CustomButtonComponent(props) {
  const classes = useStyle();
  const { children, textColor, backgroundColor, ...rest } = props;
  return (
    <Button
      className={`${classes.root} ${classes[textColor]} ${classes[backgroundColor]}`}
      {...rest}
    >
      {children}
    </Button>
  );
}
