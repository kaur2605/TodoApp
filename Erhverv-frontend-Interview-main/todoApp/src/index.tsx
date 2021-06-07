import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import tdcTheme from "@tdcerhverv/mui-theme";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={tdcTheme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
