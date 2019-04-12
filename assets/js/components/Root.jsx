import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { connect } from "react-redux";
import Router from "./Router";

const theme = createMuiTheme({
  spacing: 8,
  typography: {
    useNextVariants: true
  }
});

const Root = props => {
  return <Router />;
};

const VisibleRoot = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Root />
  </MuiThemeProvider>
);

export default VisibleRoot;
