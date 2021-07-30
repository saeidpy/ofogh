import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {},
  main: { marginBottom: 64, marginTop: 100 },
  header: {
    position: "fixed",
    top: 0,
    background: theme.palette.background.paper,
    width: "100%",
    zIndex: 100,
  },
}));

export { useStyle };
