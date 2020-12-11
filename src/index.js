import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import StoreContext from './context'

let rerenderTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
      <App  store={store} />
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
  reportWebVitals();
};
rerenderTree(store.getState());

store.subscribe(() =>{
 let state = store.getState()
  rerenderTree(state)})

  // dispatch={store.dispatch.bind(store)}
  // state={state}