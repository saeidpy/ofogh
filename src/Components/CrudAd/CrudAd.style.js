import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  rootDialog: {
    height: "100vh",
  },
  itemMap: {
    flex: "1 1 300px",
    height: 1,
    padding: 16,
  },
  itemMapWeb: {
    flex: 2,
    padding: 16,
  },
  dialog: {
    width: "90vw",
  },
}));

export { useStyle };
