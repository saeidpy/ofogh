import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {},
  paper: {
    borderRadius: 30,
    maxWidth: "fit-content !important",
    width: "fit-content",
    overflow: "hidden",
  },
}));

export { useStyle };
