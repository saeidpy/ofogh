import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#35bcff" },
    secondary: { main: "#f2f2f2" },
    text: { primary: "#f2f2f2", secondary: "#999999" },
    background: { default: "#f2f2f2", paper: "#fff" },
  },
  direction: "rtl",
  typography: {
    fontFamily: [
      "Vazir-Bold",
      "Vazir",
      "Vazir-Light",
      "Vazir-Medium",
      "Vazir-Thin",
    ].join(","),
  },
  props: {
    // withWidth component ⚛️
    MuiWithWidth: {
      // Initial width property
      initialWidth: "lg", // Breakpoint being globally set 🌎!
    },
  },
  overrides: {
    MuiTab: {
      // Name of the component ⚛️ / style sheet
      root: {
        // Name of the rule
        textTransform: "capitalize",
      },
    },
  },
});

export { theme };
