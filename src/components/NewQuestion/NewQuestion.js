import React, {  useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleSaveQuestion } from "../../actions";
import {
  Button,
  Container,
  FormInput,
  Green,
  HeaderH2,
  Input,
} from "./NewQuestionStyle";

const NewQuestion = ({ dispatch, authedUser, history }) => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const handleChangeOne = (e) => {
    setOptionOne(
      e.target.value,
    );
  };

  const handleChangeTwo = (e) => {
    setOptionTwo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const question = {
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser,
    };
    if (optionOne.length === 0 || optionTwo.length === 0) {
      alert("Please fill in the questions!");
    } else {
      dispatch(handleSaveQuestion(question)).then(() =>
        history.push("/home")
      );
    }
  };

  return (
    <Container>
      <p>
        To create a new question enter two answer options in the text fields
        below
      </p>
      <HeaderH2>Would you rather...</HeaderH2>
      <form onSubmit={handleSubmit}>
        <FormInput>
          <Input
            type="text-area"
            name="optionOne"
            placeholder="Enter option One"
            value={optionOne}
            onChange={handleChangeOne}
            maxLength="50"
          />
          {optionOne.length > 35 && <Green>{50 - optionOne.length}</Green>}
        </FormInput>
        <span>or...</span>
        <FormInput>
          <Input
            type="text-area"
            name="optionTwo"
            placeholder="Enter option Two"
            value={optionTwo}
            onChange={handleChangeTwo}
            maxLength="50"
          />
          {
            /* input lenght is limited to 50 characters dispaly remaining characters count if remeinin is less than 15 */
            optionTwo.length > 35 && <Green>{50 - optionTwo.length}</Green>
          }
        </FormInput>
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};


const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default withRouter(connect(mapStateToProps)(NewQuestion));
