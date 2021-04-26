import React from "react";
import { connect } from "react-redux";
import { Container, Image, Progress } from "./QuestionStatsStyle";

// takes in props and calculates and formats question data neded to render Option for each answer option
const QuestionInfo = (props) => {
  const { question, authedUser, users } = props.location
    ? props.location.state
    : props;
  const author = users[question.author];
  let userAnswer = null;

  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;

  const totalVotes = optionOneVotes + optionTwoVotes;

  const optionOnePercent =
    optionOneVotes === 0 ? 0 : Math.round((optionOneVotes / totalVotes) * 100);
  const optionTwoPercent =
    optionTwoVotes === 0 ? 0 : Math.round((optionTwoVotes / totalVotes) * 100);

  if (question.optionOne.votes.includes(authedUser)) {
    userAnswer = "optionOne";
  }
  if (question.optionTwo.votes.includes(authedUser)) {
    userAnswer = "optionTwo";
  }

  const options = [
    {
      option: "optionOne",
      userAnswer,
      totalVotes,
      optionVotes: optionOneVotes,
      percent: optionOnePercent,
      text: question.optionOne.text,
    },
    {
      option: "optionTwo",
      userAnswer,
      totalVotes,
      optionVotes: optionTwoVotes,
      percent: optionTwoPercent,
      text: question.optionTwo.text,
    },
  ];

  return (
    <Container>
      <h2>Question stats:</h2>
      <div>
        <h4>Asked by {author.name}</h4>
      </div>
      <div>
        <Image src={author.avatarURL} alt={`avatar of ${author.name}`} />
      </div>
      <div>
        {options.map((option) => (
          <Progress key={option.option} option={option} />
        ))}
      </div>
    </Container>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  users,
});

export default connect(mapStateToProps)(QuestionInfo);
