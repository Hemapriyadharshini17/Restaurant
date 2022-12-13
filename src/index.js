import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { StateProvider } from "./Context/StateProvider";
import { InitialState } from "./Context/InitialState";
import Reducer from "./Context/Reducer";

ReactDOM.render(
  <Router>
    <StateProvider InitialState={InitialState} Reducer={Reducer}>
      <App />
    </StateProvider>
  </Router>,
  document.getElementById("root")
);