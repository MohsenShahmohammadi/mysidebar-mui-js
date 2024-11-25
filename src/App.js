import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyle";
import { Helmet } from "react-helmet";
import Layout from "./components/layout/Layout";
import Router from "./Router";

export const themeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;
  return (
    <themeContext.Provider value={{ theme,setTheme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
          <title>Slider - with helmet</title>
        </Helmet>
        <>
          <Layout>
            <Router />
          </Layout>
        </>
      </ThemeProvider>
    </themeContext.Provider>
  );
}

export default App;
