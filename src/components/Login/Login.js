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
const Login = () => {
const [value, setValue] = useState("");
  
  const handleChange = (e) => {
    setValue(
      e.target.value,
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = "";
    const { value } = this.state;
    const { users } = this.props;
    const userIDs = Object.keys(users);
    userIDs.forEach((userID) => {
      if (users[userID].name === value) {
        id = userID;
      }
    });
    const from =
      this.props.location !== undefined &&
      this.props.location.state !== undefined
        ? this.props.location.state.from
        : "/home";

    this.props.dispatch(setAuthedUser(id));
    this.props.history.push(`${from}`);
  };

  
    const { users } = this.props;
    const names = Object.keys(users);
    return (
      <Container>
        <OceanBlue>Welcome to the</OceanBlue>
        <HeaderH2>Would You Rather?</HeaderH2>
        <OceanBlue>App</OceanBlue>
        <LoginText>To continue please log in.</LoginText>
        <form onSubmit={this.handleSubmit}>
          <Selection
            value={this.state.value}
            onChange={(e) => this.handleChange(e)}
          >
            <option>{this.state.value}</option>
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
            disabled={this.state.value === "users"}
          />
        </form>
      </Container>
    );
  }


const mapStateToProps = ({ users }) => ({
  users,
});

export default withRouter(connect(mapStateToProps)(Login));
