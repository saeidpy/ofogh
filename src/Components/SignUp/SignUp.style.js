import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  item: {
    width: "80%",
    margin: 16,
    [theme.breakpoints.up("md")]: {
      width: "25%",
    },
  },
}));

export { useStyle };
