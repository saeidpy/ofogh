import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { jssPreset, StylesProvider } from "@material-ui/styles";
import { create } from "jss";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./theme/theme";
import { SnackbarProvider } from "notistack";
import rtl from "jss-rtl";
import { QueryClient, QueryClientProvider } from "react-query";
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StylesProvider jss={jss}>
        <MuiThemeProvider theme={theme}>
          <SnackbarProvider
            autoHideDuration={2500}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            maxSnack={2}
          >
            <Router>
              <Routes />
            </Router>
          </SnackbarProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </QueryClientProvider>
  );
}

export default App;
