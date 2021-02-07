import { ThemeProvider } from "@material-ui/core";
import Home from "./pages/Home";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
