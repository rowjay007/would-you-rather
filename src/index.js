import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Add the root reducer and middleware to the store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
