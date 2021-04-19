import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NavItem from "./NavItem/NavItem";
import { logoutUser } from "../../actions/authedUser";
import classes from "./Nav.module.css";
import MiniUserCard from "../UI/MiniUserCard/MiniUserCard";

const Nav = ({dispatch, authedUser}) => {
  

 const handleLogout = () => {
    dispatch(logoutUser());
    this.props.history.push({
      pathname: "/login",
      state: { from: "/home" },
    });
  };

  
    return (
      <nav className={classes.Nav}>
        <ul className={classes.NavigationItems}>
          <NavItem className={classes.navItem} exact to="/home">
            Home
          </NavItem>
          <NavItem className={classes.navItem} to="/leaderboard">
            Leader Board
          </NavItem>
          <NavItem className={classes.navItem} to="/add">
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
      </nav>
    );
  }


const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default withRouter(connect(mapStateToProps)(Nav));
