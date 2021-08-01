import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: 28,
  },
  mobileAddAd: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: 20,
    zIndex: 100,
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    "& > div": {
      padding: "0px 4px",
    },
  },
}));

export { useStyle };
