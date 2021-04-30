import React from "react";
import { connect, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../actions/authUser";

const NavBar = ({ avatarURL, authUser, users }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
          </li>
          <li>
            <NavLink to="/add">New Question</NavLink>
          </li>
          <li>
            <img src={users[authUser].avatarURL} alt="" />
            <span onClick={handleLogout}>Sign Out </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

function mapStateToProps({ users, loginUser }) {
  return {
    users,
    loginUser,
  };
}

export default connect(mapStateToProps)(NavBar);
