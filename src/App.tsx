import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/global";

import { Login } from "./pages/Login";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Login />
    </ThemeProvider>
  );
}

export default App;
