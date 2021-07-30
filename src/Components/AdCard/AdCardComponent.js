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
import { Skeleton } from "@material-ui/lab";
import { useStyle } from "./AdCard.style.js";

function AdCardComponent(props) {
  const classes = useStyle();
  const { address, phoneNumber, isWeb, loading } = props;
  return (
    <Grid
      item
      className={`${classes.item} ${
        isWeb ? classes.rootWeb : classes.rootMobile
      }`}
    >
      <Card className={classes.root}>
        <CardActionArea
          className={`${classes.content} ${!isWeb && classes.area}`}
        >
          {!loading ? (
            <CardMedia
              className={`${isWeb ? classes.mediaWeb : classes.mediaMobile}`}
              component="img"
              image={`/Assets/img/${isWeb ? "map" : "mapMobile"}.png`}
              title="Contemplative Reptile"
            />
          ) : (
            <Skeleton
              className={`${isWeb ? classes.mediaWeb : classes.mediaMobile}`}
              variant="rect"
              height={isWeb ? 160 : 120}
              width={isWeb ? 190 : 120}
            />
          )}
          <CardContent className={classes.content}>
            <Typography className={classes.typography} variant="body2">
              <img alt="location" src={"/Assets/img/loc.png"} />
              {!loading ? (
                <>{address}</>
              ) : (
                <Skeleton variant="text" width={"100%"} height={20} />
              )}
            </Typography>
            <Typography className={classes.typography} variant="body2">
              <img alt="phoneNumber" src={"/Assets/img/phone.png"} />
              {!loading ? (
                <>{phoneNumber}</>
              ) : (
                <Skeleton variant="text" width={"85%"} height={20} />
              )}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default withIsWeb(AdCardComponent);
