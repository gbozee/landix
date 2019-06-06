import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, theme } from "chakra-design-system";
import { ThemeProvider } from "emotion-theming";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ThemeProvider theme={theme}>
          <Box>Hello world</Box>
        </ThemeProvider>
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
  );
}

export default App;
