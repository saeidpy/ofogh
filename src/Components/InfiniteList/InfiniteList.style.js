import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "grid",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(1,1fr)",
    },
    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "repeat(3,1fr)",
    },
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(4,1fr)",
    },
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "repeat(6,1fr)",
    },
    [theme.breakpoints.up("xl")]: {
      gridTemplateColumns: "repeat(8,1fr)",
    },
  },
}));

export { useStyle };
