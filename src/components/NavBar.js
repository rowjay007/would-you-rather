import React from "react";

const NavBar = ({ avatarURL }) => {
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
          <li >
            <img src={avatarURL}  />
            <span onClick={this.logoutUser}>
              <Logout size={30} />
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
