import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { setAuthedUser } from "../../actions/authedUser";
import {
  Container,
  OceanBlue,
  HeaderH2,
  LoginText,
  Selection,
  Input,
} from "./Login.Element";
const Login = ({location, dispatch, history, users}) => {
const [value, setValue] = useState("users");
  
  const handleChange = (e) => {
    setValue(
      e.target.value,
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = "";
    
    const userIDs = Object.keys(users);
    userIDs.forEach((userID) => {
      if (users[userID].name === value) {
        id = userID;
      }
    });
    const from =
     location !== undefined &&
     location.state !== undefined
        ?location.state.from
        : "/home";

   dispatch(setAuthedUser(id));
   history.push(`${from}`);
  };

  
    const names = Object.keys(users);
    return (
      <Container>
        <OceanBlue>Welcome to the</OceanBlue>
        <HeaderH2>Would You Rather?</HeaderH2>
        <OceanBlue>App</OceanBlue>
        <LoginText>To continue please log in.</LoginText>
        <form onSubmit={handleSubmit}>
          <Selection
            value={value}
            onChange={(e) => handleChange(e)}
          >
            <option>{value}</option>
            {names.map((name) => (
              <option
                key={users[name].id}
                name={users[name].id}
                value={users[name].name}
              >
                {users[name].name}
              </option>
            ))}
          </Selection>
          <Input
            type="submit"
            value="Log In"
            disabled={value === "users"}
          />
        </form>
      </Container>
    );
  }


const mapStateToProps = ({ users }) => ({
  users,
});

export default withRouter(connect(mapStateToProps)(Login));
