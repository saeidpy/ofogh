import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  error: {
    "& .MuiInputBase-root": {
      border: "1px solid" + theme.palette.error.light,
    },
  },
  "@global .MuiInputLabel-filled": {
    display: "none !important",
  },
  "@global .MuiInputBase-input": {
    padding: "12px !important",
    direction: "ltr",
    color: theme.palette.text.secondary,
  },
  "@global .MuiFilledInput-underline:before": {
    display: "none !important",
  },
  "@global .MuiFilledInput-underline:after": {
    display: "none !important",
  },
  "@global .MuiInputBase-root": {
    borderRadius: "8px !important",
    background: theme.palette.background.default + "! important",
  },
}));

export { useStyle };
