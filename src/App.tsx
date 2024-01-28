import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import "./App.css";


function App() {
  return
  <ThemeProvider theme={theme}>
    Easy-Cook
  </ThemeProvider>;
}

export default App;
