import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory, withRouter } from "react-router";
import { setAuthUser } from "../actions/authUser";

const Login = ({ userNames, users }) => {
  const [user, setUser] = useState("users");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAuthUser());
    history.push("/");
  };


  return (
    <div>
      <div>
        <h3>Welcome to Would you rather...</h3>
      </div>
      <h4>Please select user and SignIn</h4>

      <form onSubmit={handleSubmit}>
        <select value={user} onChange={handleChange}>
          <option>{user}</option>
          {userNames.map((userName) => (
            <option key={userName} value={userName}>
              {users[userName].name}
            </option>
          ))}
        </select>
        <input
          type="submit"
          value="Sign In"
          disabled={user === "users"}
        />
      </form>
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    userNames: Object.keys(users),
    users,
  };
}

export default withRouter(connect(mapStateToProps)(Login));
