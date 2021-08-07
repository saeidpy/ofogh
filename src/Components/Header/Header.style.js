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
    padding: "20px 0px",
    zIndex: 100,
    "& .MuiButtonBase-root": {
      margin: "auto 50px",
      padding: "8px 50px",
      minInlineSize: "max-content",
    },
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    "& > div": {
      padding: "0px 4px",
    },
  },
  actionBox: {
    display: "flex !important",
    "& .MuiButtonBase-root": {
      margin: "auto 10px",
      minInlineSize: "max-content",
    },
  },
}));

export { useStyle };
