import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";

let rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById("root")
  );
  reportWebVitals();
};
rerenderTree(store.getState());

store.subscribe(rerenderTree);
