import "../css/app.css";

import "phoenix_html";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Root from "./Root";

ReactDOM.render(
  <Provider store={store}>
    <Root />,
  </Provider>,
  document.getElementById("react-app")
);
