import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import LoadingBar, { showLoading, hideLoading } from "react-redux-loading-bar";
import { getUsers, getQuestions } from "./Actions";
import Nav from "./Components/Nav/Nav";
import Login from "./Components/Login/Login";
import NewQuestion from "./Components/NewQuestion/NewQuestion";
import Leaderboard from "./Components/Leaderboard/Leaderboard";
import Questions from "./Components/Questions/Questions";
import QuestionItem from "./Components/Questions/QuestionItem/QuestionItem";
import NoMatch from "./Components/NoMatch/NoMatch";
import Router from "./Components/HOC/Router";

import "./App.css";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(showLoading());
    dispatch(getUsers());
    dispatch(getQuestions()).then(() => dispatch(hideLoading()));
  }

  render() {
    return (
      <div className="App">
        <LoadingBar />
        <React.Fragment>
          <Nav authedUser={this.props.authedUser} />
          <Switch>
            <Route path="/login" component={Login} />
            <Router path="/home" component={Questions} />
            <Redirect exact from="/" to="/home" />
            <Router path="/add" component={NewQuestion} />
            <Router path="/leaderboard" component={Leaderboard} />
            <Router path="/questions/:id" component={QuestionItem} />
            <Router path="*" component={NoMatch} />
            <Route component={NoMatch} />
          </Switch>
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser, loadingBar }) => ({
  users,
  questions,
  authedUser,
  loadingBar,
});

export default connect(mapStateToProps)(App);
