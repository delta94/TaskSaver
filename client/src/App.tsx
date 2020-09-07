import React, { useState } from "react";
import { AppContextProvider } from "./contexts/AppContext";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { lightTheme, darkTheme } from "./components/Theme/Theme";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter/AppRouter";
import "./styles/Utils.scss";

const App = () => {
  const userSelectedTheme = localStorage.theme && JSON.parse(localStorage.theme);
  const [theme, setTheme] = useState(userSelectedTheme ? userSelectedTheme : "dark");

  return (
    <AppContextProvider theme={theme} setTheme={setTheme}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </AppContextProvider >
  );
};

export default App;