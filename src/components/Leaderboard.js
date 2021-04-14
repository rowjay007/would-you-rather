import React from "react";
import { connect } from "react-redux";
import UserSummary from "./UserSummary";
import classes from "./Leaderboard.module.css";

const Leaderboard = (props) => {
  const { users } = props;
  const names = users ? Object.keys(users) : null;
  const formated =
    names !== null
      ? names
          .map((name) => ({
            id: users[name].id,
            name: users[name].name,
            asked: users[name].questions.length,
            answered: Object.keys(users[name].answers).length,
            total:
              Object.keys(users[name].answers).length +
              users[name].questions.length,
            avatar: users[name].avatarURL,
          }))
          .sort((a, b) => b.total - a.total)
      : [];
  return (
    <div className={classes.mainContainer}>
      {!formated.length
        ? null
        : formated.map((name) => <UserSummary key={name.id} name={name} />)}
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Leaderboard);
