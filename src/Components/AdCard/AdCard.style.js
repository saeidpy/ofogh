import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    borderRadius: "35px",
    background:theme.palette.background.default
  },
  item: {
    padding: 19,
    display: "inline-block",
  },
  rootWeb: {
    maxWidth: 250,
  },
  rootMobile: {
    width: "100%",
  },
  mediaWeb: {
    width: "92%",
    margin: 10,
    opacity: "0.9",
    transform: "rotate(-359deg)",
  },
  mediaMobile: {
    width: "35%",
    margin: 10,
    opacity: "0.9",
    transform: "rotate(-359deg)",
  },
  typography: {
    color: theme.palette.common.black,
    margin: "16px auto",
    "& img": {
      marginRight: 8,
    },
  },
  area: {
    display: "flex",
  },
}));

export { useStyle };
