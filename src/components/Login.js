import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setAuthUser } from "../actions/authUser";

const Login = () => {
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
          <h4>Please select user and
      Signin</h4>
          
      <form onSubmit={handleSubmit}>
        <select
          value={user}
          onChange={handleChange}
        >
          <option>{user}</option>
          {names.map((name) => (
            <option
              key={users[name].id}
              name={users[name].id}
              value={users[name].name}
            >
              {users[name].name}
            </option>
          ))}
        </select>
        <input
          className={classes.bth}
          type="submit"
          value="Log In"
          disabled={this.state.value === "users"}
        />
      </form>
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}

export default connect(mapStateToProps)(Login);
