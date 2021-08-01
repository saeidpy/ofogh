import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { readAdApi } from "../../Api/Ad.js";
import { withIsWeb } from "../../Hoc/withIsWeb.js";
import { useCustomQuery } from "../../Hooks/useCustomQuery.js";
import CrudAdLoadingComponent from "../CrudAdLoading/CrudAdLoadingComponent.js";
import MapComponent from "../Map/MapComponent.js";
import { useStyle } from "./CrudAd.style.js";
import CrudFormComponent from "../CrudForm/CrudFormComponent";
import { DEFAULT_CENTER } from "../../Consistent/consistent.js";
function CrudAdComponent(props) {
  const classes = useStyle();
  const { isWeb, mode, callbackCancel, componentType } = props;
  const [isFetch, setIsFetch] = useState(false);
  const [position, setPosition] = useState(null);
  const history = useHistory();
  const id = +history?.location?.pathname.split("/")[2];

  const { isFetching, isFetched, data } = useCustomQuery(
    "getAd",
    () => readAdApi({ id }),
    {
      enabled: !!id && !isFetch,
    }
  );

  useEffect(() => {
    if (isFetched) {
      setIsFetch(isFetched);
    }
  }, [isFetched]);

  return isFetching ? (
    <CrudAdLoadingComponent isWeb={isWeb} componentType={componentType} />
  ) : (
    <Grid
      container
      className={`${
        componentType === "dialog" ? classes.rootDialog : classes.root
      } ${componentType === "dialog" && isWeb && classes.dialog}`}
      direction={!isWeb ? "column" : "row"}
    >
      <Grid item className={`${isWeb ? classes.itemMapWeb : classes.itemMap}`}>
        <MapComponent
          position={mode === "create" ? position : position ?? data.position}
          center={mode === "create" ? DEFAULT_CENTER : data.position}
          setPosition={setPosition}
        />
      </Grid>
      <CrudFormComponent
        mode={mode}
        componentType={componentType}
        data={mode === "create" ? {} : data}
        id={id}
        callbackCancel={callbackCancel}
        isWeb={isWeb}
        position={mode === "create" ? position : position ?? data.position}
      />
    </Grid>
  );
}
export default withIsWeb(CrudAdComponent, "lg");
