import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NavItem from "./NavItem/NavItem";
import { logoutUser } from "../../actions/authedUser";
import MiniUserCard from "../UI/MiniUserCard/MiniUserCard";
import { Button, NavBar, NavigationItems, userOptions } from "./NavStyles";

const Nav = ({ dispatch, authedUser, history }) => {
  const handleLogout = () => {
    dispatch(logoutUser());
    history.push({
      pathname: "/login",
      state: { from: "/home" },
    });
  };

  return (
    <NavBar>
      <NavigationItems>
        <NavItem style={{ height: "100%" }} exact to="/home">
          Home
        </NavItem>
        <NavItem style={{ height: "100%" }} to="/leaderboard">
          Leader Board
        </NavItem>
        <NavItem style={{ height: "100%" }} to="/add">
          New Question
        </NavItem>
      </NavigationItems>
      {authedUser && (
        <userOptions>
          <MiniUserCard user={authedUser} />
          <Button type="button" onClick={handleLogout}>
            Log Out
          </Button>
        </userOptions>
      )}
    </NavBar>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default withRouter(connect(mapStateToProps)(Nav));
