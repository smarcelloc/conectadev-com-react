import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Home from "./Home";

const theme = createMuiTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
