import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleAnswerQuestion } from "../../../actions/index";
import {
  Body,
  Container,
  Form,
  FormContainer,
  FormItem,
  Header,
  Image,
  ImageHolder,
  SubmitInput,
  Name,
  Label,
  Input
} from "./QuestionFormStyle";

class QuestionForm extends Component {
  
  state = {
    selected: null,
  };

  handleChange = (e) => {
    this.setState({ selected: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { authedUser } = this.props;
    const qid = this.props.question.id;
    const answer = this.state.selected;
    const answerInfo = {
      authedUser,
      answer,
      qid,
    };
    this.props.handleAnswerQuestion(answerInfo);
  };

  render() {
    const { question, users } = this.props;
    const author = users[question.author];
    return (
      <Container>
        <Header>
          <Name>{author.name} asks:</Name>
        </Header>

        <Body>
          <ImageHolder>
            <Image src={author.avatarURL} alt={`${author.name}'s avatar`} />
          </ImageHolder>
          <FormContainer>
            <Name>Would you rather..</Name>
            <Form onSubmit={this.handleSubmit}>
              <FormItem>
                <Label htmlFor="option one">
                  <Input
                    id="option one"
                    type="radio"
                    value="optionOne"
                    checked={this.state.selected === "optionOne"}
                    onChange={this.handleChange}
                  />
                  {question.optionOne.text}
                </Label>
              </FormItem>
              <FormItem>
                <Label htmlFor="option two">
                  <Input
                    id="option two"
                    type="radio"
                    value="optionTwo"
                    checked={this.state.selected === "optionTwo"}
                    onChange={this.handleChange}
                  />
                  {question.optionTwo.text}
                </Label>
              </FormItem>
              <SubmitInput type="submit" value="Submit" />
            </Form>
          </FormContainer>
        </Body>
      </Container>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  users,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleAnswerQuestion: (answerInfo) =>
    dispatch(handleAnswerQuestion(answerInfo, ownProps)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(QuestionForm)
);
