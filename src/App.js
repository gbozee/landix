import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, theme, CSSReset } from "chakra-design-system";
import { ThemeProvider } from "emotion-theming";

function App() {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <>
        <CSSReset />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <Box color="blue.500">Button</Box>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
