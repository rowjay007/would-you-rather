import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NavItem from "./NavItem/NavItem";
import { logoutUser } from "../../actions/authedUser";
import classes from "./Nav.module.css";
import MiniUserCard from "../UI/MiniUserCard/MiniUserCard";
import { NavBar } from "./NavStyles";

const Nav = ({dispatch, authedUser, history}) => {
  

 const handleLogout = () => {
    dispatch(logoutUser());
    history.push({
      pathname: "/login",
      state: { from: "/home" },
    });
  };

  
    return (
      <NavBar >
        <ul className={classes.NavigationItems}>
          <NavItem style={{height: "100%"}} exact to="/home">
            Home
          </NavItem>
          <NavItem style={{height: "100%"}} to="/leaderboard">
            Leader Board
          </NavItem>
          <NavItem style={{height: "100%"}} to="/add">
            New Question
          </NavItem>
        </ul>
        {authedUser && (
          <div className={classes.userOptions}>
            <MiniUserCard user={authedUser} />
            <button
              type="button"
              className={classes.logout}
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
        )}
      </NavBar>
    );
  }


const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default withRouter(connect(mapStateToProps)(Nav));
