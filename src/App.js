import { MuiThemeProvider } from "@material-ui/core";
import { jssPreset, StylesProvider } from "@material-ui/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import { SnackbarProvider } from "notistack";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";

import DialogProvider from "./Components/DialogProvider/DialogProvider";
import Routes from "./Routes";
import { theme } from "./Theme/theme";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
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
            maxSnack={1}
          >
            <DialogProvider>
              <Router>
                <Routes />
              </Router>
            </DialogProvider>
          </SnackbarProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </QueryClientProvider>
  );
}

export default App;
