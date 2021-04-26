import React from "react";
import { connect } from "react-redux";
import QuestionForm from "../QuestionForm/QuestionForm";
import QuestionStats from "../QuestionStats/QuestionStats";
import NoMatch from "../../NoMatch/NoMatch";

const Question = ({ authedUser, questions, match }) => {
  const questionID = match.params.id;
  if (!questions[questionID]) {
    return <NoMatch />;
  }
  const question = questions[questionID];
  const isAnswered =
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser);
  let renderQuestion = null;

  if (!isAnswered) {
    renderQuestion = <QuestionForm question={question} />;
  } else {
    renderQuestion = <QuestionStats question={question} />;
  }

  return <div>{renderQuestion}</div>;
};

const mapStateToProps = ({ authedUser, questions }) => ({
  authedUser,
  questions,
});

export default connect(mapStateToProps)(Question);
