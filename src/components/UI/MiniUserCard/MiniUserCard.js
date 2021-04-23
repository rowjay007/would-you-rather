import React from "react";
import { connect } from "react-redux";
import { Container, Image, User } from "./MiniUserCardStyle";

const MiniUserCard = ({user, users}) => {
  const userName = users[user].name;
  const url = users[user].avatarURL;

  return (
    <Container>
      <Image src={url} alt={`avatar of ${userName}`} />
      <User>{userName}</User>
    </Container>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(MiniUserCard);
