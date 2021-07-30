import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {},
  main: { marginBottom: 64 },
  footer: { position: "fixed", bottom: 0, width: "100%", padding: 20 },
}));

export { useStyle };
