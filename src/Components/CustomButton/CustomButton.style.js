import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: "8px 64px",
    borderRadius: 16,
    width: "100%",
  },
  primaryColor: { color: theme.palette.common.white },
  secondaryColor: { color: theme.palette.common.black },
  defaultBackgroundColor: { background: theme.palette.background.default },
  paperBackgroundColor: { background: theme.palette.background.paper },
}));

export { useStyle };
