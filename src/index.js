import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculator from "./components/calculator";
import * as serviceWorker from "./serviceWorker";
import bootstrap from "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
