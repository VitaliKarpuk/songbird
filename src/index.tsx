import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from './store';
import "bootswatch/dist/lumen/bootstrap.min.css";
import "./main.scss";

ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>,

  document.getElementById("root")
);
