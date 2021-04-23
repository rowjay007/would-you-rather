import React from "react";
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Question from "./Question";
import "react-tabs/style/react-tabs.css";
import { Container, Header } from "./QuestionsStyle";


const Questions = ({questions, authedUser}) => {
  const answered = !authedUser
    ? []
    : Object.keys(questions)
        .filter(
          (key) =>
            questions[key].optionOne.votes.includes(authedUser) ||
            questions[key].optionTwo.votes.includes(authedUser)
        )
        .map((ques) => questions[ques])
        .sort((a, b) => b.timestamp - a.timestamp);
  const unanswered = !authedUser
    ? []
    : Object.keys(questions)
        .filter(
          (key) =>
            !questions[key].optionOne.votes.includes(authedUser) &&
            !questions[key].optionTwo.votes.includes(authedUser)
        )
        .map((ques) => questions[ques])
        .sort((a, b) => b.timestamp - a.timestamp);

  const renderAnswered = answered.map((ques) => (
    <Question
      key={ques.id}
      questionID={ques.id}
      isAnswered={
        ques.optionOne.votes.includes(authedUser) ||
        ques.optionTwo.votes.includes(authedUser)
      }
    />
  ));
  const renderUnanswered = unanswered.map((ques) => (
    <Question
      key={ques.id}
      questionID={ques.id}
      isAnswered={
        ques.optionOne.votes.includes(authedUser) ||
        ques.optionTwo.votes.includes(authedUser)
      }
    />
  ));

  return (
    <Container>
      <Header>Questions</Header>
      <Tabs>
        <TabList>
          <Tab>Unanswered</Tab>
          <Tab>Ananswered</Tab>
        </TabList>

        <TabPanel>{renderUnanswered}</TabPanel>
        <TabPanel>{renderAnswered}</TabPanel>
      </Tabs>
    </Container>
  );
};

const mapStateToProps = ({ questions, authedUser }) => ({
  questions,
  authedUser,
});

export default connect(mapStateToProps)(Questions);
