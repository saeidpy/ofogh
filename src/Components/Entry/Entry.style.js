import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    minWidth: "100vw",
    minHeight: "100vh",
    overflowY: "auto",
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
