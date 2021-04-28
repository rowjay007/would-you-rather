import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import thunk from 'redux-thunk'
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";

const store = createStore(reducer,applyMiddleware(thunk ))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
