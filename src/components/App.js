import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { handleInitialData } from "../actions/shared";

const App = ({ authUser }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <Router>
      <div>
        {authUser === null ? (
          <Route render={() => <Login />} />
        ) : (
          <>
            <NavBar />
            <Switch></Switch>
          </>
        )}
      </div>
    </Router>
  );
};

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}

export default connect(mapStateToProps, { handleInitialData })(App);
