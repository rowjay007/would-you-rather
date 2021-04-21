import React from "react";
import { connect } from "react-redux";
import classes from "./MiniUserCard.module.css";
import { Container, Image, User } from "./MiniUserCardStyle";

const MiniUserCard = (props) => {
  const { user, users } = props;
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
