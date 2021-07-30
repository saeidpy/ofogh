import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { withIsWeb } from "../../Hoc/withIsWeb.js";

import { useStyle } from "./AdCard.style.js";

function AdCardComponent(props) {
  const classes = useStyle();
  const { address, phoneNumber, isWeb } = props;
  return (
    <Grid item className={classes.item}>
      <Card
        className={`${classes.root} ${
          isWeb ? classes.rootWeb : classes.rootMobile
        }`}
      >
        <CardActionArea className={`${!isWeb && classes.area}`}>
          <CardMedia
            className={`${isWeb ? classes.mediaWeb : classes.mediaMobile}`}
            component="img"
            image={`/Assets/img/${isWeb ? "map" : "mapMobile"}.png`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography className={classes.typography} variant="body2">
              <img alt="location" src={"/Assets/img/loc.png"} />
              {address}
              کرمان, خیابان شهید بهشتی کوچه ۶ طبقه ۲
            </Typography>
            <Typography className={classes.typography} variant="body2">
              <img alt="phoneNumber" src={"/Assets/img/phone.png"} />
              {phoneNumber}
              09138263167
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default withIsWeb(AdCardComponent);
