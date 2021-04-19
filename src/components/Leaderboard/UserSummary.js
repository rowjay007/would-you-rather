import React from "react";
import { Container, imgContainer, Image, Info, Name, ScoreCard, Score, OceanBlue } from "./LeaderboardStyled";

const UserSummary = ({ name }) => {
  return (
    <Container key={name.id}>
      <imgContainer>
        <Image
          
          src={name.avatar}
          alt={`${name.name}'s avatar`}
        />
      </imgContainer>
      <Info>
        <Name>{name.name}</Name>
        <ScoreCard>
          <span>Answered questions</span>
          <span>{name.answered}</span>
        </ScoreCard>
        <ScoreCard>
          <span>Created questions</span>
          <span>{name.asked}</span>
        </ScoreCard>
      </Info>
      <Score>
        <p>score</p>
        <OceanBlue>{name.total}</OceanBlue>
      </Score>
    </Container>
  );
};

export default UserSummary;
