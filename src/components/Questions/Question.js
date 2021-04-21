import React from "react";
import { connect } from "react-redux";
import {
  Body,
  Button,
  Container,
  Header,
  HeaderFour,
  HeaderThree,
  Image,
  ImageContainer,
  Info,
  Linked,
} from "./QuestionStyle";

const Question = (props) => {
  const questionID = props.questionID
    ? props.questionID
    : props.location.pathname.split("").slice(1).join("");
  const { questions, authedUser } = props;
  const author = props.users[questions[questionID].author];
  const question = questions[questionID];
  const isAnswered =
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser);

  return (
    <Container>
      <Header>
        <HeaderThree>{author.name} asks</HeaderThree>
      </Header>

      <Body>
        <ImageContainer>
          <Image src={author.avatarURL} alt={`${author.name}'s avatar`} />
        </ImageContainer>
        <Info>
          <HeaderFour>Would you rather</HeaderFour>
          <p>
            <span>...{question.optionOne.text}...</span>
          </p>
          <Linked
            to={{
              pathname: `/questions/${question.id}`,
              state: {
                question,
                author,
                isAnswered,
              },
            }}
          >
            <Button type="button">View Question</Button>
          </Linked>
        </Info>
      </Body>
    </Container>
  );
};

const mapStateToProps = ({ users, authedUser, questions }) => ({
  users,
  authedUser,
  questions,
});

export default connect(mapStateToProps)(Question);
